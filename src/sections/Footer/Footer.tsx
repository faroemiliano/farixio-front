export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-16 md:flex-row">
        <div className="max-w-md">
          <h2 className="mb-4 text-3xl font-bold tracking-wider bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            FARIXIO
          </h2>

          <p className="leading-7 text-slate-400">
            Desarrollo de productos digitales, plataformas SaaS y experiencias
            web modernas.
          </p>
        </div>

        <nav className="flex flex-col gap-4 text-slate-300">
          <a href="#projects" className="transition hover:text-violet-400">
            Proyectos
          </a>

          <a href="#services" className="transition hover:text-violet-400">
            Servicios
          </a>

          <a href="#contact" className="transition hover:text-violet-400">
            Contacto
          </a>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6">
          <p className="text-sm text-slate-500">
            © 2026 Farixio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
