import { useReveal } from '../hooks/useReveal'

const MODELOS = ['KSL-119', 'KSL-122', 'KGT-220L', 'KCT-220L', 'KCT-220C']

export default function HardwareDescripcion() {
  const ref = useReveal()
  return (
    <section className="relative w-full flex items-center justify-center px-6 py-16 md:py-20 bg-gradient-to-b from-[#030C40] to-[#172555] overflow-hidden">
      {/* Blueprint grid bg — technical engineering aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(147,197,253,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Soft blue glow center */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-32 rounded-full bg-blue-400/8 blur-3xl" />

      <div ref={ref} className="relative max-w-3xl w-full flex flex-col items-center text-center gap-5">
        <p className="r-reveal text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-300/85">
          Línea Hardware
        </p>
        <h2 className="r-reveal text-white font-bold text-[24px] md:text-[34px] leading-[1.15]">
          Equipamiento confiable, de alta calidad en{' '}
          <span className="text-blue-300">diseño y prestaciones</span>
        </h2>
        <p className="r-reveal text-white/85 font-normal text-sm md:text-base leading-[170%] max-w-2xl">
          Cada componente de nuestra línea de hardware — desde luminarias LED
          hasta controladores y gateways IoT — fue desarrollado para integrarse
          con Smart Lights y funcionar de forma estable en entornos exigentes.
          Alta eficiencia, comunicación confiable y de fácil instalación.
        </p>
        {/* Model code chips — mono font, engineering spec aesthetic */}
        <div className="r-reveal flex flex-wrap items-center justify-center gap-2 mt-2">
          {MODELOS.map((m, i) => (
            <span
              key={m}
              className="group inline-flex items-center gap-2 rounded-md bg-white/[0.04] border border-white/12 px-3 py-1.5 font-mono text-[11.5px] text-white/85 backdrop-blur-sm hover:border-white/25 transition-colors"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0
                    ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)] animate-pulse'
                    : 'bg-blue-400/60'
                }`}
              />
              {m}
            </span>
          ))}
        </div>
        <p className="r-reveal text-[11px] text-white/40 uppercase tracking-[0.24em] mt-1">
          5 modelos · LoRaWAN &amp; 4G
        </p>
      </div>
    </section>
  )
}
