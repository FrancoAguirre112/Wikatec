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
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)

async function shootSection(predicate, name) {
  const box = await page.evaluate(pred => {
    const fn = new Function('return ' + pred)()
    const sections = Array.from(document.querySelectorAll('section'))
    const sec = sections.find(fn)
    if (!sec) return null
    const r = sec.getBoundingClientRect()
    return { top: r.top + window.scrollY, height: r.height }
  }, predicate.toString())
  if (!box) { console.log('not found:', name); return }
  await page.evaluate(y => window.scrollTo(0, y), Math.max(0, box.top - 70))
  await page.waitForTimeout(800)
  await page.screenshot({ path: join(OUT_DIR, name), clip: { x: 0, y: 67, width: 1680, height: Math.min(900, box.height) } })
  console.log('shot:', name)
}

await shootSection(sec => sec.id === 'quienes-somos', 'harmonyC-01.png')
await shootSection(sec => sec.querySelector('h2')?.textContent.includes('Smart Lights'), 'harmonyC-02.png')
await shootSection(sec => sec.querySelector('h2')?.textContent.trim() === 'Hardware', 'harmonyC-04.png')
await shootSection(sec => sec.querySelector('h2')?.textContent.includes('Menos fallas'), 'harmonyC-05.png')

await browser.close()
console.log('done')
