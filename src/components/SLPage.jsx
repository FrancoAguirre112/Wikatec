import SLHero from './SLHero'
import SLDescripcion from './SLDescripcion'
import SLCaracteristicas from './SLCaracteristicas'
import Contacto from './Contacto'
import SEO from './SEO'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Smart Lights',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  provider: {
    '@type': 'Organization',
    name: 'Kiwatec',
    url: 'https://wikatec.vercel.app',
  },
  description:
    'Plataforma SaaS para gestión integral de redes de iluminación inteligente. Monitoreo en tiempo real, control remoto, programación de horarios, detección de fallas, reportes automáticos.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'Monitoreo en tiempo real',
    'Control remoto desde cualquier dispositivo',
    'Programación de horarios y dimmerizado',
    'Detección de fallas con ubicación exacta',
    'Reportes automáticos',
    'Dashboard analítico',
    'Integración LoRaWAN y 4G',
  ],
}

export default function SLPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <SEO
        title="Smart Lights — Plataforma IoT de Gestión Lumínica | Kiwatec"
        description="Plataforma web Smart Lights de Kiwatec: supervise, opere y analice toda su red de alumbrado. Monitoreo en tiempo real, control remoto, reportes automáticos. 7 características clave."
        keywords="smart lights, plataforma iot, gestión luminarias, monitoreo alumbrado, control remoto LED, SaaS iluminación, dimmerizado inteligente"
        path="/smart-lights"
        image="/images/smart-lights-iot.jpg"
        jsonLd={jsonLd}
      />
      <SLHero />
      <SLDescripcion />
      <SLCaracteristicas />
      <Contacto />
    </div>
  )
}
