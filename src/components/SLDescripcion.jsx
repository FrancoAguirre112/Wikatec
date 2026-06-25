import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ROTATING = ['supervisar', 'operar', 'analizar']
// reserve width for the longest word
const LONGEST = ROTATING.reduce((a, b) => (a.length >= b.length ? a : b))

const MonitorIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3-8 4 16 3-8h4" />
  </svg>
)
const ControlIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const ReportIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m3 6V8m3 9v-4M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

const pills = [
  { label: 'Monitoreo en tiempo real', icon: <MonitorIcon /> },
  { label: 'Control remoto', icon: <ControlIcon /> },
  { label: 'Reportes automáticos', icon: <ReportIcon /> },
]

export default function SLDescripcion() {
  const ref = useReveal()
  const [wordIdx, setWordIdx] = useState(0)
  const [prevIdx, setPrevIdx] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setWordIdx((prev) => {
        setPrevIdx(prev)
        return (prev + 1) % ROTATING.length
      })
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full flex items-center justify-center px-6 py-16 md:py-20 bg-gradient-to-b from-[#030C40] to-[#172555] overflow-hidden">
      {/* Subtle amber dot grid (control panel) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(252,211,77,0.7) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Soft radial amber glow center-top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 rounded-full bg-amber-400/10 blur-3xl" />

      <div ref={ref} className="relative max-w-3xl w-full flex flex-col items-center text-center gap-5">
        <p className="r-reveal inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300/85">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(252,211,77,0.95)] animate-pulse" />
          Plataforma SaaS
        </p>
        <h2 className="r-reveal text-white font-bold text-[24px] md:text-[34px] leading-[1.15]">
          Todo el control de tu red lumínica para
          <br />
          <span className="relative inline-block align-baseline text-amber-300">
            <span aria-hidden="true" className="invisible">
              {LONGEST}
            </span>
            {ROTATING.map((w, i) => {
              const state =
                i === wordIdx ? 'active' : i === prevIdx ? 'exiting' : 'idle'
              const ty = state === 'active' ? '0' : state === 'exiting' ? '0.7em' : '-0.7em'
              return (
                <span
                  key={w}
                  className="absolute top-0 left-1/2 whitespace-nowrap will-change-transform"
                  style={{
                    transform: `translate(-50%, ${ty})`,
                    opacity: state === 'active' ? 1 : 0,
                    transition:
                      'transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 380ms ease-out',
                  }}
                >
                  {w}
                </span>
              )
            })}
          </span>
        </h2>
        <p className="r-reveal text-white/85 font-normal text-sm md:text-base leading-[170%] max-w-2xl">
          Smart Lights es una plataforma web intuitiva y segura para supervisar,
          operar y analizar toda tu infraestructura de alumbrado. Monitoreo en
          tiempo real, control remoto y reportes automáticos que te permiten
          tomar mejores decisiones, reducir costos y mejorar el servicio de
          mantenimiento.
        </p>
        <div className="r-reveal flex flex-wrap items-center justify-center gap-2 mt-1">
          {pills.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur-sm"
            >
              <span className="text-amber-300/90">{p.icon}</span>
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
