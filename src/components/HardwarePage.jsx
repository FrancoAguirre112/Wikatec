import HardwareHero from './HardwareHero'
import HardwareDescripcion from './HardwareDescripcion'
import HardwareProductos from './HardwareProductos'
import Contacto from './Contacto'

export default function HardwarePage() {
  return (
    <div className="w-full bg-[#030C40] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <HardwareHero />
      <HardwareDescripcion />
      <HardwareProductos />
      <Contacto />
    </div>
  )
}