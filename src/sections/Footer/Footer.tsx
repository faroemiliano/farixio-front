import logo from "../../assets/logoFarixio.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06070a] text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-16 md:flex-row">
        <div className="max-w-md">
          <a href="#top" className="mb-5 flex w-fit items-center gap-3" aria-label="Farixio, volver al inicio">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm">
              <img src={logo} alt="" className="h-13 w-13 object-contain" />
            </span>
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-2xl font-bold tracking-[0.16em] text-transparent">
              FARIXIO
            </span>
          </a>

          <p className="leading-7 text-slate-400">
            Desarrollo de productos digitales, plataformas SaaS y experiencias
            web modernas.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Buenos Aires, Argentina · Servicios remotos
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Farixio. Todos los derechos reservados.
          </p>

          <a
            href="https://hits.sh/www.farixio.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver estadísticas públicas de visitas de Farixio"
            className="opacity-80 transition hover:opacity-100"
          >
            <img
              src="https://hits.sh/www.farixio.com.svg?style=flat&label=visitas&color=7c3aed&labelColor=0f172a"
              alt="Contador de visitas de Farixio"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
