import type { Project } from "../types/content";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW PROJECT
 * ─────────────────────────────────────────────────────────────────────────
 * Just add a new object to the `projects` array below. Nothing else in the
 * app needs to change — the Projects section, filters, and cards are all
 * data-driven from this file.
 *
 * Fields:
 * - id:             unique slug, e.g. "cash-wise-app"
 * - title:          project name shown on the card
 * - description:    short blurb in both languages
 * - tech:           tech stack badges (array of strings)
 * - category:       array of one or more of "react" | "html-css" | "client",
 *                    e.g. ["react"] or ["html-css", "react"] for a project
 *                    migrated from plain HTML/CSS to React — it'll show up
 *                    under both filter pills. (Used for the filter pills in
 *                    the Projects section.)
 * - liveUrl:        public URL where the project is deployed.
 *                    Leave undefined if it isn't deployed yet — the card
 *                    will show a "coming soon" state instead of a broken link.
 * - repoUrl:         optional link to the public GitHub repo
 * - blocksEmbedding: set to true if the site refuses to load in an <iframe>
 *                    (common due to X-Frame-Options/CSP headers — there's no
 *                    reliable way to detect this automatically, so it's a
 *                    manual flag). When true, a screenshot + "open project"
 *                    button is shown instead of the iframe.
 * - thumbnail:       path to a screenshot (place files under /public/projects/)
 * ─────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    id: "airbnb-guest-guide",
    title: "Valencia Airbnb — Guía del huésped",
    description: {
      es: "Mini-sitio mobile-first para los huéspedes de mis habitaciones en alquiler en Valencia: cómo llegar, normas de la casa, WiFi con QR de conexión automática, las publicaciones de Airbnb, atractivos turísticos + transporte, y un formulario de recomendaciones. Contenido en inglés, español y ruso.",
      en: "Mobile-first guest guide for my rented rooms in Valencia (Airbnb): how to get there, house rules, WiFi with auto-connect QR, the Airbnb listings, local attractions + transport, and a recommendations form. Content in English, Spanish, and Russian.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "i18next", "NestJS"],
    category: ["react"],
    liveUrl: "https://airbnb.marianomaciasgandulfo.com",
    repoUrl: "https://github.com/soldiersnake/airbnb_personal",
    blocksEmbedding: false,
    featured: true,
  },
  {
    id: "tienda-mueble",
    title: "Tienda Muebles",
    description: {
      es: "Tienda de muebles con catálogo por categorías, carrito persistido en el navegador y checkout real: login con Google obligatorio para comprar, pago con tarjeta o Bizum vía Stripe, o con Mercado Pago (pensado para clientes de Latinoamérica) — el pedido se guarda en MongoDB con la provincia derivada automáticamente del código postal. Tras el pago se envían emails de confirmación (cliente y dueño) vía Resend, y la página de vuelta muestra el resumen real del pedido. Incluye panel de administración (alta/edición/baja de productos con subida de imágenes a ImageKit) restringido a mi email vía JWT. Migrado desde un sitio original en HTML/CSS puro.",
      en: "Furniture store with a category-based catalog, a cart persisted in the browser, and a real checkout flow: Google login required to purchase, card or Bizum payment via Stripe, or Mercado Pago (aimed at Latin American customers) — orders are saved to MongoDB with the province auto-derived from the postal code. After payment, confirmation emails (customer and owner) are sent via Resend, and the return page shows the actual order summary. Includes an admin panel (create/edit/delete products with image uploads to ImageKit) restricted to my email via JWT. Migrated from a plain HTML/CSS site.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "MongoDB", "Stripe", "Mercado Pago", "Google OAuth", "Resend", "ImageKit"],
    category: ["react", "html-css"],
    liveUrl: "https://tiendamueble.marianomaciasgandulfo.com/",
    // repoUrl: "https://github.com/soldiersnake/TiendaMueble", // agregar si publicás el repo (hoy no tiene remoto configurado)
    blocksEmbedding: false,
    featured: true,
  },
  {
    id: "arquitectura-bosque",
    title: "ArquitecturaBosque",
    description: {
      es: "Sitio para un estudio de arquitectura especializado en casas de madera integradas al bosque. Incluye ficha de detalle por modelo con formulario de consulta, un simulador de presupuesto por metros cuadrados, testimonios y preguntas frecuentes, y un formulario de contacto que envía emails con diseño propio vía Resend. Migrado desde un sitio original en HTML/CSS puro.",
      en: "Site for an architecture studio specializing in forest-integrated wooden houses. Includes a per-model detail page with a consultation form, a budget simulator based on square meters, testimonials and FAQ, and a contact form that sends custom-styled emails via Resend. Migrated from a plain HTML/CSS site.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "MongoDB",  "i18next", "Resend"],
    category: ["react", "html-css"],
    liveUrl: "https://arquitectura.marianomaciasgandulfo.com/",
    // repoUrl no incluido: repos privados (proyectos pensados como muestra para posibles clientes)
    blocksEmbedding: false,
    featured: true,
  },
  {
    id: "guitar-shop",
    title: "Guitar Shop",
    description: {
      es: "Tienda de guitarras eléctricas con catálogo y fichas de detalle (especificaciones, colores, stock). El carrito vive enteramente en el navegador (localStorage) y al finalizar la compra se genera un pedido real, persistido en MongoDB a través de un backend en NestJS. Contenido y descripciones propias, sin datos de relleno.",
      en: "Electric guitar shop with a catalog and detail pages (specs, colors, stock). The cart lives entirely in the browser (localStorage), and checkout creates a real order persisted in MongoDB via a NestJS backend. Original content and copy, no placeholder data.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "MongoDB"],
    category: ["react", "html-css"],
    liveUrl: "https://guitarshop.marianomaciasgandulfo.com/",
    // repoUrl: "https://github.com/soldiersnake/GuitarTypercript",
    blocksEmbedding: false,
    featured: true,
  },
  {
    id: "techpro-audio",
    title: "TechPRO Audio",
    description: {
      es: "Landing de producto para una línea de audífonos (TechPRO X/Y/Z) con ficha de detalle por modelo en un modal (specs, colores, precio) y un formulario de newsletter funcional: el email queda guardado en MongoDB y dispara un correo de bienvenida vía Resend, a través de un backend en NestJS. Migrado desde un sitio original en HTML/CSS puro, conservando la interacción de hover de las tarjetas y con todo el copy reemplazado por contenido propio.",
      en: "Product landing page for a headphones line (TechPRO X/Y/Z) with a per-model detail modal (specs, colors, price) and a working newsletter form: the email is stored in MongoDB and triggers a welcome email via Resend through a NestJS backend. Migrated from a plain HTML/CSS site, preserving the original card hover interaction and with all copy replaced by original content.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "MongoDB", "Resend"],
    category: ["react", "html-css"],
    liveUrl: "https://audifonos.marianomaciasgandulfo.com/",
    // repoUrl: "https://github.com/soldiersnake/",
    blocksEmbedding: false,
    featured: true,
  },
  {
    id: "cash-wise-app",
    title: "Cash Wise App",
    description: {
      es: "Asistente financiero con chat integrado — proyecto final universitario. Desarrollé íntegramente el frontend en React (UI, estilos, integración con la API de OpenAI para el asistente conversacional y despliegues). Proyecto en equipo; el backend en PHP estuvo a cargo de un compañero.",
      en: "Financial assistant with integrated chat — university capstone project. I built the entire React frontend (UI, styling, OpenAI API integration for the conversational assistant, and deployments). Team project; the PHP backend"
      },
    tech: ["React", "OpenAI API", "PHP"],
    category: ["react"],
    liveUrl: "https://cashwiseapp.netlify.app",
    repoUrl: "https://github.com/soldiersnake/cash-wise-app",
    featured: true,
  },
  {
    id: "multi-tool-ai-hub",
    title: "Modular Multi-Tool AI Hub",
    description: {
      es: "Dashboard modular en React/TypeScript que consume APIs de IA generativa para tareas multimodales: traducción contextual, generación/edición de imágenes y asistentes de dominio específico.",
      en: "Modular dashboard in React/TypeScript consuming generative AI APIs for multi-purpose capabilities: contextual translation, image generation/editing, and tailored domain assistants.",
    },
    tech: ["React", "TypeScript", "Generative AI APIs"],
    category: ["react"],
    liveUrl: "https://marianoreactgpt.netlify.app",
    repoUrl: "https://github.com/soldiersnake/ReactGPT",
    featured: true,
  },
  {
    id: "technical-test-Signaturit",
    title: "Prueba tecnica Signaturit",
    description: {
      es: "Este proyecto es una prueba técnica de Frontend Developer para Signaturit Group.\n El objetivo es construir una aplicación simple de gestión de documentos que permita subir archivos, solicitar firmas digitales, hacer seguimiento de estados y simular notificaciones.",
      en: "This project is a technical test for a Frontend Developer position at Signaturit Group.\n The goal is to build a simple document management application that allows users to upload files, request digital signatures, track statuses, and simulate notifications.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: ["react"],
    liveUrl: "https://signaturit-test.netlify.app/",
    repoUrl: "https://github.com/soldiersnake/Signaturit-Technical-Test",
    blocksEmbedding: false,
    featured: true,
  },
];
