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

  // segment rendering
  const segCount = mode === "multi" ? Math.max(4, colors.length) : 2;
  const gap = 6; // visual gap
  const segLen = c / segCount - gap;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
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
          colors.map((col, i) => (
            <circle
              key={col + i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={col}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              stroke={colors[0]}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* accent */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={colors[1] ?? colors[0]}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${c * 0.08} ${c}`}
              strokeDashoffset={-c * 0.2}
            />
          </>
        )}
      </svg>

      {/* center text */}
      <div className="absolute inset-0 grid place-items-center text-center">
        <div className="text-[24px] font-bold leading-[24px]" style={{ fontFamily: "Rubik" }}>
          {value}
        </div>
        <div className="mt-1 text-[12px] text-[#76777C]" style={{ fontFamily: "Rubik" }}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
