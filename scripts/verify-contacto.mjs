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

await page.goto(`${BASE}/contacto`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

// Form section
const sec = await page.evaluate(() => {
  const all = Array.from(document.querySelectorAll('section'))
  const f = all.find(el => el.textContent.includes('Hablemos de'))
  if (!f) return null
  const r = f.getBoundingClientRect()
  return { top: r.top + window.scrollY, height: r.height }
})
if (!sec) {
  console.log('form section not found')
  await browser.close()
  process.exit(1)
}
console.log('form section top:', sec.top, 'height:', sec.height)

// Scroll so the section is in view
await page.evaluate((y) => window.scrollTo(0, y), Math.max(0, sec.top - 67))
await page.waitForTimeout(800)
await page.screenshot({ path: join(OUT_DIR, 'contacto-form-default.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } })

// With one input focused — focus on email
await page.click('#nombre').catch(()=>{})
await page.fill('#nombre', 'Franco')
await page.click('#email')
await page.fill('#email', 'test@kiwatec.net')
await page.waitForTimeout(400)
await page.screenshot({ path: join(OUT_DIR, 'contacto-form-focused.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } })

await browser.close()
console.log('done')
