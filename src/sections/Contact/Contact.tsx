import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
    setError("");
    setSuccess("");

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

      if (!response.ok) throw new Error("No se pudo enviar el mensaje");
      const data = await response.json();

      if (data.success) {
        setSuccess("Mensaje enviado correctamente");

        setForm({
          nombre: "",
          email: "",
          mensaje: "",
        });
      }
    } catch {
      setError("No se pudo enviar. Probá nuevamente o escribime por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090b14] px-5 py-24 text-white sm:px-6 md:py-32"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
              Contacto
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Tenés una idea? Hagámosla realidad.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Contame qué querés construir, mejorar o automatizar. Te respondo
              con una propuesta clara y próximos pasos.
            </p>

            <div className="mt-9 flex flex-col gap-3">
              <a
                href="mailto:farixio.tech@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-medium transition hover:border-violet-400/40 hover:bg-white/[0.07]"
              >
                <Mail size={19} className="text-violet-300" />{" "}
                farixio.tech@gmail.com
              </a>

              <a
                href="https://wa.me/541170612602"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-medium transition hover:border-emerald-400/40 hover:bg-white/[0.07]"
              >
                <MessageCircle size={19} className="text-emerald-300" />{" "}
                Escribime por WhatsApp
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-md sm:p-8"
          >
            <div className="text-left">
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="¿Cómo te llamás?"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-slate-600 focus:border-violet-500"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-slate-600 focus:border-violet-500"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Sobre tu proyecto
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Contame sobre tu proyecto..."
                rows={6}
                value={form.mensaje}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 outline-none transition placeholder:text-slate-600 focus:border-violet-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensaje <ArrowRight size={18} />
                </>
              )}
            </button>

            {success && (
              <p
                role="status"
                className="text-center font-medium text-emerald-400"
              >
                {success}
              </p>
            )}
            {error && (
              <p
                role="alert"
                className="text-center text-sm font-medium text-red-300"
              >
                {error}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
