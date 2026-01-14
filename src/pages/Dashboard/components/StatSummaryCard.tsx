import React from "react";
import { Card } from "antd";
import DonutChart from "./DonutChart";

export type StatItem = {
  label: string;
  color: string;
  value: number;
};

type Props = {
  centerValue: number;
  centerLabel: string;
  ringMode: "multi" | "single";
  ringColors: string[];
  items: StatItem[];
};

const StatSummaryCard: React.FC<Props> = ({
  centerValue,
  centerLabel,
  ringMode,
  ringColors,
  items,
}) => {
  return (
    <Card
      bordered={false}
      className="!rounded-[4px]"
      styles={{ body: { padding: 0 } }}
      style={{
        boxShadow: "0px 4px 24px rgba(182,182,182,0.13)",
      }}
    >
      <div className="flex items-center gap-6 p-6">
        <DonutChart
          value={centerValue}
          label={centerLabel}
          mode={ringMode}
          colors={ringColors}
        />
        <div className="flex-1">
          <div className="grid gap-2">
            {items.map((it, idx) => (
              <div
                key={it.label}
                className="grid grid-cols-[1fr_auto] items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: it.color }}
                  />
                  <span
                    className="text-[12px] text-black"
                    style={{ fontFamily: "Rubik" }}
                  >
                    {it.label}
                  </span>
                </div>
                <span
                  className="text-[12px] font-semibold text-black"
                  style={{ fontFamily: "Rubik" }}
                >
                  {it.value}
                </span>
                {idx !== items.length - 1 && (
                  <div className="col-span-2 h-px bg-[#EEEEEE]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatSummaryCard;
