import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SmoothImage from './SmoothImage'

const CONTEXTS = [
  { word: 'Ciudades', img: '/images/sol-ciudades.jpg' },
  { word: 'Industria', img: '/images/sol-industria.jpg' },
  { word: 'Comercios', img: '/images/sol-comercio.jpg' },
  { word: 'Transporte', img: '/images/sol-transporte.jpg' },
  { word: 'Turismo', img: '/images/sol-turismo.jpg' },
  { word: 'Residencial', img: '/images/sol-residencial.jpg' },
]
const LONGEST = CONTEXTS.reduce((a, b) =>
  a.word.length >= b.word.length ? a : b
).word

export default function SolucionesDescripcion() {
  const ref = useReveal()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIdx((i) => (i + 1) % CONTEXTS.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full flex items-center justify-center px-6 py-16 md:py-20 bg-gradient-to-b from-[#030C40] to-[#172555] overflow-hidden">
      {/* Cross-fading background images (each context) — heavily dimmed */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {CONTEXTS.map((c, i) => (
          <div
            key={c.word}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <SmoothImage
              src={c.img}
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>
        ))}
        {/* Dark overlay so text is always legible */}
        <div className="absolute inset-0 bg-[#030C40]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030C40]/80 via-[#030C40]/60 to-[#172555]/90" />
      </div>

      <div ref={ref} className="relative max-w-3xl w-full flex flex-col items-center text-center gap-5">
        <div className="r-reveal flex items-center gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-300/85">
            Contexto
          </p>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
            6 entornos
          </span>
        </div>
        <h2 className="r-reveal text-white font-bold text-[24px] md:text-[34px] leading-[1.15]">
          La solución correcta para{' '}
          <span className="relative inline-block align-baseline text-blue-300">
            <span aria-hidden="true" className="invisible">
              {LONGEST}
            </span>
            {CONTEXTS.map((c, i) => (
              <span
                key={c.word}
                className={`absolute left-0 top-0 whitespace-nowrap transition-opacity duration-500 ${
                  i === idx ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {c.word}
              </span>
            ))}
          </span>
        </h2>
        <p className="r-reveal text-white/85 font-normal text-sm md:text-base leading-[170%] max-w-2xl">
          Cada entorno tiene sus propias necesidades. Nuestra plataforma de
          iluminación inteligente se adapta a las características de cada
          proyecto, garantizando visibilidad, eficiencia y control donde más se
          necesita.
        </p>
        {/* Dot indicators */}
        <div className="r-reveal flex items-center gap-2 mt-1">
          {CONTEXTS.map((c, i) => (
            <span
              key={c.word}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === idx
                  ? 'w-6 bg-blue-300 shadow-[0_0_8px_rgba(96,165,250,0.7)]'
                  : 'w-1.5 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
