import { useReveal } from '../hooks/useReveal'

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
)

const problemas = [
  {
    id: 1,
    titulo: 'Luz encendida de día',
    descripcion: 'Sodio, mercurio o LED sin control consumen energía innecesariamente durante horas de luz solar.',
  },
  {
    id: 2,
    titulo: 'Luminarias quemadas',
    descripcion: 'Sin monitoreo remoto, las fallas pasan desapercibidas hasta que un vecino llama a reportarlas.',
  },
  {
    id: 3,
    titulo: 'Tecnología obsoleta',
    descripcion: 'Sodio y mercurio: hasta 3 veces más consumo que LED equivalente, con mayor costo de mantenimiento.',
  },
]

export default function BeneficiosProblemas() {
  const ref = useReveal()
  return (
    <section
      ref={ref}
      id="problemas-alumbrado-tradicional"
      className="relative w-full py-16 md:py-24 px-6 bg-[linear-gradient(180deg,#030C40_0%,#172555_100%)] scroll-mt-[67px] overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-400/8 blur-3xl" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/80">
            Antes de Smart Lights
          </p>
          <h2 className="r-reveal text-white font-bold text-[26px] md:text-[38px] leading-[1.1]">
            Los 3 problemas principales del <span className="text-amber-300">alumbrado tradicional</span>
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problemas.map((p, i) => (
            <div
              key={p.id}
              className="r-reveal group relative flex flex-col gap-4 p-6 md:p-8 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/15 rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-amber-300/30 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]"
            >
              <span className="absolute top-4 right-4 text-white/20 font-bold text-[13px] tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/30 transition-all group-hover:bg-amber-400/25 group-hover:scale-110">
                  <WarningIcon />
                </span>
                <h3 className="text-white font-bold text-[18px] md:text-[19px] leading-tight">
                  {p.titulo}
                </h3>
              </div>
              <div className="h-px w-full bg-white/10" />
              <p className="text-white/75 font-normal text-sm md:text-[15px] leading-[170%]">
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
