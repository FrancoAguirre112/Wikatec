import { Link } from 'react-router-dom'

export default function Soluciones() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-[#030C40] to-[#172555] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-[75px]">
        <div className="w-full md:w-[55%] order-2 md:order-1">
          <img src="/images/soluciones-red.jpg" alt="Soluciones Kiwatec" className="w-full object-cover h-[250px] md:h-[416px] rounded-[23px] opacity-[0.79] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="w-full md:w-[40%] flex flex-col gap-5 md:gap-7 order-1 md:order-2">
          <h2 className="text-white font-['Raleway',sans-serif] font-bold text-[26px] md:text-[30px] leading-[35px]">Soluciones</h2>
          <p className="text-white font-['Raleway',sans-serif] font-normal text-sm md:text-base leading-[170.4%]">
            Combinamos luminarias LED, controladores IoT y software de gestión en un sistema integrado. Fácil de operar, adaptable a cualquier entorno urbano y diseñado para reducir costos desde el primer día.
          </p>
          <Link to="/soluciones" className="inline-flex items-center justify-center w-full md:w-[190px] h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold font-['Raleway',sans-serif] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  )
}
