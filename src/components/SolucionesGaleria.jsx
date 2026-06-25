import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, prefersReduced } from '../lib/gsap'
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
  // active = -1 means "mosaic view" (initial). 0..items.length-1 = focused card
  const [active, setActive] = useState(-1)
  const current = active >= 0 ? items[active] : null
  const totalStages = items.length + 1 // mosaic + N items

  // Mobile pin+scroll-jacked horizontal carousel
  const mobileRoot = useRef(null)
  const trackRef = useRef(null)
  const [mobileIdx, setMobileIdx] = useState(0)

  // Translate + scale to center of viewport
  // (3-col, 2-row grid: col 0/1/2 -> dx +100/0/-100%, row 0/1 -> dy +50/-50%)
  const getCardStyle = (i, activeIdx) => {
    // Mosaic view: all cards in normal grid position, no dimming
    if (activeIdx === -1) {
      return {
        transform: 'scale(1)',
        opacity: 1,
        filter: 'none',
        zIndex: 1,
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
      }
    }
    // This card is the active focused one: fly to center + fullscreen
    if (i === activeIdx) {
      const col = i % 3
      const row = Math.floor(i / 3)
      const tx = (1 - col) * 100
      const ty = row === 0 ? 50 : -50
      return {
        transform: `translate(${tx}%, ${ty}%) scale(3.3)`,
        opacity: 1,
        filter: 'none',
        zIndex: 30,
        boxShadow:
          '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(147, 197, 253, 0.25)',
      }
    }
    // Another card is focused: this one fades
    return {
      transform: 'scale(0.94)',
      opacity: 0.18,
      filter: 'blur(3px) saturate(0.45)',
      zIndex: 1,
      boxShadow: 'none',
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
          end: '+=' + totalStages * 480,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // totalStages = mosaic + items: stage 0 = mosaic, stage 1..N = item N-1
            const stageIdx = Math.min(
              totalStages - 1,
              Math.floor(self.progress * totalStages)
            )
            const next = stageIdx - 1 // -1 = mosaic, 0..items-1 = focused card
            if (targetRef.current !== null) {
              if (next === targetRef.current) targetRef.current = null
              else return
            }
            setActive(next)
          },
        })
        stRef.current = st
        return () => {
          stRef.current = null
        }
      })

      // Mobile pin + horizontal scroll-jacked carousel
      mm.add('(max-width: 767px)', () => {
        if (prefersReduced) return
        const track = trackRef.current
        const sec = mobileRoot.current
        if (!track || !sec) return
        const n = items.length

        const st = ScrollTrigger.create({
          trigger: sec,
          start: 'top top+=67',
          end: () => `+=${(n - 1) * window.innerHeight * 0.65}`,
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const distance = (n - 1) * window.innerWidth
            gsap.set(track, { x: -distance * self.progress })
            const idx = Math.round(self.progress * (n - 1))
            setMobileIdx(idx)
          },
        })
        return () => st.kill()
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

  // Jump to a specific stage. i = -1 -> mosaic, 0..items.length-1 -> focused card
  const goTo = (i) => {
    setActive(i)
    const st = stRef.current
    if (!st) return
    targetRef.current = i
    if (lockTimer.current) clearTimeout(lockTimer.current)
    lockTimer.current = setTimeout(() => (targetRef.current = null), 1000)
    const stageIdx = i + 1 // map -1->0 (mosaic), 0->1 (item 0), etc.
    const target =
      st.start + ((stageIdx + 0.5) / totalStages) * (st.end - st.start)
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <section ref={root} className="relative w-full bg-[#030C40]">
      {/* Desktop: pin + zoom inmersivo (height = viewport - navbar 67px) */}
      <div className="hidden md:flex md:items-center md:h-[calc(100vh-67px)] md:overflow-hidden relative">
        {/* Decorative orbs (behind frame, soft ambient) */}
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-400/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-sky-300/8 blur-3xl" />

        {/* Padded outer frame — creates consistent border around the experience */}
        <div className="absolute inset-0 p-6 lg:p-8">
          {/* Clipping container — keeps the scaled card inside the frame */}
          <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#02081d] ring-1 ring-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            {/* Image grid */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 lg:gap-5 p-5 lg:p-6">
              {items.map((item, i) => {
                const on = i === active
                const mosaic = active === -1
                return (
                  <div
                    key={item.id}
                    id={item.ancla}
                    onClick={() => goTo(i)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer origin-center scroll-mt-[67px] ${mosaic ? 'group hover:ring-2 hover:ring-blue-300/60' : ''}`}
                    style={{
                      ...getCardStyle(i, active),
                      transition:
                        'transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease-out, filter 600ms ease-out, box-shadow 600ms ease-out',
                    }}
                  >
                    <SmoothImage
                      src={item.imagen}
                      alt={item.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Mosaic mode: show title label on each card */}
                    {mosaic && (
                      <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-300 text-[10px] font-bold tabular-nums">
                            {num(i)}
                          </span>
                          <span className="h-px w-5 bg-blue-300/40" />
                        </div>
                        <h3 className="text-white font-bold text-[14px] lg:text-[16px] leading-tight mt-1">
                          {item.titulo}
                        </h3>
                      </div>
                    )}
                    {/* Focused mode: subtle gradient for content panel legibility */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 pointer-events-none"
                      style={{ opacity: on ? 1 : 0 }}
                    />
                  </div>
                )
              })}
            </div>

            {/* Header bar — backdrop-blur pills, equal spacing from frame edges */}
            <div className="absolute top-5 left-5 right-5 z-40 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2.5 bg-black/70 backdrop-blur-md rounded-full pl-3.5 pr-4 py-2 ring-1 ring-white/20 pointer-events-auto">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.6)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                  6 aplicaciones
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 bg-black/70 backdrop-blur-md rounded-full px-4 py-1.5 ring-1 ring-white/20 pointer-events-auto">
                <span className="text-white font-black text-lg tabular-nums leading-none">
                  {active === -1 ? '00' : num(active + 1)}
                </span>
                <span className="text-white/50 text-[12px] font-semibold tabular-nums leading-none">
                  / {num(items.length)}
                </span>
              </div>
            </div>

            {/* Floating content panel — equal spacing from frame edges */}
            <div
              ref={contentRef}
              className="absolute z-40 bottom-12 left-5 right-5 flex justify-center pointer-events-none"
            >
              {active === -1 ? (
                /* Mosaic mode: invitation hint */
                <div className="sg-floating-item rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-400/20 text-blue-300 ring-1 ring-blue-300/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-bold text-[15px] lg:text-[16px] leading-tight">
                      Explorá las 6 aplicaciones
                    </p>
                    <p className="text-white/65 text-[12px] lg:text-[13px] mt-0.5">
                      Scrolleá para recorrerlas o tocá una imagen
                    </p>
                  </div>
                </div>
              ) : (
                /* Focused mode: full content for active item */
                <div className="w-full max-w-3xl rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
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
              )}
            </div>

            {/* Progress indicator dots — first dot = mosaic, rest = items */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(-1)}
                aria-label="Ver mosaico de aplicaciones"
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === -1
                    ? 'w-8 bg-blue-300'
                    : 'w-1.5 bg-white/25 hover:bg-white/50'
                }`}
              />
              <span className="h-3 w-px bg-white/15 mx-1" />
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
        </div>
      </div>

      {/* Mobile: pin + scroll-jacked horizontal carousel
          Vertical scroll advances horizontally through all 6 cards */}
      <div
        ref={mobileRoot}
        className="md:hidden relative w-full h-[calc(100vh-67px)] overflow-hidden bg-[#030C40]"
      >
        {/* Header overlay */}
        <div className="absolute top-5 left-6 right-6 z-20 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-300/40" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300/80">
            6 aplicaciones · scroll
          </span>
          <span className="h-px flex-1 bg-blue-300/20" />
          <span className="text-[11px] font-bold tabular-nums text-blue-300">
            {num(mobileIdx)}<span className="text-white/40 ml-1">/ 06</span>
          </span>
        </div>

        {/* Track: 6 cards laid out horizontally, GSAP translates this */}
        <div
          ref={trackRef}
          className="flex h-full items-center will-change-transform"
          style={{ width: `${items.length * 100}vw` }}
        >
          {items.map((item, i) => (
            <article
              key={item.id}
              id={item.ancla}
              className="w-screen shrink-0 h-full flex items-center justify-center px-6 pt-14 pb-12"
            >
              <div className="w-full max-w-md flex flex-col bg-gradient-to-b from-[#0D1640] to-[#0A1133] border border-white/15 rounded-[20px] overflow-hidden">
                <div className="relative overflow-hidden">
                  <SmoothImage
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full object-cover h-[180px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030C40]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-sm px-2.5 py-1 ring-1 ring-white/15">
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
              </div>
            </article>
          ))}
        </div>

        {/* Progress dots indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === mobileIdx
                  ? 'w-6 bg-blue-300 shadow-[0_0_8px_rgba(96,165,250,0.6)]'
                  : 'w-1.5 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
