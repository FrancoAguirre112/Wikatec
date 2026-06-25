import { useReveal } from '../hooks/useReveal'

const PRINCIPIOS = [
  { num: '01', titulo: 'Simplificar', desc: 'la operación diaria' },
  { num: '02', titulo: 'Reducir', desc: 'los costos operativos' },
  { num: '03', titulo: 'Democratizar', desc: 'los datos para decidir' },
]

export default function NosotrosDescripcion() {
  const ref = useReveal()
  return (
    <section className="relative w-full flex items-center justify-center px-6 py-16 md:py-24 bg-gradient-to-b from-[#030C40] to-[#172555] overflow-hidden">
      {/* Soft glow accents — calmer than other pages, this is "philosophy" */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-40 rounded-full bg-blue-400/6 blur-3xl" />

      <div ref={ref} className="relative max-w-4xl w-full flex flex-col items-center text-center gap-6">
        <p className="r-reveal inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-300/85">
          <span className="h-px w-8 bg-blue-300/40" />
          Principios
          <span className="h-px w-8 bg-blue-300/40" />
        </p>
        {/* Manifesto-style title: lighter weight, more tracking, decorative em-dash */}
        <h2 className="r-reveal text-white font-semibold text-[28px] md:text-[40px] leading-[1.1] tracking-tight">
          <span className="text-blue-300/70 font-light mr-2">—</span>
          Nuestro enfoque
        </h2>
        <p className="r-reveal text-white/80 font-normal text-base md:text-[17px] leading-[180%] max-w-2xl italic">
          Trabajamos para que administrar una red de iluminación sea una tarea
          fácil. Por eso desarrollamos tecnología que simplifica la operación,
          reduce los costos y pone datos concretos en manos de quienes toman
          decisiones.
        </p>
        {/* 3 principles as numbered tiles with vertical accent bar */}
        <div className="r-reveal grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 w-full max-w-3xl">
          {PRINCIPIOS.map((p) => (
            <div
              key={p.num}
              className="group relative flex items-start gap-3 pl-4 py-3 pr-4 bg-white/[0.03] rounded-r-lg border-l-2 border-blue-400/50 transition-all duration-300 hover:border-blue-300 hover:bg-white/[0.05]"
            >
              <div className="flex flex-col text-left">
                <span className="font-mono text-[10.5px] text-blue-300/70 tracking-wider mb-0.5">
                  {p.num}
                </span>
                <span className="text-white font-bold text-[15px] leading-tight">
                  {p.titulo}
                </span>
                <span className="text-white/55 text-[12px] mt-0.5 leading-snug">
                  {p.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
