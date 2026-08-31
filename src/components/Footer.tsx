import { useTranslation } from "react-i18next";
import { profile } from "../data/profile";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-slate-500">
        <p>
          © {year} {profile.shortName}. {t("footer.rights")}
        </p>
        <p>{t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}
