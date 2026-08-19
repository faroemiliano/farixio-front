import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[820px] items-center justify-center overflow-hidden bg-[#06070a] px-5 pb-20 pt-32 text-white sm:px-6"
    >
      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      {/* Glow */}
      <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute right-[-120px] bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
      >
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-2 text-sm font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          Disponible para nuevos proyectos
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          Transformamos ideas en{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            productos web
          </span>{" "}
          que hacen crecer tu negocio
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
          Diseño y desarrollo plataformas, sistemas de gestión y experiencias
          digitales rápidas, claras y listas para escalar.
        </p>

        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 font-semibold text-white shadow-[0_12px_40px_rgba(124,58,237,0.3)] transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            Ver proyectos{" "}
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            Contame tu idea
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          {["Desarrollo a medida", "Diseño responsive", "Soporte continuo"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-violet-400" />
                {item}
              </span>
            ),
          )}
        </div>

        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] sm:grid-cols-3">
          <div className="p-7 sm:border-r sm:border-white/10">
            <h3 className="text-4xl font-bold text-violet-400">2+</h3>
            <p className="mt-2 text-sm text-slate-400">
              Productos en producción
            </p>
          </div>

          <div className="border-y border-white/10 p-7 sm:border-y-0 sm:border-r">
            <h3 className="text-3xl font-bold text-cyan-400">Full Stack</h3>
            <p className="mt-2 text-sm text-slate-400">Frontend + backend</p>
          </div>

          <div className="p-7">
            <h3 className="text-4xl font-bold text-emerald-400">SaaS</h3>
            <p className="mt-2 text-sm text-slate-400">
              Arquitecturas escalables
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
