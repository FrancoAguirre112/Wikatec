import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center text-center bg-[#030C40] h-[270px] gap-[25px] pb-20 md:pb-0">
      <Link to="/" className="flex flex-col items-center gap-2">
        <img
          src="/images/logo-kiwatec.png"
          alt="Kiwatec"
          className="h-[87px] w-auto"
        />
      </Link>

      <div className="text-white text-[12px] leading-[15px] space-y-1 font-['Raleway']">
        <p>
          <a
            href="https://wa.me/5491165006000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tel: +54911-6500-6000
          </a>
          {' - '}
          <a
            href="mailto:info@kiwatec.net"
            className="hover:underline"
          >
            info@kiwatec.net
          </a>
        </p>
        <p>Melian 3552 2A - Buenos Aires - Argentina</p>
      </div>
    </footer>
  )
}
