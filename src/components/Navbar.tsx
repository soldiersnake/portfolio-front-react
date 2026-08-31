import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const sections = ["about", "skills", "projects", "experience", "contact"] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-slate-950/80 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-white">
          Mariano<span className="text-accent">.</span>dev
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm font-medium text-slate-300 transition hover:text-accent"
            >
              {t(`nav.${section}`)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {t("nav.cta")}
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-accent"
              >
                {t(`nav.${section}`)}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-slate-950"
              >
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
