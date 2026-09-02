import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";
import { useLocale } from "../lib/useLocale";

export default function Skills() {
  const { t } = useTranslation();
  const locale = useLocale();

  return (
    <section id="skills" className="section-fade-in bg-white/2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label.en}
              className="rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-accent/40"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {group.label[locale]}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
