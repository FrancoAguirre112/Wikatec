import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.defaults({ ease: 'power3.out', duration: 0.8 })

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReduced) {
  gsap.globalTimeline.timeScale(100)
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => ScrollTrigger.refresh())

  if (typeof ResizeObserver !== 'undefined' && typeof document !== 'undefined') {
    let scheduled = false
    const ro = new ResizeObserver(() => {
      if (scheduled) return
      scheduled = true
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        scheduled = false
      })
    })
    if (document.body) {
      ro.observe(document.body)
    } else {
      document.addEventListener('DOMContentLoaded', () => ro.observe(document.body), { once: true })
    }
  }
}

export { gsap, ScrollTrigger, prefersReduced }
