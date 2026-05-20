import { Link } from 'react-router-dom'

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-12 md:py-20 px-6 bg-gradient-to-b from-[#030C40] to-[#172555] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] scroll-mt-[67px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-[75px]">
        <div className="w-full md:w-[40%] flex flex-col gap-5 md:gap-7 order-1">
          <h2 className="text-white font-['Montserrat',sans-serif] font-bold text-[26px] md:text-[30px] leading-[35px]">¿Quiénes somos?</h2>
          <p className="text-white font-['Montserrat',sans-serif] font-normal text-sm md:text-base leading-[170.4%]">
            En Kiwatec desarrollamos una plataforma para el control de iluminación inteligente, abierta y escalable, que se adapta a cada entorno urbano. Combinamos software avanzado y hardware de alto rendimiento para optimizar recursos y gestionar infraestructura lumínica de forma eficiente.
          </p>
          <Link to="/nosotros" className="hidden md:inline-flex items-center justify-center w-[190px] h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold font-['Montserrat',sans-serif] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300">
            Conocer más
          </Link>
        </div>
        <div className="w-full md:w-[55%] order-2">
          <img src="/images/quienes-somos.jpg" alt="Equipo Kiwatec" className="w-full object-cover h-[250px] md:h-[416px] rounded-[23px] opacity-[0.79] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        </div>
        <Link to="/nosotros" className="md:hidden order-3 inline-flex items-center justify-center w-full h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold font-['Montserrat',sans-serif] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300">
          Conocer más
        </Link>
      </div>
    </section>
  )
}
