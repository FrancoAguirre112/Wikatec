import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Inicio from './components/Inicio'
import SLPage from './components/SLPage'
import SolucionesPage from './components/SolucionesPage'
import HardwarePage from './components/HardwarePage'
import NosotrosPage from './components/NosotrosPage'
import BeneficiosPage from './components/BeneficiosPage'
import ContactoPage from './components/ContactoPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#010A2B]" style={{ fontFamily: 'Raleway, sans-serif' }}>
        <Navbar />
        <div className="pt-[67px]">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/smart-lights" element={<SLPage />} />
            <Route path="/soluciones" element={<SolucionesPage />} />
            <Route path="/hardware" element={<HardwarePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/beneficios" element={<BeneficiosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center text-center py-32 px-6">
                <h1 className="text-white text-5xl font-bold mb-4">404</h1>
                <p className="text-gray-300 text-lg mb-8">Página no encontrada</p>
                <a href="/" className="text-white underline hover:opacity-80">Volver al inicio</a>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
