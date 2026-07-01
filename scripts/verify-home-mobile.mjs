import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', '.screenshots')
const BASE = process.env.BASE_URL || 'https://wikatec.vercel.app'

await mkdir(OUT_DIR, { recursive: true })
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true })
const page = await ctx.newPage()

await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)

const targets = [
  { label: 'mob-02-sl', sigil: 'Smart Lights' },
  { label: 'mob-03-sol', sigil: 'Soluciones' },
  { label: 'mob-04-hw', sigil: 'Hardware' },
  { label: 'mob-05-ben', sigil: 'Menos fallas' },
]

for (const t of targets) {
  const sec = await page.evaluate((s) => {
    const all = Array.from(document.querySelectorAll('section'))
    const found = all.find((el) => {
      const h2 = el.querySelector('h2')
      return h2 && h2.textContent.trim().includes(s)
    })
    if (!found) return null
    const r = found.getBoundingClientRect()
    return { top: r.top + window.scrollY, height: r.height }
  }, t.sigil)
  if (!sec) { console.log('not found:', t.label); continue }
  await page.evaluate((y) => window.scrollTo(0, y), Math.max(0, sec.top - 30))
  await page.waitForTimeout(900)
  await page.screenshot({
    path: join(OUT_DIR, `${t.label}.png`),
    clip: { x: 0, y: 0, width: 390, height: Math.min(844, sec.height + 30) },
  })
  console.log('shot:', t.label, 'h=', sec.height)
}

await browser.close()
console.log('done')
