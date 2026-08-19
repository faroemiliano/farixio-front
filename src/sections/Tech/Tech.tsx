import { motion } from "framer-motion";
import { CalendarCheck, ChartNoAxesCombined, Code2, Gauge, LayoutDashboard, Settings2, Sparkles, Workflow } from "lucide-react";

const solutions = [
  { name: "Sistemas administrativos", icon: Settings2 },
  { name: "Reservas online", icon: CalendarCheck },
  { name: "Plataformas SaaS", icon: Sparkles },
  { name: "Automatización de procesos", icon: Workflow },
  { name: "Sitios web profesionales", icon: Code2 },
  { name: "Paneles de gestión", icon: LayoutDashboard },
  { name: "APIs y backend", icon: Gauge },
  { name: "Productos digitales escalables", icon: ChartNoAxesCombined },
];

export default function Tech() {
  return (
    <section className="bg-[#06070a] px-5 py-24 text-white sm:px-6 md:py-32" id="services">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Soluciones
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Tecnología que se adapta a tu forma de trabajar
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">Desde la primera idea hasta un producto estable en producción, con foco en simplicidad, velocidad y resultados.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/[0.08]"
            >
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white"><Icon size={21} /></span>
              <span className="text-lg font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
