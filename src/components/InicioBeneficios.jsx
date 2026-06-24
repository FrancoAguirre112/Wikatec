import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import SmoothImage from './SmoothImage'

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const btnCls =
  'group inline-flex items-center justify-center gap-2 h-[42px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 no-underline transition-all duration-300'

export default function Beneficios() {
  const ref = useReveal()
  return (
    <section
      ref={ref}
      className="py-12 md:py-16 px-6 bg-gradient-to-b from-[#030C40] to-[#172555]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="r-reveal w-full md:w-[60%] order-2 md:order-1 group overflow-hidden rounded-[23px]">
          <SmoothImage
            src="/images/beneficios.jpg"
            alt="Ciudad inteligente con IoT"
            className="w-full rounded-[23px] shadow-2xl object-cover h-[250px] md:h-auto md:aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col gap-5 md:gap-6 order-1 md:order-2">
          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80">
            Impacto medible
          </p>
          <h2 className="r-reveal text-white font-bold text-[26px] md:text-[34px] leading-[1.15]">
            Beneficios
          </h2>
          <p className="r-reveal text-white/85 font-normal text-sm md:text-base leading-relaxed">
            Menos fallas, menos costos, más control. Nuestro sistema detecta anomalías antes de que se conviertan en problemas, reduce el gasto energético y permite a los operadores actuar desde cualquier lugar, en tiempo real.
          </p>
          <Link to="/beneficios" className={`r-reveal hidden md:inline-flex w-[200px] ${btnCls}`}>
            Conocer más
            <ArrowIcon />
          </Link>
        </div>
        <Link to="/beneficios" className={`md:hidden order-3 w-full r-reveal ${btnCls}`}>
          Conocer más
          <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
