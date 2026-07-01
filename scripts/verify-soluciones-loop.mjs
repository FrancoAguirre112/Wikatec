import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', '.screenshots')
const BASE = process.env.BASE_URL || 'https://wikatec.vercel.app'

await mkdir(OUT_DIR, { recursive: true })
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
const page = await ctx.newPage()
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

const sec = await page.evaluate(() => {
  const all = Array.from(document.querySelectorAll('section'))
  const f = all.find(el => el.querySelector('h2')?.textContent.trim().includes('Soluciones'))
  if (!f) return null
  const r = f.getBoundingClientRect()
  return { top: r.top + window.scrollY, height: r.height }
})
if (!sec) { console.log('not found'); await browser.close(); process.exit(1) }

await page.evaluate(y => window.scrollTo(0, y), Math.max(0, sec.top - 30))
await page.waitForTimeout(1200)

// Capture 4 frames over ~12 seconds — each autoplay tick is 3s, so we should see 3+ transitions
for (let i = 0; i < 5; i++) {
  await page.screenshot({
    path: join(OUT_DIR, `sol-loop-frame${i}.png`),
    clip: { x: 0, y: 380, width: 390, height: 360 },
  })
  console.log('frame', i)
  if (i < 4) await page.waitForTimeout(3200)
}

await browser.close()
console.log('done')
