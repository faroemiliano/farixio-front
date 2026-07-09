import { motion } from "framer-motion";
import { useState } from "react";
import gestionClientes from "../../assets/barberia/gestionClientes.png";
import gestionGanancias from "../../assets/barberia/gestionGanancias.png";
import inicioSite from "../../assets/barberia/inicioSite.png";
import loginAdmin from "../../assets/barberia/loginAdmin.png";
import loginCliente from "../../assets/barberia/loginCliente.png";
import misTurnosCliente from "../../assets/barberia/misTurnosCliente.png";
import registroManual from "../../assets/barberia/registroManual.png";
import reservaTurno from "../../assets/barberia/reservaTurno.png";
import serviciosPrecios from "../../assets/barberia/serviciosPrecios.png";
import turnosAdmin from "../../assets/barberia/turnosAdmin.png";

import crearProfesional from "../../assets/estetica/crearProfesional.png";
import crearServicio from "../../assets/estetica/crearServicio.png";
import esteticaLanding from "../../assets/estetica/esteticaLanding.png";
import horarioEstetica from "../../assets/estetica/horarioEstetica.png";
import listaClientes from "../../assets/estetica/listaClientes.png";
import misTurnosClient from "../../assets/estetica/misTurnosClient.png";
import obtenerDiaHora from "../../assets/estetica/obtenerDiaHora.png";
import obtenerServicio from "../../assets/estetica/obtenerServicio.png";
import panelAdmin from "../../assets/estetica/panelAdmin.png";
import reservarTurno from "../../assets/estetica/reservarTurno.png";
import verConfirmarTurnos from "../../assets/estetica/verConfirmarTurnos.png";

export default function Products() {
  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const proyectos = [
    {
      tag: "SaaS Multi Tenant",
      title: "Sistema para Barberías",
      description:
        "Plataforma desarrollada para digitalizar la gestión de barberías mediante reservas online y paneles administrativos.",
      features: [
        "Reservas online",
        "Panel administrativo",
        "Multi negocio",
        "Gestión de usuarios",
        "Dashboard y métricas",
        "Personalización visual",
      ],
      images: [
        gestionClientes,
        gestionGanancias,
        inicioSite,
        loginAdmin,
        loginCliente,
        misTurnosCliente,
        registroManual,
        reservaTurno,
        serviciosPrecios,
        turnosAdmin,
      ],
    },
    {
      tag: "Agenda Estetica",
      title: "Sistema para Estéticas",
      description:
        "Plataforma para centros de estética con gestión de profesionales, servicios y turnos.",
      features: [
        "Profesionales",
        "Calendario",
        "Servicios",
        "Clientes",
        "Cobros",
        "Configuración",
      ],
      images: [
        crearProfesional,
        crearServicio,
        esteticaLanding,
        horarioEstetica,
        listaClientes,
        misTurnosClient,
        obtenerDiaHora,
        obtenerServicio,
        panelAdmin,
        reservarTurno,
        verConfirmarTurnos,
      ],
    },
  ];

  const proyectoActual = proyectos[current];

  return (
    <section id="projects" className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Producto destacado
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold md:text-5xl">
            {proyectoActual.title}
          </h2>
        </div>

        <motion.div
          className="grid items-center gap-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg lg:grid-cols-2"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl border border-white/10 bg-[#111111] p-4 shadow-2xl">
            {/* Barra del navegador */}
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <div className="ml-4 flex-1 rounded-full bg-[#1d1d1d] px-4 py-1 text-center text-xs text-gray-500">
                farixio.app
              </div>
            </div>

            {/* Imagen */}
            <div className="overflow-hidden rounded-2xl bg-black">
              <img
                src={proyectoActual.images[currentImage]}
                alt={proyectoActual.title}
                className="w-full transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() =>
                setCurrentImage(
                  (currentImage - 1 + proyectoActual.images.length) %
                    proyectoActual.images.length,
                )
              }
              className="rounded-full border border-white/20 px-3 py-2 hover:bg-white/10"
            >
              ←
            </button>

            {proyectoActual.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  currentImage === index ? "bg-violet-500" : "bg-white/30"
                }`}
              />
            ))}

            <button
              onClick={() =>
                setCurrentImage(
                  (currentImage + 1) % proyectoActual.images.length,
                )
              }
              className="rounded-full border border-white/20 px-3 py-2 hover:bg-white/10"
            >
              →
            </button>
          </div>

          <div>
            <span className="rounded-full bg-violet-600/20 px-4 py-2 text-sm font-semibold text-violet-300">
              {proyectoActual.tag}
            </span>

            <h3 className="mt-6 text-3xl font-bold">{proyectoActual.title}</h3>

            <p className="mt-5 leading-8 text-slate-300">
              {proyectoActual.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-slate-200">
              {proyectoActual.features.map((feature) => (
                <div key={feature}>✅ {feature}</div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700">
                Ver proyecto
              </button>

              <button className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10">
                <a
                  href="https://wa.me/541170612602"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar
                </a>
              </button>
              <div className="mt-10 flex justify-center gap-4">
                <button
                  onClick={() =>
                    setCurrent(
                      (current - 1 + proyectos.length) % proyectos.length,
                    )
                  }
                  className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10"
                >
                  ←
                </button>

                <button
                  onClick={() => setCurrent((current + 1) % proyectos.length)}
                  className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
