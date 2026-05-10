import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          Construyo
          <span> productos web </span>
          modernos y escalables
        </h1>

        <p className="hero-description">
          Desarrollo plataformas Full Stack, sistemas SaaS, dashboards y
          experiencias web modernas utilizando React, TypeScript y Python.
        </p>

        <div className="hero-buttons">
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>1+</h3>
              <p>Producto funcionando</p>
            </div>

            <div className="hero-stat">
              <h3>Full Stack</h3>
              <p>Frontend + Backend</p>
            </div>

            <div className="hero-stat">
              <h3>SaaS</h3>
              <p>Arquitectura escalable</p>
            </div>
          </div>
          <button className="hero-primary-btn">Ver proyectos</button>

          <button className="hero-secondary-btn">Contactar</button>
        </div>
      </motion.div>
    </section>
  );
}
