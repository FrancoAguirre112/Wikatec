import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const CheckIcon = () => (
  <svg
    className="h-4 w-4 flex-shrink-0 text-blue-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
)

const VALUE_PROPS = [
  'Respuesta en menos de 24 horas',
  'Atención directa con especialistas',
  'Asesoramiento sin compromiso',
]

const FIELD_BASE =
  'peer w-full bg-white/[0.04] border border-white/15 rounded-lg px-4 pt-6 pb-2 text-white text-sm md:text-[15px] outline-none transition-all duration-200 focus:border-blue-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(96,165,250,0.15)] hover:border-white/25'

const LABEL_BASE =
  'absolute left-4 top-2 text-[10px] uppercase tracking-[0.18em] text-blue-300/85 pointer-events-none transition-all duration-200 ' +
  // when empty (placeholder shown), move label to center as a "placeholder"
  'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[13px] peer-placeholder-shown:text-white/35 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal ' +
  // when focused, back to upper compact form
  'peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-blue-300/85'

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    localidad: '',
    mensaje: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const revealRef = useReveal()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { nombre, apellido, email, localidad, mensaje } = form
    const text = `*Contacto desde la web*\n\n*Nombre:* ${nombre} ${apellido}\n*Email:* ${email}\n*Localidad:* ${localidad}\n*Mensaje:* ${mensaje}`
    window.open(
      `https://wa.me/5491165006000?text=${encodeURIComponent(text)}`,
      '_blank'
    )
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
  }

  const submitting = status === 'sending'
  const sent = status === 'sent'

  return (
    <section className="relative w-full bg-gradient-to-b from-[#030C40] via-[#0a1450] to-[#172555] py-16 md:py-24 px-6 overflow-hidden">
      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(147,197,253,0.6) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Soft blue glow corners */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />

      <div
        ref={revealRef}
        className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-16 items-center"
      >
        {/* Left: intro + value props */}
        <div className="flex flex-col">
          <p className="r-reveal inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-300/85 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.95)] animate-pulse" />
            Contacto
          </p>
          <h2 className="r-reveal text-white font-bold text-[32px] md:text-[44px] leading-[1.05] mb-5">
            Hablemos de <span className="text-blue-300">tu proyecto</span>.
          </h2>
          <p className="r-reveal text-white/75 text-base leading-[170%] max-w-md mb-8">
            Contanos qué necesitás y un especialista de nuestro equipo te
            responderá a la brevedad con la información que estás buscando.
          </p>
          <ul className="r-reveal flex flex-col gap-3">
            {VALUE_PROPS.map((v) => (
              <li
                key={v}
                className="flex items-center gap-3 text-white/85 text-[14px]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400/15 ring-1 ring-blue-300/30">
                  <CheckIcon />
                </span>
                {v}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form card */}
        <div className="r-reveal relative bg-white/[0.03] backdrop-blur-sm border border-white/12 rounded-[20px] p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          {/* Top-left corner accent */}
          <div className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-300/70 mb-2">
              Formulario
            </p>
            <h3 className="text-white font-bold text-[20px] md:text-[22px]">
              Contáctenos
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Nombre + Apellido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder=" "
                  value={form.nombre}
                  onChange={handleChange}
                  className={FIELD_BASE}
                />
                <label htmlFor="nombre" className={LABEL_BASE}>
                  Nombre
                </label>
              </div>
              <div className="relative">
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  placeholder=" "
                  value={form.apellido}
                  onChange={handleChange}
                  className={FIELD_BASE}
                />
                <label htmlFor="apellido" className={LABEL_BASE}>
                  Apellido
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                className={FIELD_BASE}
              />
              <label htmlFor="email" className={LABEL_BASE}>
                Email
              </label>
            </div>

            {/* Localidad */}
            <div className="relative">
              <input
                id="localidad"
                name="localidad"
                type="text"
                placeholder=" "
                value={form.localidad}
                onChange={handleChange}
                className={FIELD_BASE}
              />
              <label htmlFor="localidad" className={LABEL_BASE}>
                Localidad
              </label>
            </div>

            {/* Mensaje */}
            <div className="relative">
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                placeholder=" "
                value={form.mensaje}
                onChange={handleChange}
                className={`${FIELD_BASE} resize-none pt-7`}
              />
              <label
                htmlFor="mensaje"
                className={`${LABEL_BASE.replace(
                  'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2',
                  'peer-placeholder-shown:top-6 peer-placeholder-shown:translate-y-0'
                )}`}
              >
                Mensaje
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className={`group mt-2 inline-flex items-center justify-center gap-2 h-12 rounded-lg text-white text-sm font-semibold transition-all duration-300 disabled:opacity-50 ${
                sent
                  ? 'bg-emerald-500/20 border border-emerald-400/60 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.5)] hover:-translate-y-0.5'
              }`}
            >
              {sent ? (
                <>
                  <CheckIcon />
                  Mensaje enviado
                </>
              ) : submitting ? (
                'Enviando…'
              ) : (
                <>
                  Enviar mensaje
                  <ArrowIcon />
                </>
              )}
            </button>

            <p className="text-[11px] text-white/40 text-center mt-1">
              Al enviar, se abrirá WhatsApp con tu mensaje listo para confirmar.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
