import { useEffect } from "react";
import { installStoryNavigation } from "./story-scroll";

const revealSelector = [
  ".site-eyebrow",
  "h1",
  ".section-title",
  ".section-intro",
  ".hero-lead",
  ".hero-support",
  ".hero-description",
  ".v5-hero-description",
  ".v5-page-heading",
  ".button-row",
  ".hero-control-cues",
  ".v5-section .section-head",
  ".v5-section .friction-grid",
  ".v5-section .system-map",
  ".v5-section .work-grid",
  ".v5-section .value-pair",
  ".v5-section .role-grid",
  ".v5-section .v5-flow",
  ".v5-section .v5-controls-list",
  ".v5-section .v5-approval",
  ".v5-section .delivery-example",
  ".v5-section .customer-groups",
  ".v5-section .pricing-grid",
  ".agent-canvas",
  ".mobile-agent-canvas",
  ".problem-card",
  ".primary-value-pair",
  ".supporting-values > div",
  ".mini-economics",
  ".scenario-tabs",
  ".mobile-scenario-select",
  ".home-case-panel",
  ".delivery-grid > li",
  ".working-brief",
  ".compact-architecture",
  ".activity-preview",
  ".story-progression",
  ".home-company h2",
  ".home-company p",
  ".invitation-cta .site-container",
  ".workflow-calculator",
  ".cost-panel",
  ".evidence-grid > article",
  ".scenario-workspace",
  ".example-output",
  ".case-requirements > section",
  ".orchestration-steps > li",
  ".knowledge-chain",
  ".delivery-timeline > li",
  ".training-grid > article",
  ".trust-principle-list > article",
  ".sample-approval",
  ".authority-stages",
  ".company-timeline > li",
  ".company-principle-grid > article",
  ".contact-next-card",
  ".contact-form-card",
  ".contact-direct",
  ".question-list",
].join(",");

/** Native touch snapping and wheel navigation share the same section boundaries. */
export function usePageExperience(pathname: string, enabled: boolean) {
  useEffect(() => {
    const root = document.getElementById("main-content");
    if (!root || !enabled) return;
    const html = document.documentElement;
    const sections = Array.from(
      root.querySelectorAll<HTMLElement>(
        ":scope > section, :scope > div > section, .prose > section, .policy-sections > section",
      ),
    );
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(revealSelector),
    );
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let revealObserver: IntersectionObserver | undefined;
    let sectionObserver: IntersectionObserver | undefined;
    html.classList.add("story-snap");
    const removeStoryNavigation = installStoryNavigation(root, sections, preference);
    const configureMotion = () => {
      revealObserver?.disconnect();
      sectionObserver?.disconnect();
      root.classList.remove("motion-ready");
      targets.forEach((target) => {
        target.removeAttribute("data-reveal");
        target.style.removeProperty("--reveal-delay");
        target.classList.remove("is-revealed");
      });
      if (preference.matches || !("IntersectionObserver" in window)) return;
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -5% 0px" },
      );
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            entry.target.classList.toggle("is-in-view", entry.isIntersecting),
          );
        },
        { threshold: 0 },
      );
      sections.forEach((section) => sectionObserver?.observe(section));
      targets.forEach((target) => {
        target.dataset.reveal = "";
        // Stagger neighboring cards, rather than delaying the entire page.
        const siblings = target.parentElement
          ? Array.from(target.parentElement.children).filter((node) =>
              targets.includes(node as HTMLElement),
            )
          : [];
        target.style.setProperty(
          "--reveal-delay",
          `${Math.min(Math.max(0, siblings.indexOf(target)), 4) * 65}ms`,
        );
        revealObserver?.observe(target);
      });
      root.classList.add("motion-ready");
    };
    const revealFocusedContent = (event: FocusEvent) => {
      let target = event.target instanceof HTMLElement ? event.target : null;
      while (target && target !== root) {
        if (target.hasAttribute("data-reveal"))
          target.classList.add("is-revealed");
        target = target.parentElement;
      }
    };
    configureMotion();
    preference.addEventListener("change", configureMotion);
    root.addEventListener("focusin", revealFocusedContent);
    return () => {
      removeStoryNavigation();
      revealObserver?.disconnect();
      sectionObserver?.disconnect();
      preference.removeEventListener("change", configureMotion);
      root.removeEventListener("focusin", revealFocusedContent);
      root.classList.remove("motion-ready");
      html.classList.remove("story-snap");
      targets.forEach((target) => {
        target.removeAttribute("data-reveal");
        target.style.removeProperty("--reveal-delay");
        target.classList.remove("is-revealed");
      });
      sections.forEach((section) => {
        section.classList.remove("is-in-view");
      });
    };
  }, [pathname, enabled]);
}
