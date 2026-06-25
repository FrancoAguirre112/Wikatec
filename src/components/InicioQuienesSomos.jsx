import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, prefersReduced } from '../lib/gsap'
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

export default function QuienesSomos() {
  const root = useRef(null)
  const revealRef = useReveal()

  // Scroll-linked parallax: image moves slower than scroll, number moves faster
  useGSAP(
    () => {
      if (prefersReduced) return
      gsap.to('.qs-image', {
        yPercent: -12,
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
      id="quienes-somos"
      className="relative w-full bg-[#030C40] overflow-hidden scroll-mt-[67px]"
    >
      {/* Big translucent "01" — parallax watermark */}
      <div
        aria-hidden="true"
        className="qs-number pointer-events-none absolute -top-8 right-4 lg:right-12 font-black leading-none text-white/[0.04] select-none z-0 text-[14rem] sm:text-[18rem] lg:text-[26rem] tabular-nums"
      >
        01
      </div>

      <div ref={revealRef} className="relative z-10 grid lg:grid-cols-2 min-h-[80vh] lg:min-h-[640px]">
        {/* Full-bleed image with subtle parallax. Inner edge softened with rounded corner + hairline ring to echo 2/4/5 cards */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[28px]">
          <div className="qs-image absolute inset-0 scale-110">
            <SmoothImage
              src="/images/quienes-somos.jpg"
              alt="Equipo Kiwatec"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          {/* Dark fade on the inner edge for smooth blend with text side */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#030C40] via-[#030C40]/40 to-transparent hidden lg:block" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030C40] via-[#030C40]/40 to-transparent lg:hidden" />
          {/* Hairline inner edge — visual rhyme with the ring-1 on 2/4/5 cards */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/8 hidden lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/8 lg:hidden" />
        </div>

        {/* Text panel */}
        <div className="relative flex flex-col justify-center px-6 lg:px-14 py-12 lg:py-20">
          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80 mb-5">
            Especialistas en iluminación inteligente
          </p>
          <h2 className="r-reveal text-white font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="r-reveal text-white/85 text-base lg:text-[17px] leading-[170%] mb-8 max-w-xl">
            En Kiwatec desarrollamos una plataforma para el control de
            iluminación inteligente, abierta y escalable, que se adapta a cada
            entorno urbano. Combinamos software avanzado y hardware de alto
            rendimiento para optimizar recursos y gestionar infraestructura
            lumínica de forma eficiente.
          </p>
          <Link
            to="/nosotros"
            className="r-reveal group inline-flex items-center justify-center gap-2 w-[210px] h-[44px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 no-underline transition-all duration-300"
          >
            Conocer más
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
