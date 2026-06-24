import InicioHero from './InicioHero'
import InicioStats from './InicioStats'
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
      <InicioStats />
      <InicioSmartLightsSection />
      <InicioQuienesSomos />
      <InicioSoluciones />
      <InicioHardware />
      <InicioBeneficios />
      <Contacto />
    </>
  )
}
