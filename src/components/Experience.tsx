import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";
import { useLocale } from "../lib/useLocale";

export default function Experience() {
  const { t } = useTranslation();
  const locale = useLocale();

  return (
    <section id="experience" className="section-fade-in bg-white/[0.02] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title={t("experience.title")} subtitle={t("experience.subtitle")} />

        <ol className="relative border-s border-white/10 pl-8">
          {experience.map((entry, index) => (
            <li key={`${entry.company}-${index}`} className="mb-12 last:mb-0">
              <span className="absolute -start-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-accent" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{entry.title[locale]}</h3>
                <span className="text-sm font-medium text-accent">{entry.dateRange[locale]}</span>
              </div>

              <p className="mt-1 text-sm text-slate-400">
                {entry.location[locale]} · {entry.sector[locale]}
              </p>

              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                    {bullet[locale]}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
