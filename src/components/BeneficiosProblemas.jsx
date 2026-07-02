import { useReveal } from '../hooks/useReveal'
import SmoothImage from './SmoothImage'

const problemas = [
  {
    id: 1,
    titulo: 'Luz encendida de día',
    descripcion: 'Sodio, mercurio o LED sin control consumen energía innecesariamente durante horas de luz solar.',
    imagen: '/images/problema-luz-dia.png',
    alt: 'Farola de sodio encendida durante el día en una fachada de edificio antiguo',
  },
  {
    id: 2,
    titulo: 'Luminarias quemadas',
    descripcion: 'Sin monitoreo remoto, las fallas pasan desapercibidas hasta que un vecino llama a reportarlas.',
    imagen: '/images/problema-luminaria-quemada.png',
    alt: 'Luminaria de mercurio apagada de noche entre árboles, sin monitoreo',
  },
  {
    id: 3,
    titulo: 'Tecnología obsoleta',
    descripcion: 'Sodio y mercurio: hasta 3 veces más consumo que LED equivalente, con mayor costo de mantenimiento.',
    imagen: '/images/problema-tecnologia-obsoleta.png',
    alt: 'Luminaria de vapor de mercurio antigua en una calle residencial',
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
            <article
              key={p.id}
              className="r-reveal group relative flex flex-col gap-4 p-5 md:p-6 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/15 rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-amber-300/30 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]"
            >
              <span className="absolute top-4 right-4 text-white/25 font-bold text-[13px] tabular-nums z-10">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="text-white font-bold text-[18px] md:text-[20px] leading-tight text-center px-4 pt-2">
                {p.titulo}
              </h3>

              <div className="h-px w-full bg-white/15" />

              <p className="text-white/75 font-normal text-sm md:text-[14.5px] leading-[165%] text-center px-2 min-h-[5rem]">
                {p.descripcion}
              </p>

              <div className="relative mt-1 overflow-hidden rounded-[14px] ring-1 ring-white/12 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] bg-black/40">
                <SmoothImage
                  src={p.imagen}
                  alt={p.alt}
                  className="w-full h-[280px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Subtle inner top-vignette for depth */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/25 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
