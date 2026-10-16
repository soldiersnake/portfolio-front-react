import type { ExperienceEntry } from "../types/content";

/**
 * Kept in sync with the Work Experience section of Mariano's CV
 * (public/cv/ES|EN_Mariano_Macias_CV_FullStack.pdf). Most recent first.
 */
export const experience: ExperienceEntry[] = [
  {
    title: {
      es: "Frontend Developer (React & TypeScript) — Disid / Plexus Tech (Cliente: Detriavall – Vetland CMS)",
      en: "Frontend Developer (React & TypeScript) — Disid / Plexus Tech (Client: Detriavall – Vetland CMS)",
    },
    company: "Disid / Plexus Tech",
    dateRange: { es: "Abr 2026 – Sep 2026", en: "Apr 2026 – Sep 2026" },
    location: { es: "Valencia, España (Remoto)", en: "Valencia, Spain (Remote)" },
    sector: { es: "Insurtech / Plataforma de Seguros para Mascotas", en: "Insurance Technology / Pet Insurance Platform" },
    bullets: [
      {
        es: "Desarrollo y mantenimiento de módulos clave del CMS de Vetland, un backoffice en React para una plataforma de seguros de mascotas, con flujos CRUD completos de Notificaciones (envío en borrador/programado, edición, eliminación) y Onboarding (reordenamiento drag-and-drop con @dnd-kit).",
        en: "Developed and maintained core modules of Vetland CMS, a React-based backoffice for a pet insurance platform, delivering full CRUD flows for Notifications (draft/scheduled sending, editing, deletion) and Onboarding (drag-and-drop step reordering with @dnd-kit).",
      },
      {
        es: "Construcción del frontend con React 19, TypeScript, Vite, MUI v9 y TanStack Query v5, integrado con un backend en Quarkus conectado a MuleSoft/Salesforce y en coordinación con los equipos paralelos de mobile (Flutter) y backend.",
        en: "Built the frontend with React 19, TypeScript, Vite, MUI v9 and TanStack Query v5, integrating with a Quarkus backend connected to MuleSoft/Salesforce while coordinating with parallel Flutter mobile and backend teams.",
      },
      {
        es: "Diseño y especificación de la arquitectura de autenticación: SSO de Microsoft 365 vía Firebase con emisión de JWT propio del backend, más un modo legacy email/contraseña activable por variable de entorno para un despliegue controlado.",
        en: "Designed and specified the authentication architecture: Firebase-based Microsoft 365 SSO issuing backend JWTs, with an environment-toggled legacy email/password fallback for a controlled rollout.",
      },
      {
        es: "Implementación de una capa de mocking con MSW y almacenes en memoria por dominio, permitiendo desarrollar y testear el frontend de forma totalmente independiente del backend.",
        en: "Established an MSW-based mocking layer with in-memory per-domain data stores, enabling fully backend-independent frontend development and testing.",
      },
      {
        es: "Redacción de documentación técnica orientada al onboarding del equipo, publicada en Confluence.",
        en: "Authored onboarding-oriented technical documentation in Confluence to support team knowledge transfer.",
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
        es: "Desarrollo y mantenimiento del módulo crítico de transferencias bancarias de OpenBank, cumpliendo estándares financieros estrictos de seguridad, robustez y rendimiento.",
        en: "Engineered and maintained the mission-critical bank transfers module for OpenBank, meeting strict financial security, performance and compliance standards.",
      },
      {
        es: "Integración de componentes modulares de la librería interna (Design System corporativo) con Styled Components y Storybook, asegurando consistencia UI/UX y reduciendo tiempos de integración.",
        en: "Integrated modular UI components from the internal enterprise Design System using Styled Components and Storybook, ensuring UI/UX consistency and faster delivery cycles.",
      },
      {
        es: "Tipado estricto con TypeScript y suites de pruebas unitarias y de integración con Jest y React Testing Library para proteger los flujos críticos de transacciones.",
        en: "Applied strict TypeScript typing and built unit and integration test suites with Jest and React Testing Library to protect critical transaction flows.",
      },
      {
        es: "Participación activa en ceremonias Scrum, code reviews, resolución de incidencias en producción y consumo de APIs bancarias RESTful.",
        en: "Took an active part in Scrum ceremonies, code reviews, production defect triage and banking RESTful API integrations.",
      },
      {
        es: "Uso de flujos asistidos por IA (Claude, Gemini) para generar casos de prueba edge-case y documentación técnica interna.",
        en: "Applied AI-assisted workflows (Claude, Gemini) to generate edge-case tests and technical documentation.",
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
        es: "Desarrollo e implementación de la plataforma web de digitalización de documentación contractual de compra/venta y alquiler de vehículos para la aseguradora IDEAUTO.",
        en: "Developed and deployed a web platform for digitizing vehicle sale, purchase and leasing contract documentation for the insurer IDEAUTO.",
      },
      {
        es: "Integración del frontend en React/TypeScript con servicios y APIs backend en NestJS, participando en el diagnóstico y debugging de la lógica modular del servidor.",
        en: "Integrated React/TypeScript interfaces with NestJS backend services, diagnosing and debugging modular server logic and REST endpoints.",
      },
      {
        es: "Resolución ágil de incidencias complejas y refactorización de código legacy tras la incorporación al proyecto, adaptando la arquitectura a requerimientos cambiantes con plazos ajustados.",
        en: "Led fast bug resolution and refactored legacy code after joining the project, adapting the component architecture to evolving client requirements under tight deadlines.",
      },
      {
        es: "Gestión de control de versiones y pipelines CI/CD en entornos de integración y preproducción con Azure DevOps, Fork y conexiones VPN seguras.",
        en: "Managed version control and CI/CD pipelines across staging and pre-production with Azure DevOps, Fork and secure VPNs.",
      },
      {
        es: "Interfaces responsivas y accesibles bajo metodología Scrum, optimizando la carga y validación de documentos.",
        en: "Delivered accessible, responsive interfaces under Scrum, streamlining document upload and verification workflows.",
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
    location: { es: "Remoto", en: "Remote" },
    sector: { es: "Soluciones Tecnológicas & Software Empresarial", en: "Enterprise Software Solutions" },
    bullets: [
      {
        es: "Construcción de aplicaciones empresariales con React, TypeScript y Material UI (MUI), adaptando componentes a la lógica de negocio de la compañía.",
        en: "Built enterprise web applications with React, TypeScript and Material UI (MUI), customizing component libraries to fit corporate business workflows.",
      },
      {
        es: "Desarrollo y mantenimiento de endpoints en .NET / C#: controladores, enrutamiento REST y configuración de seguridad y políticas CORS.",
        en: "Built and maintained backend endpoints in .NET / C#: controllers, routing, and CORS and API security configuration.",
      },
      {
        es: "Diagnóstico y corrección de errores en producción, acompañando a perfiles junior en buenas prácticas de desarrollo Full Stack.",
        en: "Diagnosed and fixed production bugs while mentoring junior developers on Full Stack standards and clean code practices.",
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
        es: "Formación y tutoría técnica de más de 10 comisiones (+500 estudiantes) en el stack MERN (MongoDB, Express, React, Node.js), con tasas de aprobación y satisfacción superiores al 80%.",
        en: "Taught and mentored 10+ cohorts (500+ students) in MERN stack development (MongoDB, Express, React, Node.js), with 80%+ graduation and satisfaction rates.",
      },
      {
        es: "Revisión exhaustiva de código en proyectos finales: patrones de diseño, código limpio, manejo de asincronía e integridad académica.",
        en: "Ran in-depth code reviews of final capstone projects, assessing design patterns, clean code, asynchronous state management and academic integrity.",
      },
      {
        es: "Sesiones en vivo de resolución de problemas técnicos, guiando a los estudiantes en depuración, buenas prácticas y preparación para el mercado laboral.",
        en: "Led live troubleshooting sessions, giving students practical debugging skills and industry-aligned best practices.",
      },
    ],
  },
];
