import "./Tech.css";
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
    <motion.div
      className="teach-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="tech-header">
        <p className="tech-subtitle">Soluciones</p>

        <h2 className="tech-title">
          Desarrollo productos digitales modernos para negocios
        </h2>
      </div>

      <div className="tech-grid">
        {solutions.map((solution) => (
          <div className="tech-card" key={solution}>
            {solution}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
