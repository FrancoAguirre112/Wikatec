const razones = [
  {
    id: 1,
    titulo: 'Ahorro de costo energético',
    descripcion: 'El sistema ajusta automáticamente la intensidad de cada luminaria según el horario y la época del año, eliminando el consumo innecesario en horas de baja actividad. Además previene el gasto de energía en luminarias que quedan encendidas durante horas diurnas. Combinado con la tecnología LED, el ahorro puede alcanzar hasta un 70% respecto a una instalación tradicional, sin control, de sodio o mercurio.',
  },
  {
    id: 2,
    titulo: 'Aumento de la velocidad de reparaciones',
    descripcion: 'El sistema detecta en tiempo real qué luminarias no encienden por la noche o permanecen encendidas durante el día, generando alertas automáticas sin necesidad de que ningún vecino lo reporte. El equipo técnico recibe la notificación con la ubicación exacta de la falla y puede actuar de inmediato.',
  },
  {
    id: 3,
    titulo: 'Ahorro en costo de servicios técnicos',
    descripcion: 'Al eliminar los recorridos de inspección nocturna y reducir las intervenciones reactivas, el sistema disminuye significativamente las horas de mano de obra técnica. El mantenimiento pasa de ser correctivo y aleatorio a ser planificado y predecible, reduciendo tanto el costo como el tiempo de respuesta.',
  },
  {
    id: 4,
    titulo: 'Modernización del alumbrado',
    descripcion: 'La transición a LED con control inteligente no solo mejora la calidad y uniformidad de la luz, sino que posiciona al municipio o la organización en un estándar de infraestructura moderno. Es un cambio visible para la comunidad y comparable con lo que hacen las ciudades más avanzadas del mundo.',
  },
  {
    id: 5,
    titulo: 'Reducción de la huella de carbono',
    descripcion: 'El menor consumo eléctrico implica directamente menos emisiones de CO₂ asociadas a la generación de energía. Esto permite a municipios y empresas cumplir con metas ambientales, acceder a certificaciones de sustentabilidad y comunicar un compromiso concreto y medible con el cuidado del medio ambiente.',
  },
  {
    id: 6,
    titulo: 'Gestión centralizada en tiempo real',
    descripcion: 'Una sola plataforma reemplaza la necesidad de múltiples equipos operando en campo para supervisar el estado de la red. El responsable de la instalación puede ver, controlar y reprogramar cualquier luminaria desde cualquier dispositivo, reduciendo la estructura operativa necesaria para gestionar redes de cualquier tamaño.',
  },
  {
    id: 7,
    titulo: 'Extensión de la vida útil del equipamiento',
    descripcion: 'El control de intensidad y los ciclos de encendido/apagado precisos reducen el estrés térmico de las luminarias LED, alargando significativamente su vida útil respecto a un sistema siempre a plena potencia.',
  },
  {
    id: 8,
    titulo: 'Seguridad urbana y disuasión del delito',
    descripcion: 'Una iluminación bien gestionada, sin zonas oscuras ni lámparas fundidas sin atender, reduce la percepción de inseguridad y tiene impacto directo en la seguridad del espacio público.',
  },
  {
    id: 9,
    titulo: 'Datos e informes para la toma de decisiones',
    descripcion: 'El sistema genera registros históricos de consumo, fallas y funcionamiento que permiten planificar inversiones, justificar presupuestos y rendir cuentas ante organismos de control o inversores.',
  },
  {
    id: 10,
    titulo: 'Adaptabilidad a eventos y situaciones especiales',
    descripcion: 'Reprograme la red desde la plataforma en minutos para adaptarse a eventos puntuales, condiciones climáticas adversas o situaciones que requieran ajustar la iluminación en tiempo real. Refuerce zonas específicas, modifique rutinas o ajuste la intensidad sin necesidad de intervenir luminaria por luminaria.',
  },
]

export default function BeneficiosRazones() {
  return (
    <section id="razones-smart-lights" className="w-full py-12 md:py-20 px-6 bg-[linear-gradient(180deg,#172555_0%,#030C40_100%)] scroll-mt-[67px]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        <h2 className="text-white font-bold text-[24px] md:text-[34px] leading-tight text-center max-w-3xl">
          10 razones para elegir Kiwatec Smart Lights
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {razones.map((r) => (
            <div
              key={r.id}
              className="flex flex-col gap-3 p-6 md:p-7 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/20 rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-baseline gap-3 pb-3 border-b border-white/30">
                <span className="text-white/60 font-bold text-[22px] md:text-[26px] leading-none flex-shrink-0">
                  {String(r.id).padStart(2, '0')}
                </span>
                <h3 className="text-white font-bold text-[16px] md:text-[18px] leading-tight">
                  {r.titulo}
                </h3>
              </div>
              <p className="text-white font-normal text-sm md:text-[15px] leading-[170%]">
                {r.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
