import { motion } from "framer-motion";

const solutions = [
  "Sistemas administrativos",
  "Reservas online",
  "Plataformas SaaS",
  "Dashboards modernos",
  "Automatización de procesos",
  "Sitios web profesionales",
  "Paneles de gestión",
  "APIs y backend",
  "Experiencias web modernas",
  "Productos digitales escalables",
];

export default function Tech() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white" id="services">
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

          <h2 className="mx-auto max-w-3xl text-4xl font-bold md:text-5xl">
            Desarrollo productos digitales modernos para negocios
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-lg font-medium backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-violet-500/10"
            >
              {solution}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
