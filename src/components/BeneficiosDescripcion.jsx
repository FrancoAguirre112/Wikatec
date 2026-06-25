import { useReveal } from '../hooks/useReveal'

const ActorIcon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
    className="w-5 h-5"
  >
    {children}
  </svg>
)

const ACTORES = [
  {
    label: 'Municipios',
    icon: (
      <ActorIcon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 21V9.5l9-6 9 6V21M9 21V14h6v7" />
      </ActorIcon>
    ),
  },
  {
    label: 'Ciudadanos',
    icon: (
      <ActorIcon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87a4 4 0 11-8 0 4 4 0 018 0zm6-8a4 4 0 11-8 0 4 4 0 018 0z" />
      </ActorIcon>
    ),
  },
  {
    label: 'Operadores',
    icon: (
      <ActorIcon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </ActorIcon>
    ),
  },
  {
    label: 'Gestores',
    icon: (
      <ActorIcon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </ActorIcon>
    ),
  },
]

export default function BeneficiosDescripcion() {
  const ref = useReveal()
  return (
    <section className="relative w-full flex items-center justify-center px-6 py-16 md:py-20 bg-gradient-to-b from-[#030C40] to-[#172555] overflow-hidden">
      {/* Soft blue glow accents */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-blue-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-sky-300/8 blur-3xl" />

      <div ref={ref} className="relative max-w-4xl w-full flex flex-col items-center text-center gap-5">
        <p className="r-reveal text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-300/85">
          Actores
        </p>
        <h2 className="r-reveal text-white font-bold text-[24px] md:text-[34px] leading-[1.15]">
          Impacto real para <span className="text-blue-300">todos los actores</span>
        </h2>
        <p className="r-reveal text-white/85 font-medium text-sm md:text-base leading-[170%] max-w-2xl">
          Nuestra plataforma de iluminación inteligente no solo ahorra energía,
          transforma la forma en que organizaciones de todo tipo gestionan su
          infraestructura, mejora la experiencia de quienes usan el espacio y
          simplifica el trabajo diario de los equipos operativos.
        </p>
        {/* Stakeholder mini-cards */}
        <div className="r-reveal grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2 w-full max-w-3xl">
          {ACTORES.map((a) => (
            <div
              key={a.label}
              className="group flex flex-col items-center gap-1.5 rounded-xl bg-white/[0.04] border border-white/12 px-3 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(96,165,250,0.18)]"
            >
              <span className="text-blue-300/85 group-hover:text-blue-300 transition-colors">
                {a.icon}
              </span>
              <span className="text-[12px] font-semibold text-white/85 tracking-wide">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
