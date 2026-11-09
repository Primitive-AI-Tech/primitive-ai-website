import test from "node:test";
import assert from "node:assert/strict";
import { getPageMetadata, redirectLocation } from "../src/app/routes.ts";

test("redirects preserve a working-session inquiry and a section entry", () => {
  assert.deepEqual(
    redirectLocation("/how-we-work", {
      search: "?intent=working-session&utm_source=referral",
      hash: "#training",
    }),
    {
      pathname: "/how-we-work",
      search: "?intent=working-session&utm_source=referral",
      hash: "#training",
    },
  );
});

test("direct URLs with a trailing slash use the same layout and motion policy", () => {
  assert.equal(getPageMetadata("/company/").path, "/company");
  assert.equal(getPageMetadata("/company/").scroll, "story");
});

test("content pages share section snapping while missing pages stay natural", () => {
  assert.equal(getPageMetadata("/privacy").scroll, "story");
  assert.equal(getPageMetadata("/terms").scroll, "story");
  assert.equal(getPageMetadata("/an-unknown-url").scroll, "natural");
  assert.equal(getPageMetadata("/an-unknown-url").id, "not-found");
});
