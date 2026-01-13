import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../assets/locales/en.json";
import ar from "../assets/locales/ar.json";

export const SUPPORTED_LANGS = ["en", "ar"] as const;
export type AppLang = (typeof SUPPORTED_LANGS)[number];

const resources = {
  en: { translation: en },
  ar: { translation: ar },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
    react: { useSuspense: false },
  });

export default i18n;
