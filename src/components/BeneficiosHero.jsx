import { useReveal } from '../hooks/useReveal'

export default function BeneficiosHero() {
  const ref = useReveal()
  return (
    <section className="relative w-full h-[320px] md:h-[441px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/beneficios-hero.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#0C132D] opacity-[0.29]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-sky-300/15 blur-3xl" />
      <div ref={ref} className="relative z-10 flex flex-col items-center text-center gap-4 px-6">
        <h1 className="r-reveal text-white font-bold text-[36px] md:text-[64px] leading-tight md:leading-[75px]">
          Beneficios
        </h1>
        <p className="r-reveal text-white/90 font-semibold text-base md:text-[24px]">
          Ventajas de una red lumínica eficiente y controlable
        </p>
      </div>
    </section>
  )
}
