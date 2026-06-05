const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
    className="w-8 h-8 md:w-10 md:h-10"
  >
    {children}
  </svg>
)

const razones = [
  {
    id: 1,
    titulo: 'Ahorro energético',
    resumen: 'Hasta 70% menos consumo con LED + dimmerizado inteligente.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </Icon>
    ),
  },
  {
    id: 2,
    titulo: 'Reparaciones más rápidas',
    resumen: 'Detección en tiempo real con ubicación exacta de cada falla.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </Icon>
    ),
  },
  {
    id: 3,
    titulo: 'Menor costo técnico',
    resumen: 'Mantenimiento planificado, menos intervenciones reactivas.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </Icon>
    ),
  },
  {
    id: 4,
    titulo: 'Modernización visible',
    resumen: 'Mejor calidad lumínica e impacto concreto para la comunidad.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </Icon>
    ),
  },
  {
    id: 5,
    titulo: 'Menor huella de carbono',
    resumen: 'Menos CO₂ emitido y metas ambientales medibles.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </Icon>
    ),
  },
  {
    id: 6,
    titulo: 'Gestión centralizada',
    resumen: 'Toda la red desde una sola plataforma, en tiempo real.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        <circle cx="6" cy="6.75" r="1" fill="currentColor" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="6" cy="17.25" r="1" fill="currentColor" />
      </Icon>
    ),
  },
  {
    id: 7,
    titulo: 'Mayor vida útil',
    resumen: 'Ciclos precisos reducen el estrés térmico de las luminarias LED.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M9 12.75L11.25 15 15 9.75m6 0c0 1.268-.063 2.522-.187 3.757a17.857 17.857 0 01-2.158 6.066c-1.295 1.927-3.157 3.59-5.39 4.523M3 12c0 1.268.063 2.522.187 3.757a17.857 17.857 0 002.158 6.066c1.295 1.927 3.157 3.59 5.39 4.523M12 3a11.95 11.95 0 018.31 3.33A11.95 11.95 0 0112 21a11.95 11.95 0 01-8.31-14.67A11.95 11.95 0 0112 3z" />
      </Icon>
    ),
  },
  {
    id: 8,
    titulo: 'Mayor seguridad',
    resumen: 'Sin zonas oscuras ni lámparas quemadas sin atender.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </Icon>
    ),
  },
  {
    id: 9,
    titulo: 'Datos para decidir',
    resumen: 'Histórico de consumo y fallas para planificar inversiones.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </Icon>
    ),
  },
  {
    id: 10,
    titulo: 'Adaptable a eventos',
    resumen: 'Reprogramá la red desde la plataforma en minutos.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </Icon>
    ),
  },
]

export default function BeneficiosRazones() {
  return (
    <section
      id="razones-smart-lights"
      className="w-full py-12 md:py-20 px-6 bg-[linear-gradient(180deg,#172555_0%,#030C40_100%)] scroll-mt-[67px]"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
          <h2 className="text-white font-bold text-[24px] md:text-[34px] leading-tight">
            10 razones para elegir Kiwatec Smart Lights
          </h2>
          <p className="text-white/70 font-normal text-sm md:text-base leading-[170%]">
            El impacto concreto de pasar a una red lumínica inteligente: ahorro, control y sustentabilidad medibles desde el primer día.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {razones.map((r) => (
            <div
              key={r.id}
              className="group relative flex flex-col items-center text-center gap-3 p-5 md:p-6 bg-gradient-to-b from-[#010729] to-[#182860] border border-white/15 rounded-[18px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
            >
              <span className="absolute top-3 right-3 text-white/35 font-bold text-[12px] tracking-wide">
                {String(r.id).padStart(2, '0')}
              </span>

              <div className="text-white/85 group-hover:text-white transition-colors">
                {r.icon}
              </div>

              <h3 className="text-white font-bold text-[14px] md:text-[15px] leading-tight">
                {r.titulo}
              </h3>

              <p className="text-white/75 font-normal text-[12.5px] md:text-[13px] leading-[160%]">
                {r.resumen}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
