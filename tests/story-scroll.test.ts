import assert from "node:assert/strict";
import test from "node:test";
import { startsStoryWheelGesture, storyScrollStep } from "../src/hooks/story-scroll.ts";

const sections = [
  { start: 0, end: 0 },
  { start: 900, end: 1240 },
  { start: 2140, end: 2140 },
  { start: 2510, end: 2510 },
];

test("a wheel turn from a section boundary targets only the adjacent section", () => {
  assert.deepEqual(storyScrollStep(sections, 0, 1), { kind: "turn", top: 900 });
  assert.deepEqual(storyScrollStep(sections, 2140, 1), { kind: "turn", top: 2510 });
  assert.equal(storyScrollStep(sections, 2510, 1), undefined);
  assert.equal(storyScrollStep(sections, 0, -1), undefined);
});

test("tall chapters keep their content reachable in both directions", () => {
  assert.deepEqual(storyScrollStep(sections, 900, 1), { kind: "read" });
  assert.deepEqual(storyScrollStep(sections, 1240, -1), { kind: "read" });
  assert.deepEqual(storyScrollStep(sections, 900, -1), { kind: "turn", top: 0 });
  assert.deepEqual(storyScrollStep(sections, 1240, 1), { kind: "turn", top: 2140 });
  assert.deepEqual(storyScrollStep(sections, 2140, -1), { kind: "turn", top: 1240 });
});

test("a reversal between sections returns to the nearest previous chapter boundary", () => {
  assert.deepEqual(storyScrollStep(sections, 1650, -1), { kind: "turn", top: 900 });
  assert.deepEqual(storyScrollStep(sections, 1650, 1), { kind: "turn", top: 2140 });
  assert.deepEqual(storyScrollStep(sections, 899.5, -1), { kind: "turn", top: 0 });
});

test("a stationary trackpad can start the next swipe while momentum packets still arrive", () => {
  const momentum = { startedAt: 0, lastEvent: 540, direction: 1, lastDistance: 5, tailSamples: 4 } as const;
  assert.equal(startsStoryWheelGesture(momentum, 570, 3), false);
  assert.equal(startsStoryWheelGesture(momentum, 570, 9), false);
  assert.equal(startsStoryWheelGesture(momentum, 570, 16), true);
  assert.equal(startsStoryWheelGesture(momentum, 570, -35), true);
});

test("the strong part of one swipe stays grouped, and input after quiet starts a new gesture", () => {
  const early = { startedAt: 0, lastEvent: 110, direction: 1, lastDistance: 3, tailSamples: 2 } as const;
  const fast = { startedAt: 0, lastEvent: 310, direction: 1, lastDistance: 22, tailSamples: 0 } as const;
  assert.equal(startsStoryWheelGesture(early, 138, 70), false);
  assert.equal(startsStoryWheelGesture(fast, 340, 64), false);
  assert.equal(startsStoryWheelGesture(fast, 460, 3), true);
});
