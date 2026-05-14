import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://backbarberia1991.onrender.com/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (data.success) {
        setSuccess("Mensaje enviado correctamente");

        setForm({
          nombre: "",
          email: "",
          mensaje: "",
        });
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensaje"
            placeholder="Contame sobre tu proyecto..."
            rows={6}
            value={form.mensaje}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {success && <p className="success-message">{success}</p>}
        </form>
      </motion.div>
    </section>
  );
}
