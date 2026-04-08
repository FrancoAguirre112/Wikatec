export default function ContactoReunion() {
  return (
    <section className="relative w-full min-h-[456px] flex items-center justify-center overflow-hidden py-16 md:py-0">
      <div className="absolute inset-0 bg-[url('/images/cta-ciudad.jpg')] bg-cover bg-[center_40%]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1F2E61_0%,#07042A_100%)] opacity-[0.65]" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-white font-bold text-[26px] md:text-[39px] leading-[34px] md:leading-[51px] mb-4">
          Agende una reunión con nuestro equipo
        </h2>
        <p className="text-white font-medium text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] mb-8">
          Coordine una reunión técnica o comercial para evaluar su proyecto y
          conocer cómo nuestras soluciones de iluminación inteligente pueden
          optimizar su infraestructura.
        </p>
        <a
          href="#reunion"
          className="inline-flex items-center justify-center w-[220px] h-[40px] bg-[#030C40] text-white text-[16px] font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0_14px_4px_rgba(255,255,255,0.3)] no-underline transition-all duration-300"
        >
          Agendar una reunión
        </a>
      </div>
    </section>
  );
}
