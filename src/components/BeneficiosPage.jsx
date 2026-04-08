import BeneficiosHero from './BeneficiosHero'
import BeneficiosDescripcion from './BeneficiosDescripcion'
import BeneficiosCarrusel from './BeneficiosCarrusel'
import Contacto from './Contacto'

export default function BeneficiosPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <BeneficiosHero />
      <BeneficiosDescripcion />
      <BeneficiosCarrusel />
      <Contacto />
      
    </div>
  )
}
