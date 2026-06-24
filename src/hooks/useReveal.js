import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

export function useReveal({
  stagger = 0,
  y = 30,
  delay = 0,
  duration,
  start = 'top 85%',
  once = true,
} = {}) {
  const ref = useRef(null)
  useGSAP(
    () => {
      if (!ref.current) return
      const targets = stagger > 0 ? ref.current.children : ref.current
      gsap.from(targets, {
        y,
        opacity: 0,
        stagger,
        delay,
        ...(duration ? { duration } : {}),
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      })
    },
    { scope: ref }
  )
  return ref
}
