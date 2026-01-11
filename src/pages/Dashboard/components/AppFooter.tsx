import React from "react";

const AppFooter: React.FC = () => {
  return (
    <div className="mt-auto w-full bg-white shadow-[0px_2px_20px_4px_rgba(188,188,188,0.12)]">
      <div className="mx-auto flex h-[79px] w-full max-w-[1440px] items-center justify-between px-10">
        <div className="flex items-center gap-4">
          <div className="text-[22px] font-semibold text-[#161622]" style={{ fontFamily: "Rubik" }}>
            Pulse
          </div>
          <div className="text-[14px] text-[#3F3F3F]" style={{ fontFamily: "Rubik" }}>
            © 2025 | Placeholder .All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[12px] font-bold text-[#5D6468]" style={{ fontFamily: "Rubik", letterSpacing: 0.46 }}>
            LOGO
          </span>
          <div className="h-6 w-px bg-[rgba(50,50,50,0.15)]" />
          <div className="text-[22px] font-bold text-[#003A24]">Site</div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
