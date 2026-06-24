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

export default function Soluciones() {
  const ref = useReveal()
  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-6 bg-gradient-to-b from-[#030C40] to-[#172555] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-[75px]">
        <div className="r-reveal w-full md:w-[55%] order-2 md:order-1 group overflow-hidden rounded-[23px]">
          <SmoothImage
            src="/images/soluciones-red.jpg"
            alt="Soluciones Kiwatec"
            className="w-full object-cover h-[250px] md:h-[416px] rounded-[23px] opacity-[0.79] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col gap-5 md:gap-7 order-1 md:order-2">
          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80">
            Sistema integrado
          </p>
          <h2 className="r-reveal text-white font-bold text-[26px] md:text-[34px] leading-[1.15]">
            Soluciones
          </h2>
          <p className="r-reveal text-white/85 font-normal text-sm md:text-base leading-[170%]">
            Combinamos luminarias LED, controladores IoT y software de gestión en un sistema integrado. Fácil de operar, adaptable a cualquier entorno urbano y diseñado para reducir costos desde el primer día.
          </p>
          <Link to="/soluciones" className={`r-reveal hidden md:inline-flex w-[200px] ${btnCls}`}>
            Conocer más
            <ArrowIcon />
          </Link>
        </div>
        <Link to="/soluciones" className={`md:hidden order-3 w-full r-reveal ${btnCls}`}>
          Conocer más
          <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
