const edgeTolerance = 1;
const wheelQuietTime = 135;
const wheelIntentDistance = 12;
const wheelTailDistance = 8;
const wheelRestartAge = 230;
const touchIntentDistance = 42;
const nativeControls = "select, input[type=range], input[type=number], [contenteditable]:not([contenteditable=false]), [role=dialog]";

type SectionRange = { start: number; end: number };
type ScrollStep = { kind: "turn"; top: number } | { kind: "read" };
type WheelAction = "native" | "turned";
type WheelCadence = {
  startedAt: number;
  lastEvent: number;
  direction: -1 | 1;
  lastDistance: number;
  tailSamples: number;
};
type WheelGesture = WheelCadence & { distance: number; action?: WheelAction };
type TouchOrigin = {
  point: Touch;
  position: number;
  scrollers: { up: boolean; down: boolean };
};

// A tall section owns a range of readable positions. The next turn starts
// only after the reader reaches the edge in the requested direction.
export function storyScrollStep(
  sections: readonly SectionRange[],
  position: number,
  direction: -1 | 1,
): ScrollStep | undefined {
  let index = sections.length - 1;
  while (index > 0 && position < sections[index].start - edgeTolerance) index--;
  const current = sections[index];
  if (!current) return;

  if (direction === 1 && position < current.end - edgeTolerance) {
    return { kind: "read" };
  }
  if (direction === -1 && position > current.start + edgeTolerance) {
    if (position <= current.end + edgeTolerance) return { kind: "read" };
    return { kind: "turn", top: current.start };
  }

  const next = sections[index + direction];
  if (!next) return;
  // Enter a long chapter at the end closest to the reader's current screen.
  const top = direction === 1 ? next.start : next.end;
  if (Math.abs(top - position) > edgeTolerance) return { kind: "turn", top };
}

export function startsStoryWheelGesture(previous: WheelCadence | undefined, timestamp: number, delta: number) {
  if (!previous || timestamp - previous.lastEvent >= wheelQuietTime) return true;
  if (timestamp - previous.startedAt < wheelRestartAge) return false;

  // Continuous wheel packets can include momentum and the start of another
  // swipe. Re-arm on a renewed impulse after a slow tail, or a firm reversal.
  const distance = Math.abs(delta);
  const renewedImpulse = previous.tailSamples >= 2 &&
    distance >= Math.max(wheelIntentDistance, previous.lastDistance * 2.25);
  const reversal = Math.sign(delta) !== previous.direction && distance >= 24;
  return renewedImpulse || reversal;
}

function canScrollWithin(target: Element, shell: Element, direction: -1 | 1) {
  for (let node: Element | null = target; node && node !== shell; node = node.parentElement) {
    if (!(node instanceof HTMLElement)) continue;
    const remaining = direction === 1 ? node.scrollHeight - node.clientHeight - node.scrollTop : node.scrollTop;
    if (remaining > edgeTolerance && /^(auto|scroll|overlay)$/.test(getComputedStyle(node).overflowY)) {
      return true;
    }
  }
  return false;
}

export function installStoryNavigation(
  root: HTMLElement,
  sections: readonly HTMLElement[],
  motion: MediaQueryList,
) {
  const shell = root.closest<HTMLElement>(".site-shell") ?? root;
  const footer = shell.querySelector<HTMLElement>(".site-footer");
  const chapters = footer ? [...sections, footer] : sections;
  // Leave Apple's WebKit browsers in charge of wheel momentum. A cancelable
  // listener and scripted smooth scroll can hold up the next trackpad swipe.
  const useNativeWheel = navigator.vendor === "Apple Computer, Inc.";
  let gesture: WheelGesture | undefined;
  let touchOrigin: TouchOrigin | undefined;
  let touchFrame = 0;

  function gestureTarget(event: Event, target = event.target) {
    if (event.defaultPrevented || (window.visualViewport?.scale ?? 1) > 1 ||
        !(target instanceof Element) || !shell.contains(target) || target.closest(nativeControls)) return;
    return target;
  }

  function turnTo(top: number) {
    window.scrollTo({ top, behavior: motion.matches ? "instant" : "smooth" });
  }

  function measureSections(position: number, height: number) {
    const limit = Math.max(0, (document.scrollingElement?.scrollHeight ?? height) - height);
    return chapters.map((chapter) => {
      const bounds = chapter.getBoundingClientRect();
      const start = Math.max(0, Math.min(limit, bounds.top + position));
      const end = Math.max(start, Math.min(limit, bounds.bottom + position - height));
      return { start, end };
    });
  }

  function onWheel(event: WheelEvent) {
    if (event.ctrlKey || event.metaKey || event.shiftKey) return;
    const mode = event.deltaMode;
    const { deltaX, deltaY } = event;
    if (!deltaY || Math.abs(deltaX) >= Math.abs(deltaY)) return;

    const height = document.documentElement.clientHeight;
    const delta = deltaY * (mode === WheelEvent.DOM_DELTA_LINE ? 16 : mode === WheelEvent.DOM_DELTA_PAGE ? height : 1);
    const direction = delta > 0 ? 1 : -1;
    const fresh = startsStoryWheelGesture(gesture, event.timeStamp, delta);
    // Browsers can keep sending a transaction to an offscreen element after
    // a turn. Recheck the visible hit when deciding where a new swipe belongs.
    const hit = fresh ? document.elementFromPoint(event.clientX, event.clientY) : null;
    const target = gestureTarget(event, hit ?? event.target);
    if (!target) {
      gesture = undefined;
      return;
    }

    if (!gesture || fresh) {
      gesture = {
        startedAt: event.timeStamp,
        lastEvent: event.timeStamp,
        direction,
        lastDistance: 0,
        tailSamples: 0,
        distance: 0,
      };
    }
    gesture.lastEvent = event.timeStamp;
    gesture.lastDistance = Math.abs(delta);
    gesture.tailSamples = gesture.lastDistance <= wheelTailDistance ? gesture.tailSamples + 1 : 0;
    if (gesture.action === "native") return;
    if (!event.cancelable) {
      gesture.action ??= "native";
      return;
    }
    if (gesture.action === "turned") {
      event.preventDefault();
      return;
    }

    const position = window.scrollY;
    const step = storyScrollStep(measureSections(position, height), position, direction);
    if (step?.kind !== "turn" || canScrollWithin(target, shell, direction)) {
      // Let the browser carry this whole gesture, including its momentum,
      // through long content. Taking over at the edge makes trackpads stick.
      gesture.action = "native";
      return;
    }

    event.preventDefault();
    gesture.distance += delta;
    if (Math.abs(gesture.distance) < wheelIntentDistance || Math.sign(gesture.distance) !== direction) return;
    gesture.action = "turned";
    turnTo(step.top);
  }

  function onTouchStart(event: TouchEvent) {
    window.cancelAnimationFrame(touchFrame);
    touchOrigin = undefined;
    if (event.touches.length !== 1) return;
    const target = gestureTarget(event);
    const point = event.touches[0];
    if (!target) return;
    touchOrigin = {
      point,
      position: window.scrollY,
      scrollers: { up: canScrollWithin(target, shell, -1), down: canScrollWithin(target, shell, 1) },
    };
  }

  function onTouchEnd(event: TouchEvent) {
    const start = touchOrigin;
    touchOrigin = undefined;
    if (!start || event.touches.length || !gestureTarget(event)) return;
    const end = Array.from(event.changedTouches).find((point) => point.identifier === start.point.identifier);
    if (!end) return;

    const vertical = start.point.clientY - end.clientY;
    const horizontal = start.point.clientX - end.clientX;
    if (Math.abs(vertical) < touchIntentDistance || Math.abs(vertical) <= Math.abs(horizontal) * 1.3) return;
    if (vertical > 0 ? start.scrollers.down : start.scrollers.up) return;

    // Resolve from the original position. A short swipe can otherwise snap
    // back, and momentum must not change which adjacent section it targets.
    const sections = measureSections(window.scrollY, document.documentElement.clientHeight);
    const step = storyScrollStep(sections, start.position, vertical > 0 ? 1 : -1);
    if (step?.kind === "turn") touchFrame = window.requestAnimationFrame(() => turnTo(step.top));
  }

  function onTouchCancel() {
    touchOrigin = undefined;
  }

  if (!useNativeWheel) document.addEventListener("wheel", onWheel, { passive: false });
  shell.addEventListener("touchstart", onTouchStart, { passive: true });
  shell.addEventListener("touchend", onTouchEnd, { passive: true });
  shell.addEventListener("touchcancel", onTouchCancel, { passive: true });
  return () => {
    window.cancelAnimationFrame(touchFrame);
    if (!useNativeWheel) document.removeEventListener("wheel", onWheel);
    shell.removeEventListener("touchstart", onTouchStart);
    shell.removeEventListener("touchend", onTouchEnd);
    shell.removeEventListener("touchcancel", onTouchCancel);
  };
}
