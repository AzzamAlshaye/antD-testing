import { useEffect, useMemo, useState } from "react";
import i18n, { type AppLang, SUPPORTED_LANGS } from "./index";

import enUS from "antd/locale/en_US";
import arEG from "antd/locale/ar_EG";

export function isRtlLang(lang: string): boolean {
  return lang.toLowerCase().startsWith("ar");
}

export function normalizeLang(lang: string): AppLang {
  const short = lang.split("-")[0].toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(short) ? (short as AppLang) : "en";
}

export function useAppLocale() {
  const [lang, setLangState] = useState<AppLang>(() => normalizeLang(i18n.language || "en"));

  useEffect(() => {
    const onChange = (lng: string) => setLangState(normalizeLang(lng));
    i18n.on("languageChanged", onChange);
    return () => i18n.off("languageChanged", onChange);
  }, []);

  const isRTL = useMemo(() => isRtlLang(lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  const antdLocale = useMemo(() => (lang === "ar" ? arEG : enUS), [lang]);

  const setLang = async (next: AppLang) => {
    const normalized = normalizeLang(next);
    await i18n.changeLanguage(normalized);
    localStorage.setItem("lang", normalized);
  };

  const toggleLang = async () => {
    await setLang(lang === "en" ? "ar" : "en");
  };

  return { lang, isRTL, antdLocale, setLang, toggleLang } as const;
}
