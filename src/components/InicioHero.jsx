import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { gsap, prefersReduced } from "../lib/gsap";

const slides = [
  { id: 1, imagen: "/images/hero-smart-lights.webp", titulo: "Smart Lights", subtitulo: "Iluminación inteligente para sitios inteligentes", sinBoton: true },
  { id: 2, imagen: "/images/hero-municipios.webp", titulo: "Alumbrado Público para Ciudades y Municipios", subtitulo: "Reduzca hasta un 70% el gasto en energía y gestione toda la red pública desde un solo lugar", link: "/soluciones" },
  { id: 3, imagen: "/images/hero-residencial.webp", titulo: "Iluminación para Conjuntos Residenciales", subtitulo: "Menos consumo, menos expensas. Más seguridad para sus residentes, con control automático", link: "/soluciones" },
  { id: 4, imagen: "/images/hero-industria.webp", titulo: "Iluminación para Industria y Logística", subtitulo: "Su planta iluminada con inteligencia: menos costos operativos, cero intervención manual", link: "/soluciones" },
  { id: 5, imagen: "/images/hero-comercios.webp", titulo: "Iluminación para Comercios y Servicios", subtitulo: "Optimice el consumo de sus espacios sin afectar la experiencia del cliente. La luz correcta, en el momento exacto", link: "/soluciones" },
  { id: 6, imagen: "/images/hero-transporte.webp", titulo: "Iluminación para Transporte y Movilidad", subtitulo: "En donde la infraestructura que no puede fallar, acceda a un monitoreo en tiempo real y reduzca costos", link: "/soluciones" },
  { id: 7, imagen: "/images/hero-deporte.webp", titulo: "Iluminación para Deporte y Turismo", subtitulo: "Estacionamientos, accesos y zonas de ingreso iluminados con inteligencia. Más seguridad para los visitantes con menos costos de energía", link: "/soluciones" },
];

function animateSlide(slideEl) {
  if (!slideEl || prefersReduced) return;
  const line = slideEl.querySelector(".h-line");
  const fades = slideEl.querySelectorAll(".h-fade");
  const bg = slideEl.querySelector(".h-bg");
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  if (bg) {
    tl.fromTo(
      bg,
      { scale: 1.18, opacity: 0.75 },
      { scale: 1.05, opacity: 1, duration: 1.6, ease: "power2.out" },
      0
    );
  }
  if (line) {
    tl.fromTo(
      line,
      { yPercent: 115, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.0 },
      0.1
    );
  }
  if (fades.length) {
    tl.fromTo(
      fades,
      { y: 22, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
      0.45
    );
  }
}

export default function HeroCarousel() {
  const swiperRef = useRef(null);

  return (
    <>
      <style>{`
        .hero-swiper { width: 100%; height: 100%; }
        .hero-swiper .swiper-button-prev,
        .hero-swiper .swiper-button-next { color: white; }
        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after { font-size: 1.2rem; font-weight: 800; }
      `}</style>

      <section className="w-full overflow-hidden h-[500px] md:h-[734px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          speed={900}
          className="hero-swiper"
          onSwiper={(sw) => {
            swiperRef.current = sw;
            requestAnimationFrame(() => animateSlide(sw.slides[sw.activeIndex]));
          }}
          onSlideChangeTransitionStart={(sw) =>
            animateSlide(sw.slides[sw.activeIndex])
          }
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div
                  className="h-bg absolute inset-0 bg-cover bg-center will-change-transform"
                  style={{ backgroundImage: `url('${slide.imagen}')` }}
                />
                <div className="absolute inset-0 bg-[rgba(2,15,48,0.65)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-[307px] bg-gradient-to-t from-[rgba(2,15,48,0.95)] from-0% to-[rgba(7,9,48,0)] to-75% pointer-events-none" />

                {/* Decorative orbs for depth */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />

                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                  <h1 className="text-white mb-5 font-['Montserrat',sans-serif] font-black text-[36px] md:text-[56px] leading-tight md:leading-[68px]">
                    <span className="inline-block overflow-hidden align-bottom">
                      <span className="h-line block">{slide.titulo}</span>
                    </span>
                  </h1>
                  {slide.subtitulo && (
                    <p className="h-fade text-white mb-8 max-w-2xl mx-auto font-['Montserrat',sans-serif] font-semibold text-base md:text-2xl leading-[1.4]">
                      {slide.subtitulo}
                    </p>
                  )}
                  {!slide.sinBoton && (
                    <Link
                      to={slide.link}
                      className="h-fade group inline-flex items-center justify-center gap-2 w-[170px] md:w-[200px] h-[42px] bg-[#030C40] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] text-white text-base font-bold font-['Montserrat',sans-serif] no-underline hover:bg-[#01051c] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300"
                    >
                      Conocer más
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
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
