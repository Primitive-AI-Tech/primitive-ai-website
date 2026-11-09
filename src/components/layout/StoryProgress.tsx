import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useCopy } from "@/i18n/useCopy";

export default function StoryProgress() {
  useEffect(() => {
    const progress = document.querySelector<HTMLElement>(".story-progress > span");
    const root = document.getElementById("main-content");
    const panels = root
      ? Array.from(root.querySelectorAll<HTMLElement>(":scope > section"))
      : [];
    if (!progress || !panels.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const configuredClearance = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--snap-header-clearance",
        ),
      );
      const headerBottom =
        document.querySelector(".site-header")?.getBoundingClientRect().bottom ||
        0;
      const panelClearance = panels[1]
        ? Number.parseFloat(
            getComputedStyle(panels[1]).scrollMarginBlockStart,
          )
        : 0;
      const clearance = Math.max(
        Number.isFinite(configuredClearance) ? configuredClearance : 0,
        Number.isFinite(panelClearance) ? panelClearance : 0,
        headerBottom,
      );
      let activeIndex = panels.findIndex((panel) => {
        const bounds = panel.getBoundingClientRect();
        return bounds.top <= clearance + 1 && bounds.bottom > clearance + 1;
      });
      if (activeIndex < 0) {
        const lastPanel = panels[panels.length - 1];
        if (lastPanel.getBoundingClientRect().bottom <= clearance + 1) {
          progress.style.setProperty("--story-progress", "1");
          return;
        }
        activeIndex = 0;
      }
      const activePanel = panels[activeIndex];
      const panelRange = activePanel.scrollHeight - activePanel.clientHeight;
      const panelProgress =
        panelRange > 0 ? activePanel.scrollTop / panelRange : 0;
      const value = (activeIndex + panelProgress) / panels.length;
      progress.style.setProperty("--story-progress", String(Math.min(1, value)));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(schedule);
    if (root) resize.observe(root);
    panels.forEach((panel) => {
      resize.observe(panel);
      panel.addEventListener("scroll", schedule, { passive: true });
    });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      panels.forEach((panel) => panel.removeEventListener("scroll", schedule));
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="story-progress" aria-hidden="true">
      <span />
    </div>
  );
}

export function ScrollCue() {
  const t = useCopy();
  return (
    <button
      type="button"
      className="story-scroll-cue"
      onClick={() =>
        document.getElementById("problem")?.scrollIntoView({
          block: "start",
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        })
      }
    >
      <span>{t("Scroll to explore")}</span>
      <ChevronDown aria-hidden="true" />
    </button>
  );
}
