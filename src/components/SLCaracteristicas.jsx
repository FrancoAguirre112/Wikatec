const caracteristicas = [
  {
    id: 1,
    titulo: 'Visualización en tiempo real',
    descripcion: 'Visualice en tiempo real cada dispositivo, junto con su ubicación, estado operativo y parámetros clave de funcionamiento. Acceda a información actualizada al instante para supervisar la red, identificar incidencias y tomar decisiones más precisas. A través del mapa interactivo, podrá explorar cada punto de iluminación de forma intuitiva, facilitando el control diario y mejorando la eficiencia operativa.',
    imagen: '/images/sl-visualizacion.jpg',
    imagenIzquierda: true,
    fondo: 'bg-[#030C40]',
  },
  {
    id: 2,
    titulo: 'Control en vivo',
    descripcion: 'Supervise el estado, nivel de intensidad y parámetros clave de cada dispositivo. Desde este módulo podrá encender, apagar y ajustar luminarias de forma individual o por grupos, optimizando el consumo energético y adaptando soluciones a las necesidades reales del sistema.',
    imagen: '/images/sl-control-vivo.jpg',
    imagenIzquierda: false,
    fondo: 'bg-[#141E4B]',
  },
  {
    id: 3,
    titulo: 'Monitoreo',
    descripcion: 'Manténgase informado con todo lo que necesita saber: disponibilidad del sistema, consumo energético, alertas vigentes y tendencias de uso. Tenga siempre a mano datos precisos para supervisar la red y mantenerla funcionando en óptimas condiciones.',
    imagen: '/images/sl-monitoreo.jpg',
    imagenIzquierda: true,
    fondo: 'bg-[#030C40]',
  },
  {
    id: 4,
    titulo: 'Gestión de horarios',
    descripcion: 'Automatice el encendido, apagado y dimerización de la red lumínica. Configure perfiles por grupo o zona, establezca rutinas de operación y programe horarios que se adapten a las necesidades reales de cada instalación.',
    imagen: '/images/sl-horarios.jpg',
    imagenIzquierda: false,
    fondo: 'bg-[#141E4B]',
  },
  {
    id: 5,
    titulo: 'Gestión de usuarios',
    descripcion: 'Gestione fácilmente la autoría del sistema, asignando roles y permisos según el nivel de cada área. La plataforma permite crear, editar y organizar perfiles con distintos niveles de acceso, garantizando un uso seguro y controlado.',
    imagen: '/images/sl-usuarios.jpg',
    imagenIzquierda: true,
    fondo: 'bg-[#030C40]',
  },
  {
    id: 6,
    titulo: 'Servicio Técnico',
    descripcion: 'Cuente con atención directa ante fallas en su red de luminarias. El sistema identifica incidencias, genera alertas automáticas y permite registrar intervenciones técnicas, facilitando el seguimiento y resolución de cada caso de forma rápida y eficiente.',
    imagen: '/images/sl-servicio-tecnico.jpg',
    imagenIzquierda: false,
    fondo: 'bg-[#141E4B]',
  },
  {
    id: 7,
    titulo: 'Cuidado del medio ambiente',
    descripcion: 'Disminuya el consumo energético y las emisiones de CO₂ mediante la programación de luminarias e intensidad. Reduzca el impacto ambiental y la contaminación lumínica, construyendo un entorno más sustentable sin comprometer la seguridad y el control.',
    imagen: '/images/sl-medio-ambiente.jpg',
    imagenIzquierda: true,
    fondo: 'bg-[#030C40]',
  },
]

export default function SLCaracteristicas() {
  return (
    <section className="w-full">
      {caracteristicas.map((item) => (
        <div key={item.id} className={`w-full py-10 md:py-16 ${item.fondo}`}>
          <div className={`max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-[66px] ${
            item.imagenIzquierda ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}>
            {/* Texto siempre primero en mobile */}
            <div className="w-full md:w-[45%] flex flex-col gap-5 md:gap-7 order-1 md:order-none">
              <h3 className="text-white font-bold text-[22px] md:text-[30px] leading-tight md:leading-[35px]">
                {item.titulo}
              </h3>
              <p className="text-white font-normal text-sm md:text-base leading-[170%]">
                {item.descripcion}
              </p>
            </div>
            {/* Imagen siempre segunda en mobile */}
            <div className="w-full md:w-[55%] flex-shrink-0 order-2 md:order-none">
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-auto rounded-[23px] opacity-[0.79] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
