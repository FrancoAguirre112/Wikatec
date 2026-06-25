import BeneficiosHero from './BeneficiosHero'
import BeneficiosDescripcion from './BeneficiosDescripcion'
import BeneficiosProblemas from './BeneficiosProblemas'
import BeneficiosCarrusel from './BeneficiosCarrusel'
import BeneficiosRazones from './BeneficiosRazones'
import Contacto from './Contacto'
import SEO from './SEO'

const razones = [
  { titulo: 'Ahorro energético', desc: 'Hasta 70% menos consumo con LED + dimmerizado inteligente.' },
  { titulo: 'Reparaciones más rápidas', desc: 'Detección en tiempo real con ubicación exacta de cada falla.' },
  { titulo: 'Menor costo técnico', desc: 'Mantenimiento planificado, menos intervenciones reactivas.' },
  { titulo: 'Modernización visible', desc: 'Mejor calidad lumínica e impacto concreto para la comunidad.' },
  { titulo: 'Menor huella de carbono', desc: 'Menos CO₂ emitido y metas ambientales medibles.' },
  { titulo: 'Gestión centralizada', desc: 'Toda la red desde una sola plataforma, en tiempo real.' },
  { titulo: 'Mayor vida útil', desc: 'Ciclos precisos reducen el estrés térmico de las luminarias LED.' },
  { titulo: 'Mayor seguridad', desc: 'Sin zonas oscuras ni lámparas quemadas sin atender.' },
  { titulo: 'Datos para decidir', desc: 'Histórico de consumo y fallas para planificar inversiones.' },
  { titulo: 'Adaptable a eventos', desc: 'Reprogramá la red desde la plataforma en minutos.' },
]

// FAQ-style structured data — feeds rich results and AI assistants
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: razones.map((r) => ({
    '@type': 'Question',
    name: `¿Por qué elegir Kiwatec Smart Lights? — ${r.titulo}`,
    acceptedAnswer: { '@type': 'Answer', text: r.desc },
  })),
}

export default function BeneficiosPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <SEO
        title="10 Razones para Elegir Kiwatec Smart Lights | Beneficios IoT"
        description="Hasta 70% menos consumo, reparaciones más rápidas, menor huella de carbono, mayor seguridad. 10 razones medibles para pasar a iluminación inteligente con Kiwatec."
        keywords="ahorro energético LED, beneficios iluminación inteligente, reducir consumo alumbrado, ROI smart lights, eficiencia energética IoT"
        path="/beneficios"
        image="/images/beneficios.jpg"
        jsonLd={jsonLd}
      />
      <BeneficiosHero />
      <BeneficiosDescripcion />
      <BeneficiosProblemas />
      <BeneficiosCarrusel />
      <BeneficiosRazones />
      <Contacto />

    </div>
  )
}
