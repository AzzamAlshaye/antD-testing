import React, { useMemo, useState } from "react";
import { Button, Tag } from "antd";
import { AppstoreOutlined, SortAscendingOutlined } from "@ant-design/icons";
import TaskRow, { type TaskItem } from "./TaskRow";

type TabKey = "my" | "sent" | "unassigned";

const TaskSection: React.FC = () => {
  const [tab, setTab] = useState<TabKey>("my");

  /** mock rows */
  const tasks: TaskItem[] = useMemo(
    () => [
      {
        id: "t1",
        category: "ISSUE",
        org: "Ministry of Health",
        captureSource: "Capture source",
        statusText: "Pending Investigation",
        statusDotColor: "#EBD400",
        priority: "High",
      },
      {
        id: "t2",
        category: "ISSUE",
        org: "Ministry of Health",
        captureSource: "Capture source",
        statusText: "Pending Investigation",
        statusDotColor: "#EBD400",
        priority: "High",
      },
      {
        id: "t3",
        category: "SUPPORT",
        org: "Ministry of Health",
        captureSource: "Capture source",
        statusText: "Pending",
        statusDotColor: "#E83326",
        priority: "Medium",
      },
      {
        id: "t4",
        category: "ISSUE",
        org: "Ministry of Health",
        captureSource: "Capture source",
        statusText: "Pending Peer Review",
        statusDotColor: "#0052CC",
        priority: "Medium",
      },
      {
        id: "t5",
        category: "ISSUE",
        org: "Ministry of Health",
        captureSource: "Capture source",
        statusText: "Pending Peer Review",
        statusDotColor: "#0052CC",
        priority: "Medium",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Tabs + Actions bar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-end gap-6">
          <button
            type="button"
            onClick={() => setTab("my")}
            className="relative pb-2 text-[14px]"
            style={{
              fontFamily: "Rubik",
              fontWeight: 600,
              color: tab === "my" ? "#4166F5" : "#484D6C",
            }}
          >
            My Tasks
            {tab === "my" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#4166F5]" />
            )}
          </button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <button
            type="button"
            onClick={() => setTab("sent")}
            className="pb-2 text-[14px]"
            style={{
              fontFamily: "Rubik",
              fontWeight: 400,
              color: tab === "sent" ? "#4166F5" : "#484D6C",
            }}
          >
            My Sent Requests
          </button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <button
            type="button"
            onClick={() => setTab("unassigned")}
            className="flex items-center gap-2 pb-2 text-[14px]"
            style={{
              fontFamily: "Rubik",
              fontWeight: 400,
              color: tab === "unassigned" ? "#4166F5" : "#484D6C",
            }}
          >
            Unassigned Tasks
            <Tag
              className="!m-0 !h-[16px] !rounded-[4px] !border-0 !px-[8px]"
              style={{
                background: "#DDE4FF",
                color: "#4166F5",
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: 10,
                lineHeight: "16px",
              }}
            >
              4
            </Tag>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="link"
            icon={<AppstoreOutlined />}
            className="!px-0"
            style={{
              color: "#4166F5",
              fontFamily: "Rubik",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Change View
          </Button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <Button
            type="link"
            icon={<SortAscendingOutlined />}
            className="!px-0"
            style={{
              color: "#4166F5",
              fontFamily: "Rubik",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Sort by
          </Button>

          <div className="h-[24px] w-[1px] bg-[#DBDBDB]" />

          <Button
            className="h-[32px] rounded-[5px] border-[#4166F5] text-[#4166F5]"
            style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: 12 }}
          >
            Advanced Filter
          </Button>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2">
        {tasks.map((t) => (
          <TaskRow key={t.id} item={t} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
