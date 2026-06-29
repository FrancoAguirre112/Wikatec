import ContactoHero from './ContactoHero'
import ContactoForm from './ContactoForm'
// import ContactoEquipo from './ContactoEquipo'
import SEO from './SEO'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto Kiwatec',
  description: 'Contactá al equipo comercial de Kiwatec. Respuesta en menos de 24 horas.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Kiwatec',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@kiwatec.net',
        telephone: '+54-9-11-6500-6000',
        areaServed: 'AR',
        availableLanguage: ['Spanish'],
      },
    ],
  },
}

export default function ContactoPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <SEO
        title="Contacto — Hablemos de tu Proyecto | Kiwatec"
        description="Contactá al equipo Kiwatec. Damián Menke y Jesica Kovalsky responden en menos de 24 horas. Email, WhatsApp y formulario web disponibles."
        keywords="contacto kiwatec, asesoría iluminación inteligente, presupuesto smart lights, comercial kiwatec"
        path="/contacto"
        image="/images/cta-ciudad.webp"
        jsonLd={jsonLd}
      />
      <ContactoHero />
      <ContactoForm />
      {/* <ContactoEquipo /> */}
    </div>
  )
}
