import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  ChartNoAxesCombined,
  Code2,
  Gauge,
  LayoutDashboard,
  Settings2,
  Sparkles,
  Workflow,
} from "lucide-react";

const solutions = [
  { name: "Sistemas administrativos", detail: "Controlá clientes, operación y resultados desde un solo lugar.", icon: Settings2 },
  { name: "Reservas online", detail: "Agendas disponibles 24/7, confirmaciones y menos tareas manuales.", icon: CalendarCheck },
  { name: "Plataformas SaaS", detail: "Productos digitales sólidos, multiusuario y listos para escalar.", icon: Sparkles },
  { name: "Automatización", detail: "Conectamos procesos para ahorrar tiempo y reducir errores.", icon: Workflow },
  { name: "Sitios profesionales", detail: "Experiencias rápidas que comunican valor y convierten visitas.", icon: Code2 },
  { name: "Paneles de gestión", detail: "Información clara para decidir mejor y trabajar más rápido.", icon: LayoutDashboard },
  { name: "APIs y backend", detail: "La infraestructura segura que hace funcionar todo por detrás.", icon: Gauge },
  { name: "Productos escalables", detail: "Arquitectura pensada para acompañar el crecimiento del negocio.", icon: ChartNoAxesCombined },
];

export default function Tech() {
  return (
    <section className="relative overflow-hidden bg-[#07070a] px-5 py-24 text-white sm:px-6 md:py-32" id="services">
      <div className="absolute right-[-12rem] top-20 h-96 w-96 rounded-full bg-lime-300/[0.07] blur-[130px]" />
      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mb-14 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-300">Qué construimos</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Tecnología que trabaja para vos.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-400 lg:ml-auto">
            Desde la primera idea hasta un producto estable en producción.
            Elegimos la solución adecuada, eliminamos complejidad y construimos
            con foco en resultados.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ name, detail, icon: Icon }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative min-h-64 overflow-hidden rounded-[1.6rem] border p-6 transition duration-500 hover:-translate-y-1 ${
                index === 0 || index === 3
                  ? "border-lime-300/20 bg-lime-300/[0.07] lg:col-span-2"
                  : "border-white/[0.08] bg-white/[0.035] hover:border-violet-400/30"
              }`}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/0 blur-3xl transition group-hover:bg-violet-500/20" />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-lime-300">
                  <Icon size={22} />
                </span>
                <ArrowUpRight size={19} className="text-slate-700 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
              <h3 className="mt-12 text-xl font-bold">{name}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">{detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
