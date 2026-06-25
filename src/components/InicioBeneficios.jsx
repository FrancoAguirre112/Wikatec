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

export default function Beneficios() {
  const root = useRef(null)
  const revealRef = useReveal()

  useGSAP(
    () => {
      if (prefersReduced) return
      gsap.to('.ben-image', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
      // Animated accent bar grows from top as section enters
      gsap.fromTo(
        '.ben-bar',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'power3.out',
          duration: 1.2,
          scrollTrigger: {
            trigger: root.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    },
    { scope: root }
  )

  return (
    <section
      ref={root}
      className="relative w-full bg-gradient-to-b from-[#172555] to-[#030C40] overflow-hidden py-20 lg:py-28"
    >
      {/* "05" decoration top-right (opposite of image which is now on the left) */}
      <span
        aria-hidden="true"
        className="ben-number pointer-events-none absolute -top-8 right-4 lg:right-12 font-black leading-none text-white/4 select-none z-0 text-[14rem] sm:text-[18rem] lg:text-[22rem] tabular-nums"
      >
        05
      </span>

      <div
        ref={revealRef}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Right: text with vertical accent bar (order-2 on desktop = right column) */}
        <div className="relative pl-8 lg:pl-10 lg:order-2">
          {/* Vertical accent bar (animated) — only blue→sky, amber reserved for Smart Lights */}
          <div className="ben-bar absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-blue-400 to-sky-300 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.4)]" />

          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80 mb-5">
            05 · Impacto medible
          </p>
          <h2 className="r-reveal text-white font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] mb-6">
            Menos fallas, menos costos,{' '}
            <span className="text-blue-300">más control</span>.
          </h2>
          <p className="r-reveal text-white/85 text-base lg:text-[17px] leading-[170%] max-w-xl mb-8">
            Nuestro sistema detecta anomalías antes de que se conviertan en
            problemas, reduce el gasto energético y permite a los operadores
            actuar desde cualquier lugar, en tiempo real.
          </p>
          <Link
            to="/beneficios"
            className="r-reveal group inline-flex items-center justify-center gap-2 w-[210px] h-[44px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 no-underline transition-all duration-300"
          >
            Conocer más
            <ArrowIcon />
          </Link>
        </div>

        {/* Left: framed image (order-1 on desktop = left column) */}
        <div className="ben-image relative lg:order-1">
          <div className="relative group transition-transform duration-500">
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
              <SmoothImage
                src="/images/beneficios.jpg"
                alt="Ciudad inteligente con IoT"
                className="w-full h-[300px] lg:h-[440px] object-cover opacity-95"
              />
              {/* Soft fade toward text side (right) — visual rhyme with section 01's edge blend */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030C40]/45 via-[#030C40]/15 to-transparent" />
              {/* Corner badge — consistent with sections 02 and 04 */}
              <div className="pointer-events-none absolute top-5 right-5 flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md px-3 py-1.5 ring-1 ring-white/15">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.6)]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90">
                  En tiempo real
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
