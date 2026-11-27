# Primitive AI website

The React site uses the approved V5 content structure. The [homepage design review](mockup/v6/index.html) shows the redesigned homepage and twelve complete section images. The [V5 mockup](mockup/v5/README.md) records the earlier designs and the Products, Services, About, and Updates pages. The [architecture refactor](docs/architecture-refactor.md) explains the shared route, page and feature structure.

The interface uses the original Primitive AI logo, **#044EFF** as its primary blue, navy presentation sections, responsive layouts, native diagrams and scroll-led motion. The implementation uses React 18, TypeScript and Vite.

## Run locally

```sh
npm install
npm run dev
```

Use the local URL printed by Vite. Create and preview a production build with:

```sh
npm run build
npm run preview
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Core Agentic, operating problems, business value, agent roles, integration, controls, delivery, customers and partners, and pricing |
| `/products` | Core Agentic architecture, seven application cards, agent configuration, integrations and the specialist product portfolio |
| `/services` | Six Custom AI Development capabilities and the Discovery → Strategy → Build → Deploy → Optimize process |
| `/about` | Founder portrait, company timeline beginning in 2023, and working principles |
| `/update` | Hanoi Codex Community Hackathon recap and the official Primitive AI LinkedIn channel |
| `/contact` | Inquiry form with optional offering, workflow and service context |
| `/privacy`, `/terms` | Existing legal pages |

The header contains Home, Products, Services, About and Updates. Home sections are not separate top-level destinations. Older paths such as `/core-agentic`, `/business-value`, `/use-cases`, `/how-we-work`, `/trust`, `/company`, `/updates`, `/success` and `/solutions` resolve to their current destinations. Retired VisionHub, FamilyHub and EduAssess detail URLs lead to Products. Chatbot, KnowledgeHub and LegalHub URLs continue into the Products applications. Unknown URLs keep the not-found view.

## Contact delivery

The recipient is **doannt@primitive-ai.com**. Without `VITE_CONTACT_ENDPOINT`, a valid form opens a populated email draft and the visitor sends it from their own email app. The website does not claim it received the inquiry. The optional endpoint contract is documented in [website implementation notes](docs/website-implementation.md).

## Content and visual assets

Products labels illustrative scenarios and measured test runs separately. The homepage shows customer and partner marks in separate groups. Updates uses event photographs supplied by the organizer.

The V5 secondary pages use English and Vietnamese copy. The language menu continues to support Japanese, Chinese and Korean, with English fallback where a translation is unavailable.

## Checks and responsive review

`npm run typecheck`, `npm run test:site`, and `npm run build` pass. Chromium checks covered Products, Services, About, and Updates at eight desktop, tablet, and phone sizes, including short landscape. The checks covered chapter sizing and snapping, navigation, image loading, legacy URLs, and carousel keyboard, touch and automatic rotation. Earlier audits remain in the [implementation mockups](mockup/implementation/responsive-review/index.html).

No publication, DNS change, email sending or external lead submission was performed.
