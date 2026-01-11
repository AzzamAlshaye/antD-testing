import React from "react";
import { DownOutlined } from "@ant-design/icons";

type NavbarMode = "extended" | "compact";

type Props = {
  /** Use ONE of them (variant kept for backward-compat with your router) */
  mode?: NavbarMode;
  variant?: NavbarMode;
  userName?: string;
};

const navItems = [
  "Home",
  "Backlog",
  "Seasons",
  "Customers",
  "System Management",
];

export default function AppNavbar({
  mode,
  variant,
  userName = "User Name",
}: Props): React.JSX.Element {
  const resolvedMode: NavbarMode = mode ?? variant ?? "extended";
  const isExtended = resolvedMode === "extended";

  return (
    <header
      className={[
        "relative w-full overflow-hidden",
        "shadow-[0px_2px_8px_rgba(0,0,0,0.15)]",
        isExtended ? "h-[317px]" : "h-[88px]",
      ].join(" ")}
      style={{
        // base color so it never shows white
        backgroundColor: "#0F0F29",
        // dark navy gradient like your reference
        backgroundImage:
          "linear-gradient(90deg, #0F0F29 0%, #21337B 55%, #13256C 100%)",
      }}
    >
      {/* HEADER ART — big top-right background (must NOT crop) */}
      {isExtended && (
        <div className="pointer-events-none absolute right-0 top-0 z-0 h-[317px] w-[647px] select-none">
          <img
            src="/header-art.svg"
            alt=""
            className="h-full w-full object-contain object-right-top"
            draggable={false}
          />
        </div>
      )}

      {/* Top bar */}
      <div className="relative z-10 mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-[16px] lg:px-[40px]">
        {/* Left: logo + links */}
        <div className="flex items-center gap-10">
          <img
            src="/white-logo.svg"
            alt="Pulse"
            className="h-[26px] w-auto"
            draggable={false}
          />

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((label) => (
              <a
                key={label}
                href="#"
                className="text-[16px] leading-[40px] text-[#F9F9F9] opacity-95 hover:opacity-100"
                style={{ fontFamily: "Rubik" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="hidden items-center gap-2 text-[#F9F9F9] opacity-90 hover:opacity-100 md:flex">
            <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
            <span className="text-[12px]" style={{ fontFamily: "Inter" }}>
              Search
            </span>
          </button>

          <div className="hidden h-[36px] w-px bg-white/40 md:block" />

          {/* Language */}
          <button className="hidden items-center gap-2 text-[#F9F9F9] opacity-90 hover:opacity-100 md:flex">
            <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
            <span className="text-[12px]" style={{ fontFamily: "Inter" }}>
              EN
            </span>
          </button>

          <div className="hidden h-[36px] w-px bg-white/40 md:block" />

          {/* User */}
          <button className="flex items-center gap-3 text-[#F9F9F9]">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#BDC9FA] text-[11px] font-bold text-[#282727]">
              AA
            </span>

            <span
              className="hidden text-[12px] font-medium md:inline"
              style={{ fontFamily: "Inter" }}
            >
              {userName}
            </span>

            <DownOutlined style={{ fontSize: 12, opacity: 0.9 }} />
          </button>

          {/* Menu (compact helper) */}
          {!isExtended && (
            <>
              <div className="hidden h-[36px] w-px bg-white/40 md:block" />
              <button className="hidden items-center gap-2 text-[#F9F9F9] opacity-90 hover:opacity-100 md:flex">
                <span className="text-[12px]" style={{ fontFamily: "Inter" }}>
                  Menu
                </span>
                <DownOutlined style={{ fontSize: 12, opacity: 0.9 }} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Extended empty space under the navbar (keeps the 317px header height like Figma) */}
      {isExtended && <div className="h-[229px]" />}
    </header>
  );
}
