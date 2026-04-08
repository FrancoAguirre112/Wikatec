import { Link } from 'react-router-dom'

export default function Beneficios() {
  return (
    <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-[#030C40] to-[#172555]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-[60%] order-2 md:order-1">
          <img src="/images/beneficios.jpg" alt="Ciudad inteligente con IoT" className="w-full rounded-[23px] shadow-2xl object-cover h-[250px] md:h-auto md:aspect-[16/10]" />
        </div>
        <div className="w-full md:w-[40%] flex flex-col gap-5 md:gap-6 order-1 md:order-2">
          <h2 className="text-white font-['Raleway',sans-serif] font-bold text-[26px] md:text-[30px] leading-[35px]">Beneficios</h2>
          <p className="text-white font-['Raleway',sans-serif] font-normal text-sm md:text-base leading-relaxed">
            Menos fallas, menos costos, más control. Nuestro sistema detecta anomalías antes de que se conviertan en problemas, reduce el gasto energético y permite a los operadores actuar desde cualquier lugar, en tiempo real.
          </p>
          <Link to="/beneficios" className="inline-flex items-center justify-center w-full md:w-[190px] h-[40px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold font-['Raleway',sans-serif] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] no-underline transition-colors duration-300">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  )
}
