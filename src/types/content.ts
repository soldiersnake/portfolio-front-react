export type Locale = "es" | "en";

export interface LocalizedText {
  es: string;
  en: string;
}

export interface SkillGroup {
  label: LocalizedText;
  items: string[];
}

export interface ExperienceEntry {
  title: LocalizedText;
  company: string;
  dateRange: LocalizedText;
  location: LocalizedText;
  sector: LocalizedText;
  bullets: LocalizedText[];
}

export type ProjectCategory = "react" | "html-css" | "client";

/**
 * Project cards are designed to be easy to extend: to add a new project,
 * just push a new object into `projects` in `src/data/projects.ts`.
 * No other code needs to change.
 */
export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  tech: string[];
  /**
   * One or more categories, e.g. ["html-css", "react"] for a project that
   * started as plain HTML/CSS and was later migrated to React — it'll show
   * up under both filter pills. Most projects only need one.
   */
  category: ProjectCategory[];
  liveUrl?: string;
  repoUrl?: string;
  /**
   * Set to true for sites known to block iframe embedding (via
   * X-Frame-Options / CSP frame-ancestors) — common for anything behind
   * Cloudflare, Vercel security headers, or deliberately locked-down sites.
   * When true, we show a static thumbnail + "open project" button instead
   * of trying (and silently failing) to render an <iframe>.
   */
  blocksEmbedding?: boolean;
  thumbnail?: string;
  featured?: boolean;
}
