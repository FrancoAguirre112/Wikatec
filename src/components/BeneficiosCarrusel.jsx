import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const tarjetas = [
  { id: 1, titulo: 'Para las ciudades', iconoSrc: '/images/icon-ciudad.png', bullets: ['Ahorro en energía y mantenimiento', 'Gestión y control desde una única plataforma'] },
  { id: 2, titulo: 'Para los ciudadanos', iconoSrc: '/images/icon-ciudadanos.png', bullets: ['Calles más seguras y bien iluminadas', 'Reparaciones rápidas ante fallas'] },
  { id: 3, titulo: 'Para los operadores', iconoSrc: '/images/icon-operadores.png', bullets: ['Alertas automáticas con ubicación exacta de cada falla', 'Planificación eficiente del mantenimiento y reducción del costo operativo'] },
  { id: 4, titulo: 'Para el medio ambiente', iconoSrc: '/images/icon-medio-ambiente.png', bullets: ['Ahorro energético', 'Reducción de emisiones de CO2', 'Reducción de contaminación lumínica'] },
];

export default function BeneficiosCarrusel() {
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
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            }
          }}
          className="w-full !h-[320px] md:!h-[400px]"
        >
          {tarjetas.map((t) => (
            <SwiperSlide
              key={t.id}
              className="!h-[300px] md:!h-[370px]"
            >
              <div className="h-full w-full flex flex-col items-center justify-center text-center gap-[14px] px-[30px] md:px-[40px] bg-gradient-to-b from-[#010729] to-[#182860] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[23px]">
                <img src={t.iconoSrc} alt={t.titulo} className="w-[60px] h-[50px] md:w-[72px] md:h-[60px] object-contain flex-shrink-0" />
                <p className="text-white font-bold text-[16px] leading-tight">{t.titulo}</p>
                <ul className="text-left w-full space-y-1">
                  {t.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-white font-normal text-sm md:text-[15px] md:leading-[22px]">• {b}</li>
                  ))}
                </ul>
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
  );
}
