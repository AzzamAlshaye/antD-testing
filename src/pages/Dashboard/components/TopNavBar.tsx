import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { useAppLocale } from "@config/useAppLocale";
import HeroHeader from "./HeroHeader";

const navItemKeys = [
  "nav.home",
  "nav.backlog",
  "nav.seasons",
  "nav.customers",
  "nav.systemManagement",
] as const;

export default function TopNavBar(): React.JSX.Element {
  const { t } = useTranslation();
  const { lang, toggleLang } = useAppLocale();
  const location = useLocation();
  const isExtended = location.pathname === "/dashboard";
  const userName = "User Name";

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={[
        "relative z-10 w-full overflow-hidden",
        "shadow-nav",
        "bg-[linear-gradient(90deg,#0F0F29_0%,#21337B_55%,#13256C_100%)]",
        isExtended ? "h-[317px]" : "h-[88px]",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute right-0 z-0 select-none",
          isExtended
            ? "top-0 h-[317px] w-[647px]"
            : "h-[110px] w-[647px] scale-[1.2] origin-top-right",
        ].join(" ")}
      >
        <img
          src="/header-art.svg"
          alt=""
          className="h-full w-full object-contain object-right-top"
          draggable={false}
        />
      </div>

      <div className="relative z-30 flex h-[88px] w-full items-center justify-between px-[30px]">
        <div className="flex items-center gap-10">
          <img
            src="/white-logo.svg"
            alt={t("app.name")}
            className="h-[26px] w-auto"
            draggable={false}
          />

          <nav className="hidden items-center gap-7 lg:flex">
            {navItemKeys.map((key) => (
              <a
                key={key}
                href="#"
                className="font-rubik text-[16px] leading-[40px] text-[#F9F9F9] opacity-95 hover:opacity-100"
              >
                {t(key)}
              </a>
            ))}
          </nav>
        </div>

        <div className="mr-[30px] flex items-center gap-4">
          <button
            type="button"
            className="hidden items-center gap-2 text-[#F9F9F9] opacity-90 hover:opacity-100 md:flex"
          >
            <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
            <span className="font-inter text-[12px]">{t("common.search")}</span>
          </button>

          <div className="hidden h-[36px] w-px bg-white/40 md:block" />

          <button
            type="button"
            onClick={toggleLang}
            className="hidden items-center gap-2 text-[#F9F9F9] opacity-90 hover:opacity-100 md:flex"
            aria-label={t("common.language")}
          >
            <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
            <span className="font-inter text-[12px]">{lang.toUpperCase()}</span>
          </button>

          <div className="hidden h-[36px] w-px bg-white/40 md:block" />

          <button
            type="button"
            className="flex items-center gap-3 text-[#F9F9F9]"
          >
            <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#BDC9FA] text-[11px] font-bold text-[#282727]">
              {userName
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((p) => p[0]?.toUpperCase())
                .join("") || "U"}
            </span>

            <span className="hidden font-inter text-[12px] font-medium md:inline">
              {userName}
            </span>

            <DownOutlined className="text-[12px] opacity-90" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-1 grid h-[36px] w-[36px] place-items-center rounded-lg text-white/90 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="absolute inset-0 z-40 cursor-default bg-black/30 lg:hidden"
            onClick={closeMobile}
            aria-label="Close menu overlay"
          />

          <div className="absolute left-0 top-[88px] z-50 w-full px-[20px] lg:hidden">
            <div className="rounded-2xl border border-white/10 bg-[#0F0F29]/95 p-4 shadow-xl backdrop-blur">
              <nav className="flex flex-col gap-2">
                {navItemKeys.map((key) => (
                  <a
                    key={key}
                    href="#"
                    onClick={closeMobile}
                    className="rounded-xl px-3 py-3 font-rubik text-[14px] text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {t(key)}
                  </a>
                ))}
              </nav>

              <div className="mt-4 h-px w-full bg-white/10" />

              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
                  <span className="font-inter text-[12px]">
                    {t("common.search")}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={async () => {
                    await toggleLang();
                    closeMobile();
                  }}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  aria-label={t("common.language")}
                >
                  <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
                  <span className="font-inter text-[12px]">
                    {lang.toUpperCase()}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {isExtended ? (
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[30px] pt-[12px]">
          <HeroHeader userName={userName} />
        </div>
      ) : null}

      {isExtended && <div className="h-[229px]" />}
    </header>
  );
}
