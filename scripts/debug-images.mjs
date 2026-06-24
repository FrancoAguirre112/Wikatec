import { chromium } from 'playwright'

const BASE = process.env.BASE_URL || 'https://wikatec.vercel.app'

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()

page.on('requestfailed', (req) => console.log(`  FAIL: ${req.url()} - ${req.failure()?.errorText}`))
page.on('response', (res) => {
  if (res.status() >= 400) console.log(`  HTTP ${res.status()}: ${res.url()}`)
})

console.log(`\n[1] /#quienes-somos`)
await page.goto(`${BASE}/#quienes-somos`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)

const qsState = await page.evaluate(() => {
  const section = document.getElementById('quienes-somos')
  const img = section?.querySelector('img')
  return {
    sectionFound: !!section,
    sectionOpacity: section ? getComputedStyle(section).opacity : null,
    imgFound: !!img,
    imgSrc: img?.src,
    imgCurrentSrc: img?.currentSrc,
    imgComplete: img?.complete,
    imgNaturalWidth: img?.naturalWidth,
    imgOpacity: img ? getComputedStyle(img).opacity : null,
    imgClasses: img?.className,
    imgRect: img?.getBoundingClientRect().toJSON(),
  }
})
console.log(JSON.stringify(qsState, null, 2))

console.log(`\n[2] /beneficios#razones-smart-lights`)
await page.goto(`${BASE}/beneficios#razones-smart-lights`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)

const razonesState = await page.evaluate(() => {
  const section = document.getElementById('razones-smart-lights')
  const grid = section?.querySelector('.grid')
  const cards = grid ? Array.from(grid.children) : []
  return {
    sectionFound: !!section,
    gridFound: !!grid,
    cardCount: cards.length,
    cardOpacities: cards.slice(0, 3).map(c => getComputedStyle(c).opacity),
    cardTransforms: cards.slice(0, 3).map(c => getComputedStyle(c).transform),
    gridRect: grid?.getBoundingClientRect().toJSON(),
  }
})
console.log(JSON.stringify(razonesState, null, 2))

await browser.close()
