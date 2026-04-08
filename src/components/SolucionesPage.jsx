import SolucionesHero from './SolucionesHero'
import SolucionesDescripcion from './SolucionesDescripcion'
import SolucionesGaleria from './SolucionesGaleria'
import SolucionesAplicaciones from './SolucionesAplicaciones'
import Contacto from './Contacto'

export default function SolucionesPage() {
  return (
    <div className="w-full bg-[#030C40] overflow-hidden">
      <SolucionesHero />
      <SolucionesDescripcion />
      <SolucionesGaleria />
      <SolucionesAplicaciones />
      <Contacto />
    </div>
  )
}
