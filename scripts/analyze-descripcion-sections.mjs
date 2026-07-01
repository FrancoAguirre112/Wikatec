import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', '.screenshots')
const BASE = process.env.BASE_URL || 'https://wikatec.vercel.app'

await mkdir(OUT_DIR, { recursive: true })
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()

const pages = [
  { url: '/smart-lights', label: 'sl', sigil: 'Todo el control' },
  { url: '/soluciones', label: 'sol', sigil: 'La solución correcta' },
  { url: '/hardware', label: 'hw', sigil: 'Equipamiento confiable' },
  { url: '/beneficios', label: 'ben', sigil: 'Impacto real' },
  { url: '/nosotros', label: 'nos', sigil: 'Nuestro enfoque' },
]

for (const p of pages) {
  await page.goto(BASE + p.url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)

  // Find the descripcion section based on its title content
  const sec = await page.evaluate(s => {
    const all = Array.from(document.querySelectorAll('section'))
    const found = all.find(el => el.textContent.includes(s))
    if (!found) return null
    const r = found.getBoundingClientRect()
    return { top: r.top + window.scrollY, height: r.height }
  }, p.sigil)
  if (!sec) { console.log('not found:', p.label); continue }

  // Scroll so the descripcion section + 200px above (prev section bottom) and 200px below (next section top) are captured
  const scrollY = Math.max(0, sec.top - 200)
  await page.evaluate(y => window.scrollTo(0, y), scrollY)
  await page.waitForTimeout(800)

  await page.screenshot({
    path: join(OUT_DIR, `descrip-${p.label}-context.png`),
    clip: { x: 0, y: 0, width: 1440, height: Math.min(900, sec.height + 400) },
  })
  console.log('shot:', p.label, '@ scroll', scrollY)
}

await browser.close()
console.log('done')
