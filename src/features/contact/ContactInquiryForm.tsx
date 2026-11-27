import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, CircleCheck, LoaderCircle, Mail } from "lucide-react";
import { Badge } from "@/components/marketing/primitives";
import { contactEmail } from "@/config/company";
import { applicationAreas } from "@/features/home/application-areas";
import { scenarios } from "@/features/use-cases/content";
import { useCopy } from "@/i18n/useCopy";
import { inquiryMailto, validateInquiry, type Inquiry } from "./model";

export function ContactInquiryForm({ search }: { search: string }) {
  const t = useCopy();
  const params = new URLSearchParams(search);
  const requestedArea = applicationAreas.find((area) => area.id === params.get("workflow"));
  const initial: Inquiry = {
    name: "",
    email: "",
    organization: "",
    workflow: requestedArea?.request || "",
    systems: "",
    frequency: "",
    interest: params.get("interest") || (requestedArea ? "core-agentic" : ""),
    service: params.get("service") || "",
  };
  const [value, setValue] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Inquiry, string>>>(
    {},
  );
  const [state, setState] = useState<
    "idle" | "submitting" | "received" | "draft"
  >("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [draft, setDraft] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const request = useRef<AbortController>();
  useEffect(() => () => request.current?.abort(), []);
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
  const scenario = scenarios.find((s) => s.id === params.get("use-case"));
  const requestedIntent = params.get("intent");
  const intent =
    (requestedIntent === "pricing" && "Pricing conversation") ||
    scenario?.label ||
    requestedArea?.title ||
    (requestedIntent === "custom-development"
      ? "Custom AI development"
      : requestedIntent === "working-session"
        ? "Working session"
        : "");
  const update = (key: keyof Inquiry, next: string) => {
    setValue((old) => ({ ...old, [key]: next }));
    if (errors[key]) setErrors((old) => ({ ...old, [key]: undefined }));
    if (state === "draft") setState("idle");
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateInquiry(value);
    setErrors(nextErrors);
    setSubmissionError("");
    const first = Object.keys(nextErrors)[0];
    if (first) {
      form.current
        ?.querySelector<
          HTMLInputElement | HTMLTextAreaElement
        >('[name="' + first + '"]')
        ?.focus();
      return;
    }
    if (!endpoint) {
      const link = inquiryMailto(value, requestedIntent);
      setDraft(link);
      setState("draft");
      window.location.href = link;
      return;
    }
    try {
      const url = new URL(endpoint, window.location.origin);
      if (
        !["http:", "https:"].includes(url.protocol) ||
        (url.protocol !== "https:" && url.origin !== window.location.origin)
      )
        throw new Error("Invalid endpoint");
      setState("submitting");
      request.current?.abort();
      request.current = new AbortController();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...value,
          recipient: contactEmail,
          intent: requestedIntent || params.get("use-case") || "general",
        }),
        signal: request.current.signal,
      });
      const receipt = await response.json();
      if (!response.ok || (receipt.accepted !== true && receipt.ok !== true))
        throw new Error("Submission not accepted");
      setState("received");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setState("idle");
      setSubmissionError(
        "We could not confirm receipt. Your details are still here. Please try again or email our team.",
      );
    }
  };
  const fields = [
    {
      key: "name",
      label: "Name",
      placeholder: "Your full name",
      autocomplete: "name",
    },
    {
      key: "email",
      label: "Work email",
      placeholder: "Your work email",
      autocomplete: "email",
    },
    {
      key: "organization",
      label: "Organization",
      placeholder: "Your organization",
      autocomplete: "organization",
    },
  ] as const;
  return (
    <div className="contact-form-card">
      {state === "received" ? (
        <div className="inquiry-success" role="status">
          <CircleCheck aria-hidden="true" />
          <h2 id="inquiry-title">{t("Inquiry received")}</h2>
          <p>{t("Your details have been sent to our team.")}</p>
          <button
            type="button"
            className="site-button"
            onClick={() => {
              setValue(initial);
              setState("idle");
            }}
          >
            {t("Send another inquiry")}
          </button>
        </div>
      ) : (
        <>
          <div className="v5-page-heading contact-form-heading">
            <h2 id="inquiry-title">{t("Tell us what you need")}</h2>
            <p>{t("A few sentences about the work are enough to start.")}</p>
          </div>
          <form
            ref={form}
            onSubmit={submit}
            noValidate
            aria-labelledby="inquiry-title"
          >
            {intent && <Badge className="contact-intent">{t(intent)}</Badge>}
            <div className="contact-field-grid">
              {fields.map((field) => (
                <div className="contact-field" key={field.key}>
                  <label htmlFor={"inquiry-" + field.key}>
                    {t(field.label)} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={"inquiry-" + field.key}
                    name={field.key}
                    type={field.key === "email" ? "email" : "text"}
                    autoComplete={field.autocomplete}
                    placeholder={t(field.placeholder)}
                    value={value[field.key]}
                    onChange={(event) =>
                      update(field.key, event.target.value)
                    }
                    required
                    maxLength={field.key === "email" ? 254 : 200}
                    aria-invalid={Boolean(errors[field.key])}
                    aria-describedby={
                      errors[field.key]
                        ? "inquiry-" + field.key + "-error"
                        : undefined
                    }
                  />
                  {errors[field.key] && (
                    <p
                      className="field-error"
                      id={"inquiry-" + field.key + "-error"}
                    >
                      {t(errors[field.key]!)}
                    </p>
                  )}
                </div>
              ))}
              <div className="contact-field">
                <label htmlFor="inquiry-interest">{t("What are you interested in?")}</label>
                <select
                  id="inquiry-interest"
                  name="interest"
                  value={value.interest}
                  onChange={(event) => update("interest", event.target.value)}
                >
                  <option value="">{t("Select an area (optional)")}</option>
                  <option value="core-agentic">{t("Core Agentic")}</option>
                  <option value="custom-ai-development">{t("Custom AI development")}</option>
                  <option value="specialist-products">{t("Specialist products")}</option>
                </select>
              </div>
              <div className="contact-field contact-field-wide">
                <label htmlFor="inquiry-workflow">
                  {t("What would you like help with?")}{" "}
                  <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="inquiry-workflow"
                  name="workflow"
                  placeholder={t("Describe the work, process, or challenge")}
                  value={value.workflow}
                  onChange={(event) => update("workflow", event.target.value)}
                  required
                  maxLength={5000}
                  rows={3}
                  aria-invalid={Boolean(errors.workflow)}
                  aria-describedby={
                    errors.workflow ? "inquiry-workflow-error" : undefined
                  }
                />
                {errors.workflow && (
                  <p className="field-error" id="inquiry-workflow-error">
                    {t(errors.workflow)}
                  </p>
                )}
              </div>
            </div>
            <details
              className="contact-context"
              open={Boolean(scenario || requestedArea || initial.service) || undefined}
            >
              <summary>
                {t("Add context (optional)")}
                <ChevronDown aria-hidden="true" />
              </summary>
              <div>
                <label htmlFor="inquiry-systems">
                  {t("Current systems")}
                </label>
                <input
                  id="inquiry-systems"
                  name="systems"
                  placeholder={t("e.g. ERP, CRM, document storage")}
                  value={value.systems}
                  maxLength={500}
                  onChange={(event) =>
                    update("systems", event.target.value)
                  }
                />
                <label htmlFor="inquiry-service">{t("Service or capability (optional)")}</label>
                <input
                  id="inquiry-service"
                  name="service"
                  placeholder={t("e.g. AI workflow automation")}
                  value={value.service}
                  maxLength={200}
                  onChange={(event) => update("service", event.target.value)}
                />
                <label htmlFor="inquiry-frequency">
                  {t("Task frequency")}
                </label>
                <input
                  id="inquiry-frequency"
                  name="frequency"
                  placeholder={t("e.g. daily, weekly, monthly")}
                  value={value.frequency}
                  maxLength={200}
                  onChange={(event) =>
                    update("frequency", event.target.value)
                  }
                />
              </div>
            </details>
            <p className="privacy-copy">
              {t("We will use these details to discuss your request.")}{" "}
              <Link to="/privacy#personal-data">{t("Privacy policy")}</Link>.
            </p>
            {submissionError && (
              <p className="submission-error" role="alert">
                {t(submissionError)}
              </p>
            )}
            <div className="contact-form-actions">
              <button
                type="submit"
                className="site-button submit-inquiry"
                disabled={state === "submitting"}
              >
                {state === "submitting" && (
                  <LoaderCircle className="spin" aria-hidden="true" />
                )}
                {t(state === "submitting" ? "Sending…" : endpoint ? "Send inquiry" : "Open email draft")}
                <ArrowRight size={20} aria-hidden="true" />
              </button>
              {!endpoint && (
                <p className="email-flow-note">
                  <Mail size={16} aria-hidden="true" />
                  {t(
                    "Your email app will open with a draft addressed to our team.",
                  )}
                </p>
              )}
            </div>
            {state === "draft" && (
              <div className="draft-confirmation" role="status">
                <CircleCheck aria-hidden="true" />
                <div>
                  <strong>{t("Your email draft is ready.")}</strong>
                  <p>
                    {t(
                      "Send it from your email app to complete your inquiry.",
                    )}
                  </p>
                  <a href={draft}>{t("Open the email draft again")}</a>
                </div>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
}
