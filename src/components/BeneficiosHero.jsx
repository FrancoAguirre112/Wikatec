export default function BeneficiosHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[441px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/beneficios-hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#0C132D] opacity-[0.29]" />
      <div className="relative z-10 flex flex-col items-center text-center gap-4 px-6">
        <h1 className="text-white font-bold text-[36px] md:text-[64px] leading-tight md:leading-[75px]">Beneficios</h1>
        <p className="text-white font-semibold text-base md:text-[24px]">
          Ventajas de una red lumínica eficiente y controlable
        </p>
      </div>
    </section>
  )
}
