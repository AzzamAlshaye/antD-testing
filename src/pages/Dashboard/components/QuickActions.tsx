import React from "react";
import { Button } from "antd";
import {
  PlusCircleOutlined,
  ReloadOutlined,
  AppstoreOutlined,
  EditOutlined,
} from "@ant-design/icons";

/** ✅ export the type directly (so named import works) */
export type QuickActionItem = {
  key: string;
  label: string;
  icon: "plus" | "refresh" | "layers";
};

type Props = {
  title: string;
  actions: QuickActionItem[];
};

const iconMap: Record<QuickActionItem["icon"], React.ReactNode> = {
  plus: <PlusCircleOutlined style={{ fontSize: 28, color: "#4166F5" }} />,
  refresh: <ReloadOutlined style={{ fontSize: 28, color: "#4166F5" }} />,
  layers: <AppstoreOutlined style={{ fontSize: 28, color: "#4166F5" }} />,
};

const QuickActions: React.FC<Props> = ({ title, actions }) => {
  return (
    <div className="min-w-0">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-[20px] font-bold" style={{ fontFamily: "Rubik" }}>
          {title}
        </div>

        <Button
          type="link"
          icon={<EditOutlined />}
          className="!px-0"
          style={{ color: "#0052CC", fontFamily: "Inter" }}
        >
          Customise
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {actions.map((a) => (
          <button
            key={a.key}
            type="button"
            className="flex h-[150px] flex-col items-center justify-center gap-4 rounded-[6px] bg-white shadow-[0px_4px_24px_rgba(182,182,182,0.13)]"
          >
            {iconMap[a.icon]}
            <span
              className="text-[13px] font-medium text-[#4166F5]"
              style={{ fontFamily: "Inter" }}
            >
              {a.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
