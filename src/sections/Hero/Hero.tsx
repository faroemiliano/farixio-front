import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 text-white">
      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute right-[-120px] bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
      >
        <span className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
          Full Stack Developer • React • TypeScript • Python
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Construyo{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            productos web
          </span>{" "}
          modernos y escalables
        </h1>

        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-4xl font-bold text-violet-400">2+</h3>
            <p className="mt-2 text-slate-300">Producto funcionando</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-4xl font-bold text-cyan-400">Full Stack</h3>
            <p className="mt-2 text-slate-300">Frontend + Backend</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-4xl font-bold text-emerald-400">SaaS</h3>
            <p className="mt-2 text-slate-300">Arquitectura escalable</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
