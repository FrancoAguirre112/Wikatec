import InicioHero from './InicioHero'
import InicioSmartLightsSection from './InicioSmartLightsSection'
import InicioQuienesSomos from './InicioQuienesSomos'
import InicioSoluciones from './InicioSoluciones'
import InicioHardware from './InicioHardware'
import InicioBeneficios from './InicioBeneficios'
import Contacto from './Contacto'

export default function Inicio() {
  return (
    <>
      <InicioHero />
      <InicioSmartLightsSection />
      <InicioQuienesSomos />
      <InicioSoluciones />
      <InicioHardware />
      <InicioBeneficios />
      <Contacto />
    </>
  )
}
