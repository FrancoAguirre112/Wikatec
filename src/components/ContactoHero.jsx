export default function ContactoHero() {
  return (
    <section className="relative w-full h-[413px] md:h-[454px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-full bg-[url('/images/contacto-hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A2B6B_0%,#030C40_100%)] opacity-[0.5]" />
      <div className="relative z-10 flex flex-col items-center text-center gap-[23px] px-6">
        <h1 className="text-white font-bold text-[40px] md:text-[64px] leading-tight md:leading-[75px]">Contacto</h1>
        <p className="text-white font-semibold text-[16px] md:text-[24px]">Estamos para ayudarte a dar el primer paso</p>
      </div>
    </section>
  )
}
