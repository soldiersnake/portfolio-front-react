import { useTranslation } from "react-i18next";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../types/content";
import { useLocale } from "../lib/useLocale";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const locale = useLocale();

  const hasLiveUrl = Boolean(project.liveUrl);

  function openLive() {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noreferrer");
    }
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition hover:border-accent/40">
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-slate-900">
        {!hasLiveUrl && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center text-slate-500">
            <span className="text-sm font-medium">{t("projects.comingSoon")}</span>
          </div>
        )}

        {hasLiveUrl && project.blocksEmbedding && (
          <button
            type="button"
            onClick={openLive}
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-900/80 px-6 text-center text-slate-300 transition hover:bg-slate-900"
          >
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
            ) : null}
            <span className="relative z-10 text-sm">{t("projects.previewUnavailable")}</span>
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-slate-950">
              <FiExternalLink />
              {t("projects.openSite")}
            </span>
          </button>
        )}

        {hasLiveUrl && !project.blocksEmbedding && (
          <button
            type="button"
            onClick={openLive}
            className="relative block h-full w-full cursor-pointer"
            aria-label={`${t("projects.openSite")}: ${project.title}`}
          >
            <iframe
              src={project.liveUrl}
              title={project.title}
              loading="lazy"
              className="pointer-events-none h-full w-full origin-top-left"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition group-hover:bg-slate-950/60 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-slate-950">
                <FiExternalLink />
                {t("projects.openSite")}
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-400">{project.description[locale]}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-accent transition hover:text-cyan-300"
            >
              <FiExternalLink />
              {t("projects.viewLive")}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-accent"
            >
              <FiGithub />
              {t("projects.viewRepo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
