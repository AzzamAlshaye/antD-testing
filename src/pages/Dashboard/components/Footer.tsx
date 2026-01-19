import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};

export default function Footer({
  className = "",
}: Props): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <footer
      className={[
        "h-[79px] w-full bg-white",
        "shadow-[0px_2px_20px_4px_rgba(188,188,188,0.12)]",
        className,
      ].join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 md:px-10">
        {/* Left */}
        <div className="flex items-center gap-4">
          <img
            src="/black-logo.svg"
            alt={t("footer.brandAlt")}
            className="h-5 w-auto"
            draggable={false}
          />

          <p className="text-[14px] leading-[150%] text-[#3F3F3F]">
            {t("footer.copyright")}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <div className="flex h-[45px] items-center gap-3 rounded-md bg-white px-3">
            <span className="text-[12px] font-bold tracking-[0.464674px] text-[#5D6468]">
              {t("footer.logoLabel")}
            </span>

            {/* divider */}
            <span className="mx-2 h-[25px] w-px bg-[rgba(50,50,50,0.15)]" />

            <img
              src="/site-logo.svg"
              alt={t("footer.siteAlt")}
              className="h-[18px] w-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
