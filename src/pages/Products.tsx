import {
  ArrowUpRight,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import { CompactArchitecture } from "@/components/diagrams/CompactArchitecture";
import { ClosingCTA } from "@/components/marketing/ClosingCTA";
import { FlowBackdrop } from "@/components/marketing/FlowBackdrop";
import { Button, Eyebrow, TextLink } from "@/components/marketing/primitives";
import { PageHero } from "@/components/marketing/PageHero";
import { PlatformStoryArt } from "@/components/marketing/StoryArtwork";
import { ProductArtwork } from "@/components/marketing/ProductArtwork";
import ApplicationExplorer from "@/features/home/ApplicationExplorer";
import { useCopy } from "@/i18n/useCopy";

const independentProducts = [
  {
    title: "VisionHub",
    category: "Workplace computer vision",
    description:
      "A computer vision product for organizations that need visibility in operating environments.",
    art: "vision" as const,
  },
  {
    title: "FamilyHub",
    category: "Family knowledge and memory",
    description:
      "A product for collecting and exploring the knowledge and memories families choose to preserve.",
    art: "family" as const,
  },
  {
    title: "EduAssess AI",
    category: "English language assessment",
    description:
      "An AI enabled platform for English language assessment and feedback.",
    art: "assessment" as const,
  },
];

export default function Products() {
  const t = useCopy();
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            {t("One platform.")} <em>{t("Configured for your work.")}</em>
          </>
        }
        description="Explore Core Agentic, our configurable agent platform for organizational work, alongside focused products built for specific needs."
        className="products-hero"
        visual={<PlatformStoryArt />}
      >
        <div className="button-row">
          <Button to="/#applications" arrow>{t("Explore applications")}</Button>
          <Button to="/contact?interest=core-agentic" secondary>
            {t("Talk to our team")}
          </Button>
        </div>
      </PageHero>

      <section className="products-flagship light-section" id="core-agentic-product">
        <div className="site-container products-flagship-grid">
          <div className="products-flagship-copy">
            <Eyebrow>{t("Flagship platform")}</Eyebrow>
            <h2 className="section-title">{t("Core Agentic")}</h2>
            <p>
              {t("A configurable platform that connects approved organizational knowledge, AI agents and business tools to real workflows, with review points your team defines.")}
            </p>
            <ul className="products-foundation-list">
              <li><BrainCircuit aria-hidden="true" /> {t("Agents coordinated around a defined task")}</li>
              <li><Sparkles aria-hidden="true" /> {t("Knowledge grounded in approved sources")}</li>
              <li><ArrowUpRight aria-hidden="true" /> {t("Tool access, review and action scoped to the work")}</li>
            </ul>
            <div className="button-row">
              <Button to="/" arrow>{t("See the Core Agentic story")}</Button>
              <TextLink to="/contact?interest=core-agentic">{t("Discuss your workflow")}</TextLink>
            </div>
          </div>
          <div className="products-architecture surface-panel">
            <CompactArchitecture />
          </div>
        </div>
      </section>

      <section className="products-applications light-section" id="product-applications">
        <div className="site-container">
          <Eyebrow>{t("One foundation, many applications")}</Eyebrow>
          <h2 className="section-title">{t("Start with the work your team needs to move forward.")}</h2>
          <p className="section-intro">
            {t("These are examples to make the platform concrete. The right scope, sources and review steps are defined with each organization.")}
          </p>
          <ApplicationExplorer />
        </div>
      </section>

      <section className="products-specialist light-section" id="specialist-products">
        <div className="site-container">
          <Eyebrow>{t("Focused products")}</Eyebrow>
          <h2 className="section-title">{t("Separate products for distinct needs.")}</h2>
          <p className="section-intro">
            {t("VisionHub, FamilyHub and EduAssess are separate offerings. They sit outside the Core Agentic platform story.")}
          </p>
          <div className="specialist-product-grid">
            {independentProducts.map((product) => (
              <article className="specialist-product-card surface-panel" key={product.title}>
                <ProductArtwork type={product.art} />
                <p className="product-category">{t(product.category)}</p>
                <h3>{t(product.title)}</h3>
                <p>{t(product.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-services-bridge dark-section">
        <FlowBackdrop />
        <div className="site-container relative-content products-bridge-content">
          <div>
            <Eyebrow>{t("Need a tailored build?")}</Eyebrow>
            <h2 className="section-title">{t("Custom AI development for requirements beyond a product configuration.")}</h2>
          </div>
          <TextLink to="/services">{t("Explore custom AI services")}</TextLink>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
