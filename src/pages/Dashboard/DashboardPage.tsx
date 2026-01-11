import React from "react";

import QuickActions, { type QuickActionItem } from "./components/QuickActions";
import TaskSection from "./components/TaskSection";

export default function DashboardPage(): React.JSX.Element {
  const quickActions: QuickActionItem[] = [
    { key: "create-complaint", label: "Create Complains", icon: "plus" },
    { key: "create-seasons", label: "Create Seasons", icon: "refresh" },
    { key: "create-group", label: "Create Group", icon: "layers" },
  ];

  return (
    <div className="min-h-dvh bg-[#F9F9F9]">
      {/* Page content */}
      <div className="mx-auto w-full max-w-[1440px] px-[16px] lg:px-[40px]">
        {/* QuickActions section */}
        <div className="mt-6 rounded-[6px] bg-white p-6 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]">
          <QuickActions title="Quick Actions" actions={quickActions} />
        </div>

        {/* Task section */}
        <div className="mt-7">
          <TaskSection />
        </div>
      </div>
    </div>
  );
}
