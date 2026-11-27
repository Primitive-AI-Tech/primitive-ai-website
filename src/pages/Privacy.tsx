import { PolicyLayout } from "@/components/marketing/PolicyLayout";
import { contactEmail } from "@/config/company";
import { useCopy } from "@/i18n/useCopy";

const sections = [
  {
    id: "website-use",
    title: "Use of this website",
    paragraphs: [
      ["permittedUse", "You may browse and share links to this website for lawful purposes. Do not interfere with its operation, attempt unauthorized access, or submit material you do not have permission to share."],
      ["serviceAgreements", "Product descriptions and examples are for information. Any agreement you have with Primitive AI governs your use of the products or services covered by that agreement."],
    ],
  },
  {
    id: "intellectual-property",
    title: "Copyright and trademarks",
    paragraphs: [
      ["ownership", "Primitive AI or the relevant rights holders own or license the text, design, images, logos, and other materials on this website. Third-party names and marks belong to their respective owners."],
      ["permission", "Ask the relevant rights holder before reusing, modifying, or redistributing protected material unless the law or an applicable license permits it."],
    ],
  },
  {
    id: "personal-data",
    title: "Information we handle",
    paragraphs: [
      ["inquiries", "When you contact us, we may receive your name, work email, organization, and the details you choose to share about your inquiry. Please share only what we need to understand your request."],
      ["submission", "The inquiry form can send the details you enter through the website or prepare an email draft in your email app. If it prepares a draft, your inquiry reaches us only after you send it."],
      ["technicalData", "This website stores your language preference in your browser. Web infrastructure may process technical information such as IP addresses and request times to deliver and protect the website."],
    ],
  },
  {
    id: "handling",
    title: "Use, sharing, and retention",
    paragraphs: [
      ["purposes", "We use inquiry information to respond, follow up on the work you describe, and keep relevant correspondence. We may also process information to operate and protect the website or meet legal obligations."],
      ["providersAndRetention", "Website and communications providers may handle information to support those functions. We may disclose information when the law requires it. We keep inquiry information for as long as it is needed for the inquiry, related records, or applicable legal obligations."],
    ],
  },
  {
    id: "external-links",
    title: "External websites",
    paragraphs: [
      ["thirdPartyPractices", "Some links take you to other organizations’ websites. Those organizations manage their own content and privacy practices."],
    ],
  },
  {
    id: "contact",
    title: "Your privacy choices and how to contact us",
    paragraphs: [
      ["choices", "Depending on applicable law, you may have rights to access, correct, delete, or restrict the use of your personal information, or to withdraw consent where we rely on it."],
      ["getInTouch", "For privacy requests, questions about this policy, or copyright concerns, contact Primitive AI by email."],
      ["updates", "We may update this policy by publishing a revised version on this page."],
    ],
  },
] as const;

export default function Privacy() {
  const t = useCopy();
  return (
    <PolicyLayout
      title={t("Website Policy")}
      updated={t("policy.updated", "Last updated November 27, 2026")}
      introduction={t("policy.intro", "This policy explains how to use the Primitive AI website and how we handle personal information when you visit or contact us.")}
      contents={sections.map(({ id, title }) => ({ id, title: t(`policy.${id}.title`, title) }))}
    >
      {sections.map(({ id, title, paragraphs }) => (
        <section className="policy-clause" id={id} key={id} aria-labelledby={`policy-${id}-title`}>
          <h2 id={`policy-${id}-title`}>{t(`policy.${id}.title`, title)}</h2>
          {paragraphs.map(([topic, paragraph]) => <p key={topic}>{t(`policy.${id}.${topic}`, paragraph)}</p>)}
          {id === "contact" && <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>}
        </section>
      ))}
    </PolicyLayout>
  );
}
