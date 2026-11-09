import { FileText, Folder, Search } from "lucide-react";

export function ProblemVisual({ type }: { type: number }) {
  return (
    <div className={`problem-visual visual-${type}`} aria-hidden="true">
      <svg
        className="problem-illustration"
        viewBox="0 0 240 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse
          cx="120"
          cy="91"
          rx="104"
          ry="54"
          fill="#dbf2ff"
          stroke="none"
        />
        {type === 0 ? (
          <>
            <ellipse
              className="illustration-orbit"
              cx="120"
              cy="86"
              rx="92"
              ry="48"
              stroke="#679fc6"
              strokeDasharray="3 6"
            />
            <rect
              x="96"
              y="8"
              width="58"
              height="67"
              rx="12"
              fill="#f8fcff"
              stroke="#bedef2"
            />
            <FileText x="108" y="21" width="35" height="41" />
            <rect
              x="23"
              y="87"
              width="64"
              height="48"
              rx="11"
              fill="#f8fcff"
              stroke="#bedef2"
            />
            <Folder x="36" y="95" width="39" height="33" />
            <circle cx="188" cy="108" r="29" fill="#f8fcff" stroke="#bedef2" />
            <Search x="169" y="90" width="38" height="38" />
          </>
        ) : type === 1 ? (
          <>
            {[25, 67, 109].map((y, index) => (
              <g
                key={y}
                className="illustration-task"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <rect
                  x="43"
                  y={y}
                  width="154"
                  height="31"
                  rx="9"
                  fill="#f8fcff"
                />
                <circle cx="60" cy={y + 15.5} r="8" stroke="#0fb4e0" />
                <path d={`M56 ${y + 15} l3 3 5-6`} stroke="#0fb4e0" />
                <path
                  d={`M83 ${y + 12} H175 M83 ${y + 21} H153`}
                  stroke="#7db4dd"
                />
              </g>
            ))}
            <path
              d="M34 40 C8 55 8 105 34 122 M25 121 L34 122 L33 112 M206 40 C232 55 232 105 206 122 M207 112 L206 122 L215 121"
              stroke="#496e97"
            />
          </>
        ) : (
          <>
            <path
              d="M120 53 V78 H48 V98 M120 78 V98 M120 78 H192 V98"
              stroke="#5b8bb6"
            />
            {[
              { x: 120, y: 28 },
              { x: 48, y: 111 },
              { x: 120, y: 111 },
              { x: 192, y: 111 },
            ].map(({ x, y }) => (
              <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                <circle r="25" fill="#f8fcff" stroke="#bedef2" />
                <circle cy="-6" r="7" />
                <path d="M-13 14 C-13 -1 13 -1 13 14" />
              </g>
            ))}
          </>
        )}
      </svg>
    </div>
  );
}
