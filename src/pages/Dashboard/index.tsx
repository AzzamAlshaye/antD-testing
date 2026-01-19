// src/pages/Dashboard/index.tsx (hero removed; only white area content)
import React from "react";
import DashboardHero from "./components/DashboardHero";
import QuickActions from "./components/QuickActions";
import RecentlyVisited from "./components/RecentlyVisited";
import TaskSection from "./components/TaskSection";
import { useDashboardData } from "./useDashboardData";

export default function DashboardPage(): React.JSX.Element {
  const { data } = useDashboardData();

  return (
    <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[16px] pb-10 lg:px-[40px]">
      <div className="-mt-[120px]">
        <DashboardHero cards={data.heroCards} />
      </div>

      <div className="mt-6 rounded-[6px] bg-white p-6 shadow-card">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <QuickActions title="Quick Actions" actions={data.quickActions} />
          </div>

          <div className="hidden w-px bg-[#F0F0F0] lg:block" />

          <div>
            <RecentlyVisited
              title="Recently visited"
              items={data.recentlyVisited}
            />
          </div>
        </div>
      </div>

      <div className="mt-7">
        <TaskSection
          tasksByTab={data.tasksByTab}
          unassignedCount={data.unassignedCount}
        />
      </div>
    </div>
  );
}
