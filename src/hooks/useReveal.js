import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, prefersReduced } from '../lib/gsap'

/**
 * Scroll-reveal hook. Two modes:
 *
 * 1) Selector mode (recommended, pepem-style):
 *      const ref = useReveal()
 *      <section ref={ref}>
 *        <h2 className="r-reveal">title</h2>
 *        <p className="r-reveal">body</p>
 *      </section>
 *    Every `.r-reveal` element inside `ref` is batched via ScrollTrigger.batch
 *    (efficient: one observer, animated in stagger when in viewport).
 *
 * 2) Legacy mode (used by <Reveal> wrapper):
 *      const ref = useReveal({ stagger: 0.08 })
 *      <div ref={ref}>...</div>
 *    When `stagger > 0`, animates `ref.children`.
 *    Otherwise animates `ref` itself.
 */
export function useReveal({
  stagger = 0,
  y = 28,
  delay = 0,
  duration = 0.8,
  selector = '.r-reveal',
  threshold = 0.15,
} = {}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const el = ref.current

      // Selector mode: find matching elements inside scope and batch them
      const found = el.querySelectorAll(selector)
      if (found.length > 0) {
        if (prefersReduced) {
          gsap.set(found, { opacity: 1, y: 0 })
          return
        }
        gsap.set(found, { opacity: 0, y, willChange: 'transform, opacity' })
        ScrollTrigger.batch(found, {
          start: `top ${100 - threshold * 100}%`,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration,
              ease: 'power3.out',
              stagger: 0.08,
              onComplete: () => gsap.set(batch, { willChange: 'auto' }),
            }),
        })
        return
      }

      // Legacy mode: stagger > 0 animates children, otherwise animates self
      const targets = stagger > 0 ? Array.from(el.children) : el
      if (stagger > 0 && targets.length === 0) return

      if (prefersReduced) {
        gsap.set(targets, { y: 0, opacity: 1 })
        return
      }

      gsap.set(targets, { y, opacity: 0, willChange: 'transform, opacity' })

      const play = () => {
        gsap.to(targets, {
          y: 0,
          opacity: 1,
          stagger,
          delay,
          duration,
          ease: 'power3.out',
          onComplete: () => gsap.set(targets, { willChange: 'auto' }),
        })
      }

      const rect = el.getBoundingClientRect()
      const inViewport =
        rect.top < window.innerHeight * (1 - threshold) && rect.bottom > 0

      if (inViewport) {
        play()
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              play()
              observer.disconnect()
            }
          }
        },
        { threshold, rootMargin: '0px 0px -10% 0px' }
      )
      observer.observe(el)

      return () => observer.disconnect()
    },
    { scope: ref }
  )

  return ref
}
