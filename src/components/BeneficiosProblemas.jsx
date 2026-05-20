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
  return (
    <section className="w-full py-12 md:py-20 px-6 bg-[linear-gradient(180deg,#030C40_0%,#172555_100%)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        <h2 className="text-white font-bold text-[24px] md:text-[34px] leading-tight text-center max-w-3xl">
          Los 3 problemas principales del alumbrado tradicional
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problemas.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center text-center gap-4 p-6 md:p-8 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/20 rounded-[23px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-white font-bold text-[18px] md:text-[20px] leading-tight pb-3 border-b border-white/40 w-full">
                {p.titulo}
              </h3>
              <p className="text-white font-normal text-sm md:text-[15px] leading-[170%]">
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
