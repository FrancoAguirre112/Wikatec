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

await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

const sections = [
  '01-quienes',
  '02-smartlights',
  '03-soluciones',
  '04-hardware',
  '05-beneficios',
]

// Scroll progressively through the home and capture each section centered
const totalHeight = await page.evaluate(() => document.body.scrollHeight)
console.log('body height:', totalHeight)

// Heuristic positions (will adjust if needed)
const positions = [
  { label: '01-quienes', y: 900 },
  { label: '02-smartlights', y: 1900 },
  { label: '03-soluciones', y: 2900 },
  { label: '04-hardware', y: 3900 },
  { label: '05-beneficios', y: 4900 },
]

for (const p of positions) {
  await page.evaluate(
    (y) => window.scrollTo({ top: y, behavior: 'instant' }),
    p.y
  )
  await page.waitForTimeout(800)
  await page.screenshot({ path: join(OUT_DIR, `home-${p.label}.png`) })
  console.log(`   ${p.label} @ y=${p.y}`)
}

await browser.close()
console.log('OK')
