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

export default function SmartLightsSection() {
  const root = useRef(null)
  const revealRef = useReveal()

  useGSAP(
    () => {
      if (prefersReduced) return
      gsap.to('.sl-image', {
        yPercent: -10,
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
      {/* "02" decoration in top-left corner (opposite of image which is on the right) */}
      <span
        aria-hidden="true"
        className="sl-number pointer-events-none absolute -top-8 left-2 lg:left-12 font-black leading-none text-amber-300/[0.05] select-none z-0 text-[14rem] sm:text-[18rem] lg:text-[22rem] tabular-nums"
      >
        02
      </span>

      {/* Decorative amber glow under image area */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div
        ref={revealRef}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left: text */}
        <div className="flex flex-col gap-5">
          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/80">
            02 · Plataforma
          </p>
          <h2 className="r-reveal relative inline-block w-fit text-white font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05]">
            <span
              className="pointer-events-none absolute -inset-x-4 -inset-y-2 -z-10 rounded-full bg-amber-300/25 blur-2xl animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            Smart Lights
          </h2>
          <p className="r-reveal text-white/85 text-base lg:text-[17px] leading-[170%] max-w-xl">
            Gestione toda su red lumínica desde una sola plataforma:
            programe encendidos y apagados graduales según horarios,
            adapte la intensidad a cada zona y responda a fallas en
            tiempo real. Con nuestra tecnología IoT integrada, municipios,
            empresas e instalaciones privadas reducen costos, automatizan
            la operación y mejoran la seguridad de sus espacios sin
            complicaciones.
          </p>
          <Link
            to="/smart-lights"
            className="r-reveal group inline-flex items-center justify-center gap-2 w-[210px] h-[44px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 no-underline transition-all duration-300 mt-2"
          >
            Conocer más
            <ArrowIcon />
          </Link>
        </div>

        {/* Right: image with corner badge */}
        <div className="sl-image relative">
          <div className="relative group transition-transform duration-500">
            <SmoothImage
              src="/images/smart-lights-iot.jpg"
              alt="Smart Lights IoT"
              className="w-full h-[300px] lg:h-[460px] object-cover rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.55)] opacity-95"
            />
            {/* Warm amber tint overlay (subtle, matches title glow) */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent" />
            {/* Corner badge */}
            <div className="pointer-events-none absolute top-5 right-5 flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md px-3 py-1.5 ring-1 ring-white/15">
              <span className="flex h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.7)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90">
                IoT integrado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
