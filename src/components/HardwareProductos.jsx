const productos = [
  { id: 1, nombre: 'Línea KSL-119', descripcion: '100W, 150W y 200W', imagen: '/images/hw-ksl119.png', ficha: '/fichas/ksl119.pdf' },
  { id: 2, nombre: 'Línea KSL-122', descripcion: '50W, 60W, 100W, 150W y 200W', imagen: '/images/hw-ksl122.png', ficha: '/fichas/ksl122.pdf' },
  { id: 3, nombre: 'Gateway LoraWAN', descripcion: 'KGT-220L', imagen: '/images/hw-gateway.png', ficha: '/fichas/kgt220l.pdf' },
  { id: 4, nombre: 'Controlador LoraWan', descripcion: 'KCT-220L', imagen: '/images/hw-controlador-lorawan.png', ficha: '/fichas/kct220l.pdf' },
  { id: 5, nombre: 'Controlador 4G', descripcion: 'CT-220C', imagen: '/images/hw-controlador-4g.png', ficha: '/fichas/ct220c.pdf' },
]

function ProductCard({ producto }) {
  return (
    <div className="flex flex-col items-center text-center p-6 w-full md:w-[220px] bg-[#0D1640] border border-white rounded-2xl">
      <img src={producto.imagen} alt={producto.nombre} className="w-[140px] h-[140px] object-contain" />
      <div className="w-full border-t border-white mt-4" />
      <div className="flex-1 flex flex-col justify-center py-4">
        <p className="text-white font-bold text-[16px]">{producto.nombre}</p>
        <p className="text-white font-normal text-[14px] mt-1">{producto.descripcion}</p>
      </div>
      <div className="w-full border-t border-white" />
      <a
        href={producto.ficha}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center w-full md:w-[160px] h-[34px] bg-[#0A1233] border border-white/50 rounded-lg text-white text-[13px] font-semibold hover:bg-[#030C40] transition-colors mt-4"
      >
        Descargar ficha técnica
      </a>
    </div>
  )
}

export default function HardwareProductos() {
  return (
    <section className="w-full py-12 md:py-16 px-6 bg-[#141E4B]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        <div className="block md:hidden w-full flex flex-col gap-6">
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
