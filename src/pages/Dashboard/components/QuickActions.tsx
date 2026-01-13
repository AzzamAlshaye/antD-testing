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
  plus: <PlusCircleOutlined style={{ fontSize: 22, color: "#2F5BFF" }} />,
  refresh: <ReloadOutlined style={{ fontSize: 22, color: "#2F5BFF" }} />,
  layers: <AppstoreOutlined style={{ fontSize: 22, color: "#2F5BFF" }} />,
};

const QuickActions: React.FC<Props> = ({ title, actions }) => {
  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[16px] font-bold" style={{ fontFamily: "Rubik" }}>
          {title}
        </div>

        <Button
          type="link"
          icon={<EditOutlined />}
          className="!px-0"
          style={{ color: "#0052CC", fontFamily: "Inter", fontSize: 12 }}
        >
          Customise
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {actions.map((a) => (
          <button
            key={a.key}
            type="button"
            className="flex h-[110px] flex-col items-center justify-center gap-3 rounded-[8px] bg-white shadow-[0px_6px_20px_rgba(182,182,182,0.12)]"
          >
            {iconMap[a.icon]}
            <span
              className="text-[12px] font-medium text-[#2F5BFF]"
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
