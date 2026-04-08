import SLHero from './SLHero'
import SLDescripcion from './SLDescripcion'
import SLCaracteristicas from './SLCaracteristicas'
import Contacto from './Contacto'

export default function SLPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <SLHero />
      <SLDescripcion />
      <SLCaracteristicas />
      <Contacto />
    </div>
  )
}
