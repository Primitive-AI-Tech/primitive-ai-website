import { contactEmail } from "../../config/company.ts";

export interface Inquiry {
  name: string;
  email: string;
  organization: string;
  workflow: string;
  systems?: string;
  frequency?: string;
  interest?: string;
  service?: string;
}

export function validateInquiry(value: Inquiry) {
  const errors: Partial<Record<keyof Inquiry, string>> = {};
  if (value.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!value.organization.trim())
    errors.organization = "Enter your organization.";
  if (value.workflow.trim().length < 10)
    errors.workflow =
      "Tell us a little more about the workflow (at least 10 characters).";
  return errors;
}

export function inquiryMailto(value: Inquiry) {
  const body = [
    "Name: " + value.name.trim(),
    "Work email: " + value.email.trim(),
    "Organization: " + value.organization.trim(),
    "Interested in: " + (value.interest?.trim() || "Not specified"),
    "Service area: " + (value.service?.trim() || "Not specified"),
    "",
    "Workflow:",
    value.workflow.trim(),
    "",
    "Current systems: " + (value.systems?.trim() || "Not specified"),
    "Task frequency: " + (value.frequency?.trim() || "Not specified"),
  ].join("\n");
  return (
    "mailto:" +
    contactEmail +
    "?subject=" +
    encodeURIComponent(
      "Primitive AI inquiry — " +
        value.organization.trim().replace(/[\r\n]/g, " "),
    ) +
    "&body=" +
    encodeURIComponent(body)
  );
}
