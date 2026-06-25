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

console.log('-> /soluciones initial')
await page.goto(`${BASE}/soluciones`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

// Scroll to just before the gallery section, then take a series of screenshots
// as we scroll through it (the pin is active for items.length * 500 = 3000px).
const positions = [
  { label: 'a-before-gallery', y: 1200 },
  { label: 'b-gallery-pin-start', y: 1500 },
  { label: 'c-gallery-step1', y: 1750 },
  { label: 'd-gallery-step3', y: 2250 },
  { label: 'e-gallery-step5', y: 2750 },
  { label: 'f-after-gallery', y: 4800 },
]

for (const p of positions) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), p.y)
  await page.waitForTimeout(900)
  const file = join(OUT_DIR, `sol-${p.label}.png`)
  await page.screenshot({ path: file })
  console.log(`   ${p.label} -> ${file}`)
}

await browser.close()
console.log('OK')
