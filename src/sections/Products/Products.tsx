import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
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

import catalogoRepuestos from "../../assets/repuestos-palacios/catalogo.png";
import consultaProducto from "../../assets/repuestos-palacios/consulta-producto.png";
import contactoRepuestos from "../../assets/repuestos-palacios/contacto.png";
import detalleProducto from "../../assets/repuestos-palacios/detalle-producto.png";
import inicioRepuestos from "../../assets/repuestos-palacios/inicio.png";

export default function Products() {
  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const proyectos = [
    {
      shortName: "Barberías",
      tag: "SaaS Multi Tenant",
      title: "Sistema para Barberías",
      description:
        "Plataforma SaaS multiempresa que digitaliza la operación completa de barberías. Incluye autenticación y experiencias diferenciadas para clientes y administradores, reservas online, control del negocio y personalización para cada establecimiento.",
      features: [
        "Autenticación por roles",
        "Portal para clientes",
        "Panel para administradores",
        "Reservas y agenda online",
        "Arquitectura multiempresa",
        "Clientes y servicios",
        "Ganancias y métricas",
        "Identidad por negocio",
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
          description:
            "Autenticación independiente para que cada cliente pueda reservar y consultar sus propios turnos.",
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
          description:
            "Acceso protegido para administrar turnos, clientes, servicios, precios y datos del negocio.",
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
      shortName: "Estéticas",
      tag: "Gestión de Turnos",
      title: "Sistema para Estéticas",
      description:
        "Sistema integral Multi-Tenant para centros de estética que conecta la reserva del cliente con la gestión interna del negocio. Cuenta con identificación de usuarios, accesos diferenciados y herramientas para coordinar profesionales, servicios, disponibilidad y turnos.",
      features: [
        "Acceso de clientes y admin",
        "Reserva paso a paso",
        "Agenda y disponibilidad",
        "Gestión de profesionales",
        "Servicios y duración",
        "Base de clientes",
        "Confirmación de turnos",
        "Recordatorios por email",
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
          description:
            "Área privada donde el cliente identifica y consulta los turnos asociados a su cuenta.",
        },
        {
          src: panelAdmin,
          title: "Panel Administrativo",
          description:
            "Área de acceso restringido desde la que el administrador controla la operación diaria del centro.",
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
    {
      shortName: "Repuestos",
      tag: "Catálogo E-commerce",
      title: "Repuestos Palacios",
      description:
        "Plataforma full stack para digitalizar el catálogo y la atención comercial de una casa de repuestos automotor. Incorpora registro e identificación de usuarios, cuentas de clientes y un acceso administrativo protegido para gestionar productos, precios y consultas.",
      features: [
        "Registro e inicio de sesión",
        "Roles cliente y administrador",
        "Búsqueda y filtros",
        "Catálogo con paginación",
        "Productos y precios",
        "Consultas contextualizadas",
        "Administración protegida",
        "Experiencia responsive",
      ],
      images: [
        {
          src: inicioRepuestos,
          title: "Página principal",
          description:
            "Presentación del negocio, productos destacados y acceso rápido al catálogo y las consultas.",
        },
        {
          src: catalogoRepuestos,
          title: "Catálogo de productos",
          description:
            "Listado completo con buscador, filtros por categoría, tipo y marca, además de paginación.",
        },
        {
          src: detalleProducto,
          title: "Detalle del producto",
          description:
            "Vista para usuarios identificados con imagen, código, descripción, categoría, precio y acceso directo a la consulta.",
        },
        {
          src: consultaProducto,
          title: "Consulta por producto",
          description:
            "Formulario asociado al repuesto seleccionado para solicitar disponibilidad, precio o información adicional.",
        },
        {
          src: contactoRepuestos,
          title: "Contacto y atención personalizada",
          description:
            "Canales de contacto y formulario para ayudar al cliente a encontrar un repuesto específico.",
        },
      ],
    },
  ];

  const proyectoActual = proyectos[current];

  return (
    <section
      id="projects"
      className="relative bg-[#08090d] px-5 py-24 text-white sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Trabajo reciente
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Productos pensados para problemas reales
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explorá las distintas pantallas y funcionalidades de cada
            plataforma.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-black/20 p-1">
            {proyectos.map((proyecto, index) => (
              <button
                key={proyecto.title}
                onClick={() => {
                  setCurrent(index);
                  setCurrentImage(0);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${current === index ? "bg-violet-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                aria-pressed={current === index}
              >
                {proyecto.shortName}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={current}
          className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-lg sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ========================= */}
          {/* Columna izquierda */}
          {/* ========================= */}

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#151515] px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <div className="ml-5 rounded-full bg-[#202020] px-5 py-1 text-xs text-gray-400">
                  farixio.com
                </div>
              </div>

              <div className="overflow-hidden rounded-b-3xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={proyectoActual.images[currentImage].src}
                    alt={proyectoActual.images[currentImage].title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.75 }}
                    className="block h-auto w-full"
                  />
                </AnimatePresence>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/10 bg-[#101010] px-5 py-4"
              >
                <h4 className="text-lg font-semibold text-white">
                  {proyectoActual.images[currentImage].title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {proyectoActual.images[currentImage].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setCurrentImage(
                    (currentImage - 1 + proyectoActual.images.length) %
                      proyectoActual.images.length,
                  )
                }
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-violet-400/50 hover:bg-violet-500/10"
                aria-label="Imagen anterior"
              >
                <ArrowLeft size={17} />
              </button>

              <span className="min-w-[70px] text-center text-sm text-gray-400">
                {currentImage + 1} / {proyectoActual.images.length}
              </span>

              <button
                onClick={() =>
                  setCurrentImage(
                    (currentImage + 1) % proyectoActual.images.length,
                  )
                }
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-violet-400/50 hover:bg-violet-500/10"
                aria-label="Imagen siguiente"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* ========================= */}
          {/* Columna derecha */}
          {/* ========================= */}

          <div className="flex flex-col justify-center px-2 py-5 sm:px-4">
            <span className="w-fit rounded-full bg-violet-600/20 px-4 py-2 text-sm font-semibold text-violet-300">
              {proyectoActual.tag}
            </span>

            <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              {proyectoActual.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              {proyectoActual.description}
            </p>

            <div className="mt-7 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              {proyectoActual.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-500/15 text-violet-300">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/541170612602"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#09090b] transition hover:bg-violet-100"
              >
                <MessageCircle size={18} /> Consultar proyecto
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
