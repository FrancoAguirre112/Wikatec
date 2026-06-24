/**
 * Fila horizontal con swipe libre + snap para mobile. Los hijos
 * deben llevar `shrink-0` + ancho (ej. `w-[82%]`) + `snap-center`.
 * Scrollbar oculta. Sangra a los bordes con -mx-6 para full-bleed.
 */
export default function SwipeRow({ children, className = '' }) {
  return (
    <div
      className={`-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  )
}
