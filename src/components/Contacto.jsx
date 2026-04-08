import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[400px] md:h-[456px] flex items-center justify-center overflow-hidden border border-white/20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 bg-[url('/images/cta-ciudad.jpg')] bg-cover bg-[center_40%]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1F2E61_0%,#07042A_100%)] opacity-[0.45]" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-12 md:py-0">
        <h2 className="text-white font-bold text-[24px] md:text-[39px] leading-tight md:leading-[51px] mb-4 md:mb-6">
          Hagamos la transformación juntos con Iluminación inteligente y eficiente
        </h2>
        <p className="text-white font-medium text-[16px] md:text-[23px] leading-[1.4] md:leading-[31px] mb-6 md:mb-8">
          Contáctenos para recibir asesoramiento o más información sobre nuestras soluciones
        </p>
        <Link to="/contacto" className="inline-flex items-center justify-center w-full md:w-[190px] h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-[16px] font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300">
          Contacto
        </Link>
      </div>
    </section>
  )
}
