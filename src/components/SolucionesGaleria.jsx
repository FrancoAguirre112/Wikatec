const galeria = [
  { imagen: '/images/sol-ciudades.jpg', titulo: 'Ciudades y Municipios', ancla: 'sol-ciudades' },
  { imagen: '/images/sol-residencial.jpg', titulo: 'Conjuntos Residenciales', ancla: 'sol-residencial' },
  { imagen: '/images/sol-industria.jpg', titulo: 'Industria y Logística', ancla: 'sol-industria' },
  { imagen: '/images/sol-comercio.jpg', titulo: 'Comercio y Servicios', ancla: 'sol-comercio' },
  { imagen: '/images/sol-transporte.jpg', titulo: 'Transporte y Movilidad', ancla: 'sol-transporte' },
  { imagen: '/images/sol-turismo.jpg', titulo: 'Turismo y Deporte', ancla: 'sol-turismo' },
]

export default function SolucionesGaleria() {
  return (
    <section className="w-full py-10 md:py-16 px-6 bg-[#141E4B]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {galeria.map((item) => (
          <a
            key={item.ancla}
            href={`#${item.ancla}`}
            className="group relative overflow-hidden rounded-[16px] md:rounded-[23px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
          >
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full object-cover h-[160px] md:h-[325px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030C40]/90 via-[#030C40]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-3 left-0 right-0 text-center text-white font-bold text-[12px] md:text-[16px] leading-tight px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.titulo}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
