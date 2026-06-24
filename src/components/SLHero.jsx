import { useReveal } from '../hooks/useReveal'

export default function SLHero() {
  const ref = useReveal()
  return (
    <section className="relative w-full h-[320px] md:h-[441px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/smart-lights.webp')" }} />
      <div className="absolute inset-0 bg-[#030C40] opacity-[0.36]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-sky-300/15 blur-3xl" />
      <div ref={ref} className="relative z-10 text-center px-6">
        <h1 className="r-reveal text-white font-bold text-[36px] md:text-[64px] leading-tight md:leading-[75px]">
          Smart Lights
        </h1>
        <p className="r-reveal text-white/90 font-semibold text-[16px] md:text-[24px] mt-3">
          La plataforma que pone su red lumínica bajo control
        </p>
      </div>
    </section>
  )
}
