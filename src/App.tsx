import React from "react";
import "./App.css";
import AppRouter from "./router/Router";

// i18n must be initialized once before any component uses `useTranslation`
import "./i18n";
import { ConfigProvider } from "antd";
import { useAppLocale } from "./i18n/useAppLocale";

export default function App(): React.JSX.Element {
  const { antdLocale, isRTL } = useAppLocale();

  return (
    <ConfigProvider locale={antdLocale} direction={isRTL ? "rtl" : "ltr"}>
      <AppRouter />
    </ConfigProvider>
  );
}
