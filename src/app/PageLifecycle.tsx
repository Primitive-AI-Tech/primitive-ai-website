import { useEffect, useRef, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StoryProgress from "@/components/layout/StoryProgress";
import { usePageExperience } from "@/hooks/usePageExperience";
import { movedHomeLocation, movedProductLocation, type PageMetadata } from "./routes";

/** Mounted inside Suspense: effects see the resolved page, including direct hash entries. */
export default function PageLifecycle({
  page,
  children,
}: {
  page: PageMetadata;
  children: ReactNode;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  usePageExperience(page.path, page.scroll === "story");
  const previous = useRef<{ pathname: string; key: string }>();
  useEffect(() => {
    const resolveMovedFragment = page.id === "home" ? movedHomeLocation
      : page.id === "products" ? movedProductLocation : undefined;
    const moved = resolveMovedFragment?.(location.hash, location.search);
    if (moved) {
      navigate(moved, { replace: true });
      return;
    }

    document.documentElement.classList.remove("snap-active");
    const changed =
      !previous.current ||
      previous.current.pathname !== location.pathname ||
      (!location.hash && previous.current.key !== location.key);
    if (changed) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    const frame = requestAnimationFrame(() => {
      previous.current = { pathname: location.pathname, key: location.key };
      if (!location.hash) return;
      const target = document.getElementById(
        decodeURIComponent(location.hash.slice(1)),
      );
      if (target && !target.hasAttribute("data-case-selection")) {
        target.scrollIntoView({
          behavior:
            changed || window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "instant"
              : "smooth",
        });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key, location.search, navigate, page.id]);
  const showProgress = ["products", "services", "about", "updates"].includes(page.id);
  return (
    <>
      {showProgress && <StoryProgress key={page.id} />}
      {children}
    </>
  );
}
