import { useRef } from 'react'
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

const PAIR_COUNT = razones.length / 2 // 5 pares de 2

export default function BeneficiosRazones() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const counterRef = useRef(null)
  const progressBarRef = useRef(null)
  const revealRef = useReveal()

  useGSAP(
    () => {
      if (prefersReduced) return
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px)', () => {
        // 5 pares, cada uno ocupa ~18% del pin progress, con 5% intro y 5% outro
        const stepSize = 0.9 / PAIR_COUNT
        const spotlightWindow = stepSize * 0.4 // brief glow

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top+=67',
          end: () => `+=${Math.round(window.innerHeight * 1.2)}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress
            let revealedCount = 0

            for (let pairIdx = 0; pairIdx < PAIR_COUNT; pairIdx++) {
              const appearAt = 0.05 + pairIdx * stepSize
              const inSpotlight =
                progress >= appearAt && progress < appearAt + spotlightWindow
              const visible = progress >= appearAt

              const leftIdx = pairIdx * 2
              const rightIdx = leftIdx + 1
              const leftCard = cardRefs.current[leftIdx]
              const rightCard = cardRefs.current[rightIdx]

              ;[leftCard, rightCard].forEach((card) => {
                if (!card) return
                if (visible) {
                  card.classList.add('is-visible')
                  if (inSpotlight) {
                    card.classList.add('is-spotlight')
                  } else {
                    card.classList.remove('is-spotlight')
                  }
                } else {
                  card.classList.remove('is-visible', 'is-spotlight')
                }
              })

              if (visible) revealedCount += 2
            }

            if (counterRef.current) {
              counterRef.current.textContent = `${String(revealedCount).padStart(2, '0')} / 10`
            }
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${revealedCount / razones.length})`
            }
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
      className="relative w-full py-8 md:py-10 px-6 bg-[linear-gradient(180deg,#172555_0%,#030C40_100%)] scroll-mt-[67px] overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-sky-300/8 blur-3xl" />

      <div ref={revealRef} className="relative max-w-7xl mx-auto">
        {/* Header centered */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="r-reveal mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80">
            Beneficios medibles
          </p>
          <h2 className="r-reveal text-white font-bold text-[26px] md:text-[36px] leading-[1.05]">
            10 razones para elegir <span className="text-blue-300">Kiwatec Smart Lights</span>
          </h2>
          <p className="r-reveal mt-3 text-white/70 text-sm md:text-[15px] leading-[160%] max-w-xl mx-auto">
            El impacto concreto de pasar a una red lumínica inteligente: ahorro, control y sustentabilidad medibles desde el primer día.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-7 md:mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {razones.map((r, i) => (
            <div
              key={r.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="razon-card group relative flex flex-col gap-2 p-4 md:p-5 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/15 rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:border-white/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
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

        {/* Progress block at bottom — full width of the title container for impact */}
        <div className="r-reveal hidden lg:block mt-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-between text-[11px] text-white/40 mb-2">
            <span className="uppercase tracking-[0.28em]">Scroll para descubrir</span>
            <span
              ref={counterRef}
              className="font-semibold tabular-nums text-blue-300/90 text-xs"
            >
              00 / 10
            </span>
          </div>
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full origin-left bg-gradient-to-r from-blue-400 to-sky-300 shadow-[0_0_8px_rgba(96,165,250,0.5)]"
              style={{ transform: 'scaleX(0)', transition: 'transform 250ms ease-out' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .razon-card {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
            transition:
              opacity 550ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
              border-color 450ms ease-out,
              box-shadow 500ms ease-out;
          }
          .razon-card.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          .razon-card.is-spotlight {
            border-color: rgba(96, 165, 250, 0.55);
            box-shadow:
              0 0 0 1px rgba(96, 165, 250, 0.4),
              0 12px 36px rgba(96, 165, 250, 0.22),
              0 0 80px rgba(96, 165, 250, 0.18);
            transform: translateY(0) scale(1.025);
          }
        }
      `}</style>
    </section>
  )
}
