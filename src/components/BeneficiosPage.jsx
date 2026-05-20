import BeneficiosHero from './BeneficiosHero'
import BeneficiosDescripcion from './BeneficiosDescripcion'
import BeneficiosProblemas from './BeneficiosProblemas'
import BeneficiosCarrusel from './BeneficiosCarrusel'
import Contacto from './Contacto'

export default function BeneficiosPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <BeneficiosHero />
      <BeneficiosDescripcion />
      <BeneficiosProblemas />
      <BeneficiosCarrusel />
      <Contacto />

    </div>
  )
}
