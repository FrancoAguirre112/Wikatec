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
await page.waitForTimeout(1500)

// Capture full-page (everything stitched together)
await page.screenshot({
  path: join(OUT_DIR, 'home-FULL.png'),
  fullPage: true,
})
console.log('full-page captured')

// Individual section screenshots centered in viewport at viewport height
const sections = [
  { label: 'a-hero', y: 0 },
  { label: 'b-stats', y: 750 },
  { label: 'c-01-quienes', y: 1080 },
  { label: 'd-02-smartlights', y: 1980 },
  { label: 'e-03-soluciones', y: 2940 },
  { label: 'f-04-hardware', y: 3960 },
  { label: 'g-05-beneficios', y: 4840 },
  { label: 'h-cta', y: 5750 },
]

for (const s of sections) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), s.y)
  await page.waitForTimeout(700)
  await page.screenshot({ path: join(OUT_DIR, `home-${s.label}.png`) })
  console.log(`  ${s.label} @ y=${s.y}`)
}

const bodyH = await page.evaluate(() => document.body.scrollHeight)
console.log(`body: ${bodyH}px`)

await browser.close()
console.log('OK')
