import "./Products.css";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <section className="products" id="projects">
      <div className="products-header">
        <p className="products-subtitle">Producto destacado</p>

        <h2 className="products-title">
          Plataforma moderna para gestión de barberías
        </h2>
      </div>
      <motion.div
        className="featured-project"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="featured-image-container">
          <img
            src="{barberDashboard}"
            alt="Dashboard Barberías"
            className="featured-image"
          />
        </div>

        <div className="featured-content">
          <div className="featured-tag">SaaS Multi Tenant</div>

          <h3>Sistema completo de reservas y administración</h3>

          <p>
            Plataforma desarrollada para digitalizar la gestión de barberías
            mediante reservas online, paneles administrativos y personalización
            por negocio.
          </p>

          <div className="featured-features">
            <div className="feature-item">✓ Reservas online</div>

            <div className="feature-item">✓ Panel administrativo</div>

            <div className="feature-item">✓ Multi negocio</div>

            <div className="feature-item">✓ Gestión de usuarios</div>

            <div className="feature-item">✓ Dashboard y métricas</div>

            <div className="feature-item">✓ Personalización visual</div>
          </div>

          <div className="featured-buttons">
            <button className="featured-primary-btn">Ver proyecto</button>

            <button className="featured-secondary-btn">Contactar</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
