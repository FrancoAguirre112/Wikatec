import sharp from 'sharp'
import { readdir, stat, access } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dirname, '..', 'public', 'images')

const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png'])
const FORCE = process.argv.includes('--force')

const files = await readdir(IMAGES_DIR)
let totalBefore = 0
let totalAfter = 0
let converted = 0
let skipped = 0

console.log(`Source: ${IMAGES_DIR}\n`)

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

  await sharp(input)
    .webp({ quality: 82, effort: 5 })
    .toFile(output)

  const after = (await stat(output)).size
  totalBefore += before
  totalAfter += after
  converted++

  const saving = ((1 - after / before) * 100).toFixed(0)
  const beforeKB = (before / 1024).toFixed(0).padStart(6)
  const afterKB = (after / 1024).toFixed(0).padStart(6)
  console.log(`  ${file.padEnd(40)} ${beforeKB}KB -> ${afterKB}KB  -${saving}%`)
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
