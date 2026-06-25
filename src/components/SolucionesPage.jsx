import SolucionesHero from './SolucionesHero'
import SolucionesDescripcion from './SolucionesDescripcion'
import SolucionesGaleria from './SolucionesGaleria'
import Contacto from './Contacto'
import SEO from './SEO'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Soluciones de Iluminación Inteligente Kiwatec',
  description: '6 entornos de aplicación de la plataforma Smart Lights',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ciudades y Municipios', description: 'Reducción de 70% en gasto energético público, gestión centralizada' },
    { '@type': 'ListItem', position: 2, name: 'Conjuntos Residenciales', description: 'Countries, barrios cerrados, urbanizaciones privadas' },
    { '@type': 'ListItem', position: 3, name: 'Industria y Logística', description: 'Parques industriales, fábricas, minería, playones logísticos' },
    { '@type': 'ListItem', position: 4, name: 'Comercio y Servicios', description: 'Shoppings, centros comerciales, estacionamientos' },
    { '@type': 'ListItem', position: 5, name: 'Transporte y Movilidad', description: 'Autopistas, aeropuertos, puertos, terminales' },
    { '@type': 'ListItem', position: 6, name: 'Turismo y Deporte', description: 'Espacios deportivos, hoteles, parques turísticos' },
  ],
}

export default function SolucionesPage() {
  return (
    <div className="w-full bg-[#030C40] overflow-hidden">
      <SEO
        title="Soluciones de Iluminación Inteligente — 6 Entornos | Kiwatec"
        description="Soluciones IoT de iluminación para ciudades, industria, comercio, transporte, turismo y residencial. Adaptamos Smart Lights a cada entorno con beneficios medibles desde el primer día."
        keywords="iluminación ciudades, smart city, alumbrado industrial, iluminación comercial, retail lighting, alumbrado autopistas, iluminación residencial, soluciones IoT"
        path="/soluciones"
        image="/images/sol-ciudades.jpg"
        jsonLd={jsonLd}
      />
      <SolucionesHero />
      <SolucionesDescripcion />
      <SolucionesGaleria />
      <Contacto />
    </div>
  )
}
