import React from "react";
import { ArrowUpOutlined, RightOutlined } from "@ant-design/icons";
import type { RecentlyItem } from "@interfaces/IDashboard";

type Props = {
  title: string;
  items: RecentlyItem[];
};

const RecentlyVisited: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="min-w-0">
      <div className="mb-4 font-rubik text-[16px] font-bold">{title}</div>

      <div className="grid gap-3">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex h-[52px] items-center justify-between rounded-[6px] bg-white px-4 shadow-card"
          >
            <div className="flex items-center gap-3 font-rubik text-[13px]">
              <span className="text-[#0E1A2F]">{it.org}</span>
              <span className="h-7 w-px bg-[#F4F4F4]" />
              <span className="text-[#0E1A2F]">{it.type}</span>
              <span className="h-7 w-px bg-[#F4F4F4]" />
              <span className="font-inter text-[11px] text-[#83868A]">
                {it.reporter}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 font-rubik text-[10.5px] text-text-500">
                <ArrowUpOutlined className="text-[#EA7100]" />
                {it.priority}
              </div>
              <RightOutlined className="text-text-900" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyVisited;
