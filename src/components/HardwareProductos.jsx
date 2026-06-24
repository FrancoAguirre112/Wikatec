import { useReveal } from '../hooks/useReveal'
import SmoothImage from './SmoothImage'

const productos = [
  { id: 1, nombre: 'Línea KSL-119', descripcion: '100W, 150W y 200W', imagen: '/images/hw-ksl119.png', ficha: '/fichas/ksl119.pdf' },
  { id: 2, nombre: 'Línea KSL-122', descripcion: '50W, 60W, 100W, 150W y 200W', imagen: '/images/hw-ksl122.png', ficha: '/fichas/ksl122.pdf' },
  { id: 3, nombre: 'Gateway LoraWAN', descripcion: 'KGT-220L', imagen: '/images/hw-gateway.png', ficha: '/fichas/kgt220l.pdf' },
  { id: 4, nombre: 'Controlador LoraWan', descripcion: 'KCT-220L', imagen: '/images/hw-controlador-lorawan.png', ficha: '/fichas/kct220l.pdf' },
  { id: 5, nombre: 'Controlador 4G', descripcion: 'KCT-220C', imagen: '/images/hw-controlador-4g.png', ficha: '/fichas/ct220c.pdf' },
]

function ProductCard({ producto }) {
  return (
    <div className="r-reveal group relative flex flex-col items-center text-center p-6 w-full md:w-[220px] bg-gradient-to-b from-[#0D1640] to-[#0A1133] border border-white/15 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-blue-300/40 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]">
      <div className="relative w-[140px] h-[140px] flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-blue-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <SmoothImage
          src={producto.imagen}
          alt={producto.nombre}
          width={140}
          height={140}
          className="relative w-[140px] h-[140px] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="w-full border-t border-white/20 mt-4" />
      <div className="flex-1 flex flex-col justify-center py-4">
        <p className="text-white font-bold text-[16px]">{producto.nombre}</p>
        <p className="text-white/70 font-normal text-[14px] mt-1">{producto.descripcion}</p>
      </div>
      <div className="w-full border-t border-white/20" />
      <a
        href={producto.ficha}
        target="_blank"
        rel="noreferrer"
        className="group/btn inline-flex items-center justify-center gap-2 w-full md:w-[180px] h-[36px] bg-[#0A1233] border border-white/30 rounded-lg text-white text-[13px] font-semibold hover:bg-[#030C40] hover:border-blue-300/50 transition-all duration-300 mt-4"
      >
        Descargar ficha
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </div>
  )
}

export default function HardwareProductos() {
  const ref = useReveal()
  return (
    <section ref={ref} className="relative w-full py-16 md:py-20 px-6 bg-[#141E4B] overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-blue-400/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/3 h-80 w-80 rounded-full bg-sky-300/8 blur-3xl" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="md:hidden w-full flex flex-col gap-6">
          {productos.map((p) => <ProductCard key={p.id} producto={p} />)}
        </div>

        <div className="hidden md:flex flex-col items-center gap-8 w-full">
          <div className="flex justify-center gap-8">
            {productos.slice(0, 3).map((p) => <ProductCard key={p.id} producto={p} />)}
          </div>
          <div className="flex justify-center gap-8">
            {productos.slice(3).map((p) => <ProductCard key={p.id} producto={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
