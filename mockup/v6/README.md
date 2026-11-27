# Primitive AI homepage redesign

[Complete section images](index.html) · [Architecture detail](sections/architecture.webp) · [Footer](sections/footer.webp) · [Desktop homepage](desktop-preview.webp) · [Phone homepage](mobile-preview.webp) · [Site design review](site-review.html)

The hero uses a crafted illustration of Core Agentic checking a delivery. The Product and Control examples are visible directly in their cards.

## Review the interactive homepage

From the website repository, run `npm run dev` and open the printed local URL. The gallery and renders can also be opened directly in a browser.

The other pages use the same light surfaces, typography, and icon palette. Products shows a [delivery-check configuration](../../public/images/products/agent-configuration.webp) beside the three choices teams make when setting up an agent. About pairs the original VisionHub example with the Core Agentic illustration from the homepage.

The six marketing pages share the homepage’s closing invitation. The Website Policy groups website use, copyright and trademarks, and information handling on one page. The former Terms URL leads to the website-use section. [FPT’s website terms](https://fpt.com/vi/dieu-khoan-su-dung)

## Hero illustration

The technical illustration brings the contract, order, and schedule into an enlarged Core Agentic module. Branching agent decisions and workflow steps sit above a tools and connectors rail. Access, approvals, and logs form the bottom layer. The delivery check shows day four within a five-day allowance. [Selected hero](../../public/images/home/editorial/hero-core-agentic-engine.webp) · [Earlier three-block version](../../public/images/home/editorial/hero-core-agentic-blocks.webp) · [Personal-site reference](../../../doanntr-website/public/images/hero-agent-workflows-v1.webp) · [ImageGen prompt](imagegen-prompts.txt)

## Section photography

The photographs use natural light and everyday settings, with each frame anchored on a concrete task or decision. ImageGen created the people and workplaces for this review. The deployment chapter labels its photograph as illustrative, alongside the original customer and partner logos.

The architecture chapter pairs a photo of someone working across two tools with the responsive diagram. Animated dashes connect the cards, including the AI model branch. The link on the Core Agentic card leads to the access and approval details.

The [Control illustration](../../public/images/home/editorial/control-approval-cutout.webp) uses the original approval screenshot for the exact requisition, quantity, and decision labels. Its layered paper panel floats above the card with a transparent surround.

## Story review

| Artwork | What it shows |
| --- | --- |
| [Hero](../../public/images/home/editorial/hero-core-agentic-engine.webp) | Three source records feed a layered Core Agentic module. The approved delivery window and result appear on the right. |
| [Scattered data](../../public/images/home/photography/problem.webp) | A coordinator searches two sources for a missing dispatch field. |
| [System handoffs](../../public/images/home/photography/handoffs.webp) | Someone at the dispatch desk follows up by phone while a colleague scans goods at the loading bay. |
| [Product](../../public/images/home/photography/execution.webp) | A reviewer matches a schedule row to a contract clause. The sample output shows the five-day allowance and day-four delivery. |
| [Business value](../../public/images/home/photography/value.webp) | An analyst compares a completion tally and a cost worksheet. |
| [Agent roles](../../public/images/home/photography/roles.webp) | Three coworkers focus separately on support, research, and finance. |
| [Architecture](../../public/images/home/photography/architecture.webp) | An integration specialist works across an existing dispatch application and a work request. |
| [Controls](../../public/images/home/photography/control.webp) | A purchasing lead reads the requisition before deciding. The exact sample update remains in the live copy and example. |
| [Rollout](../../public/images/home/photography/pilot.webp) | Two colleagues compare the current process and a pilot at the same table. |
| [Deployment experience](../../public/images/home/photography/customers.webp) | An illustrative visit to an operating workplace. The adjacent lists identify real customers and partners. |
| [Pricing](../../public/images/home/photography/pricing.webp) | A team reviews a quote before choosing how to start. |
| [Next step](../../public/images/home/photography/next.webp) | Someone brings a single process outline to a first working conversation. |

[Photography prompts](photography-prompts.txt) · Built-in ImageGen

## Earlier full-section ImageGen concepts

| Section | Generated composition |
| --- | --- |
| Hero | [Hero](generated-sections/hero.webp) |
| First operational challenge | [Scattered data](generated-sections/problem.webp) |
| Second operational challenge | [System handoffs](generated-sections/handoffs.webp) |
| Product | [Core Agentic in action](generated-sections/execution.webp) |
| Business value | [Productivity and cost](generated-sections/value.webp) |
| Agent roles | [Agent roles](generated-sections/roles.webp) |
| Architecture | [Integrations](generated-sections/architecture.webp) |
| Controls | [Human control](generated-sections/control.webp) |
| Rollout | [Pilot](generated-sections/pilot.webp) |
| Deployment experience | [Customers and partners](generated-sections/customers.webp) |
| Pricing | [Pricing](generated-sections/pricing.webp) |
| Next step | [Closing invitation](generated-sections/next.webp) |

- [Full-section prompts](full-section-prompts.txt) and [illustration prompts](imagegen-prompts.txt) · built-in ImageGen
- [Homepage chapters and source order](../../src/pages/Index.tsx)
- [Approved V5 content outline](../v5/homepage-handoff.md)
- [Company story and principles](../../src/features/company/content.ts)
- [Core Agentic business and product foundation](../../../prai-core-agentic/docs/business/core-agentic-business-foundation.md)
