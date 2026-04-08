import { useState } from 'react'

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    localidad: '',
    mensaje: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const { nombre, apellido, email, localidad, mensaje } = form
    const text = `*Contacto desde la web*\n\n*Nombre:* ${nombre} ${apellido}\n*Email:* ${email}\n*Localidad:* ${localidad}\n*Mensaje:* ${mensaje}`
    window.open(`https://wa.me/5491165006000?text=${encodeURIComponent(text)}`, '_blank')

    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="w-full bg-[#172555] py-12 md:py-16 px-6">
      <div className="max-w-[1272px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">

        {/* Formulario — primero en mobile, segundo en desktop */}
        <div className="flex-1 w-full bg-[#0D1640] rounded-[16px] p-6 md:p-8 order-1 md:order-2">
          <h2 className="text-white font-bold text-[24px] leading-[28px] mb-1 pb-2 border-b border-white/40 w-fit">
            Contáctenos
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            {/* Nombre y Apellido */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="nombre" className="text-white text-[13px] font-normal">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="apellido" className="text-white text-[13px] font-normal">Apellido</label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  value={form.apellido}
                  onChange={handleChange}
                  className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-white text-[13px] font-normal">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
              />
            </div>

            {/* Localidad */}
            <div className="flex flex-col gap-1">
              <label htmlFor="localidad" className="text-white text-[13px] font-normal">Localidad</label>
              <input
                id="localidad"
                name="localidad"
                type="text"
                value={form.localidad}
                onChange={handleChange}
                className="w-full h-[38px] bg-white rounded-[4px] px-3 text-[#030C40] text-[14px] outline-none"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1">
              <label htmlFor="mensaje" className="text-white text-[13px] font-normal">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                value={form.mensaje}
                onChange={handleChange}
                className="w-full bg-white rounded-[4px] px-3 py-2 text-[#030C40] text-[14px] outline-none resize-none"
              />
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full h-[38px] bg-[#030C40] border border-white/60 rounded-[4px] text-white text-[14px] font-semibold hover:bg-[#01051c] transition-colors cursor-pointer mt-1 disabled:opacity-50"
            >
              {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Mensaje enviado' : 'Enviar'}
            </button>
          </form>
        </div>

        {/* Info de contacto — segundo en mobile, primero en desktop */}
        <div className="flex flex-col gap-8 md:gap-10 w-full md:w-[200px] md:flex-shrink-0 md:pt-12 order-2 md:order-1">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-[18px] leading-[21px]">Email</p>
            <p className="text-white font-normal text-[16px] mt-1">info@kiwatec.net</p>
          </div>
        </div>

      </div>
    </section>
  )
}
