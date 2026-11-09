# Primitive AI website

The local V3 implementation carries the approved Core Agentic story into the homepage, adds page-level Products and Services destinations, restores the fuller company history and keeps the new blue/navy design. The [migration plan](docs/website-migration-plan.md) records the implemented structure and remaining release work. The [architecture refactor](docs/architecture-refactor.md) explains the shared route, page and feature structure.

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
| `/` | Core Agentic, business value, configurable workflows, customer experience, delivery, controls, company bridge, Custom AI Development and Updates teaser |
| `/products` | Core Agentic, broad workflow examples and focused VisionHub, FamilyHub and EduAssess offerings without separate detail pages |
| `/services` | Six Custom AI Development capabilities and the Discovery → Strategy → Build → Deploy → Optimize process |
| `/about` | Doan Nguyen, the 2023 company formation, named product lineage and company values |
| `/update` | Updates introduction and the official Primitive AI LinkedIn channel; no unpublished articles are fabricated |
| `/contact` | Inquiry form with optional offering, workflow and service context |
| `/privacy`, `/terms` | Existing legal pages |

The header contains Home, Products, Services, About and Updates. Home sections are not separate top-level destinations. Older paths such as `/core-agentic`, `/business-value`, `/use-cases`, `/how-we-work`, `/trust`, `/company`, `/updates`, `/success` and `/solutions` resolve to their current destinations. Retired VisionHub, FamilyHub and EduAssess detail URLs now lead to `/products`; retired chatbot, KnowledgeHub and LegalHub paths land on the corresponding homepage example. Unknown URLs keep the not-found view.

## Contact delivery

The recipient is **doannt@primitive-ai.com**. Without `VITE_CONTACT_ENDPOINT`, a valid form opens a populated email draft and the visitor sends it from their own email app. The website does not claim it received the inquiry. The optional endpoint contract is documented in [website implementation notes](docs/website-implementation.md).

## Content and visual assets

The homepage examples describe possible configurations, not out-of-the-box connector availability or guaranteed outcomes. Customer and partner names are separated. Images are used for the available authentic marks, including National Economics University; Ymner and TNE remain name-only until their correct logo assets and, for TNE, exact identity are confirmed. The Updates page does not invent an article archive.

English is the fallback for newly added V3 copy. The site retains its English, Vietnamese, Japanese, Chinese and Korean language menu and its existing product-page translations. New V3 copy still needs a translation review.

## Checks and responsive review

`npm run typecheck` and `npm run build` pass. An earlier browser sweep covered 11 routes and 483 section panels at 320 × 568, 390 × 844, 600 × 400, 768 × 1024, 1024 × 600, 1280 × 720 and 1440 × 900; it predated retirement of the three product detail pages. The current site has 8 canonical routes. This latest pass rechecked Home, Products and About at 390 × 844 and 1440 × 960, including the new About timeline; no horizontal overflow was found. The earlier 34-viewport audit remains archived under [the implementation mockups](mockup/implementation/responsive-review/index.html); keyboard, zoom and boundary-specific review remain on the release checklist.

No publication, DNS change, email sending or external lead submission was performed.
