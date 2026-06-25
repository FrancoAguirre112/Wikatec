import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, prefersReduced } from '../lib/gsap'
import SmoothImage from './SmoothImage'
import SwipeRow from './SwipeRow'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const items = [
  {
    id: 1,
    ancla: 'sol-ciudades',
    titulo: 'Ciudades y Municipios',
    descripcion: 'Los gobiernos locales reducen hasta un 70% el gasto en energía y gestionan toda la red de alumbrado desde una sola plataforma. Detección de fallas en tiempo real con notificación automática al equipo técnico.',
    bullets: ['Municipios', 'Comunas', 'Cooperativas eléctricas'],
    imagen: '/images/sol-app-ciudades.jpg',
  },
  {
    id: 2,
    ancla: 'sol-residencial',
    titulo: 'Conjuntos Residenciales',
    descripcion: 'Menos consumo, menos expensas. Automatiza el encendido y apagado de accesos, calles internas y espacios comunes. Una sola plataforma para toda la red del barrio, sin intervención manual.',
    bullets: ['Countries', 'Barrios cerrados', 'Urbanizaciones privadas'],
    imagen: '/images/sol-app-residencial.jpg',
  },
  {
    id: 3,
    ancla: 'sol-industria',
    titulo: 'Industria y Logística',
    descripcion: 'Cada punto de luz cuenta. Reduce el consumo en zonas productivas, depósitos y playones de carga, con visibilidad total sobre el estado de cada artefacto. Menos mantenimiento, más control.',
    bullets: ['Parques industriales', 'Fábricas', 'Minería y Petróleo', 'Playones logísticos'],
    imagen: '/images/sol-app-industria.jpg',
  },
  {
    id: 4,
    ancla: 'sol-comercio',
    titulo: 'Comercio y Servicios',
    descripcion: 'La luz correcta, en el momento exacto. Adapta la intensidad de cada zona según horario y actividad, optimizando el consumo sin afectar la experiencia del cliente. Reportes en tiempo real para el equipo de facilities.',
    bullets: ['Shoppings', 'Centros comerciales', 'Estacionamientos'],
    imagen: '/images/sol-app-comercio.jpg',
  },
  {
    id: 5,
    ancla: 'sol-transporte',
    titulo: 'Transporte y Movilidad',
    descripcion: 'Infraestructura que no puede fallar. Iluminación continua con monitoreo remoto 24hs y alertas automáticas ante cualquier incidencia. Menos mantenimiento, mayor seguridad operativa.',
    bullets: ['Autopistas', 'Aeropuertos', 'Puertos', 'Terminales de buses', 'Estaciones de tren'],
    imagen: '/images/sol-app-transporte.jpg',
  },
  {
    id: 6,
    ancla: 'sol-turismo',
    titulo: 'Turismo y Deporte',
    descripcion: 'Accesos seguros, estacionamientos bien iluminados y pavimentos bajo control. Iluminación exterior de estadios, clubes y hoteles que reduce el consumo en baja actividad y garantiza visibilidad plena cuando el predio está en uso.',
    bullets: ['Estadios y Clubes', 'Polideportivos', 'Hoteles', 'Complejos turísticos'],
    imagen: '/images/sol-app-turismo.jpg',
  },
]

const num = (i) => String(i + 1).padStart(2, '0')

export default function SolucionesGaleria() {
  const root = useRef(null)
  const contentRef = useRef(null)
  const stRef = useRef(null)
  const targetRef = useRef(null)
  const lockTimer = useRef(null)
  const [active, setActive] = useState(0)
  const current = items[active]

  // Translate + scale the active card to center of viewport
  // (3-col, 2-row grid: col 0/1/2 -> dx +100/0/-100%, row 0/1 -> dy +50/-50%)
  const getCardStyle = (i, on) => {
    if (!on) {
      return {
        transform: 'scale(0.94)',
        opacity: 0.18,
        filter: 'blur(3px) saturate(0.45)',
        zIndex: 1,
        boxShadow: 'none',
      }
    }
    const col = i % 3
    const row = Math.floor(i / 3)
    const tx = (1 - col) * 100 // col 0 -> +100, col 1 -> 0, col 2 -> -100
    const ty = row === 0 ? 50 : -50
    return {
      transform: `translate(${tx}%, ${ty}%) scale(3)`,
      opacity: 1,
      filter: 'none',
      zIndex: 30,
      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(147, 197, 253, 0.25)',
    }
  }

  // Desktop pin + zoom-step
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        if (prefersReduced) return
        const st = ScrollTrigger.create({
          trigger: root.current,
          start: 'top top+=67',
          end: '+=' + items.length * 500,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              items.length - 1,
              Math.floor(self.progress * items.length)
            )
            if (targetRef.current !== null) {
              if (idx === targetRef.current) targetRef.current = null
              else return
            }
            setActive(idx)
          },
        })
        stRef.current = st
        return () => {
          stRef.current = null
        }
      })
      return () => mm.revert()
    },
    { scope: root, dependencies: [] }
  )

  // Animate the floating content panel on active change
  useGSAP(
    () => {
      if (prefersReduced) return
      gsap.fromTo(
        '.sg-floating-item',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.05,
          overwrite: true,
        }
      )
    },
    { scope: contentRef, dependencies: [active] }
  )

  const goTo = (i) => {
    setActive(i)
    const st = stRef.current
    if (!st) return
    targetRef.current = i
    if (lockTimer.current) clearTimeout(lockTimer.current)
    lockTimer.current = setTimeout(() => (targetRef.current = null), 1000)
    const target = st.start + ((i + 0.5) / items.length) * (st.end - st.start)
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <section ref={root} className="relative w-full bg-[#030C40]">
      {/* Desktop: pin + zoom inmersivo (height = viewport - navbar 67px) */}
      <div className="hidden md:flex md:items-center md:h-[calc(100vh-67px)] md:overflow-hidden relative">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-400/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-sky-300/8 blur-3xl" />

        {/* Header bar */}
        <div className="absolute top-0 left-0 right-0 z-40 px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-blue-300/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300/80">
              6 aplicaciones
            </span>
          </div>
          <div className="flex items-baseline gap-2 font-display tabular-nums">
            <span className="text-blue-300 font-black text-2xl">{num(active)}</span>
            <span className="text-white/40 text-sm">/ {num(items.length - 1)}</span>
          </div>
        </div>

        {/* Image grid — active card flies to viewport center & scales to fullscreen */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 lg:gap-5 px-8 lg:px-12 pt-20 pb-32">
          {items.map((item, i) => {
            const on = i === active
            return (
              <div
                key={item.id}
                id={item.ancla}
                onClick={() => goTo(i)}
                className="relative rounded-2xl overflow-hidden cursor-pointer origin-center scroll-mt-[67px]"
                style={{
                  ...getCardStyle(i, on),
                  transition:
                    'transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease-out, filter 600ms ease-out, box-shadow 600ms ease-out',
                }}
              >
                <SmoothImage
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full h-full object-cover"
                />
                {/* Subtle bottom gradient when active for legibility (image stays main visual) */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 pointer-events-none"
                  style={{ opacity: on ? 1 : 0 }}
                />
              </div>
            )
          })}
        </div>

        {/* Floating content panel (separate from cards so text stays normal size) */}
        <div
          ref={contentRef}
          className="absolute z-40 bottom-14 left-1/2 -translate-x-1/2 w-full max-w-3xl px-8 pointer-events-none"
        >
          <div className="rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="sg-floating-item flex items-center gap-2 mb-2">
              <span className="text-blue-300 text-[11px] font-bold tabular-nums">
                {num(active)}
              </span>
              <span className="h-px w-8 bg-blue-300/40" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-blue-300/80">
                Aplicación
              </span>
            </div>
            <h3 className="sg-floating-item text-white font-bold text-[22px] lg:text-[26px] leading-tight mb-2">
              {current.titulo}
            </h3>
            <p className="sg-floating-item text-white/85 text-[13.5px] lg:text-[14.5px] leading-[170%] mb-3 line-clamp-2">
              {current.descripcion}
            </p>
            <div className="sg-floating-item flex flex-wrap gap-2">
              {current.bullets.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-[11px] lg:text-[12px] text-white/90 bg-white/10 rounded-full px-2.5 py-1 ring-1 ring-white/20"
                >
                  <CheckIcon />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Progress indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a aplicación ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active
                  ? 'w-8 bg-blue-300'
                  : 'w-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: carrusel horizontal con cards */}
      <div className="md:hidden py-12 px-0 overflow-hidden relative">
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-400/8 blur-3xl" />

        <div className="relative px-6 mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-blue-300/40" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/80">
            6 aplicaciones · deslizá
          </span>
          <span className="h-px flex-1 bg-blue-300/20" />
        </div>

        <SwipeRow>
          {items.map((item, i) => (
            <article
              key={item.id}
              id={item.ancla}
              className="w-[85vw] shrink-0 snap-center flex flex-col bg-gradient-to-b from-[#0D1640] to-[#0A1133] border border-white/15 rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] scroll-mt-[67px]"
            >
              <div className="relative overflow-hidden">
                <SmoothImage
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full object-cover h-[180px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030C40]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 ring-1 ring-white/15">
                  <span className="font-bold text-blue-300 text-[11px] tabular-nums">
                    {num(i)}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                    Aplicación
                  </span>
                </div>
              </div>

              <div className="px-5 pt-3 pb-5 flex flex-col gap-3">
                <h3 className="text-white font-bold text-[19px] leading-tight">
                  {item.titulo}
                </h3>
                <p className="text-white/75 text-[13.5px] leading-[170%]">
                  {item.descripcion}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {item.bullets.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 text-[11px] text-white/90 bg-white/10 rounded-full px-2 py-0.5 ring-1 ring-white/15"
                    >
                      <CheckIcon />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </SwipeRow>
      </div>
    </section>
  )
}
