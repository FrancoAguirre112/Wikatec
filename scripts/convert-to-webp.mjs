import sharp from 'sharp'
import { readdir, stat, access } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dirname, '..', 'public', 'images')

const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png'])
const FORCE = process.argv.includes('--force')

// Per-category max width (downscale only, won't enlarge smaller images).
// Quality balances size vs. visual fidelity (78 is sweet spot for WebP).
const WEBP_QUALITY = 78
function maxWidthFor(file) {
  // Heroes (full-width on page): up to 1600px (covers retina 1x at 1600 viewport)
  if (file.startsWith('hero-') || file.startsWith('beneficios-hero') || file.startsWith('contacto-hero') || file.startsWith('nosotros-hero') || file.startsWith('soluciones-hero') || file.startsWith('hardware-hero') || file === 'cta-ciudad.jpg' || file === 'smart-lights.webp') {
    return 1600
  }
  // Hardware product images (rendered at 140px, so 480px is 3x retina)
  if (file.startsWith('hw-')) return 480
  // Icons & small decorative assets
  if (file.startsWith('icon-') || file.startsWith('logo-') || file === 'escudo.png' || file === 'foco.png' || file === 'mantenimiento.png' || file === 'rueda.png' || file.startsWith('alumbrado') || file.startsWith('carrusel') || file === 'carbono-carrusel.jpg' || file === 'consumo-carrusel.jpg' || file === 'reparacion-carrusel.jpg') {
    return 256
  }
  // Soluciones gallery thumbnails (325px display, 650px is 2x retina)
  if (file.startsWith('sol-') && !file.startsWith('sol-app-')) return 650
  // Everything else (section illustrations, screenshots, sol-app-*): 1200px
  return 1200
}

const files = await readdir(IMAGES_DIR)
let totalBefore = 0
let totalAfter = 0
let converted = 0
let skipped = 0

console.log(`Source: ${IMAGES_DIR}`)
console.log(`Quality: ${WEBP_QUALITY}, downscale to per-category max width\n`)

for (const file of files.sort()) {
  const ext = extname(file).toLowerCase()
  if (!SOURCE_EXTS.has(ext)) continue

  const input = join(IMAGES_DIR, file)
  const output = join(IMAGES_DIR, basename(file, ext) + '.webp')

  if (!FORCE) {
    try {
      await access(output)
      skipped++
      continue
    } catch { /* doesn't exist, proceed */ }
  }

  const before = (await stat(input)).size
  const width = maxWidthFor(file)

  await sharp(input)
    .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 5 })
    .toFile(output)

  const after = (await stat(output)).size
  totalBefore += before
  totalAfter += after
  converted++

  const saving = ((1 - after / before) * 100).toFixed(0)
  const beforeKB = (before / 1024).toFixed(0).padStart(6)
  const afterKB = (after / 1024).toFixed(0).padStart(6)
  console.log(`  ${file.padEnd(40)} ${beforeKB}KB -> ${afterKB}KB  -${saving}%  (max ${width}px)`)
}

console.log(`\n${converted} convertidos, ${skipped} ya existian`)
if (converted > 0) {
  const beforeMB = (totalBefore / 1024 / 1024).toFixed(2)
  const afterMB = (totalAfter / 1024 / 1024).toFixed(2)
  const savingPct = ((1 - totalAfter / totalBefore) * 100).toFixed(0)
  console.log(`Total: ${beforeMB}MB -> ${afterMB}MB  -${savingPct}%`)
}
if (skipped > 0) {
  console.log(`(Re-correr con --force para regenerar los ${skipped} existentes)`)
}
