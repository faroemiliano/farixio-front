import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  LayoutDashboard,
  Sparkles,
  Workflow,
} from "lucide-react";

const highlights = ["Estrategia", "Diseño", "Desarrollo", "Lanzamiento"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-[#07070a] px-5 pb-20 pt-32 text-white sm:px-6 lg:pt-40"
    >
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="absolute left-[8%] top-24 -z-10 h-80 w-80 rounded-full bg-violet-600/25 blur-[130px]" />
      <div className="absolute right-[5%] top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 pr-4 text-sm text-slate-300 backdrop-blur-xl">
              <span className="rounded-full bg-lime-300 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0b0d09]">
                Disponible
              </span>
              Nuevos proyectos · 2026
            </div>

            <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6.8rem)] font-black leading-[0.91] tracking-[-0.065em]">
              Tu negocio,
              <span className="block text-slate-500">mejor conectado.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
              Diseñamos sistemas, plataformas y experiencias digitales que
              simplifican procesos y convierten ideas en crecimiento real.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 font-bold text-[#0b0d09] shadow-[0_18px_60px_rgba(190,242,100,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-lime-200"
              >
                Empezar un proyecto
                <ArrowUpRight size={19} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                Explorar trabajos
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              {highlights.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={15} className="text-lime-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[580px]"
          >
            <div className="absolute -inset-10 -z-10 rounded-full bg-violet-500/15 blur-[100px]" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101116]/90 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lime-300/70" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                  Farixio / Studio
                </span>
              </div>

              <div className="grid gap-3 rounded-[1.4rem] bg-[#090a0e] p-4 sm:grid-cols-2 sm:p-5">
                <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-violet-500/20 to-transparent p-5 sm:row-span-2">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-400 text-[#10091e]">
                    <LayoutDashboard size={21} />
                  </span>
                  <p className="mt-16 text-xs uppercase tracking-[0.24em] text-violet-300">Producto</p>
                  <h2 className="mt-2 text-2xl font-bold leading-tight">Todo tu negocio en una sola plataforma.</h2>
                  <div className="mt-6 flex items-end gap-2">
                    {[38, 60, 48, 82, 70, 96].map((height, index) => (
                      <span
                        key={height + index}
                        className="w-full rounded-t-md bg-violet-400/70"
                        style={{ height }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300"><Workflow size={20} /></span>
                    <Sparkles size={18} className="text-lime-300" />
                  </div>
                  <p className="mt-7 text-3xl font-black tracking-tight">+ simple</p>
                  <p className="mt-1 text-sm text-slate-500">Procesos automatizados</p>
                </div>

                <div className="rounded-2xl border border-lime-300/15 bg-lime-300/[0.07] p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-[#11150b]"><Code2 size={20} /></span>
                  <p className="mt-7 font-bold">Tecnología a medida</p>
                  <p className="mt-1 text-sm text-slate-500">Lista para crecer con vos</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-3 rounded-2xl border border-white/10 bg-[#17181e]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-10"
            >
              <p className="text-xs text-slate-500">En producción</p>
              <p className="mt-1 text-xl font-black"><span className="text-lime-300">04</span> productos</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-28 border-y border-white/[0.08] py-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.32em] text-slate-600">
            SaaS <span className="mx-4 text-violet-500">✦</span> E-commerce <span className="mx-4 text-cyan-500">✦</span> Automatización <span className="mx-4 text-lime-400">✦</span> Sistemas de gestión
          </p>
        </div>
      </div>
    </section>
  );
}
