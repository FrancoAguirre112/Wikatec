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
  return (
    <section id="contacto-equipo-comercial" className="w-full py-12 md:py-20 px-6 bg-[#030C40] scroll-mt-[67px]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl">
          <h2 className="text-white font-bold text-[24px] md:text-[34px] leading-tight">
            Estamos listos para acompañar su próximo proyecto
          </h2>
          <div className="w-full max-w-[180px] border-t border-white/40 pt-3 mt-2">
            <p className="text-white font-bold text-[18px] md:text-[20px]">Contacto</p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
          {contactos.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-3 p-6 md:p-8 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/20 rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-white font-bold text-[20px] md:text-[22px] leading-tight">
                {c.nombre}
              </h3>
              <p className="text-white/80 font-normal text-[15px] md:text-base leading-tight">
                {c.cargo}
              </p>
              <div className="border-t border-white/30 my-2" />
              <p className="text-white font-normal text-sm md:text-[15px]">
                <span className="font-semibold">Correo:</span>{' '}
                <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
              </p>
              <p className="text-white font-normal text-sm md:text-[15px]">
                <span className="font-semibold">Tel:</span>{' '}
                <a href={c.telefonoHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {c.telefono}
                </a>
              </p>
            </div>
          ))}
        </div>

        <p className="text-white/80 text-sm md:text-base text-center mt-2">
          Dirección: Melian 3552 2A - Buenos Aires - Argentina
        </p>
      </div>
    </section>
  )
}
