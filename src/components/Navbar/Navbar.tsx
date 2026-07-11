import logo from "../../assets/logoFarixio.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <img src={logo} alt="Farixio" className="h-30 w-auto object-contain" />

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#projects"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white hover:bg-violet-700"
          >
            Proyectos
          </a>

          <a
            href="#services"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white hover:bg-violet-700"
          >
            Servicios
          </a>

          <a
            href="#contact"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white hover:bg-violet-700"
          >
            Contacto
          </a>

          <a
            href="https://emiliano-faro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white hover:bg-violet-700"
          >
            Portfolio
          </a>
        </nav>

        {/* Botón WhatsApp Desktop */}
        <a
          href="https://wa.me/541170612602"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700 md:block"
        >
          WhatsApp
        </a>

        {/* Botón hamburguesa */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={30} className="text-violet-700" />
          ) : (
            <Menu size={30} className="text-violet-700" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col gap-3 p-6">
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-center font-medium text-white transition hover:bg-violet-700"
            >
              Proyectos
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-center font-medium text-white transition hover:bg-violet-700"
            >
              Servicios
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-center font-medium text-white transition hover:bg-violet-700"
            >
              Contacto
            </a>

            <a
              href="https://emiliano-faro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-center font-medium text-white transition hover:bg-violet-700"
            >
              Portfolio
            </a>

            <a
              href="https://wa.me/541170612602"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-medium text-white transition hover:bg-emerald-700"
            >
              Contactame por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
