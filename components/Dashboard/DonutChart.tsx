import React from "react";

type Props = {
  size?: number;
  strokeWidth?: number;
  value: number;
  label: string;
  mode: "multi" | "single";
  colors: string[];
};

/**
 * Lightweight donut chart without external libs.
 * multi: uses multiple segments equally spaced (visual only like figma rings)
 * single: uses first color as full ring + small accent using second color
 */
const DonutChart: React.FC<Props> = ({
  size = 96,
  strokeWidth = 10,
  value,
  label,
  mode,
  colors,
}) => {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const ringColors = colors.length > 0 ? colors : ["#1F49FF"];

  // segment rendering
  const segCount = mode === "multi" ? ringColors.length : 2;
  const gap = mode === "multi" ? 2 : 0; // subtle separation between segments
  const segLen = c / segCount - gap;

  return (
    <div
      className="relative grid place-items-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(232,232,232,0.76)"
          strokeWidth={strokeWidth}
        />

        {mode === "multi" ? (
          ringColors.map((col, i) => (
            <circle
              key={col + i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={col}
              strokeWidth={strokeWidth}
              strokeLinecap="butt"
              strokeDasharray={`${segLen} ${c - segLen}`}
              strokeDashoffset={-(c / segCount) * i}
            />
          ))
        ) : (
          <>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={ringColors[0]}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* accent */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={ringColors[1] ?? ringColors[0]}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${c * 0.12} ${c}`}
              strokeDashoffset={-c * 0.25}
            />
          </>
        )}
      </svg>

      {/* center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px] text-center">
        <div
          className="text-[22px] font-bold leading-[22px]"
          style={{ fontFamily: "Rubik" }}
        >
          {value}
        </div>
        <div
          className="text-[11px] leading-[12px] text-[#76777C]"
          style={{ fontFamily: "Rubik" }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
