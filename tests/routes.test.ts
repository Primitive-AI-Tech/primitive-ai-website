import test from "node:test";
import assert from "node:assert/strict";
import { getPageMetadata, movedHomeLocation, movedProductLocation, redirectLocation } from "../src/app/routes.ts";

test("redirects preserve a working-session inquiry and a section entry", () => {
  assert.deepEqual(
    redirectLocation("/how-we-work", {
      pathname: "/how-we-work",
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
  assert.equal(getPageMetadata("/about/").path, "/about");
  assert.equal(getPageMetadata("/about/").scroll, "story");
});

test("moved homepage anchors preserve queries and use existing product sections", () => {
  assert.deepEqual(movedHomeLocation("#applications", "?utm_source=referral"), {
    pathname: "/products",
    search: "?utm_source=referral",
    hash: "#product-applications",
  });
  assert.deepEqual(
    redirectLocation("/#applications", {
      pathname: "/use-cases",
      search: "?workflow=sales-support",
      hash: "#inbound-sales",
    }),
    { pathname: "/products", search: "?workflow=sales-support", hash: "#sales-support" },
  );
  assert.deepEqual(
    redirectLocation("/", {
      pathname: "/core-agentic",
      search: "",
      hash: "#architecture",
    }),
    { pathname: "/", search: "", hash: "#architecture" },
  );
  assert.equal(movedHomeLocation("#roles", ""), undefined);
});

test("content pages share section snapping while missing pages stay natural", () => {
  assert.equal(getPageMetadata("/privacy").scroll, "story");
  assert.equal(getPageMetadata("/terms").scroll, "story");
  assert.equal(getPageMetadata("/an-unknown-url").scroll, "natural");
  assert.equal(getPageMetadata("/an-unknown-url").id, "not-found");
});

test("legacy product approval and pricing links land on their home chapters", () => {
  assert.deepEqual(movedProductLocation("#product-interface", "?utm_source=referral"), {
    pathname: "/",
    search: "?utm_source=referral",
    hash: "#control",
  });
  assert.deepEqual(movedProductLocation("#economics", ""), {
    pathname: "/",
    search: "",
    hash: "#pricing",
  });
  assert.equal(movedProductLocation("#applications", ""), undefined);
});
