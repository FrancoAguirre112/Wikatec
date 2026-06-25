import ContactoHero from './ContactoHero'
import ContactoForm from './ContactoForm'
import ContactoEquipo from './ContactoEquipo'

export default function ContactoPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <ContactoHero />
      <ContactoForm />
      <ContactoEquipo />
    </div>
  )
}
