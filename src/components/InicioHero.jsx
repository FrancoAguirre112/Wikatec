import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  { id: 1, imagen: "/images/hero-smart-lights.jpg", titulo: "Smart Lights", subtitulo: "Para ciudades inteligentes", sinBoton: true },
  { id: 2, imagen: "/images/hero-municipios.jpg", titulo: "Alumbrado Público para Ciudades y Municipios", subtitulo: "Reduzca hasta un 70% el gasto en energía y gestione toda la red pública desde un solo lugar", link: "/soluciones" },
  { id: 3, imagen: "/images/hero-residencial.jpg", titulo: "Iluminación para Conjuntos Residenciales", subtitulo: "Menos consumo, menos expensas. Más seguridad para sus residentes, con control automático", link: "/soluciones" },
  { id: 4, imagen: "/images/hero-industria.jpg", titulo: "Iluminación para Industria y Logística", subtitulo: "Su planta iluminada con inteligencia: menos costos operativos, cero intervención manual", link: "/soluciones" },
  { id: 5, imagen: "/images/hero-comercios.jpg", titulo: "Iluminación para Comercios y Servicios", subtitulo: "Optimice el consumo de sus espacios sin afectar la experiencia del cliente. La luz correcta, en el momento exacto", link: "/soluciones" },
  { id: 6, imagen: "/images/hero-transporte.jpg", titulo: "Iluminación para Transporte y Movilidad", subtitulo: "En donde la infraestructura que no puede fallar, acceda a un monitoreo en tiempo real y reduzca costos", link: "/soluciones" },
  { id: 7, imagen: "/images/hero-deporte.jpg", titulo: "Iluminación para Deporte y Turismo", subtitulo: "Estacionamientos, accesos y zonas de ingreso iluminados con inteligencia. Más seguridad para los visitantes con menos costos de energía", link: "/soluciones" },
];

export default function HeroCarousel() {
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
        <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 5000, disableOnInteraction: false }} loop className="hero-swiper">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('${slide.imagen}')` }}>
                <div className="absolute inset-0 bg-[rgba(2,15,48,0.65)]" />
                <div className="absolute bottom-0 left-0 w-full h-[307px] bg-gradient-to-t from-[rgba(2,15,48,0.95)] from-0% to-[rgba(7,9,48,0)] to-75%" />
                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                  <h1 className="text-white mb-5 font-['Raleway',sans-serif] font-black text-[36px] md:text-[56px] leading-tight md:leading-[68px]">
                    {slide.titulo}
                  </h1>
                  {slide.subtitulo && (
                    <p className="text-white mb-8 max-w-2xl mx-auto font-['Raleway',sans-serif] font-semibold text-base md:text-2xl leading-[1.4]">
                      {slide.subtitulo}
                    </p>
                  )}
                  {!slide.sinBoton && (
                    <Link to={slide.link} className="inline-flex items-center justify-center w-[160px] md:w-[190px] h-[40px] bg-[#030C40] border border-white rounded-[10px] shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)] text-white text-base font-bold font-['Raleway',sans-serif] no-underline hover:bg-[#01051c] transition-colors duration-300">
                      Conocer más
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
