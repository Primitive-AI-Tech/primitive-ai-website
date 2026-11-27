import { EmphasizedCopy } from "@/components/marketing/EmphasizedCopy";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type TouchEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eyebrow } from "@/components/marketing/primitives";
import { ApplicationCaseContent } from "./ApplicationCaseContent";
import { cases, legacyCaseTargets } from "./application-cases";
import { useProductCopy } from "./product-copy";

const rotationInterval = 10_000;
const sectionHashes = ["#applications", "#examples", "#product-applications"];

function caseIndex(fragment: string) {
  const id = legacyCaseTargets[fragment] ?? fragment;
  return cases.findIndex((item) => item.id === id);
}

function caseFromLocation(hash: string, search: string) {
  const linkedCase = caseIndex(hash.slice(1));
  if (linkedCase >= 0 || (hash && !sectionHashes.includes(hash))) return linkedCase;
  return caseIndex(new URLSearchParams(search).get("workflow") ?? "");
}

function relativeIndex(index: number, move: number) {
  return (index + move + cases.length) % cases.length;
}

export function ProductApplications() {
  const copy = useProductCopy();
  const { hash, search } = useLocation();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLAnchorElement | null)[]>([]);
  const linkedCase = caseFromLocation(hash, search);
  const [selected, setSelected] = useState(Math.max(0, linkedCase));
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [playing, setPlaying] = useState(linkedCase < 0);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(() => !document.hidden);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const selectedHash = useRef<string | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (linkedCase < 0) {
      if (sectionHashes.includes(hash)) setSelected(0);
      return;
    }

    setSelected(linkedCase);
    setPlaying(false);
    if (selectedHash.current === hash) {
      selectedHash.current = null;
      return;
    }

    const frame = requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        block: "start",
        behavior: "instant",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, linkedCase]);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= .2),
      { threshold: .2 },
    );
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => setReducedMotion(media.matches);
    const onVisibility = () => setDocumentVisible(!document.hidden);
    observer.observe(element);
    media.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const rotating = playing && !reducedMotion && visible && documentVisible && !hovering && !focused;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => {
      setDirection("next");
      setSelected((index) => relativeIndex(index, 1));
    }, rotationInterval);
    return () => window.clearTimeout(timer);
  }, [rotating, selected]);

  function select(
    index: number,
    focusTab = false,
    motion: "next" | "previous" = index < selected ? "previous" : "next",
  ) {
    const nextHash = `#${cases[index].id}`;
    setPlaying(false);
    setDirection(motion);
    setSelected(index);
    if (nextHash !== hash) {
      selectedHash.current = nextHash;
      navigate({ pathname: "/products", search, hash: nextHash }, { preventScrollReset: true, replace: true });
    }
    if (focusTab) tabs.current[index]?.focus({ preventScroll: true });
  }

  function onTabKeys(event: KeyboardEvent<HTMLDivElement>) {
    let next: number;
    switch (event.key) {
      case " ":
        event.preventDefault();
        select(selected);
        return;
      case "ArrowLeft": next = relativeIndex(selected, -1); break;
      case "ArrowRight": next = relativeIndex(selected, 1); break;
      case "Home": next = 0; break;
      case "End": next = cases.length - 1; break;
      default: return;
    }
    event.preventDefault();
    select(next, true, event.key === "ArrowLeft" || event.key === "Home" ? "previous" : "next");
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    resetTouch();
    if (event.touches.length !== 1 || (event.target as HTMLElement).closest(".table-scroll")) return;
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function resetTouch() {
    touchStart.current = null;
    trackRef.current?.style.removeProperty("--case-drag");
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    const start = touchStart.current;
    if (!start || event.touches.length !== 1 || reducedMotion) return;

    const touch = event.touches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) >= 8 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      trackRef.current?.style.setProperty("--case-drag", `${Math.min(42, Math.max(-42, dx * .28))}px`);
    }
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const start = touchStart.current;
    resetTouch();
    if (!start || !event.changedTouches.length) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      select(relativeIndex(selected, dx < 0 ? 1 : -1), false, dx < 0 ? "next" : "previous");
    }
  }

  return (
    <section ref={sectionRef} className="v5-page-section v5-applications" id="applications" aria-labelledby="applications-title">
      <span className="product-anchor" id="examples" aria-hidden="true" />
      <span className="product-anchor" id="product-applications" aria-hidden="true" />
      {Object.keys(legacyCaseTargets).map((id) => <span key={id} id={id} className="product-anchor" data-case-selection aria-hidden="true" />)}
      <div className="v5-page-wrap">
        <div className="v5-page-heading">
          <Eyebrow>{copy(["Applications", "Ứng dụng"])}</Eyebrow>
          <h2 id="applications-title"><EmphasizedCopy message="products.applications.headline" fallback="One solution <em>to rule them all</em>" /></h2>
          <p className="lead">{copy(["One platform handles open-ended questions, structured workflows, and scheduled reports. Your team chooses the data, tools, and approval steps for each task.", "Cùng một nền tảng xử lý câu hỏi mở, quy trình định sẵn và báo cáo theo lịch. Đội ngũ chọn dữ liệu, công cụ và bước phê duyệt cho từng công việc."])}</p>
        </div>

        <div ref={carouselRef} className="case-carousel" role="region"
          aria-roledescription={copy(["carousel", "bộ thẻ trượt"])}
          aria-label={copy(["Core Agentic application examples", "Ví dụ ứng dụng Core Agentic"])}
          onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovering(true); }}
          onPointerLeave={() => setHovering(false)}
          onFocusCapture={() => setFocused(true)} onBlurCapture={handleBlur}
        >
          <div className="case-toolbar">
            <div className="example-nav" role="tablist" aria-label={copy(["Choose a Core Agentic application", "Chọn ứng dụng Core Agentic"])} onKeyDown={onTabKeys}>
              {cases.map((item, index) => (
                <Link key={item.id} id={`case-tab-${item.id}`} ref={(node) => { tabs.current[index] = node; }}
                  to={{ pathname: "/products", search, hash: `#${item.id}` }} role="tab"
                  aria-selected={index === selected} aria-controls={item.id} tabIndex={index === selected ? 0 : -1}
                  onClick={(event) => {
                    if (event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
                    event.preventDefault();
                    select(index);
                  }}
                >
                  {copy(item.label)}
                </Link>
              ))}
            </div>
            <div className="case-controls">
              <button type="button" aria-controls="applications-track" aria-label={copy(["Previous case", "Thẻ trước"])} onClick={() => select(relativeIndex(selected, -1), false, "previous")}>
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" aria-controls="applications-track" aria-label={copy(["Next case", "Thẻ tiếp theo"])} onClick={() => select(relativeIndex(selected, 1), false, "next")}>
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div ref={trackRef} id="applications-track" className="case-track" data-direction={direction}
            aria-live={rotating ? "off" : "polite"} onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onTouchCancel={resetTouch}
          >
            {cases.map((item, index) => <ApplicationCaseContent key={item.id} item={item} active={index === selected} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
