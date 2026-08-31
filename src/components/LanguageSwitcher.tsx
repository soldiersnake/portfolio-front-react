import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "es";

  function toggle() {
    i18n.changeLanguage(current === "es" ? "en" : "es");
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:border-accent/60 hover:text-accent"
      aria-label="Switch language"
    >
      <span className={current === "es" ? "text-accent" : "text-slate-400"}>ES</span>
      <span className="text-slate-600">/</span>
      <span className={current === "en" ? "text-accent" : "text-slate-400"}>EN</span>
    </button>
  );
}
