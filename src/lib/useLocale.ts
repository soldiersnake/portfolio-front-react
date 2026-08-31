import { useTranslation } from "react-i18next";
import type { Locale } from "../types/content";

/**
 * Small helper so components can pick the right string out of a
 * LocalizedText object ({ es, en }) based on the current i18next language.
 */
export function useLocale() {
  const { i18n } = useTranslation();
  const locale: Locale = i18n.language?.startsWith("en") ? "en" : "es";
  return locale;
}
