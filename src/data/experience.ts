import type { ExperienceEntry } from "../types/content";

/**
 * Kept in sync with the Work Experience section of Mariano's CV
 * (CV_Mariano_Macias_Harvard_MERN_NestJS_*_ATS). Most recent first.
 */
export const experience: ExperienceEntry[] = [
  {
    title: {
      es: "Frontend Developer (React & TypeScript) — Disid / Plexus Tech (Cliente: Detriavall – Vetland CMS)",
      en: "Frontend Developer (React & TypeScript) — Disid / Plexus Tech (Client: Detriavall – Vetland CMS)",
    },
    company: "Disid / Plexus Tech",
    dateRange: { es: "Abr 2026 – Actualidad", en: "Apr 2026 – Present" },
    location: { es: "Valencia, España (Remoto)", en: "Valencia, Spain (Remote)" },
    sector: { es: "Insurtech / Seguros para Mascotas", en: "Insurance Technology / Pet Insurance Platform" },
    bullets: [
      {
        es: "Desarrollo y mantenimiento de módulos clave del CMS de Vetland, un backoffice en React para una plataforma de seguros de mascotas, implementando flujos CRUD completos para Notificaciones y Onboarding (drag-and-drop con @dnd-kit).",
        en: "Developed and maintain core modules of Vetland CMS, a React-based backoffice for a pet insurance platform, delivering full CRUD flows for Notifications and Onboarding (drag-and-drop with @dnd-kit).",
      },
      {
        es: "Construcción del frontend con React 19, TypeScript, Vite, MUI v9 y TanStack Query v5, integrando con un backend en Quarkus conectado a MuleSoft/Salesforce.",
        en: "Built the frontend with React 19, TypeScript, Vite, MUI v9, and TanStack Query v5, integrating with a Quarkus backend connected to MuleSoft/Salesforce.",
      },
      {
        es: "Diseño de la arquitectura de autenticación: SSO de Microsoft 365 vía Firebase con emisión de JWT propio del backend.",
        en: "Designed the authentication architecture: Firebase-based Microsoft 365 SSO issuing backend JWTs.",
      },
      {
        es: "Implementación de una capa de mocking con MSW, permitiendo un desarrollo de frontend totalmente independiente del backend.",
        en: "Established an MSW-based mocking layer, enabling fully backend-independent frontend development.",
      },
    ],
  },
  {
    title: {
      es: "Frontend Developer (React & TypeScript) — Disid / Plexus Tech (Cliente: OpenBank – Grupo Santander)",
      en: "Frontend Developer (React & TypeScript) — Disid / Plexus Tech (Client: OpenBank – Santander Group)",
    },
    company: "Disid / Plexus Tech",
    dateRange: { es: "Abr 2025 – Abr 2026", en: "Apr 2025 – Apr 2026" },
    location: { es: "Valencia, España (Remoto)", en: "Valencia, Spain (Remote)" },
    sector: { es: "Sector Financiero / Banca Digital", en: "Financial Services / Digital Banking" },
    bullets: [
      {
        es: "Desarrollo y mantenimiento del módulo crítico de transferencias bancarias para OpenBank, garantizando el cumplimiento estricto de estándares financieros de seguridad y rendimiento.",
        en: "Engineered and maintained the mission-critical bank transfers module for OpenBank, adhering to stringent financial security and performance standards.",
      },
      {
        es: "Consumo e integración de componentes modulares desde el Design System interno con Styled Components y documentación en Storybook.",
        en: "Integrated modular UI components from the internal Design System using Styled Components and Storybook documentation.",
      },
      {
        es: "Tipado estricto con TypeScript y suites de pruebas unitarias/integración con Jest y React Testing Library.",
        en: "Strict typing with TypeScript and unit/integration test suites using Jest and React Testing Library.",
      },
    ],
  },
  {
    title: {
      es: "Frontend & Full Stack Developer (React & NestJS) — Excelia (Cliente: IDEAUTO)",
      en: "Frontend & Full Stack Developer (React & NestJS) — Excelia (Client: IDEAUTO)",
    },
    company: "Excelia",
    dateRange: { es: "Dic 2024 – Abr 2025", en: "Dec 2024 – Apr 2025" },
    location: { es: "Remoto (España)", en: "Remote (Spain)" },
    sector: { es: "Sector Seguros & Automoción", en: "Insurance & Automotive Tech" },
    bullets: [
      {
        es: "Desarrollo e implementación de una plataforma web de digitalización de documentación contractual para compra/venta y alquiler de vehículos.",
        en: "Developed and deployed a full-featured web platform for document digitization in vehicle sales, purchases, and leasing agreements.",
      },
      {
        es: "Integración del frontend en React/TypeScript con servicios backend en NestJS, incluyendo diagnóstico y debugging de la lógica del servidor.",
        en: "Integrated React/TypeScript client interfaces with backend services in NestJS, including diagnosing and debugging server logic.",
      },
      {
        es: "Gestión de control de versiones y pipelines CI/CD con Azure DevOps.",
        en: "Managed version control and CI/CD pipelines using Azure DevOps.",
      },
    ],
  },
  {
    title: {
      es: "Full Stack Developer (.NET & React) — Disbyte",
      en: "Full Stack Developer (.NET & React) — Disbyte",
    },
    company: "Disbyte",
    dateRange: { es: "May 2022 – Dic 2024", en: "May 2022 – Dec 2024" },
    location: { es: "Buenos Aires, Argentina (Remoto)", en: "Buenos Aires, Argentina (Remote)" },
    sector: { es: "Soluciones Tecnológicas & Software Empresarial", en: "Enterprise Software Solutions" },
    bullets: [
      {
        es: "Arquitectura y desarrollo de aplicaciones empresariales con React, TypeScript y Material UI (MUI).",
        en: "Architected and developed enterprise-grade web applications utilizing React, TypeScript, and Material UI (MUI).",
      },
      {
        es: "Construcción y mantenimiento de endpoints backend en .NET / C#.",
        en: "Built and maintained backend endpoints using .NET / C#.",
      },
    ],
  },
  {
    title: {
      es: "Profesor & Mentor Técnico MERN (React & Node.js) — CoderHouse",
      en: "MERN Stack Instructor & Technical Mentor (React & Node.js) — CoderHouse",
    },
    company: "CoderHouse",
    dateRange: { es: "Feb 2022 – Actualidad", en: "Feb 2022 – Present" },
    location: { es: "Remoto", en: "Remote" },
    sector: { es: "Educación Tecnológica & Mentoría", en: "EdTech & Engineering Mentorship" },
    bullets: [
      {
        es: "Formación y tutoría técnica a más de 10 comisiones (+500 estudiantes) en el stack MERN, con tasas de aprobación superiores al 80%.",
        en: "Taught and mentored 10+ cohorts (+500 students) in the MERN stack, consistently achieving an 80%+ graduation rate.",
      },
      {
        es: "Revisión exhaustiva de código y arquitectura en proyectos finales de los estudiantes.",
        en: "Conducted in-depth code reviews and architectural audits on students' final capstone projects.",
      },
    ],
  },
];
