import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReduced } from '../lib/gsap'

export function useReveal({
  stagger = 0,
  y = 30,
  delay = 0,
  duration,
  threshold = 0.15,
} = {}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const el = ref.current
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
          ...(duration ? { duration } : {}),
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
