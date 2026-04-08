import { Link } from 'react-router-dom'

export default function SmartLightsSection() {
  return (
    <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-[#030C40] to-[#172555] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-[75px]">
        <div className="w-full md:w-[55%] order-2 md:order-1">
          <img src="/images/smart-lights-iot.jpg" alt="Smart Lights IoT" className="w-full object-cover h-[250px] md:h-[416px] rounded-[23px] opacity-[0.79] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="w-full md:w-[45%] flex flex-col gap-5 md:gap-7 order-1 md:order-2">
          <h2 className="text-white font-['Raleway',sans-serif] font-bold text-[26px] md:text-[30px] leading-[35px]">Smart Lights</h2>
          <p className="text-white font-['Raleway',sans-serif] font-normal text-sm md:text-base leading-[170.4%]">
            Gestione toda su red lumínica desde una sola plataforma: programe encendidos y apagados graduales según horarios, adapte la intensidad a cada zona y responda a fallas en tiempo real. Con nuestra tecnología IoT integrada, municipios, empresas e instalaciones privadas reducen costos, automatizan la operación y mejoran la seguridad de sus espacios sin complicaciones.
          </p>
          <Link to="/smart-lights" className="inline-flex items-center justify-center w-full md:w-[190px] h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold font-['Raleway',sans-serif] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  )
}
