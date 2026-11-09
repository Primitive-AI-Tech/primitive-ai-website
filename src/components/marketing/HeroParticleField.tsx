import { useEffect, useRef } from "react";

const WORDS = ["Core Agentic", "Knowledge", "Productivity", "Operations", "Workflows"];
// A large word needs more dots than a small one to read as letters instead of dust.
const DESKTOP_PARTICLES = 7000;
const TABLET_PARTICLES = 4200;
const MOBILE_PARTICLES = 2600;
const WANDER = 5;
const GATHER = 2.2;
const HOLD = 3.4;
const CYCLE = WANDER + GATHER + HOLD;
const TAU = Math.PI * 2;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  seed: number;
  size: number;
};
type WordBounds = { x: number; y: number; width: number; height: number };

function sampleWord(word: string, rawWidth: number, rawHeight: number, count: number) {
  // Canvas sizes are whole pixels; a fractional width would break the pixel index below.
  const width = Math.max(1, Math.round(rawWidth));
  const height = Math.max(1, Math.round(rawHeight));
  const mask = document.createElement("canvas");
  mask.width = width;
  mask.height = height;
  const context = mask.getContext("2d", { willReadFrequently: true });
  if (!context) return Array.from({ length: count }, () => [width / 2, height / 2] as const);

  const family = 'ui-sans-serif, system-ui, "Helvetica Neue", sans-serif';
  context.font = `800 100px ${family}`;
  const widthAt100 = context.measureText(word).width || 1;
  // Largest size that fits the box (the word may use 96% of its width and 80% of its height).
  const fontSize = Math.min(height * 0.8, (width * 0.96 * 100) / widthAt100);
  context.font = `800 ${fontSize}px ${family}`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#fff";
  context.fillText(word, width / 2, height / 2);

  const pixels = context.getImageData(0, 0, width, height).data;
  const step = Math.max(2, Math.round(fontSize / 70));
  const points: Array<[number, number]> = [];
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (pixels[(y * width + x) * 4 + 3] > 128) points.push([x, y]);
    }
  }

  for (let i = points.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [points[i], points[j]] = [points[j], points[i]];
  }
  return Array.from({ length: count }, (_, i) => points[i % Math.max(points.length, 1)] ?? [width / 2, height / 2]);
}

export function HeroParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionPreference.matches;
    const accent = "#4d9cff";
    const soft = "#c9efff";
    const base = "#2d7fe0";
    const mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let count = MOBILE_PARTICLES;
    let wordBounds: WordBounds = { x: 0, y: 0, width: 0, height: 0 };
    let frame = 0;
    let visible = true;
    let last = 0;
    let wordIndex = -1;

    const getWordBounds = (): WordBounds => {
      if (canvas.clientWidth >= 900) {
        // Desktop: one large word across the whole hero background, behind the copy and the card.
        return {
          x: canvas.width * 0.04,
          y: canvas.height * 0.32,
          width: canvas.width * 0.92,
          height: canvas.height * 0.42,
        };
      }
      return {
        x: canvas.width * 0.08,
        y: canvas.height * 0.69,
        width: canvas.width * 0.84,
        height: canvas.height * 0.2,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      wordBounds = getWordBounds();
      count = canvas.clientWidth >= 1200 ? DESKTOP_PARTICLES : canvas.clientWidth >= 900 ? TABLET_PARTICLES : MOBILE_PARTICLES;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        tx: canvas.width / 2,
        ty: canvas.height / 2,
        seed: Math.random() * TAU,
        size: 0.8 + Math.random() * 1.6,
      }));
      wordIndex = -1;
    };

    const onMove = (event: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * canvas.width;
      mouse.y = ((event.clientY - bounds.top) / bounds.height) * canvas.height;
    };
    const onMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        mouse.x = -9999;
        mouse.y = -9999;
      }
    };

    const assignWord = (index: number, snapToWord = false) => {
      const targets = sampleWord(WORDS[index % WORDS.length], wordBounds.width, wordBounds.height, count);
      particles.forEach((particle, i) => {
        particle.tx = wordBounds.x + targets[i][0];
        particle.ty = wordBounds.y + targets[i][1];
        if (snapToWord) {
          particle.x = particle.tx;
          particle.y = particle.ty;
          particle.vx = 0;
          particle.vy = 0;
        }
      });
    };

    const draw = (time: number, still = false) => {
      const delta = still ? 0 : Math.min(time - last, 0.05);
      last = time;
      const { width, height } = canvas;
      const dpr = width / canvas.clientWidth;
      const round = Math.floor(time / CYCLE);
      const local = time - round * CYCLE;
      if (round !== wordIndex) {
        wordIndex = round;
        assignWord(round);
      }

      // Match Oscar's wander → gather → hold → dissolve cycle and text-mask sampling.
      const form = still
        ? 1
        : local < WANDER
          ? 0
          : local < WANDER + GATHER
            ? (local - WANDER) / GATHER
            : local < WANDER + GATHER + HOLD * 0.85
              ? 1
              : 1 - (local - WANDER - GATHER - HOLD * 0.85) / (HOLD * 0.15 + 0.001);
      const pull = form * form * (3 - 2 * form);
      const reach = 110 * dpr;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";
      for (const particle of particles) {
        const angle = Math.sin(particle.x * 0.0021 + time * 0.25 + particle.seed) * 2
          + Math.cos(particle.y * 0.003 - time * 0.2) * 2;
        const spring = 7 * pull;
        particle.vx += (Math.cos(angle) * 22 * (1 - pull) * dpr + (particle.tx - particle.x) * spring) * delta;
        particle.vy += (Math.sin(angle) * 22 * (1 - pull) * dpr + (particle.ty - particle.y) * spring) * delta;

        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < reach * reach) {
          const distance = Math.sqrt(distanceSquared) || 1;
          const force = (1 - distance / reach) * 900 * dpr * delta;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        const damping = Math.exp(-delta * (2.2 + 3 * pull));
        particle.vx *= damping;
        particle.vy *= damping;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;

        if (!still && pull < 0.5) {
          if (particle.x < -20) particle.x = width + 20;
          else if (particle.x > width + 20) particle.x = -20;
          if (particle.y < -20) particle.y = height + 20;
          else if (particle.y > height + 20) particle.y = -20;
        }

        const speed = Math.min(1, Math.hypot(particle.vx, particle.vy) / (180 * dpr));
        const edge = Math.min(1, Math.min(particle.x / width, 1 - particle.x / width) / 0.08);
        context.fillStyle = speed > 0.45 ? soft : pull > 0.7 ? accent : base;
        context.globalAlpha = Math.max(0, edge) * (0.45 + 0.3 * pull + 0.4 * speed);
        const size = particle.size * dpr * (1 + 0.6 * speed);
        context.fillRect(particle.x - size / 2, particle.y - size / 2, size, size);
      }
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
    };

    let startedAt = performance.now();
    const animate = (now: number) => {
      if (visible && !document.hidden) draw((now - startedAt) / 1000);
      else last = (now - startedAt) / 1000;
      frame = window.requestAnimationFrame(animate);
    };

    resize();
    if (reduceMotion) {
      assignWord(0, true);
      draw(0.01, true);
    }
    else frame = window.requestAnimationFrame(animate);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const onVisibilityChange = () => {
      if (!document.hidden && !reduceMotion && !frame) frame = window.requestAnimationFrame(animate);
      if (document.hidden && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    const onResize = () => {
      resize();
      if (reduceMotion) {
        assignWord(0, true);
        draw(0.01, true);
      }
    };
    const onMotionPreferenceChange = () => {
      reduceMotion = motionPreference.matches;
      if (reduceMotion) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        assignWord(0, true);
        draw(0.01, true);
      } else {
        startedAt = performance.now();
        last = 0;
        frame = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onMouseOut);
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionPreference.addEventListener("change", onMotionPreferenceChange);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  return (
    <div className="hero-particle-field" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
