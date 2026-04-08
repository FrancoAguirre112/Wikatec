import { Link } from 'react-router-dom'

export default function Hardware() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-[#030C40] to-[#172555] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-[75px]">
        <div className="w-full md:w-[40%] flex flex-col gap-5 md:gap-7">
          <h2 className="text-white font-['Raleway',sans-serif] font-bold text-[26px] md:text-[30px] leading-[35px]">Hardware</h2>
          <p className="text-white font-['Raleway',sans-serif] font-normal text-sm md:text-base leading-[170.4%]">
            Nuestros equipos —controladores IoT, gateways y luminarias LED— están diseñados para trabajar en conjunto con la plataforma Smart Lights. Robustos, confiables y preparados para las exigencias del entorno urbano, garantizan control remoto preciso y respuesta inmediata ante cualquier evento.
          </p>
          <Link to="/hardware" className="inline-flex items-center justify-center w-full md:w-[190px] h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold font-['Raleway',sans-serif] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300">
            Conocer más
          </Link>
        </div>
        <div className="w-full md:w-[55%]">
          <img src="/images/hardware.jpg" alt="Controladores IoT y hardware Smart Lights" className="w-full object-cover h-[250px] md:h-[416px] rounded-[23px] opacity-[0.79] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        </div>
      </div>
    </section>
  )
}
