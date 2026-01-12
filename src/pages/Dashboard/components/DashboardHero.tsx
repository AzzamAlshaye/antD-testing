// src/pages/Dashboard/components/DashboardHero.tsx
import React from "react";
import HeroHeader from "./HeroHeader";
import DonutChart from "./DonutChart";

export default function DashboardHero(): React.JSX.Element {
  return (
    <div className="w-full">
      <HeroHeader userName="Ahmed" />

      <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-[10px] bg-white p-6 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]">
          <div className="flex items-center gap-6">
            <DonutChart
              mode="multi"
              value={63}
              label="Tasks"
              colors={["#1F49FF", "#00B3C6", "#80C62A", "#FFD000", "#E0004D"]}
              size={96}
              strokeWidth={10}
            />

            <div className="flex-1">
              <Row label="Issues" value="12" dot="#FF8A00" />
              <Row label="Pending Responses" value="1" dot="#7C3AED" />
              <Row label="Support Requests" value="18" dot="#1F49FF" />
              <Row label="Review" value="1265" dot="#80C62A" />
            </div>
          </div>
        </div>

        <div className="rounded-[10px] bg-white p-6 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]">
          <div className="flex items-center gap-6">
            <DonutChart
              mode="single"
              value={63}
              label="Team Tasks"
              colors={["#1F49FF", "#00B3C6"]}
              size={96}
              strokeWidth={10}
            />

            <div className="flex-1">
              <Row label="Assigned" value="12" dot="#1F49FF" />
              <Row label="Unassigned" value="1" dot="#00B3C6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  dot,
}: {
  label: string;
  value: string;
  dot: string;
}): React.JSX.Element {
  return (
    <div className="flex items-center justify-between py-2 text-[12px]">
      <div className="flex items-center gap-2 text-[#1A1A1A]">
        <span
          className="h-[6px] w-[6px] rounded-full"
          style={{ background: dot }}
        />
        <span style={{ fontFamily: "Rubik" }}>{label}</span>
      </div>

      <div
        className="font-semibold text-[#1A1A1A]"
        style={{ fontFamily: "Rubik" }}
      >
        {value}
      </div>
    </div>
  );
}
