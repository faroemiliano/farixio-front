import { AnimatePresence, motion } from "framer-motion";
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
        {
          src: inicioSite,
          title: "Inicio del Sitio",
          description: "Página de bienvenida para el sistema de barbería.",
        },
        {
          src: loginCliente,
          title: "Login de Cliente",
          description: "Acceso para los clientes del sistema de barbería.",
        },
        {
          src: reservaTurno,
          title: "Reserva de Turno",
          description: "Proceso de reserva de turnos para los clientes.",
        },
        {
          src: misTurnosCliente,
          title: "Mis Turnos",
          description: "Visualización de los turnos reservados por el cliente.",
        },
        {
          src: loginAdmin,
          title: "Login de Administrador",
          description: "Acceso para el administrador del sistema de barbería.",
        },
        {
          src: turnosAdmin,
          title: "Turnos del Administrador",
          description:
            "Visualización y gestión de turnos por parte del administrador.",
        },
        {
          src: gestionGanancias,
          title: "Gestión de Ganancias",
          description:
            "Funcionalidad para gestionar las ganancias de la barbería.",
        },
        {
          src: serviciosPrecios,
          title: "Servicios y Precios",
          description:
            "Visualización y gestión de servicios y precios disponibles.",
        },
        {
          src: gestionClientes,
          title: "Gestión de Clientes",
          description:
            "Funcionalidad para gestionar la información de los clientes.",
        },
        {
          src: registroManual,
          title: "Registro Manual",
          description: "Funcionalidad para registrar clientes manualmente.",
        },
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
        "Recordatorios E-mail",
        "Configuración",
      ],
      images: [
        {
          src: esteticaLanding,
          title: "Inicio del Sitio",
          description: "Página de bienvenida para el sistema de estética.",
        },
        {
          src: reservarTurno,
          title: "Reserva de Turno",
          description: "Proceso de reserva de turnos para los clientes.",
        },
        {
          src: obtenerServicio,
          title: "Obtener Servicio",
          description:
            "Visualización de detalles de los servicios disponibles.",
        },
        {
          src: obtenerDiaHora,
          title: "Obtener Día y Hora",
          description: "Selección de día y hora para la reserva del turno.",
        },

        {
          src: misTurnosClient,
          title: "Mis Turnos",
          description: "Visualización de los turnos reservados por el cliente.",
        },
        {
          src: panelAdmin,
          title: "Panel Administrativo",
          description:
            "Interfaz para la gestión de la estética por parte del administrador.",
        },
        {
          src: verConfirmarTurnos,
          title: "Ver y Confirmar Turnos",
          description:
            "Funcionalidad para ver y confirmar los turnos reservados.",
        },
        {
          src: listaClientes,
          title: "Lista de Clientes",
          description: "Visualización de todos los clientes registrados.",
        },
        {
          src: crearServicio,
          title: "Crear Servicio",
          description: "Funcionalidad para crear nuevos servicios.",
        },
        {
          src: crearProfesional,
          title: "Crear Profesional",
          description: "Funcionalidad para registrar nuevos profesionales.",
        },

        {
          src: horarioEstetica,
          title: "Horario de Estética",
          description:
            "Funcionalidad para configurar el horario de atención de la estética.",
        },
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
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#151515] px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <div className="ml-5 rounded-full bg-[#202020] px-5 py-1 text-xs text-gray-400">
                farixio.com
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={proyectoActual.images[currentImage].src}
                  alt={proyectoActual.images[currentImage].title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#101010] px-6 py-5">
            <h4 className="text-lg font-semibold text-white">
              {proyectoActual.images[currentImage].title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {proyectoActual.images[currentImage].description}
            </p>
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

            <span className="min-w-[70px] text-center text-sm font-medium text-gray-400">
              {currentImage + 1} / {proyectoActual.images.length}
            </span>

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
                  onClick={() => {
                    setCurrent((current + 1) % proyectos.length);
                    setCurrentImage(0);
                  }}
                  className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10"
                >
                  ←
                </button>

                <button
                  onClick={() => {
                    setCurrent(
                      (current - 1 + proyectos.length) % proyectos.length,
                    );
                    setCurrentImage(0);
                  }}
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
