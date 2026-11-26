(() => {
  const main = document.querySelector('body.v5-review > #main');
  const progress = document.querySelector('.v5-story-progress > span');
  if (!main || !progress) return;

  let frame = 0;

  function update() {
    frame = 0;
    const viewportHeight = document.documentElement.clientHeight;
    const { top, height } = main.getBoundingClientRect();
    const travel = Math.max(0, height - viewportHeight);
    const position = travel > 0 ? Math.max(0, Math.min(1, -top / travel)) : 1;
    progress.style.setProperty('--v5-story-progress', String(position));
  }

  function schedule() {
    if (!frame) frame = window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(main);
  update();

  // Resolve links after the live mounts and fonts have laid out.
  const startingHash = location.hash;
  const linkedSection = document.getElementById(startingHash.slice(1));
  if (linkedSection?.matches('#intro, #next-step, .v5-section, .product-anchor')) {
    const alignLinkedSection = async () => {
      await document.fonts.ready;
      window.requestAnimationFrame(() => {
        if (location.hash === startingHash) {
          linkedSection.scrollIntoView({ block: 'start', behavior: 'instant' });
        }
      });
    };
    if (document.readyState === 'complete') alignLinkedSection();
    else window.addEventListener('load', alignLinkedSection, { once: true });
  }
})();
