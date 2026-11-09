import { useEffect, useState, type RefObject } from "react";

type Layout = {
  width: number;
  height: number;
  paths: string[];
  points: { x: number; y: number }[];
};
export function CanvasConnections({
  container,
  platform,
}: {
  container: RefObject<HTMLDivElement>;
  platform: boolean;
}) {
  const [layout, setLayout] = useState<Layout>({
    width: 600,
    height: 560,
    paths: [],
    points: [],
  });
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const measure = () => {
      const bounds = element.getBoundingClientRect();
      const nodes = (selector: string) =>
        Array.from(element.querySelectorAll<HTMLElement>(selector)).map(
          (node) => {
            const rect = node.getBoundingClientRect();
            return {
              x: rect.left - bounds.left + rect.width / 2,
              top: rect.top - bounds.top,
              bottom: rect.bottom - bounds.top,
            };
          },
        );
      const groups = platform
        ? [
            nodes(".request-node"),
            nodes(".core-node"),
            nodes(".role-nodes > .glow-node"),
            nodes(".system-nodes > .glow-node"),
          ]
        : [
            nodes(".request-node"),
            nodes(".role-nodes > .glow-node"),
            nodes(".core-node"),
            nodes(".system-nodes > .glow-node"),
            nodes(".weekly-output"),
          ];
      const paths: string[] = [];
      const points: Layout["points"] = [];
      for (let i = 0; i < groups.length - 1; i++) {
        const from = groups[i],
          to = groups[i + 1];
        if (!from.length || !to.length) continue;
        const y =
          (Math.max(...from.map((n) => n.bottom)) +
            Math.min(...to.map((n) => n.top))) /
          2;
        const x = bounds.width / 2;
        for (const node of from)
          paths.push(`M ${node.x} ${node.bottom} V ${y} H ${x}`);
        for (const node of to)
          paths.push(`M ${x} ${y} H ${node.x} V ${node.top}`);
        points.push({ x, y });
      }
      setLayout({ width: bounds.width, height: bounds.height, paths, points });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    for (const node of element.children)
      if (node.tagName !== "svg") observer.observe(node);
    measure();
    return () => observer.disconnect();
  }, [container, platform]);
  return (
    <svg
      className="canvas-wires"
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {layout.paths.map((path, i) => (
        <path key={i} d={path} />
      ))}
      {layout.points.map((point, i) => (
        <circle key={i} cx={point.x} cy={point.y} r="3" />
      ))}
    </svg>
  );
}
