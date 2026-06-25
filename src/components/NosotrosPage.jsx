import NosotrosHero from './NosotrosHero'
import NosotrosDescripcion from './NosotrosDescripcion'
import NosotrosCarrusel from './NosotrosCarrusel'
import Contacto from './Contacto'
import SEO from './SEO'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Nosotros — Kiwatec',
  description:
    'Equipo argentino especializado en plataformas IoT para iluminación inteligente. Filosofía: simplificar la operación, reducir costos y democratizar los datos.',
  about: { '@type': 'Organization', name: 'Kiwatec' },
}

export default function NosotrosPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <SEO
        title="Nosotros — Equipo Kiwatec | Iluminación Inteligente Argentina"
        description="Equipo argentino especializado en plataformas IoT para iluminación inteligente. Simplificamos la operación, reducimos costos y democratizamos los datos para quienes toman decisiones."
        keywords="kiwatec equipo, empresa iluminación argentina, IoT buenos aires, smart lights argentina, plataforma IoT nacional"
        path="/nosotros"
        image="/images/quienes-somos.jpg"
        jsonLd={jsonLd}
      />
      <NosotrosHero />
      <NosotrosDescripcion />
      <NosotrosCarrusel />
      <Contacto />
    </div>
  )
}
