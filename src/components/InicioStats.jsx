import { useEffect, useRef, useState } from 'react'
import { gsap, prefersReduced } from '../lib/gsap'

const stats = [
  {
    value: 70,
    suffix: '%',
    label: 'Hasta de ahorro energético',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Control remoto centralizado',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Monitoreo en tiempo real',
  },
  {
    value: 5000,
    prefix: '+',
    label: 'Dispositivos gestionables',
    format: (n) => Math.floor(n).toLocaleString('es-AR'),
  },
]

function Counter({ value, prefix = '', suffix = '', format, start }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    if (prefersReduced) {
      ref.current.textContent = String(format ? format(value) : Math.round(value))
      return
    }
    if (!start) {
      ref.current.textContent = '0'
      return
    }
    const obj = { val: 0 }
    const tween = gsap.to(obj, {
      val: value,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        if (!ref.current) return
        ref.current.textContent = format ? format(obj.val) : String(Math.floor(obj.val))
      },
    })
    return () => tween.kill()
  }, [start, value, format])

  return (
    <span className="inline-flex items-baseline">
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}

export default function InicioStats() {
  const sectionRef = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 md:py-20 px-6 bg-gradient-to-b from-[#030C40] via-[#0A1640] to-[#030C40] overflow-hidden border-y border-white/5"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
      {/* Warm light glow that brightens when stats activate */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[60rem] rounded-full bg-amber-300/0 blur-3xl transition-all duration-[2000ms] ease-out"
        style={start ? { backgroundColor: 'rgba(252, 211, 77, 0.08)' } : undefined}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-10">
        {stats.map((s, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center gap-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="relative font-black text-[44px] md:text-[60px] leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-blue-200 via-blue-300 to-sky-500 tabular-nums tracking-tight whitespace-nowrap">
              <Counter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                format={s.format}
                start={start}
              />
            </p>
            <div className="h-px w-12 bg-white/20 group-hover:bg-blue-300/60 transition-colors duration-300" />
            <p className="text-white/70 text-[12.5px] md:text-[13.5px] leading-tight max-w-[170px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
