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
    id: "cash-wise-app",
    title: "Cash Wise App",
    description: {
      es: "Asistente financiero con chat integrado — proyecto final universitario. Desarrollé íntegramente el frontend en React (UI, estilos, integración con la API de OpenAI para el asistente conversacional y despliegues). Proyecto en equipo; el backend en PHP estuvo a cargo de un compañero.",
      en: "Financial assistant with integrated chat — university capstone project. I built the entire React frontend (UI, styling, OpenAI API integration for the conversational assistant, and deployments). Team project; the PHP backend"
      },
    tech: ["React", "OpenAI API", "PHP"],
    category: ["react"],
    // TODO(Mariano): add the live URL once it's deployed/redeployed.
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
    // TODO(Mariano): add the live URL once it's deployed/redeployed.
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
