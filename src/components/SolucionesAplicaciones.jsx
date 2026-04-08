const aplicaciones = [
  {
    id: 1,
    ancla: 'sol-ciudades',
    titulo: 'Iluminación para Ciudades y Municipios',
    descripcion: 'Con Smart Lights, los gobiernos locales reducen hasta un 70% el gasto en energía y gestionan toda la red de alumbrado desde una sola plataforma. El sistema detecta fallas en tiempo real y notifica automáticamente al equipo técnico, eliminando reclamaciones y reduciendo el costo del mantenimiento preventivo.',
    bullets: ['Municipios', 'Comunas', 'Cooperativas eléctricas'],
    imagen: '/images/sol-app-ciudades.jpg',
    imagenIzquierda: true,
  },
  {
    id: 2,
    ancla: 'sol-residencial',
    titulo: 'Iluminación para Conjuntos Residenciales',
    descripcion: 'Menos consumo, menos expensas. Smart Lights automatiza el encendido y apagado de accesos, calles internas y espacios comunes, y alerta sobre cualquier falla de sus alumbrados o reportes. Una sola plataforma para gestionar toda la red del barrio, sin intervención manual.',
    bullets: ['Countries', 'Barrios cerrados', 'Urbanizaciones privadas'],
    imagen: '/images/sol-app-residencial.jpg',
    imagenIzquierda: false,
  },
  {
    id: 3,
    ancla: 'sol-industria',
    titulo: 'Iluminación para Industria y Logística',
    descripcion: 'En entornos donde la seguridad convive con el ahorro: cada punto de luz cuenta. Smart Lights reduce el consumo eléctrico en zonas productivas, depósitos y playones de carga, y brinda visibilidad total sobre el estado de cada artefacto. Menos tiempos operativos de mantenimiento, más control sobre los costos operativos.',
    bullets: ['Parques industriales', 'Fábricas', 'Minería y Petróleo', 'Playones logísticos'],
    imagen: '/images/sol-app-industria.jpg',
    imagenIzquierda: true,
  },
  {
    id: 4,
    ancla: 'sol-comercio',
    titulo: 'Iluminación para Comercio y Servicios',
    descripcion: 'La luz correcta, en el momento exacto. Smart Lights adapta la intensidad de cada zona según el horario y el nivel de actividad, optimizando el consumo sin afectar la experiencia del cliente. Generación automática de tablas y reportes en tiempo real para que el equipo de facilities actúe antes de que nadie lo note.',
    bullets: ['Shoppings', 'Centros comerciales', 'Estacionamientos'],
    imagen: '/images/sol-app-comercio.jpg',
    imagenIzquierda: false,
  },
  {
    id: 5,
    ancla: 'sol-transporte',
    titulo: 'Iluminación para Transporte y Movilidad',
    descripcion: 'Infraestructura que no puede fallar. Smart Lights garantiza iluminación continua con monitoreo remoto 24hs y alertas automáticas ante cualquier incidencia. Menos costos de mantenimiento, mayor seguridad operativa en los entornos de mayor exigencia.',
    bullets: ['Autopistas', 'Aeropuertos', 'Puertos', 'Terminales de buses', 'Estaciones de tren'],
    imagen: '/images/sol-app-transporte.jpg',
    imagenIzquierda: true,
  },
  {
    id: 6,
    ancla: 'sol-turismo',
    titulo: 'Iluminación para Turismo y Deporte',
    descripcion: 'Accesos seguros, estacionamientos bien iluminados y pavimentos bajo control. Smart Lights gestiona la iluminación exterior de estadios, clubes y hoteles, reduciendo el consumo en horarios de baja actividad y garantizando visibilidad plena cuando el predio está en uso.',
    bullets: ['Estadios y Clubes', 'Polideportivos', 'Hoteles', 'Complejos turísticos'],
    imagen: '/images/sol-app-turismo.jpg',
    imagenIzquierda: false,
  },
]

export default function SolucionesAplicaciones() {
  return (
    <section className="w-full bg-[#172555]">
      {aplicaciones.map((item) => (
        <div key={item.id} id={item.ancla} className="w-full py-10 md:py-16 border-t border-white/10 scroll-mt-[67px]">
          <div className="max-w-6xl mx-auto px-6">

            {/* Mobile: siempre apilado. Desktop: lado a lado */}
            <div className="block md:hidden">
              <h3 className="text-white font-bold text-[22px] leading-tight mb-4">{item.titulo}</h3>
              <p className="text-white font-normal text-sm leading-[170%] mb-4">{item.descripcion}</p>
              <ul className="flex flex-col gap-2 mb-6">
                {item.bullets.map((b) => (
                  <li key={b} className="text-white text-sm">• {b}</li>
                ))}
              </ul>
              <img src={item.imagen} alt={item.titulo} className="w-full object-cover h-[220px] rounded-[23px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
            </div>

            {/* Desktop */}
            <div className={`hidden md:flex items-center gap-[59px] ${item.imagenIzquierda ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1">
                <img src={item.imagen} alt={item.titulo} className="w-full object-cover h-[417px] rounded-[23px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
              </div>
              <div className="w-[386px] flex-shrink-0 flex flex-col gap-[28px]">
                <h3 className="text-white font-bold text-[30px] leading-[35px]">{item.titulo}</h3>
                <p className="text-white font-normal text-base leading-[170%]">{item.descripcion}</p>
                <ul className="flex flex-col gap-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="text-white text-base">• {b}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  )
}
