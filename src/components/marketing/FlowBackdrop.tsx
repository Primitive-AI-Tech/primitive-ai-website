import { useId } from "react";

export function FlowBackdrop() {
  const gradientId = useId();
  return (
    <div className="flow-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#044eff" />
            <stop offset=".5" stopColor="#0046ee" stopOpacity=".6" />
            <stop offset="1" stopColor="#071526" stopOpacity=".1" />
          </linearGradient>
        </defs>
        <path
          d="M-120 30 C150 200 370 -35 650 -170 L1000 -140 C560 -25 420 240 100 160 L-120 130Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M-130 755 C200 580 280 980 700 820 S1200 510 1540 600 L1540 900 L-130 900Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M-130 755 C200 580 280 980 700 820 S1200 510 1540 600"
          fill="none"
          stroke="#0fb4e0"
          strokeOpacity=".55"
          strokeWidth="1.3"
        />
      </svg>
      <div className="dot-field" />
    </div>
  );
}
