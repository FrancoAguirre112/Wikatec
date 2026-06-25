import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.121 0L22.28 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const LightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.998 15.998 0 01-3 0M9.75 18.5a18.05 18.05 0 01-5.25-1.5m15 0a18.05 18.05 0 01-5.25 1.5m-9-1.5l1.5-1.5m9 0l1.5 1.5M3 9a9 9 0 1118 0c0 3.483-1.978 6.504-4.872 8.012" />
  </svg>
)

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

const ChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
  </svg>
)

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)

const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
)

const navLinks = [
  { label: 'Inicio', href: '/', icon: HomeIcon, desc: 'Página principal' },
  { label: 'Smart Lights', href: '/smart-lights', icon: LightIcon, desc: 'Plataforma IoT' },
  { label: 'Soluciones', href: '/soluciones', icon: GridIcon, desc: '6 entornos' },
  { label: 'Hardware', href: '/hardware', icon: ChipIcon, desc: 'Equipamiento' },
  { label: 'Beneficios', href: '/beneficios', icon: ChartIcon, desc: 'Impacto medible' },
  { label: 'Nosotros', href: '/nosotros', icon: TeamIcon, desc: 'Quiénes somos' },
  { label: 'Contacto', href: '/contacto', icon: MailIcon, desc: 'Hablemos', cta: true },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#172555]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[67px]">

        <Link to="/" onClick={() => setMenuOpen(false)} className="relative z-[60]">
          <img src="/images/logo-kiwatec.png" alt="Kiwatec" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`text-[16px] transition-colors ${
                  location.pathname === link.href
                    ? 'text-white font-bold'
                    : 'text-gray-300 font-medium hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburguesa — solo mobile */}
        <button
          className="md:hidden relative z-[60] flex flex-col justify-center items-center gap-[6px] w-10 h-10 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-7 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-7 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-7 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </div>

      {/* Menú mobile fullscreen drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[67px] z-40 transition-all duration-400 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop with dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030C40] via-[#0a1450] to-[#172555]" />
        {/* Subtle dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(147,197,253,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Soft glow accents */}
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-400/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />

        {/* Menu content */}
        <div className="relative z-10 h-full overflow-y-auto px-6 py-6 flex flex-col">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.32em] text-blue-300/70 mb-4">
            Navegación
          </p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href
              const Icon = link.icon
              const isCta = link.cta
              return (
                <li
                  key={link.label}
                  style={{
                    transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: menuOpen ? 1 : 0,
                    transition: `opacity 400ms cubic-bezier(0.22,1,0.36,1) ${
                      80 + i * 50
                    }ms, transform 500ms cubic-bezier(0.22,1,0.36,1) ${
                      80 + i * 50
                    }ms`,
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/20 to-blue-400/5 border border-blue-400/40 shadow-[0_0_0_1px_rgba(96,165,250,0.2)]'
                        : isCta
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 border border-blue-400/40 shadow-[0_8px_24px_rgba(59,130,246,0.35)]'
                        : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        isActive
                          ? 'bg-blue-400/25 text-blue-200 ring-1 ring-blue-300/40'
                          : isCta
                          ? 'bg-white/15 text-white ring-1 ring-white/25'
                          : 'bg-white/5 text-blue-300/85 ring-1 ring-white/10 group-hover:bg-blue-400/15 group-hover:text-blue-200'
                      } transition-all`}
                    >
                      <Icon />
                    </span>
                    <div className="flex-1 flex flex-col">
                      <span
                        className={`font-bold text-[15px] leading-tight ${
                          isActive || isCta ? 'text-white' : 'text-white/90'
                        }`}
                      >
                        {link.label}
                      </span>
                      <span
                        className={`text-[11.5px] mt-0.5 ${
                          isCta ? 'text-white/80' : 'text-white/45'
                        }`}
                      >
                        {link.desc}
                      </span>
                    </div>
                    <span
                      className={`flex h-7 w-7 items-center justify-center transition-all ${
                        isActive || isCta
                          ? 'text-white/90'
                          : 'text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5'
                      }`}
                    >
                      <ChevronIcon />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Footer info */}
          <div className="mt-auto pt-8 flex flex-col gap-2 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-blue-300/60">
              Iluminación inteligente
            </p>
            <p className="text-[11px] text-white/40">
              info@kiwatec.net
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
