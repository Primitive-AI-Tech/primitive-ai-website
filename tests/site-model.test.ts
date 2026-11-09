import { contactEmail } from "../src/config/company.ts";
import {
  inquiryMailto,
  validateInquiry,
} from "../src/features/contact/model.ts";
import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateWorkflow,
  defaultAssumptions,
} from "../src/features/business-value/model.ts";

test("the published illustration includes review and preserves the effort breakdown", () => {
  const value = calculateWorkflow(defaultAssumptions);
  assert.ok(Math.abs(value.assisted - 60) < 1e-9);
  assert.ok(Math.abs(value.reduction - 40) < 1e-9);
  assert.ok(Math.abs(value.remaining - 12) < 1e-9);
  assert.equal(value.other, 40);
  assert.equal(value.review, 8);
});
test("review can outweigh automation; unfavorable outcomes remain visible", () => {
  const value = calculateWorkflow({
    baseline: 100,
    eligible: 10,
    automated: 50,
    review: 20,
  });
  assert.equal(value.assisted, 115);
  assert.equal(value.reduction, -15);
});
test("zero eligible work, full automation and fractional baselines are handled", () => {
  assert.equal(
    calculateWorkflow({ baseline: 100, eligible: 0, automated: 100, review: 8 })
      .assisted,
    108,
  );
  assert.equal(
    calculateWorkflow({
      baseline: 100,
      eligible: 100,
      automated: 100,
      review: 0,
    }).assisted,
    0,
  );
  assert.ok(
    Math.abs(
      calculateWorkflow({
        baseline: 12.5,
        eligible: 40,
        automated: 50,
        review: 1,
      }).assisted - 11,
    ) < 1e-9,
  );
});
test("invalid or unbounded assumptions are rejected", () => {
  for (const value of [
    { ...defaultAssumptions, baseline: 0 },
    { ...defaultAssumptions, eligible: 101 },
    { ...defaultAssumptions, review: -1 },
    { ...defaultAssumptions, automated: NaN },
    { ...defaultAssumptions, baseline: Infinity },
  ]) {
    assert.throws(() => calculateWorkflow(value), RangeError);
  }
});
const inquiry = {
  name: "A Person",
  email: "person@example.com",
  organization: "Example & Co",
  workflow: "Prepare an operational review.",
  systems: "ERP & finance",
  frequency: "Weekly",
};
test("inquiry validation requires useful contact information without losing optional fields", () => {
  assert.deepEqual(validateInquiry(inquiry), {});
  assert.deepEqual(
    Object.keys(
      validateInquiry({
        ...inquiry,
        name: "",
        email: "invalid",
        organization: "",
        workflow: "short",
      }),
    ),
    ["name", "email", "organization", "workflow"],
  );
});
test("email drafts use the explicitly approved destination and encode user content safely", () => {
  assert.equal(contactEmail, "doannt@primitive-ai.com");
  const link = inquiryMailto({
    ...inquiry,
    organization: "Example\r\nBcc:other@example.com",
  });
  assert.ok(link.startsWith("mailto:doannt@primitive-ai.com?subject="));
  const params = new URL(link).searchParams;
  assert.ok(!params.get("subject")!.includes("\n"));
  assert.ok(params.get("body")!.includes("ERP & finance"));
  assert.equal(params.get("bcc"), null);
});
