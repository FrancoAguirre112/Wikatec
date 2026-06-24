import { createElement } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({
  as = 'div',
  stagger,
  y,
  delay,
  duration,
  start,
  once,
  children,
  ...props
}) {
  const ref = useReveal({ stagger, y, delay, duration, start, once })
  return createElement(as, { ref, ...props }, children)
}
