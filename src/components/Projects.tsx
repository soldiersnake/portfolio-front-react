import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types/content";

type Category = ProjectCategory | "all";

const categories: Category[] = ["all", "react", "html-css", "client"];

export default function Projects() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category.includes(active))),
    [active],
  );

  return (
    <section id="projects" className="section-fade-in py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                active === category
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/15 text-slate-300 hover:border-accent/50 hover:text-accent"
              }`}
            >
              {t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">{t("projects.comingSoon")}</p>
      </div>
    </section>
  );
}
