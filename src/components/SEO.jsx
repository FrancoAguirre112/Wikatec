import { useEffect } from 'react'

const BASE_URL = 'https://wikatec.vercel.app'

/**
 * Per-route SEO meta updater. Mounts in each Page component and updates:
 * - document.title
 * - meta[name=description], meta[name=keywords]
 * - Open Graph + Twitter card tags
 * - link[rel=canonical]
 * - JSON-LD script (optional, per-page schema)
 *
 * Tags are updated declaratively — when the page unmounts, the next page's
 * SEO component overwrites them. Original tags stay in index.html for crawlers
 * that don't execute JS (the home/default state).
 */
export default function SEO({
  title,
  description,
  keywords,
  path = '/',
  image = '/images/hero-smart-lights.webp',
  jsonLd = null,
}) {
  const url = `${BASE_URL}${path}`
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`

  useEffect(() => {
    // Document title
    if (title) document.title = title

    // Helper to upsert a meta tag by name or property
    const setMeta = (attr, value, content) => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${value}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, value)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('name', 'keywords', keywords)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', fullImage)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:url', url)
    setMeta('name', 'twitter:image', fullImage)

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Per-page JSON-LD (separate <script id="page-jsonld">)
    if (jsonLd) {
      let s = document.getElementById('page-jsonld')
      if (!s) {
        s = document.createElement('script')
        s.type = 'application/ld+json'
        s.id = 'page-jsonld'
        document.head.appendChild(s)
      }
      s.textContent = JSON.stringify(jsonLd)
    } else {
      const s = document.getElementById('page-jsonld')
      if (s) s.remove()
    }
  }, [title, description, keywords, url, fullImage, jsonLd])

  return null
}
