// src/pages/Dashboard/index.tsx (hero removed; only white area content)
import React from "react";
import QuickActions, { type QuickActionItem } from "./components/QuickActions";
import DashboardHero from "./components/DashboardHero";
import TaskSection from "./components/TaskSection";

export default function DashboardPage(): React.JSX.Element {
  const quickActions: QuickActionItem[] = [
    { key: "create-complaint", label: "Create Complains", icon: "plus" },
    { key: "create-seasons", label: "Create Seasons", icon: "refresh" },
    { key: "create-group", label: "Create Group", icon: "layers" },
  ];

  return (
    <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[16px] lg:px-[40px]">
      <div className="-mt-[120px]">
        <DashboardHero />
      </div>

      <div className="mt-6 rounded-[6px] bg-white p-6 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]">
        <QuickActions title="Quick Actions" actions={quickActions} />
      </div>

      <div className="mt-7">
        <TaskSection />
      </div>
    </div>
  );
}
