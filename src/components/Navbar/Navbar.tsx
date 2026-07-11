import logo from "../../assets/logoFarixio.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <img
            src={logo}
            alt="Farixio"
            className="h-30 w-auto object-contain"
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#projects"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
          >
            Proyectos
          </a>

          <a
            href="#services"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
          >
            Servicios
          </a>

          <a
            href="#contact"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
          >
            Contacto
          </a>
          <a
            href="https://emiliano-faro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
          >
            Portfolio
          </a>
        </nav>

        <a
          href="https://wa.me/541170612602"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
        >
          Contactame por WhatsApp
        </a>
      </div>
    </header>
  );
}
