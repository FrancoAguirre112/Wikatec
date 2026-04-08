import ContactoHero from './ContactoHero'
import ContactoForm from './ContactoForm'
import ContactoReunion from './ContactoReunion'

export default function ContactoPage() {
  return (
    <div className="w-full bg-[#030C40]">
      <ContactoHero />
      <ContactoForm />
      <ContactoReunion />
    </div>
  )
}
