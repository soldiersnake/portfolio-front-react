import { useTranslation } from "react-i18next";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          {t("hero.available")}
        </span>

        <p className="text-lg text-accent">{t("hero.greeting")}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {t("hero.name")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-slate-300 sm:text-xl">{t("hero.role")}</p>
        <p className="mt-4 max-w-xl text-slate-400">{t("hero.tagline")}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {t("hero.ctaPrimary")}
            <FiArrowRight className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-accent"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-accent"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="#contact"
            className="text-slate-400 transition hover:text-accent"
            aria-label={t("nav.contact")}
          >
            <FiMail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
