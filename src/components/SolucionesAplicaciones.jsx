import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import SmoothImage from './SmoothImage'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const aplicaciones = [
  {
    id: 1,
    ancla: 'sol-ciudades',
    titulo: 'Ciudades y Municipios',
    descripcion: 'Con Smart Lights, los gobiernos locales reducen hasta un 70% el gasto en energía y gestionan toda la red de alumbrado desde una sola plataforma. El sistema detecta fallas en tiempo real y notifica automáticamente al equipo técnico, eliminando reclamaciones y reduciendo el costo del mantenimiento preventivo.',
    bullets: ['Municipios', 'Comunas', 'Cooperativas eléctricas'],
    imagen: '/images/sol-app-ciudades.jpg',
    imagenIzquierda: true,
  },
  {
    id: 2,
    ancla: 'sol-residencial',
    titulo: 'Conjuntos Residenciales',
    descripcion: 'Menos consumo, menos expensas. Smart Lights automatiza el encendido y apagado de accesos, calles internas y espacios comunes, y alerta sobre cualquier falla de sus alumbrados o reportes. Una sola plataforma para gestionar toda la red del barrio, sin intervención manual.',
    bullets: ['Countries', 'Barrios cerrados', 'Urbanizaciones privadas'],
    imagen: '/images/sol-app-residencial.jpg',
    imagenIzquierda: false,
  },
  {
    id: 3,
    ancla: 'sol-industria',
    titulo: 'Industria y Logística',
    descripcion: 'En entornos donde la seguridad convive con el ahorro: cada punto de luz cuenta. Smart Lights reduce el consumo eléctrico en zonas productivas, depósitos y playones de carga, y brinda visibilidad total sobre el estado de cada artefacto. Menos tiempos operativos de mantenimiento, más control sobre los costos operativos.',
    bullets: ['Parques industriales', 'Fábricas', 'Minería y Petróleo', 'Playones logísticos'],
    imagen: '/images/sol-app-industria.jpg',
    imagenIzquierda: true,
  },
  {
    id: 4,
    ancla: 'sol-comercio',
    titulo: 'Comercio y Servicios',
    descripcion: 'La luz correcta, en el momento exacto. Smart Lights adapta la intensidad de cada zona según el horario y el nivel de actividad, optimizando el consumo sin afectar la experiencia del cliente. Generación automática de tablas y reportes en tiempo real para que el equipo de facilities actúe antes de que nadie lo note.',
    bullets: ['Shoppings', 'Centros comerciales', 'Estacionamientos'],
    imagen: '/images/sol-app-comercio.jpg',
    imagenIzquierda: false,
  },
  {
    id: 5,
    ancla: 'sol-transporte',
    titulo: 'Transporte y Movilidad',
    descripcion: 'Infraestructura que no puede fallar. Smart Lights garantiza iluminación continua con monitoreo remoto 24hs y alertas automáticas ante cualquier incidencia. Menos costos de mantenimiento, mayor seguridad operativa en los entornos de mayor exigencia.',
    bullets: ['Autopistas', 'Aeropuertos', 'Puertos', 'Terminales de buses', 'Estaciones de tren'],
    imagen: '/images/sol-app-transporte.jpg',
    imagenIzquierda: true,
  },
  {
    id: 6,
    ancla: 'sol-turismo',
    titulo: 'Turismo y Deporte',
    descripcion: 'Accesos seguros, estacionamientos bien iluminados y pavimentos bajo control. Smart Lights gestiona la iluminación exterior de estadios, clubes y hoteles, reduciendo el consumo en horarios de baja actividad y garantizando visibilidad plena cuando el predio está en uso.',
    bullets: ['Estadios y Clubes', 'Polideportivos', 'Hoteles', 'Complejos turísticos'],
    imagen: '/images/sol-app-turismo.jpg',
    imagenIzquierda: false,
  },
]

const num = (i) => String(i + 1).padStart(2, '0')

function AplicacionItem({ item, index }) {
  const ref = useReveal()
  const isLeft = item.imagenIzquierda

  return (
    <div
      ref={ref}
      id={item.ancla}
      className="relative w-full py-16 md:py-24 border-t border-white/10 scroll-mt-[67px] overflow-hidden"
    >
      {/* Subtle blur orb */}
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isLeft ? '-right-40' : '-left-40'} h-[28rem] w-[28rem] rounded-full bg-blue-400/[0.06] blur-3xl`}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-5">
          <div className="r-reveal flex items-center gap-3">
            <span className="font-bold text-blue-300/80 text-[13px] tabular-nums tracking-wider">
              {num(index)}
            </span>
            <span className="h-px w-10 bg-blue-300/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/80">
              Aplicación
            </span>
          </div>
          <h3 className="r-reveal text-white font-bold text-[24px] leading-tight">
            {item.titulo}
          </h3>
          <div className="r-reveal relative group overflow-hidden rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
            <SmoothImage
              src={item.imagen}
              alt={item.titulo}
              className="w-full object-cover h-[240px] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <p className="r-reveal text-white/85 text-sm leading-[170%]">{item.descripcion}</p>
          <ul className="r-reveal flex flex-col gap-2.5">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-white/90 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 text-blue-300 ring-1 ring-blue-300/30">
                  <CheckIcon />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop: side-by-side with alternating image position */}
        <div
          className={`hidden md:flex items-center gap-12 lg:gap-20 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div className="r-reveal flex-1 relative group">
            <span className="pointer-events-none absolute -top-12 -left-4 font-black text-[10rem] leading-none text-white/[0.05] select-none">
              {num(index)}
            </span>
            <div className="relative overflow-hidden rounded-[24px] shadow-[0px_8px_32px_rgba(0,0,0,0.35)]">
              <SmoothImage
                src={item.imagen}
                alt={item.titulo}
                className="w-full object-cover h-[440px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030C40]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="w-[420px] shrink-0 flex flex-col gap-6">
            <div className="r-reveal flex items-center gap-3">
              <span className="font-bold text-blue-300/80 text-sm tabular-nums tracking-wider">
                {num(index)}
              </span>
              <span className="h-px w-12 bg-blue-300/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/80">
                Aplicación
              </span>
            </div>
            <h3 className="r-reveal text-white font-bold text-[34px] leading-[1.1]">
              {item.titulo}
            </h3>
            <p className="r-reveal text-white/80 text-[15px] leading-[170%]">
              {item.descripcion}
            </p>
            <ul className="r-reveal flex flex-col gap-3 mt-1">
              {item.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-white/90 text-[15px] group"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-400/15 text-blue-300 ring-1 ring-blue-300/30 transition-all group-hover:bg-blue-400/25 group-hover:scale-110">
                    <CheckIcon />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolucionesAplicaciones() {
  return (
    <section className="w-full bg-[#172555]">
      {aplicaciones.map((item, index) => (
        <AplicacionItem key={item.id} item={item} index={index} />
      ))}
    </section>
  )
}
