import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', '.screenshots')
const BASE = process.env.BASE_URL || 'https://wikatec.vercel.app'

await mkdir(OUT_DIR, { recursive: true })
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1680, height: 1000 }, deviceScaleFactor: 1 })
const page = await ctx.newPage()

// Go directly to the Beneficios page where the section lives
await page.goto(`${BASE}/beneficios`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)

// Find the section
const sectionInfo = await page.evaluate(() => {
  const sec = document.querySelector('#razones-smart-lights')
  if (!sec) return null
  const r = sec.getBoundingClientRect()
  return { top: r.top + window.scrollY, height: r.height }
})

if (!sectionInfo) {
  console.log('section #razones-smart-lights not found')
  await browser.close()
  process.exit(1)
}

console.log('section top:', sectionInfo.top, 'height:', sectionInfo.height)

// The section is pinned for ~120vh = 1200px of scroll. Capture frames at 0%, 25%, 50%, 75%, 100%.
const pinScrollRange = 1000 * 1.2
const startScroll = Math.max(0, sectionInfo.top - 67)

const frames = [
  { label: '00-initial', offset: 0 },
  { label: '01-25pct', offset: pinScrollRange * 0.25 },
  { label: '02-50pct', offset: pinScrollRange * 0.5 },
  { label: '03-75pct', offset: pinScrollRange * 0.75 },
  { label: '04-100pct', offset: pinScrollRange * 0.99 },
]

for (const f of frames) {
  const y = startScroll + f.offset
  await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: 'instant' }), y)
  await page.waitForTimeout(900) // let scrub catch up
  await page.screenshot({
    path: join(OUT_DIR, `razones-path-${f.label}.png`),
    clip: { x: 0, y: 67, width: 1680, height: 933 },
  })
  console.log('shot:', f.label, '@ scrollY=', y)
}

await browser.close()
console.log('done')
