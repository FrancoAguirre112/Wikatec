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

console.log('-> /smart-lights')
await page.goto(`${BASE}/smart-lights`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

// Pin range is approximately scrollY 858 to 2398. Stay within.
const positions = [
  { label: 'a-pin-start', y: 950 },
  { label: 'b-step1', y: 1100 },
  { label: 'c-step3', y: 1500 },
  { label: 'd-step5', y: 1900 },
]

for (const p of positions) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), p.y)
  await page.waitForTimeout(900)
  await page.screenshot({ path: join(OUT_DIR, `sl-${p.label}.png`) })
  console.log(`   ${p.label}`)
}

// Measure key elements at the active state
const measurements = await page.evaluate(() => {
  const find = (sel) => document.querySelector(sel)
  const explorer = find('[class*="hidden lg:flex"]')
  const grid = explorer?.querySelector('.grid')
  const leftCol = grid?.children[0]
  const rightPanel = grid?.children[1]
  const buttons = leftCol?.querySelectorAll('button')
  const rect = (el) => el?.getBoundingClientRect().toJSON()
  return {
    viewport: { w: window.innerWidth, h: window.innerHeight },
    explorer: rect(explorer),
    grid: rect(grid),
    leftCol: rect(leftCol),
    rightPanel: rect(rightPanel),
    firstButton: rect(buttons?.[0]),
    lastButton: rect(buttons?.[buttons.length - 1]),
    paddingTop: explorer && grid
      ? grid.getBoundingClientRect().top - explorer.getBoundingClientRect().top
      : null,
    paddingBottom: explorer && grid
      ? explorer.getBoundingClientRect().bottom - grid.getBoundingClientRect().bottom
      : null,
  }
})

console.log('\nMeasurements:')
console.log(JSON.stringify(measurements, null, 2))

await browser.close()
console.log('OK')
