import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', '.screenshots')

const BASE = process.env.BASE_URL || 'https://wikatec.vercel.app'

const targets = [
  { name: '01-inicio-full', path: '/', fullPage: true },
  { name: '02-inicio-hero', path: '/', clip: { x: 0, y: 0, width: 1440, height: 800 } },
  { name: '03-inicio-quienes', path: '/#quienes-somos' },
  { name: '04-smart-lights', path: '/smart-lights', fullPage: true },
  { name: '05-soluciones', path: '/soluciones', fullPage: true },
  { name: '06-hardware', path: '/hardware', fullPage: true },
  { name: '07-nosotros', path: '/nosotros', fullPage: true },
  { name: '08-beneficios-full', path: '/beneficios', fullPage: true },
  { name: '09-beneficios-problemas', path: '/beneficios#problemas-alumbrado-tradicional' },
  { name: '10-beneficios-razones', path: '/beneficios#razones-smart-lights' },
  { name: '11-contacto', path: '/contacto', fullPage: true },
  { name: '12-contacto-equipo', path: '/contacto#contacto-equipo-comercial' },
]

await mkdir(OUT_DIR, { recursive: true })

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()

for (const t of targets) {
  const url = `${BASE}${t.path}`
  console.log(`-> ${t.name}: ${url}`)
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  const file = join(OUT_DIR, `${t.name}.png`)
  if (t.fullPage) {
    await page.screenshot({ path: file, fullPage: true })
  } else if (t.clip) {
    await page.screenshot({ path: file, clip: t.clip })
  } else {
    await page.screenshot({ path: file })
  }
}

await browser.close()
console.log(`\nOK: ${targets.length} screenshots en ${OUT_DIR}`)
