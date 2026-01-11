import React from "react";
import { Typography, Tag } from "antd";
import { RightOutlined } from "@ant-design/icons";

/** ✅ export the type directly from THIS file */
export type TaskItem = {
  id: string;
  category: "ISSUE" | "SUPPORT";
  org: string;
  captureSource: string;
  statusText: string;
  statusDotColor: string; // ex: "#EBD400"
  priority: "High" | "Medium";
};

type Props = {
  item: TaskItem;
};

const priorityStyles: Record<
  TaskItem["priority"],
  { border: string; label: string }
> = {
  High: { border: "#EA7100", label: "High" },
  Medium: { border: "#E38500", label: "Medium" },
};

const categoryStyles: Record<
  TaskItem["category"],
  { dot: string; label: string }
> = {
  ISSUE: { dot: "#F69F0A", label: "ISSUE" },
  SUPPORT: { dot: "#B4E396", label: "SUPPORT" },
};

const TaskRow: React.FC<Props> = ({ item }) => {
  const pr = priorityStyles[item.priority];
  const cat = categoryStyles[item.category];

  return (
    <div className="relative w-full rounded-[6px] bg-white shadow-[0px_4px_24px_rgba(182,182,182,0.13)]">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex min-w-0 items-center gap-4">
          {/* Category */}
          <div className="flex items-center gap-2">
            <span
              className="h-[14px] w-[14px] rounded-[3.5px]"
              style={{ background: cat.dot }}
            />
            <span
              className="text-[12px] uppercase underline"
              style={{
                fontFamily: "Inter",
                letterSpacing: "0.354785px",
                color: "#5E6C84",
              }}
            >
              {cat.label}
            </span>
          </div>

          <div className="h-[28px] w-[1px] bg-[#F4F4F4]" />

          <Typography.Text
            className="truncate"
            style={{ fontFamily: "Rubik", fontSize: 14, color: "#0E1A2F" }}
          >
            {item.org}
          </Typography.Text>

          <div className="h-[28px] w-[1px] bg-[#F4F4F4]" />

          <Typography.Text
            style={{ fontFamily: "Inter", fontSize: 12, color: "#83868A" }}
          >
            {item.captureSource}
          </Typography.Text>

          <div className="h-[28px] w-[1px] bg-[#F4F4F4]" />

          <div className="flex items-center gap-2">
            <span
              className="h-[8px] w-[8px] rounded-full"
              style={{ background: item.statusDotColor }}
            />
            <Typography.Text
              style={{ fontFamily: "Inter", fontSize: 12, color: "#83868A" }}
            >
              {item.statusText}
            </Typography.Text>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Tag
            className="!m-0 !px-0 !py-0"
            style={{
              border: "none",
              background: "transparent",
              fontFamily: "Rubik",
              fontSize: 10.5,
              color: "#5E6C84",
            }}
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-[14px] w-[14px] rounded-sm"
                style={{ border: `1.16667px solid ${pr.border}` }}
              />
              {pr.label}
            </span>
          </Tag>

          <RightOutlined style={{ fontSize: 14, color: "#0A0E14" }} />
        </div>
      </div>

      {/* Optional: description line for expanded row (design has it on first card) */}
      {item.id === "t1" && (
        <div className="px-6 pb-4 pt-0">
          <div
            className="text-[14px]"
            style={{ fontFamily: "Rubik", color: "#0E1A2F" }}
          >
            Description
          </div>
          <div
            className="text-[12px] leading-[18px]"
            style={{ fontFamily: "Inter", color: "#83868A" }}
          >
            This section is designed to provide a clear overview of the relevant
            information related to this request. Please review all details
            carefully to ensure accuracy and completeness. Any updates or
            required actions will be reflected here as the process progresses.
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskRow;
