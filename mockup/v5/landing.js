function setupCaseCarousel(carousel) {
  const navigation = carousel.querySelector(".example-nav");
  const tabs = [...navigation.querySelectorAll("[data-example]")];
  const track = carousel.querySelector("[data-carousel-track]");
  const panels = tabs.map(tab => document.getElementById(tab.hash.slice(1)));
  const controls = carousel.querySelector("[data-carousel-controls]");
  const toolbar = carousel.querySelector(".case-toolbar");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let active = 0;
  let held = false;
  let visible = false;
  let hovering = false;
  let touching = false;
  let requested = null;
  let autoTimer;
  let settleTimer;
  let width;

  function fitTrack() {
    const height = Math.ceil(panels[active].getBoundingClientRect().height);
    const headerClearance = document.querySelector(".nav-capsule")?.getBoundingClientRect().bottom || 0;
    if (track.getBoundingClientRect().top + height > headerClearance) {
      track.style.setProperty("--case-track-height", `${height}px`);
    }
  }

  function schedule() {
    clearTimeout(autoTimer);
    const focused = carousel.contains(document.activeElement);
    if (!held && !motion.matches && visible && !document.hidden && !hovering && !touching && !focused) {
      autoTimer = setTimeout(() => goTo(active + 1), 10000);
    }
  }

  function updateSelection(index) {
    active = index;
    tabs.forEach((tab, position) => {
      const selected = position === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[position].inert = !selected;
      panels[position].tabIndex = selected ? 0 : -1;
    });
    fitTrack();
  }

  function goTo(index, { manual = false, instant = false } = {}) {
    const next = (index + panels.length) % panels.length;
    const left = panels[next].offsetLeft;
    const wraps = index !== next;
    if (manual) {
      held = true;
      history.replaceState(null, "", tabs[next].hash);
    }
    updateSelection(next);
    requested = Math.abs(track.scrollLeft - left) > 1 ? next : null;
    track.scrollTo({ left, behavior: instant || wraps || motion.matches ? "instant" : "smooth" });
    schedule();
  }

  function followHash() {
    const hash = location.hash;
    const target = document.getElementById(hash.slice(1));
    const index = panels.findIndex(panel => panel.contains(target));
    if (index === -1) return;

    held = true;
    goTo(index, { instant: true });
    const destination = hash === "#evidence" ? carousel.closest(".v5-section") : panels[index];
    const alignPanel = async () => {
      await document.fonts.ready;
      requestAnimationFrame(() => {
        if (location.hash === hash) {
          destination.scrollIntoView({ block: "start", inline: "nearest", behavior: "instant" });
        }
      });
    };
    if (document.readyState === "complete") alignPanel();
    else window.addEventListener("load", alignPanel, { once: true });
  }

  navigation.setAttribute("role", "tablist");
  tabs.forEach((tab, index) => {
    const panel = panels[index];
    tab.id = `${panel.id}-tab`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panel.id);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);

    tab.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      goTo(index, { manual: true });
    });
    tab.addEventListener("keydown", event => {
      const destinations = {
        ArrowLeft: index - 1,
        ArrowRight: index + 1,
        Home: 0,
        End: tabs.length - 1,
      };
      if (!Object.hasOwn(destinations, event.key)) return;
      event.preventDefault();
      goTo(destinations[event.key], { manual: true });
      tabs[active].focus({ preventScroll: true });
    });
  });

  carousel.dataset.ready = "";
  controls.hidden = false;
  width = track.clientWidth;
  goTo(0, { instant: true });
  followHash();
  window.addEventListener("hashchange", followHash);

  controls.querySelectorAll("[data-carousel-step]").forEach(button => {
    button.addEventListener("click", () => {
      goTo(active + Number(button.dataset.carouselStep), { manual: true });
    });
  });
  track.addEventListener("scroll", () => {
    clearTimeout(autoTimer);
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => {
      const stride = panels[1].offsetLeft - panels[0].offsetLeft;
      if (!stride) return;
      const index = Math.min(panels.length - 1, Math.max(0, Math.round(track.scrollLeft / stride)));
      if (requested === null && index !== active) held = true;
      requested = null;
      updateSelection(index);
      schedule();
    }, 140);
  }, { passive: true });

  // Leave horizontal swipes and vertical page scrolling with the browser.
  track.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse") return;
    touching = true;
    requested = null;
    schedule();
  });
  function endTouch() {
    if (!touching) return;
    touching = false;
    schedule();
  }
  window.addEventListener("pointerup", endTouch);
  window.addEventListener("pointercancel", endTouch);
  track.addEventListener("wheel", event => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) requested = null;
  }, { passive: true });

  carousel.addEventListener("pointerenter", event => {
    if (event.pointerType !== "mouse") return;
    hovering = true;
    schedule();
  });
  carousel.addEventListener("pointerleave", event => {
    if (event.pointerType !== "mouse") return;
    hovering = false;
    schedule();
  });
  carousel.addEventListener("focusin", schedule);
  carousel.addEventListener("focusout", () => requestAnimationFrame(schedule));
  document.addEventListener("visibilitychange", schedule);
  motion.addEventListener("change", schedule);

  if ("IntersectionObserver" in window) {
    const inView = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) inView.add(entry.target);
        else inView.delete(entry.target);
      });
      const next = inView.size === 2;
      if (visible && !next) held = false;
      visible = next;
      if (visible) fitTrack();
      schedule();
    }, { threshold: [0, 0.2], rootMargin: "-92px 0px 0px" });
    observer.observe(toolbar);
    observer.observe(track);
  }

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(() => {
      if (width !== track.clientWidth) {
        width = track.clientWidth;
        goTo(active, { instant: true });
      } else {
        fitTrack();
      }
    });
    observer.observe(track);
    panels.forEach(panel => observer.observe(panel));
  }
}

document.querySelectorAll("[data-carousel]").forEach(setupCaseCarousel);

// Old homepage chapter links still lead to their examples after the move.
if (document.body.dataset.v5Preview === "home") {
  const movedPages = new Map([
    ["#story", "about.html#about-intro"],
    ["#updates", "update.html#update-intro"],
    ["#custom-ai", "services.html#service-intro"],
  ]);
  const productFragments = new Set([
    "#applications", "#examples", "#product-applications", "#evidence", "#order-example",
    "#warehouse-example", "#finance-example", "#research", "#knowledge-research",
    "#company-profile", "#buyer-screening", "#sales-support",
  ]);
  function followMovedChapter() {
    const destination = movedPages.get(location.hash);
    if (destination) location.replace(destination);
    else if (productFragments.has(location.hash)) location.replace("products.html" + location.hash);
  }
  followMovedChapter();
  window.addEventListener("hashchange", followMovedChapter);
}

if (document.body.dataset.v5Preview === "products") {
  const homepageChapters = new Map([
    ["#control", "#control"],
    ["#controls", "#control"],
    ["#product-interface", "#control"],
    ["#pricing", "#pricing"],
    ["#economics", "#pricing"],
    ["#business-value", "#pricing"],
    ["#how-we-work", "#how-we-work"],
    ["#pilot", "#how-we-work"],
  ]);
  function followMovedChapter() {
    const chapter = homepageChapters.get(location.hash);
    if (chapter) location.replace("website-review.html" + chapter);
  }
  followMovedChapter();
  window.addEventListener("hashchange", followMovedChapter);
}
