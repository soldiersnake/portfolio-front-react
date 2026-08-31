import type { SkillGroup } from "../types/content";

export const skillGroups: SkillGroup[] = [
  {
    label: { es: "Frontend & UI", en: "Frontend & UI" },
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vite",
      "TanStack Query",
      "Styled Components",
      "Material UI (MUI)",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Storybook",
      "HTML5 / CSS3",
    ],
  },
  {
    label: { es: "Backend & Bases de Datos", en: "Backend & Databases" },
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      ".NET (C#)",
      "MongoDB",
      "MySQL / PostgreSQL",
      "Sequelize ORM",
      "TypeORM / Prisma",
      "Firebase / Firestore",
      "RESTful APIs",
    ],
  },
  {
    label: { es: "Testing & Calidad", en: "Testing & Quality" },
    items: [
      "Jest",
      "React Testing Library",
      "MSW (Mock Service Worker)",
      "Code Reviews",
      "Clean Code",
      "Arquitectura Modular",
      "Design Patterns",
    ],
  },
  {
    label: { es: "Desarrollo Asistido por IA", en: "AI-Assisted Development" },
    items: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Claude Code",
      "Cursor",
      "Prompt Engineering",
    ],
  },
  {
    label: { es: "Herramientas & Metodologías", en: "Tools & Methodologies" },
    items: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "Firebase",
      "Confluence",
      "Postman",
      "Scrum / Agile",
    ],
  },
];
