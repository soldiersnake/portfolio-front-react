import { useTranslation } from "react-i18next";
import { FiDownload } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { highlightStats, profile } from "../data/profile";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-fade-in py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("about.title")} />

        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-slate-300">{t("about.paragraph1")}</p>
            <p className="mt-4 text-slate-300">{t("about.paragraph2")}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.cvUrlEs}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
              >
                <FiDownload />
                {t("about.cvEs")}
              </a>
              <a
                href={profile.cvUrlEn}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
              >
                <FiDownload />
                {t("about.cvEn")}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t("about.highlightsTitle")}
            </h3>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              {highlightStats.map((stat) => (
                <div key={stat.key}>
                  <dt className="text-3xl font-bold text-white">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-slate-400">
                    {t(`about.highlights.${stat.key}`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
