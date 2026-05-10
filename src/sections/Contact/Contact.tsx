import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="contact-subtitle">Contacto</p>

        <h2 className="contact-title">Construyamos algo increíble</h2>

        <p className="contact-description">
          Estoy disponible para desarrollar plataformas, sistemas SaaS,
          dashboards y soluciones Full Stack modernas.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:faroemilianotech@gmail.com"
            className="contact-primary-btn"
          >
            Enviar email
          </a>

          <a
            href="https://wa.me/5548991072909"
            target="_blank"
            className="contact-secondary-btn"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
