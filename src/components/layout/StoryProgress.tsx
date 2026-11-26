import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useCopy } from "@/i18n/useCopy";

export default function StoryProgress() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const progress = bar.current;
    const root = document.getElementById("main-content");
    const invitation = document.getElementById("next-step");
    if (!progress || !root || !invitation) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const start = root.getBoundingClientRect().top;
      const distance = Math.max(1, invitation.getBoundingClientRect().top - start);
      const value = Math.min(1, Math.max(0, -start / distance));
      progress.style.setProperty("--story-progress", String(value));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const resize =
      "ResizeObserver" in window ? new ResizeObserver(schedule) : undefined;
    resize?.observe(root);
    resize?.observe(invitation);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      resize?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="story-progress" aria-hidden="true">
      <span ref={bar} />
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
