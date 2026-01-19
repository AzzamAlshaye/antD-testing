import React from "react";
import { Button } from "antd";
import {
  PlusCircleOutlined,
  ReloadOutlined,
  AppstoreOutlined,
  EditOutlined,
} from "@ant-design/icons";
import type { QuickActionItem } from "@interfaces/IDashboard";

type Props = {
  title: string;
  actions: QuickActionItem[];
};

const iconMap: Record<QuickActionItem["icon"], React.ReactNode> = {
  plus: <PlusCircleOutlined className="text-[24px] text-brand-500" />,
  refresh: <ReloadOutlined className="text-[24px] text-brand-500" />,
  layers: <AppstoreOutlined className="text-[24px] text-brand-500" />,
};

const QuickActions: React.FC<Props> = ({ title, actions }) => {
  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-rubik text-[16px] font-bold">{title}</div>

        <Button
          type="link"
          icon={<EditOutlined />}
          className="!px-0 !font-inter !text-[12px] !text-[#0052CC]"
        >
          Customise
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {actions.map((a) => (
          <button
            key={a.key}
            type="button"
            className="flex h-[124px] flex-col items-center justify-center gap-3 rounded-card border border-surface-200 bg-white shadow-cardSoft"
          >
            {iconMap[a.icon]}
            <span className="font-inter text-[12px] font-medium text-brand-500">
              {a.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
