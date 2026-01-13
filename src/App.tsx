import React from "react";
import "./App.css";
import AppRouter from "./routes";

// i18n must be initialized once before any component uses `useTranslation`
import "./config/i18n";
import { ConfigProvider } from "antd";
import { useAppLocale } from "./config/useAppLocale";

export default function App(): React.JSX.Element {
  const { antdLocale, isRTL } = useAppLocale();

  return (
    <ConfigProvider locale={antdLocale} direction={isRTL ? "rtl" : "ltr"}>
      <AppRouter />
    </ConfigProvider>
  );
}
