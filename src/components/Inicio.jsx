import InicioHero from './InicioHero'
import InicioStats from './InicioStats'
import InicioSmartLightsSection from './InicioSmartLightsSection'
import InicioQuienesSomos from './InicioQuienesSomos'
import InicioSoluciones from './InicioSoluciones'
import InicioHardware from './InicioHardware'
import InicioBeneficios from './InicioBeneficios'
import Contacto from './Contacto'
import SEO from './SEO'

export default function Inicio() {
  return (
    <>
      <SEO
        title="Kiwatec — Iluminación Inteligente IoT | Smart Lights para ciudades y empresas"
        description="Kiwatec — Plataforma IoT Smart Lights para gestionar redes de alumbrado público y privado. Hasta 70% menos consumo, monitoreo en tiempo real, control remoto. Empresa argentina con sede en Buenos Aires."
        keywords="iluminación inteligente, smart lights, IoT alumbrado, alumbrado público, controlador LED, plataforma SaaS lighting, LoRaWAN, smart city Argentina, Kiwatec, Wikatec"
        path="/"
        image="/images/hero-smart-lights.webp"
      />
      <InicioHero />
      <InicioStats />
      <InicioQuienesSomos />
      <InicioSmartLightsSection />
      <InicioSoluciones />
      <InicioHardware />
      <InicioBeneficios />
      <Contacto />
    </>
  )
}
