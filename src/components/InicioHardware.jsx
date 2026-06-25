import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReduced } from '../lib/gsap'
import { useReveal } from '../hooks/useReveal'
import SmoothImage from './SmoothImage'

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const modelos = ['KSL-119', 'KSL-122', 'KGT-220L', 'KCT-220L', 'KCT-220C']

export default function Hardware() {
  const root = useRef(null)
  const revealRef = useReveal()

  useGSAP(
    () => {
      if (prefersReduced) return
      gsap.to('.hw-image', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    },
    { scope: root }
  )

  return (
    <section
      ref={root}
      className="relative w-full bg-gradient-to-b from-[#030C40] to-[#172555] overflow-hidden py-20 lg:py-28"
    >
      {/* "04" decoration top-left (opposite of image which is on the right) */}
      <span
        aria-hidden="true"
        className="hw-number pointer-events-none absolute -top-8 left-2 lg:left-12 font-black leading-none text-white/[0.04] select-none z-0 text-[14rem] sm:text-[18rem] lg:text-[22rem] tabular-nums"
      >
        04
      </span>

      {/* Decorative blue glow under image area */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div
        ref={revealRef}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left: text + chips */}
        <div className="flex flex-col gap-5">
          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80">
            04 · Equipamiento
          </p>
          <h2 className="r-reveal text-white font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05]">
            Hardware
          </h2>
          <p className="r-reveal text-white/85 text-base lg:text-[17px] leading-[170%] max-w-xl">
            Nuestros equipos —controladores IoT, gateways y luminarias LED—
            están diseñados para trabajar en conjunto con la plataforma Smart
            Lights. Robustos, confiables y preparados para las exigencias del
            entorno urbano, garantizan control remoto preciso y respuesta
            inmediata ante cualquier evento.
          </p>
          {/* Spec chips — compact: solo un dot leading + nombres inline con separadores */}
          <div className="r-reveal flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 font-mono text-[11.5px] text-white/65">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.7)]" />
            {modelos.map((m, i) => (
              <span key={m} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-white/25">·</span>}
                <span className="text-white/80">{m}</span>
              </span>
            ))}
          </div>
          <Link
            to="/hardware"
            className="r-reveal group inline-flex items-center justify-center gap-2 w-[210px] h-[44px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 no-underline transition-all duration-300 mt-3"
          >
            Conocer más
            <ArrowIcon />
          </Link>
        </div>

        {/* Right: image floating with subtle rotation */}
        <div className="hw-image relative">
          <div className="relative group transition-transform duration-500">
            <SmoothImage
              src="/images/hardware.jpg"
              alt="Controladores IoT y hardware Smart Lights"
              className="w-full h-[300px] lg:h-[460px] object-cover rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.55)] opacity-95"
            />
            {/* Soft fade toward text side — visual rhyme with section 01's edge blend */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 rounded-l-[28px] bg-gradient-to-r from-[#030C40]/45 via-[#030C40]/15 to-transparent" />
            {/* Corner badge */}
            <div className="pointer-events-none absolute top-5 left-5 flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md px-3 py-1.5 ring-1 ring-white/15">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.6)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90">
                5 modelos · LoRaWAN & 4G
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
