import logo from "../../assets/logoFarixio.png";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b0c10]/80 px-4 shadow-[0_14px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Farixio, inicio">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">
            <img src={logo} alt="" className="h-9 w-9 object-contain" />
          </span>
          <span className="text-lg font-extrabold tracking-[0.16em] text-white">FARIXIO</span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
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
          className="hidden items-center gap-2 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-[#0b0d09] transition hover:-translate-y-0.5 hover:bg-lime-200 md:flex"
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
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#090a0f]/95 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3 p-5">
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
              className="rounded-xl bg-lime-300 px-5 py-3 text-center font-bold text-[#0b0d09] transition hover:bg-lime-200"
            >
              Contactame por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
