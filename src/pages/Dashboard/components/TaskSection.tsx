import React, { useState } from "react";
import { Button, Tag } from "antd";
import { AppstoreOutlined, SortAscendingOutlined } from "@ant-design/icons";
import type { TaskItem, TaskTabKey } from "@interfaces/IDashboard";
import TaskRow from "./TaskRow";

type Props = {
  tasksByTab: Record<TaskTabKey, TaskItem[]>;
  unassignedCount: number;
};

const TaskSection: React.FC<Props> = ({ tasksByTab, unassignedCount }) => {
  const [tab, setTab] = useState<TaskTabKey>("my");

  const baseTabClass = "relative pb-2 text-[14px] font-rubik";
  const activeTabClass = "font-semibold text-brand-500";
  const inactiveTabClass = "font-normal text-[#484D6C]";
  const tasks = tasksByTab[tab] ?? [];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-end gap-6">
          <button
            type="button"
            onClick={() => setTab("my")}
            className={`${baseTabClass} ${
              tab === "my" ? activeTabClass : inactiveTabClass
            }`}
          >
            My Tasks
            {tab === "my" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-500" />
            )}
          </button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <button
            type="button"
            onClick={() => setTab("sent")}
            className={`${baseTabClass} ${
              tab === "sent" ? activeTabClass : inactiveTabClass
            }`}
          >
            My Sent Requests
          </button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <button
            type="button"
            onClick={() => setTab("unassigned")}
            className={`flex items-center gap-2 ${baseTabClass} ${
              tab === "unassigned" ? activeTabClass : inactiveTabClass
            }`}
          >
            Unassigned Tasks
            <Tag className="!m-0 !h-4 !rounded-[4px] !border-0 !bg-[#DDE4FF] !px-2 !text-[10px] !font-bold !leading-4 !text-brand-500 !font-inter">
              {unassignedCount}
            </Tag>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="link"
            icon={<AppstoreOutlined />}
            className="!px-0 !font-rubik !text-[12px] !font-medium !text-brand-500"
          >
            Change View
          </Button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <Button
            type="link"
            icon={<SortAscendingOutlined />}
            className="!px-0 !font-rubik !text-[12px] !font-medium !text-brand-500"
          >
            Sort by
          </Button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <Button className="!h-[32px] !rounded-[5px] !border-brand-500 !text-brand-500 !font-rubik !text-[12px] !font-medium">
            Advanced Filter
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((t) => (
          <TaskRow key={t.id} item={t} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
