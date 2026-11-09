import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { usePageExperience } from "@/hooks/usePageExperience";
import type { PageMetadata } from "./routes";

/** Mounted inside Suspense: effects see the resolved page, including direct hash entries. */
export default function PageLifecycle({
  page,
  children,
}: {
  page: PageMetadata;
  children: ReactNode;
}) {
  const location = useLocation();
  usePageExperience(page.path, page.scroll === "story");
  const previous = useRef<{ pathname: string; key: string }>();
  useEffect(() => {
    document.documentElement.classList.remove("snap-active");
    const changed =
      !previous.current ||
      previous.current.pathname !== location.pathname ||
      (!location.hash && previous.current.key !== location.key);
    if (changed) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    previous.current = { pathname: location.pathname, key: location.key };
    const frame = requestAnimationFrame(() => {
      if (!location.hash) return;
      const target = document.getElementById(
        decodeURIComponent(location.hash.slice(1)),
      );
      if (target && !target.hasAttribute("data-case-selection")) {
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
  return <>{children}</>;
}
