import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useReveal } from '../hooks/useReveal'
import SmoothImage from './SmoothImage'
import 'swiper/css'

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

const previews = [
  {
    src: '/images/sol-ciudades.jpg',
    label: 'Ciudades',
    sublabel: 'Municipios & comunas',
  },
  {
    src: '/images/sol-industria.jpg',
    label: 'Industria',
    sublabel: 'Parques & playones',
  },
  {
    src: '/images/sol-comercio.jpg',
    label: 'Comercios',
    sublabel: 'Shoppings & retail',
  },
]

// Duplicate slides so Swiper loop works reliably with few base slides.
// Computed at module scope so the array reference is stable across renders.
const carouselSlides = [...previews, ...previews]

function PreviewCard({ p, i }) {
  return (
    <Link
      to="/soluciones"
      className="group relative block overflow-hidden rounded-2xl hover:-translate-y-1 transition-all duration-500"
    >
      <SmoothImage
        src={p.src}
        alt={p.label}
        className="w-full h-[220px] lg:h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-blue-300 text-[10px] font-bold tabular-nums">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="h-px w-5 bg-blue-300/40" />
        </div>
        <p className="text-white font-bold text-[17px] leading-tight">
          {p.label}
        </p>
        <p className="text-white/65 text-[12px] mt-0.5">{p.sublabel}</p>
      </div>
    </Link>
  )
}

export default function Soluciones() {
  const root = useRef(null)
  const revealRef = useReveal()

  const CTA = (
    <Link
      to="/soluciones"
      className="group inline-flex items-center justify-center gap-2 w-[210px] h-[44px] bg-[#030C40] hover:bg-[#01051c] text-white text-base font-bold border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 no-underline transition-all duration-300"
    >
      Conocer más
      <ArrowIcon />
    </Link>
  )

  return (
    <section
      ref={root}
      className="relative w-full bg-gradient-to-b from-[#172555] to-[#030C40] overflow-hidden py-20 lg:py-28"
    >
      {/* "03" watermark in top-right corner (consistent with other sections) */}
      <span
        aria-hidden="true"
        className="sol-number pointer-events-none absolute -top-8 right-4 lg:right-12 font-black leading-none text-white/[0.04] select-none z-0 text-[14rem] sm:text-[18rem] lg:text-[22rem] tabular-nums"
      >
        03
      </span>

      <div ref={revealRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80 mb-5">
          03 · Sistema integrado
        </p>
        <h2 className="r-reveal text-white font-bold text-[40px] md:text-[56px] lg:text-[68px] leading-[1] mb-7">
          Soluciones
        </h2>
        <p className="r-reveal text-white/85 text-base lg:text-[18px] leading-[170%] max-w-2xl mx-auto mb-8 lg:mb-10">
          Combinamos luminarias LED, controladores IoT y software de gestión en
          un sistema integrado. Fácil de operar, adaptable a cualquier entorno
          urbano y diseñado para reducir costos desde el primer día.
        </p>
        {/* CTA visible only on desktop (mobile shows it AFTER the carousel) */}
        <div className="r-reveal hidden lg:flex justify-center">{CTA}</div>
      </div>

      {/* Desktop: 3-card grid */}
      <div className="hidden lg:grid relative z-10 max-w-6xl mx-auto px-6 mt-16 grid-cols-3 gap-5">
        {previews.map((p, i) => (
          <div key={p.label} className="r-reveal">
            <PreviewCard p={p} i={i} />
          </div>
        ))}
      </div>

      {/* Mobile: infinite-loop carousel + CTA below.
          Simple slidesPerView 1 + loop + autoplay = the most reliable
          Swiper config for infinite cycling with few base slides. */}
      <div className="lg:hidden relative z-10 mt-10 px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={700}
          onSwiper={(sw) => {
            if (sw?.autoplay && !sw.autoplay.running) sw.autoplay.start()
          }}
          className="!pb-2"
        >
          {previews.map((p, i) => (
            <SwiperSlide key={p.label} className="!h-auto">
              <PreviewCard p={p} i={i} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="r-reveal flex justify-center mt-8">{CTA}</div>
      </div>
    </section>
  )
}
