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
    <section id="contact" className="bg-[#070b17] px-6 py-24 text-white">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
          Contacto
        </p>

        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Construyamos algo increíble
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
          Si tenés un proyecto en mente, no dudes en contactarme.
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:faroemilianotech@gmail.com"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700"
          >
            Enviar email
          </a>

          <a
            href="https://wa.me/541170612602"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-500 hover:text-white"
          >
            WhatsApp
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-violet-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-violet-500"
          />

          <textarea
            name="mensaje"
            placeholder="Contame sobre tu proyecto..."
            rows={6}
            value={form.mensaje}
            onChange={handleChange}
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-violet-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {success && (
            <p className="text-center font-medium text-emerald-400">
              {success}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
