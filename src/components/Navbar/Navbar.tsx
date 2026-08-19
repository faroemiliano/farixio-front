import logo from "../../assets/logoFarixio.png";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#151927]/95 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Farixio, inicio">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm">
            <img src={logo} alt="" className="h-11 w-11 object-contain" />
          </span>
          <span className="text-lg font-extrabold tracking-[0.16em] text-white">FARIXIO</span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex" aria-label="Navegación principal">
          <a
            href="#projects"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Proyectos
          </a>

          <a
            href="#services"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Servicios
          </a>

          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Contacto
          </a>

          <a
            href="https://emiliano-faro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Portfolio
          </a>
        </nav>

        {/* Botón WhatsApp Desktop */}
        <a
          href="https://wa.me/541170612602"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-400 md:flex"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={17} /> WhatsApp
        </a>

        {/* Botón hamburguesa */}
        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090a0f]/95 md:hidden">
          <nav className="flex flex-col gap-3 p-6">
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-5 py-3 text-center font-medium text-slate-200 transition hover:bg-white/10"
            >
              Proyectos
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-5 py-3 text-center font-medium text-slate-200 transition hover:bg-white/10"
            >
              Servicios
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-5 py-3 text-center font-medium text-slate-200 transition hover:bg-white/10"
            >
              Contacto
            </a>

            <a
              href="https://emiliano-faro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-5 py-3 text-center font-medium text-slate-200 transition hover:bg-white/10"
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
