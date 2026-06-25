import HardwareHero from './HardwareHero'
import HardwareDescripcion from './HardwareDescripcion'
import HardwareProductos from './HardwareProductos'
import Contacto from './Contacto'
import SEO from './SEO'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Hardware IoT Kiwatec',
  description: '5 modelos de controladores, gateways y luminarias con conectividad LoRaWAN y 4G',
  itemListElement: [
    { '@type': 'Product', name: 'KSL-119', description: 'Controlador inteligente para luminarias LED', brand: { '@type': 'Brand', name: 'Kiwatec' } },
    { '@type': 'Product', name: 'KSL-122', description: 'Controlador con conectividad mejorada', brand: { '@type': 'Brand', name: 'Kiwatec' } },
    { '@type': 'Product', name: 'KGT-220L', description: 'Gateway LoRaWAN para redes amplias', brand: { '@type': 'Brand', name: 'Kiwatec' } },
    { '@type': 'Product', name: 'KCT-220L', description: 'Controlador LoRaWAN', brand: { '@type': 'Brand', name: 'Kiwatec' } },
    { '@type': 'Product', name: 'KCT-220C', description: 'Controlador con conectividad celular 4G', brand: { '@type': 'Brand', name: 'Kiwatec' } },
  ],
}

export default function HardwarePage() {
  return (
    <div className="w-full bg-[#030C40] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <SEO
        title="Hardware IoT — Controladores y Gateways LoRaWAN | Kiwatec"
        description="Línea Kiwatec: 5 modelos de controladores y gateways IoT (KSL-119, KSL-122, KGT-220L, KCT-220L, KCT-220C). Conectividad LoRaWAN y 4G para luminarias LED."
        keywords="hardware IoT, controlador LED, gateway LoRaWAN, smart lighting hardware, KSL-119, KSL-122, KGT-220L, KCT-220, dispositivos iluminación, 4G LED"
        path="/hardware"
        image="/images/hardware.jpg"
        jsonLd={jsonLd}
      />
      <HardwareHero />
      <HardwareDescripcion />
      <HardwareProductos />
      <Contacto />
    </div>
  )
}
