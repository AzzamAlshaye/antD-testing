import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { FiMenu, FiX } from "react-icons/fi";

type NavbarMode = "extended" | "compact";

type Props = {
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

  const [mobileOpen, setMobileOpen] = React.useState(false);

  // close on route change (when link clicked)
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={[
        "relative w-full overflow-hidden",
        "shadow-[0px_2px_8px_rgba(0,0,0,0.15)]",
        isExtended ? "h-[317px]" : "h-[88px]",
      ].join(" ")}
      style={{
        backgroundColor: "#0F0F29",
        backgroundImage:
          "linear-gradient(90deg, #0F0F29 0%, #21337B 55%, #13256C 100%)",
      }}
    >
      {/* HEADER ART (extended only) */}
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
      <div className="relative z-10 flex h-[88px] w-full items-center justify-between px-[30px]">
        {/* Left: logo + links */}
        <div className="flex items-center gap-10">
          <img
            src="/white-logo.svg"
            alt="Pulse"
            className="h-[26px] w-auto"
            draggable={false}
          />

          {/* Desktop nav */}
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

          {/* Burger menu (tablet and smaller) */}
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

      {/* Mobile/Tablet dropdown menu */}
      {mobileOpen && (
        <>
          {/* overlay (click to close) */}
          <button
            className="absolute inset-0 z-20 cursor-default bg-black/30 lg:hidden"
            onClick={closeMobile}
            aria-label="Close menu overlay"
          />

          {/* dropdown panel */}
          <div className="absolute left-0 top-[88px] z-30 w-full px-[20px] lg:hidden">
            <div className="rounded-2xl border border-white/10 bg-[#0F0F29]/95 p-4 shadow-xl backdrop-blur">
              <nav className="flex flex-col gap-2">
                {navItems.map((label) => (
                  <a
                    key={label}
                    href="#"
                    onClick={closeMobile}
                    className="rounded-xl px-3 py-3 text-[14px] text-white/90 hover:bg-white/10 hover:text-white"
                    style={{ fontFamily: "Rubik" }}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 h-px w-full bg-white/10" />

              {/* Optional: quick actions */}
              <div className="mt-4 flex items-center justify-between">
                <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white">
                  <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
                  <span className="text-[12px]" style={{ fontFamily: "Inter" }}>
                    Search
                  </span>
                </button>

                <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white">
                  <img src="/gloab.svg" alt="" className="h-[18px] w-[18px]" />
                  <span className="text-[12px]" style={{ fontFamily: "Inter" }}>
                    EN
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Extended space under navbar */}
      {isExtended && <div className="h-[229px]" />}
    </header>
  );
}
