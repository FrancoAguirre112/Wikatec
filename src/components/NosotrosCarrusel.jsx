import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const tarjetas = [
  { id: 1, iconoSrc: '/images/carrusel-eco.png', texto: 'Ayudamos a reducir la huella de carbono.' },
  { id: 2, iconoSrc: '/images/mantenimiento.png', texto: 'Aceleramos los tiempos de reparación y mantenimiento.' },
  { id: 3, iconoSrc: '/images/foco.png', texto: 'Reducimos el consumo energético y los costos operativos.' },
  { id: 4, iconoSrc: '/images/alumbrado1.png', texto: 'Modernizamos el alumbrado público y mejoramos su calidad.' },
  { id: 5, iconoSrc: '/images/rueda.png', texto: 'Permitimos gestionar toda la red en tiempo real.' },
  { id: 6, iconoSrc: '/images/escudo.png', texto: 'Contribuimos a mejorar la satisfacción y seguridad.' },
];

export default function NosotrosCarrusel() {
  return (
    <section className="w-full py-12 md:py-24 bg-[linear-gradient(180deg,#030C40_0%,#172555_86.62%)] overflow-hidden">
      <div className="relative w-full max-w-[1272px] mx-auto px-10 md:px-16">

        <button
          type="button"
          aria-label="Anterior"
          onMouseDown={(e) => e.preventDefault()}
          className="swiper-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-30 text-white hover:opacity-70 cursor-pointer"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path d="M20 4L4 20L20 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".swiper-prev-btn", nextEl: ".swiper-next-btn" }}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 24 }
          }}
          className="w-full !h-[320px] md:!h-[410px]"
        >
          {tarjetas.map((t) => (
            <SwiperSlide
              key={t.id}
              className="!h-[300px] md:!h-[340px] md:!mt-[25px] md:[&.swiper-slide-active]:!h-[390px] md:[&.swiper-slide-active]:!mt-0 transition-[height,margin-top] duration-300"
            >
              <div className="h-full w-full flex flex-col items-center justify-center text-center gap-[14px] px-[30px] md:px-[40px] bg-gradient-to-b from-[#010729] to-[#182860] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[23px]">
                <img src={t.iconoSrc} alt="" className="w-[60px] h-[50px] md:w-[72px] md:h-[60px] object-contain flex-shrink-0" />
                <p className="text-white font-bold text-[16px] md:text-[18px] leading-tight md:leading-[26px]">{t.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Siguiente"
          onMouseDown={(e) => e.preventDefault()}
          className="swiper-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-30 text-white hover:opacity-70 cursor-pointer"
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path d="M4 4L20 20L4 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  )
}
