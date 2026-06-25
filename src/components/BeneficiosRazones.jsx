import { useRef, useLayoutEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, prefersReduced } from '../lib/gsap'
import { useReveal } from '../hooks/useReveal'

const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
    className="w-7 h-7 md:w-8 md:h-8"
  >
    {children}
  </svg>
)

const razones = [
  {
    id: 1,
    titulo: 'Ahorro energético',
    resumen: 'Hasta 70% menos consumo con LED + dimmerizado inteligente.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </Icon>
    ),
  },
  {
    id: 2,
    titulo: 'Reparaciones más rápidas',
    resumen: 'Detección en tiempo real con ubicación exacta de cada falla.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </Icon>
    ),
  },
  {
    id: 3,
    titulo: 'Menor costo técnico',
    resumen: 'Mantenimiento planificado, menos intervenciones reactivas.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </Icon>
    ),
  },
  {
    id: 4,
    titulo: 'Modernización visible',
    resumen: 'Mejor calidad lumínica e impacto concreto para la comunidad.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </Icon>
    ),
  },
  {
    id: 5,
    titulo: 'Menor huella de carbono',
    resumen: 'Menos CO₂ emitido y metas ambientales medibles.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </Icon>
    ),
  },
  {
    id: 6,
    titulo: 'Gestión centralizada',
    resumen: 'Toda la red desde una sola plataforma, en tiempo real.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        <circle cx="6" cy="6.75" r="1" fill="currentColor" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="6" cy="17.25" r="1" fill="currentColor" />
      </Icon>
    ),
  },
  {
    id: 7,
    titulo: 'Mayor vida útil',
    resumen: 'Ciclos precisos reducen el estrés térmico de las luminarias LED.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M9 12.75L11.25 15 15 9.75m6 0c0 1.268-.063 2.522-.187 3.757a17.857 17.857 0 01-2.158 6.066c-1.295 1.927-3.157 3.59-5.39 4.523M3 12c0 1.268.063 2.522.187 3.757a17.857 17.857 0 002.158 6.066c1.295 1.927 3.157 3.59 5.39 4.523M12 3a11.95 11.95 0 018.31 3.33A11.95 11.95 0 0112 21a11.95 11.95 0 01-8.31-14.67A11.95 11.95 0 0112 3z" />
      </Icon>
    ),
  },
  {
    id: 8,
    titulo: 'Mayor seguridad',
    resumen: 'Sin zonas oscuras ni lámparas quemadas sin atender.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </Icon>
    ),
  },
  {
    id: 9,
    titulo: 'Datos para decidir',
    resumen: 'Histórico de consumo y fallas para planificar inversiones.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </Icon>
    ),
  },
  {
    id: 10,
    titulo: 'Adaptable a eventos',
    resumen: 'Reprogramá la red desde la plataforma en minutos.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </Icon>
    ),
  },
]

// Reading-order indices in the 2-column grid:
// [0][1]
// [2][3]
// [4][5]
// [6][7]
// [8][9]
// Snake walks: 0→1→3→2→4→5→7→6→8→9 (zigzag right→down→left→down→right…)
const SNAKE = [0, 1, 3, 2, 4, 5, 7, 6, 8, 9]

// Build a smooth path through points using L+Q segments with rounded corners
function buildSmoothPath(points, radius = 28) {
  if (points.length < 2) return ''
  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`
  for (let i = 1; i < points.length; i++) {
    const curr = points[i]
    const prev = points[i - 1]
    const next = i + 1 < points.length ? points[i + 1] : null

    if (next) {
      const dx1 = curr.x - prev.x
      const dy1 = curr.y - prev.y
      const len1 = Math.hypot(dx1, dy1) || 1
      const r1 = Math.min(radius, len1 / 2)
      const beforeX = curr.x - (dx1 / len1) * r1
      const beforeY = curr.y - (dy1 / len1) * r1

      const dx2 = next.x - curr.x
      const dy2 = next.y - curr.y
      const len2 = Math.hypot(dx2, dy2) || 1
      const r2 = Math.min(radius, len2 / 2)
      const afterX = curr.x + (dx2 / len2) * r2
      const afterY = curr.y + (dy2 / len2) * r2

      d += ` L ${beforeX.toFixed(2)} ${beforeY.toFixed(2)}`
      d += ` Q ${curr.x.toFixed(2)} ${curr.y.toFixed(2)} ${afterX.toFixed(2)} ${afterY.toFixed(2)}`
    } else {
      d += ` L ${curr.x.toFixed(2)} ${curr.y.toFixed(2)}`
    }
  }
  return d
}

export default function BeneficiosRazones() {
  const sectionRef = useRef(null)
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const pathRef = useRef(null)
  const dotRef = useRef(null)
  const startMarkerRef = useRef(null)
  const progressRef = useRef(null)
  const cardRefs = useRef([])
  const pathData = useRef({ length: 0, cardLengths: [] })
  const revealRef = useReveal()

  // Build path geometry on mount + resize
  useLayoutEffect(() => {
    const buildPath = () => {
      const wrap = wrapRef.current
      const svg = svgRef.current
      const path = pathRef.current
      const startMarker = startMarkerRef.current
      if (!wrap || !svg || !path || !startMarker) return

      const wr = wrap.getBoundingClientRect()
      if (!wr.width || !wr.height) return
      svg.setAttribute('viewBox', `0 0 ${wr.width} ${wr.height}`)
      svg.setAttribute('width', wr.width)
      svg.setAttribute('height', wr.height)

      const sr = startMarker.getBoundingClientRect()
      const startPt = {
        x: sr.left - wr.left + sr.width / 2,
        y: sr.top - wr.top + sr.height / 2,
      }

      const cardPoints = SNAKE.map((i) => {
        const c = cardRefs.current[i]
        if (!c) return null
        const r = c.getBoundingClientRect()
        return {
          x: r.left - wr.left + r.width / 2,
          y: r.top - wr.top + r.height / 2,
        }
      }).filter(Boolean)

      if (cardPoints.length === 0) return

      const allPoints = [startPt, ...cardPoints]
      const d = buildSmoothPath(allPoints, 28)
      path.setAttribute('d', d)

      const totalLen = path.getTotalLength()
      path.style.strokeDasharray = `${totalLen}`
      path.style.strokeDashoffset = `${totalLen}`

      // Sample path and find length closest to each card center
      const SAMPLES = 600
      const sampled = new Array(SAMPLES + 1)
      for (let s = 0; s <= SAMPLES; s++) {
        const l = (s / SAMPLES) * totalLen
        sampled[s] = { l, pt: path.getPointAtLength(l) }
      }
      const cardLens = cardPoints.map((p) => {
        let minD = Infinity
        let minLen = 0
        for (let s = 0; s <= SAMPLES; s++) {
          const dd = Math.hypot(sampled[s].pt.x - p.x, sampled[s].pt.y - p.y)
          if (dd < minD) {
            minD = dd
            minLen = sampled[s].l
          }
        }
        // Reveal slightly BEFORE the dot reaches the exact center (feels punchier)
        return Math.max(0, minLen - 20)
      })

      pathData.current = { length: totalLen, cardLengths: cardLens }
      ScrollTrigger.refresh()
    }

    buildPath()
    const t = setTimeout(buildPath, 250)
    window.addEventListener('resize', buildPath)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', buildPath)
    }
  }, [])

  useGSAP(
    () => {
      if (prefersReduced) return
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px)', () => {
        const path = pathRef.current
        const dot = dotRef.current
        if (!path || !dot) return

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top+=67',
          end: () => `+=${Math.round(window.innerHeight * 1.2)}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const { length, cardLengths } = pathData.current
            if (!length) return

            const progress = self.progress
            const drawn = length * progress

            path.style.strokeDashoffset = `${length - drawn}`

            if (drawn > 0 && progress < 0.995) {
              const pt = path.getPointAtLength(drawn)
              dot.setAttribute('cx', pt.x)
              dot.setAttribute('cy', pt.y)
              dot.style.opacity = '1'
            } else {
              dot.style.opacity = '0'
            }

            if (progressRef.current) {
              progressRef.current.textContent = `${Math.round(progress * 100)}%`
            }

            cardLengths.forEach((triggerLen, snakeIdx) => {
              const cardIdx = SNAKE[snakeIdx]
              const card = cardRefs.current[cardIdx]
              if (!card) return
              if (drawn >= triggerLen) {
                card.classList.add('is-visible')
              } else {
                card.classList.remove('is-visible')
              }
            })
          },
        })

        return () => st.kill()
      })

      return () => mm.kill()
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="razones-smart-lights"
      className="relative w-full py-10 md:py-14 px-6 bg-[linear-gradient(180deg,#172555_0%,#030C40_100%)] scroll-mt-[67px] overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-sky-300/8 blur-3xl" />

      <div
        ref={wrapRef}
        className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14"
      >
        {/* SVG path overlay covering both columns (desktop only) */}
        <svg
          ref={svgRef}
          className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="razonesPathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.95" />
            </linearGradient>
            <filter id="razonesPathGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            ref={pathRef}
            fill="none"
            stroke="url(#razonesPathGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#razonesPathGlow)"
          />
          <circle
            ref={dotRef}
            r="5"
            fill="#7DD3FC"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(125,211,252,0.95)) drop-shadow(0 0 26px rgba(125,211,252,0.45))',
              opacity: 0,
              transition: 'opacity 200ms ease-out',
            }}
          />
        </svg>

        {/* Sticky title column */}
        <div ref={revealRef} className="lg:sticky lg:top-28 lg:self-start">
          <p className="r-reveal mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80 inline-flex items-center gap-2.5">
            Beneficios medibles
            <span
              ref={startMarkerRef}
              className="hidden lg:inline-block h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]"
            />
          </p>
          <h2 className="r-reveal text-white font-bold text-[26px] md:text-[34px] leading-[1.05]">
            10 razones para elegir <span className="text-blue-300">Kiwatec Smart Lights</span>
          </h2>
          <p className="r-reveal mt-4 text-white/70 text-sm leading-[165%] max-w-md">
            El impacto concreto de pasar a una red lumínica inteligente: ahorro, control y sustentabilidad medibles desde el primer día.
          </p>
          <div className="r-reveal mt-5 hidden lg:flex items-center gap-2.5 text-xs text-white/40">
            <span className="h-px w-10 bg-white/20" />
            <span className="uppercase tracking-[0.2em]">Scroll para descubrir</span>
            <span
              ref={progressRef}
              className="ml-auto font-semibold tabular-nums text-blue-300/90"
            >
              0%
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {razones.map((r, i) => (
            <div
              key={r.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="razon-card group relative flex flex-col gap-2.5 p-4 md:p-5 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/15 rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:border-white/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
            >
              <span className="absolute top-3 right-3 text-white/30 font-bold text-[11px] tracking-wide tabular-nums">
                {String(r.id).padStart(2, '0')}
              </span>
              <div className="text-blue-300/90 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="text-white font-bold text-[14.5px] md:text-[15px] leading-tight">
                {r.titulo}
              </h3>
              <p className="text-white/75 font-normal text-[12.5px] md:text-[13px] leading-[155%]">
                {r.resumen}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .razon-card {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
            transition: opacity 550ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1), border-color 300ms, box-shadow 300ms;
          }
          .razon-card.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  )
}
