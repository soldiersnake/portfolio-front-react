import { projects } from "./projects";

/**
 * Central place for Mariano's contact/profile info, kept in sync with the CV.
 * Update here if any of these ever change (email, phone, links, etc.).
 */
export const profile = {
  name: "Mariano Damián Macías Gandulfo",
  shortName: "Mariano Macías",
  email: "mariano.maciasgandulfo@gmail.com",
  phone: "+34 623 912 847",
  location: "Valencia, España / Valencia, Spain",
  linkedinUrl: "https://linkedin.com/in/marianomacias/",
  linkedinLabel: "linkedin.com/in/marianomacias",
  githubUrl: "https://github.com/soldiersnake",
  githubLabel: "github.com/soldiersnake",
  cvUrlEs: "/cv/CV_Mariano_Macias_Harvard_MERN_NestJS_ES_ATS.pdf",
  cvUrlEn: "/cv/CV_Mariano_Macias_Harvard_MERN_NestJS_EN_ATS.pdf",
};

// Only counts projects actually deployed (liveUrl set) — matches the
// "coming soon" convention in projects.ts for anything not live yet.
// This number now updates itself automatically whenever a project is
// added to/removed from `projects.ts` — no need to touch it by hand.
const projectsInProductionCount = projects.filter((project) => Boolean(project.liveUrl)).length;

export const highlightStats = [
  { value: "4+", key: "experience" as const },
  { value: "500+", key: "mentored" as const },
  { value: `${projectsInProductionCount}+`, key: "projects" as const },
  { value: "2", key: "languages" as const },
];
