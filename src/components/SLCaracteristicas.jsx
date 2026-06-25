import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, prefersReduced } from '../lib/gsap'
import SmoothImage from './SmoothImage'

const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
    className="w-6 h-6"
  >
    {children}
  </svg>
)

const caracteristicas = [
  {
    id: 1,
    titulo: 'Visualización en tiempo real',
    short: 'Mapa',
    descripcion: 'Visualice en tiempo real cada dispositivo, junto con su ubicación, estado operativo y parámetros clave de funcionamiento. A través del mapa interactivo, explore cada punto de iluminación de forma intuitiva y tome decisiones más precisas.',
    imagen: '/images/sl-visualizacion.jpg',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </Icon>
    ),
  },
  {
    id: 2,
    titulo: 'Control en vivo',
    short: 'Control',
    descripcion: 'Supervise el estado, nivel de intensidad y parámetros clave de cada dispositivo. Encienda, apague y ajuste luminarias de forma individual o por grupos, optimizando el consumo y adaptándose a necesidades reales.',
    imagen: '/images/sl-control-vivo.jpg',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </Icon>
    ),
  },
  {
    id: 3,
    titulo: 'Monitoreo',
    short: 'Monitor',
    descripcion: 'Manténgase informado con disponibilidad del sistema, consumo energético, alertas vigentes y tendencias de uso. Datos precisos para supervisar la red y mantenerla funcionando en óptimas condiciones.',
    imagen: '/images/sl-monitoreo.jpg',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </Icon>
    ),
  },
  {
    id: 4,
    titulo: 'Gestión de horarios',
    short: 'Horarios',
    descripcion: 'Automatice el encendido, apagado y dimerización de la red lumínica. Configure perfiles por grupo o zona, establezca rutinas de operación y programe horarios adaptados a cada instalación.',
    imagen: '/images/sl-horarios.jpg',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </Icon>
    ),
  },
  {
    id: 5,
    titulo: 'Gestión de usuarios',
    short: 'Usuarios',
    descripcion: 'Asigne roles y permisos según el nivel de cada área. Cree, edite y organice perfiles con distintos niveles de acceso, garantizando un uso seguro y controlado del sistema.',
    imagen: '/images/sl-usuarios.jpg',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </Icon>
    ),
  },
  {
    id: 6,
    titulo: 'Servicio Técnico',
    short: 'Soporte',
    descripcion: 'Atención directa ante fallas en su red de luminarias. El sistema identifica incidencias, genera alertas automáticas y permite registrar intervenciones técnicas, agilizando el seguimiento y resolución de cada caso.',
    imagen: '/images/sl-servicio-tecnico.jpg',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </Icon>
    ),
  },
  {
    id: 7,
    titulo: 'Cuidado del medio ambiente',
    short: 'Sustentable',
    descripcion: 'Disminuya el consumo energético y las emisiones de CO₂ mediante la programación de luminarias e intensidad. Reduzca el impacto ambiental y la contaminación lumínica, construyendo un entorno más sustentable.',
    imagen: '/images/sl-medio-ambiente.jpg',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </Icon>
    ),
  },
]

const num = (i) => String(i + 1).padStart(2, '0')

export default function SLCaracteristicas() {
  const root = useRef(null)
  const explorerRef = useRef(null)
  const panelRef = useRef(null)
  const stRef = useRef(null)
  const targetRef = useRef(null)
  const lockTimer = useRef(null)
  const [active, setActive] = useState(0)
  const current = caracteristicas[active]

  // Pin + scroll-step (desktop)
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px)', () => {
        const st = ScrollTrigger.create({
          trigger: explorerRef.current,
          start: 'center center',
          end: '+=' + caracteristicas.length * 220,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              caracteristicas.length - 1,
              Math.floor(self.progress * caracteristicas.length)
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

  // Animate panel items on tab change
  useGSAP(
    () => {
      if (prefersReduced) return
      gsap.fromTo(
        '.sl-panel-item',
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.06,
          overwrite: true,
        }
      )
    },
    { scope: panelRef, dependencies: [active] }
  )

  const goTo = (i) => {
    setActive(i)
    const st = stRef.current
    if (!st) return
    targetRef.current = i
    if (lockTimer.current) clearTimeout(lockTimer.current)
    lockTimer.current = setTimeout(() => (targetRef.current = null), 1000)
    const target = st.start + ((i + 0.5) / caracteristicas.length) * (st.end - st.start)
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <section ref={root} className="w-full bg-[#030C40] text-white overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-sky-300/8 blur-3xl" />

      {/* Desktop: pin + scroll-step explorer */}
      <div
        ref={explorerRef}
        className="hidden lg:flex lg:items-center lg:h-screen lg:max-h-[860px] relative"
      >
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 items-stretch lg:h-[42rem]">
          {/* Left: tabs list */}
          <div className="col-span-5 flex flex-col justify-center gap-2">
            {caracteristicas.map((f, i) => {
              const on = i === active
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`group flex items-center gap-4 rounded-2xl border px-5 py-3.5 text-left transition-all duration-300 ${
                    on
                      ? 'border-white/30 bg-gradient-to-r from-[#172555] to-[#0D1640] shadow-lg shadow-black/30'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                  }`}
                >
                  <span
                    className={`font-bold text-base w-8 tabular-nums transition-colors ${
                      on ? 'text-white/90' : 'text-white/30 group-hover:text-white/50'
                    }`}
                  >
                    {num(i)}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      on
                        ? 'bg-white/15 text-white'
                        : 'bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white/80'
                    }`}
                  >
                    {f.icon}
                  </span>
                  <span
                    className={`flex-1 font-semibold transition-colors ${
                      on ? 'text-white' : 'text-white/70 group-hover:text-white/90'
                    }`}
                  >
                    {f.titulo}
                  </span>
                  <svg
                    className={`h-4 w-4 transition-all ${
                      on
                        ? 'text-white opacity-100 translate-x-0'
                        : 'text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              )
            })}
          </div>

          {/* Right: panel */}
          <div
            ref={panelRef}
            className="col-span-7 relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#0D1640] to-[#172555] overflow-hidden shadow-2xl shadow-black/30"
          >
            <span className="pointer-events-none absolute right-8 top-2 font-black text-[7.5rem] leading-none text-white/[0.04] select-none">
              {num(active)}
            </span>

            <div className="sl-panel-item flex items-center gap-4 p-7 pb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                {current.icon}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {num(active)} / {num(caracteristicas.length - 1)}
                </p>
                <h3 className="text-[22px] font-bold text-white leading-tight">{current.titulo}</h3>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-5 px-7 pb-5 min-h-0">
              <div className="sl-panel-item flex-1 min-h-0 overflow-hidden rounded-2xl">
                <SmoothImage
                  src={current.imagen}
                  alt={current.titulo}
                  className="w-full h-full object-cover rounded-2xl shadow-xl shadow-black/30 opacity-95"
                />
              </div>
              <p className="sl-panel-item text-white/80 text-[14.5px] leading-relaxed min-h-[6.5rem]">
                {current.descripcion}
              </p>
            </div>

            {/* Progress bar */}
            <div className="px-7 py-4 flex items-center gap-3 border-t border-white/5">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-sky-300 transition-all duration-500"
                  style={{ width: `${((active + 1) / caracteristicas.length) * 100}%` }}
                />
              </div>
              <span className="text-xs font-semibold tabular-nums text-white/50">
                {num(active + 1)} / {num(caracteristicas.length)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: vertical stack with alternating bg */}
      <div className="lg:hidden flex flex-col">
        {caracteristicas.map((f, i) => (
          <div
            key={f.id}
            className={`w-full py-12 px-6 ${i % 2 === 0 ? 'bg-[#030C40]' : 'bg-[#141E4B]'}`}
          >
            <div className="max-w-md mx-auto flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-bold text-white/30 tabular-nums">{num(i)}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                  {f.icon}
                </span>
                <h3 className="text-lg font-bold text-white flex-1">{f.titulo}</h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">{f.descripcion}</p>
              <SmoothImage
                src={f.imagen}
                alt={f.titulo}
                className="w-full h-auto rounded-2xl shadow-xl shadow-black/30 opacity-90 mt-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
