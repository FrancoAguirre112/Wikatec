import { useReveal } from '../hooks/useReveal'

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const contactos = [
  {
    id: 1,
    nombre: 'Damián Menke',
    cargo: 'Director Comercial',
    email: 'dmenke@kiwatec.net',
    telefono: '+54911-6500-6000',
    telefonoHref: 'https://wa.me/5491165006000',
  },
  {
    id: 2,
    nombre: 'Jesica Kovalsky',
    cargo: 'Gerente Comercial',
    email: 'jesica@kiwatec.net',
    telefono: '+54911-2182-1624',
    telefonoHref: 'https://wa.me/5491121821624',
  },
]

export default function ContactoEquipo() {
  const ref = useReveal()
  return (
    <section
      ref={ref}
      id="contacto-equipo-comercial"
      className="relative w-full py-16 md:py-24 px-6 bg-[#030C40] scroll-mt-[67px] overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-sky-300/8 blur-3xl" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-14">
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl">
          <p className="r-reveal text-xs font-semibold uppercase tracking-[0.32em] text-blue-300/80">
            Nuestro equipo comercial
          </p>
          <h2 className="r-reveal text-white font-bold text-[26px] md:text-[36px] leading-[1.1]">
            Estamos listos para acompañar su próximo proyecto
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
          {contactos.map((c) => (
            <div
              key={c.id}
              className="r-reveal group relative flex flex-col gap-4 p-7 md:p-8 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/15 rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-blue-300/40 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/15 text-blue-300 ring-1 ring-blue-300/30 font-bold text-lg transition-all group-hover:bg-blue-400/25">
                  {c.nombre.split(' ').map((n) => n[0]).join('')}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-[20px] md:text-[22px] leading-tight">
                    {c.nombre}
                  </h3>
                  <p className="text-blue-300/80 font-medium text-[13px] uppercase tracking-wider">
                    {c.cargo}
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="flex flex-col gap-2.5">
                <a
                  href={`mailto:${c.email}`}
                  className="group/link flex items-center gap-2.5 text-white/85 text-sm md:text-[15px] hover:text-blue-300 transition-colors"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover/link:bg-blue-400/15 group-hover/link:text-blue-300 transition-colors">
                    <MailIcon />
                  </span>
                  {c.email}
                </a>
                <a
                  href={c.telefonoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2.5 text-white/85 text-sm md:text-[15px] hover:text-blue-300 transition-colors"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover/link:bg-blue-400/15 group-hover/link:text-blue-300 transition-colors">
                    <PhoneIcon />
                  </span>
                  {c.telefono}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="r-reveal text-white/60 text-sm md:text-base text-center">
          Dirección: Melian 3552 2A — Buenos Aires, Argentina
        </p>
      </div>
    </section>
  )
}
