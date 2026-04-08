export default function SLHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[441px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-smart-lights.jpg')" }} />
      <div className="absolute inset-0 bg-[#030C40] opacity-[0.36]" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white font-bold text-[36px] md:text-[64px] leading-tight md:leading-[75px]">
          Smart Lights
        </h1>
        <p className="text-white font-semibold text-[16px] md:text-[24px] mt-3">
          La plataforma que pone su red lumínica bajo control
        </p>
      </div>
    </section>
  )
}
