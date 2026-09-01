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
 * - category:       "react" | "html-css" | "client"
 *                    (used for the filter pills in the Projects section)
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
    id: "cash-wise-app",
    title: "Cash Wise App",
    description: {
      es: "Asistente financiero con chat integrado — proyecto final universitario. Desarrollé íntegramente el frontend en React (UI, estilos, integración con la API de OpenAI para el asistente conversacional y despliegues). Proyecto en equipo; el backend en PHP estuvo a cargo de un compañero.",
      en: "Financial assistant with integrated chat — university capstone project. I built the entire React frontend (UI, styling, OpenAI API integration for the conversational assistant, and deployments). Team project; the PHP backend was developed by a teammate.",
    },
    tech: ["React", "OpenAI API", "PHP"],
    category: "react",
    // TODO(Mariano): add the live URL once it's deployed/redeployed.
    liveUrl: undefined,
    repoUrl: undefined,
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
    category: "react",
    // TODO(Mariano): add the live URL once it's deployed/redeployed.
    liveUrl: undefined,
    repoUrl: undefined,
    featured: true,
  },
  {
    id: "airbnb-guest-guide",
    title: "Valencia Airbnb — Guía del huésped",
    description: {
      es: "Mini-sitio mobile-first para los huéspedes de mis habitaciones en alquiler en Valencia: cómo llegar, normas de la casa, WiFi con QR de conexión automática, las publicaciones de Airbnb, atractivos turísticos + transporte, y un formulario de recomendaciones. Contenido en inglés, español y ruso.",
      en: "Mobile-first guest guide for my rented rooms in Valencia (Airbnb): how to get there, house rules, WiFi with auto-connect QR, the Airbnb listings, local attractions + transport, and a recommendations form. Content in English, Spanish, and Russian.",
    },
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "i18next", "NestJS"],
    category: "react",
    liveUrl: "https://airbnb.marianomaciasgandulfo.com",
    repoUrl: "https://github.com/soldiersnake/airbnb_personal",
    blocksEmbedding: false,
    featured: true,
  },
];
