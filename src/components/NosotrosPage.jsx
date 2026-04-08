
import NosotrosHero from './NosotrosHero'
import NosotrosDescripcion from './NosotrosDescripcion'
import NosotrosCarrusel from './NosotrosCarrusel'
import Contacto from './Contacto'

export default function NosotrosPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <NosotrosHero />
      <NosotrosDescripcion />
      <NosotrosCarrusel />
      <Contacto />
    </div>
  )
}