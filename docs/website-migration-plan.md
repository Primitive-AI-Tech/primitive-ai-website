# Primitive AI website migration plan — V3

**Status:** V3 local implementation complete; full artwork and release review pending  
**Updated:** 9 November 2026

Core Agentic becomes the homepage at `/`. Preserve the current uncommitted blue/navy design, approved headline, #044EFF primary blue, original logo, responsive layouts and section motion. V3 extends that design with page-level navigation, broader workflow examples, a full custom AI development offer and the fuller company journey.

The [owner decision sheet](website-migration-decisions.md) preserves earlier answers and records the latest chat directions in an addendum. The [V3 gallery](../mockup/v3/index.html) and [decision ledger](../mockup/v3/docs/decision-ledger.md) are the current review package. The [V2 plan](website-migration-plan-v2.md) and [original proposal](website-migration-plan-proposal.md) remain historical records. Later explicit chat directions supersede conflicting earlier recommendations.

## 1. Information architecture

The proposed header is **Home · Products · Services · About · Updates**, followed by language and **Talk to our team**. These are page destinations. The logo opens Home; the CTA opens Contact. The homepage's applications, customers, economics and working process remain sections of Home rather than separate primary navigation items.

| Page | Public path | Job |
| --- | --- | --- |
| Home | `/` | Full Core Agentic story: what it does, operational problem, productivity/economics, configured applications, real relationships, delivery, controls, company bridge, custom-services invitation and Updates teaser |
| Products | `/products` | Core Agentic as flagship, broad examples of configured work, then concise VisionHub, FamilyHub and EduAssess descriptions without separate detail pages |
| Services | `/services` | Custom AI Development: six restored capabilities, engagement deliverables and the original five-stage engineering process |
| About | `/about` | Founder, founding question, 2023 company formation, full product-development journey and values |
| Updates | `/update` | Company/product news and perspectives; singular URL as requested, plural navigation label |
| Contact | `/contact` | Inquiry with selected offering/workflow context and approved company details |
| Legal | `/privacy`, `/terms` | Shared editorial template and reconciled company/domain details |

The owner asked us to consider `/product-service` or separate product and service pages. This implementation uses the recommended split: `/products` for Core Agentic and specialist products, and `/services` for Custom AI Development. It does not publish a duplicate combined catalog.

## 2. Homepage flow

| Order | Block | Purpose |
| --- | --- | --- |
| 1 | Opening | Preserve “Put AI to work across your organization.” Introduce Core Agentic immediately, retain the connected-agent canvas and inherited navy/blue treatment. Actions: Talk to our team and Explore applications. |
| 2 | Operational problem | Explain the effort spent searching, copying, coordinating and checking across systems. |
| 3 | Productivity and economics | More useful capacity, less repetitive work, better consistency and visibility. Keep the illustrative effort model and editable assumptions inline. No guaranteed cost/accuracy claims. |
| 4 | One platform. Configured for your work. | Six broad work areas plus an open-ended “Your workflow” invitation. Shared foundation: knowledge, agents, tools and controls. |
| 5 | Concrete application detail | Select a workflow and see request → approved sources → agent work → human review → usable output. Preserve existing sales/research/internal-operation scenario entries. |
| 6 | Experience across real organizations | Eight customers and four separately labeled partners. Use authentic image assets in the real build. |
| 7 | How we work | Preserve the six-stage Core Agentic working-proof approach, including evaluation, training and operating handoff. |
| 8 | Knowledge, agents and control | Retain the native diagrams, source trail, bounded tool access, approval checkpoints and visible execution. Details expand inline. |
| 9 | Company bridge | How the earlier solutions led to Core Agentic; link to the full About journey. |
| 10 | Custom AI. Built for your business. | Restore custom AI engineering as a substantial offer. Show a compact capability preview linking to Services. |
| 11 | From Primitive AI | Updates teaser from actual approved editorial records; the boards use draft titles only. |
| 12 | Closing and footer | Workflow invitation, contact and consistent page-level navigation. |

Boards 01–03 are selected homepage segments, not three alternative homepages or a literal consecutive section order. Board 02 collects value/process/control for review. The order above controls implementation.

Apply native section snapping consistently across content routes, including About, Services, Updates, Contact, specialist product details and legal copy. Every panel fills one viewport; the fixed header overlays the top edge while content padding keeps copy beneath it. Keep longer content reachable by scrolling within its panel, and compact small-screen hero layouts so the headline and actions fit together. Respect reduced-motion preferences. The homepage keeps its top progress bar without right-side chapter controls or large background numerals.

## 3. Broad applications of one platform

| Work area | Concrete starting point |
| --- | --- |
| Sales & customer support | Qualify an inquiry, prepare account context, draft a grounded response and route the next action. |
| Account research & outbound sales | Prepare an evidence-backed account brief for a sales owner to validate before outreach. |
| Knowledge & research | Find approved information, compare sources and prepare an evidence-linked brief. |
| Internal operations | Coordinate a request, check its status and prepare actions across approved business tools. |
| Finance & reconciliation | Compare records, flag discrepancies and prepare a review queue. |
| People & HR | Answer policy questions and prepare onboarding/admin steps within approved access. |
| Documents & legal | Compare documents, draft from approved material and route expert review. |
| Your workflow | Start from the team's actual work, knowledge, systems and review requirements. |

These are examples of configurable work, not a claim that every connector or deployment is ready out of the box. Seven examples make the idea tangible; they are not a limit on the platform. Keep a reusable workflow content structure so procurement, supply chain, scheduling, reporting and industry-specific applications can be added without redesigning the foundation.

SupportHub, KnowledgeHub and LegalHub remain useful historical examples and contextual links. They do not define three fixed platform pillars or exhaust what Core Agentic can become. VisionHub, FamilyHub and EduAssess remain separate products outside the Core Agentic ecosystem.

## 4. Restore Custom AI Development

The old Services source contains six capabilities. Retain all six, expressed through useful deliverables rather than generic AI promises:

| Capability | Example deliverable to describe |
| --- | --- |
| AI Agent Development | Agents connected to approved knowledge and tools, with evaluation and review points |
| AI Workflow Automation | A mapped workflow, connected systems, exception handling and a working automation |
| AI API Development | Application/API integration with defined access, validation and operating handoff |
| Model Training & Fine-Tuning | Data/model assessment, adaptation where justified and task-specific evaluation |
| AI Product Development | A scoped AI-enabled application from prototype through deployment and handoff |
| Consulting & Strategy | Workflow assessment, opportunity prioritization and a practical delivery plan |

The Services page has two clear starting paths: **configure Core Agentic** for a business workflow, or **build custom AI** for a requirement that needs tailored engineering. A bespoke engagement need not use Core Agentic. Preserve the original **Discovery → Strategy → Build → Deploy → Optimize** engineering process. The homepage's six-stage Core Agentic proof process serves a different level of detail; do not silently replace either with the other.

Use `intent=custom-development` for the custom-services CTA. Contact keeps the project description and optional offering selection when entered from Services. Do not migrate old unsubstantiated counts, guaranteed accuracy or integration claims.

## 5. Real organizations and asset requirements

**Customers:** Ajinomoto, Nidec, FPT Automotive, VTI Solutions, RAIS Tech, Ymner, TNE, **NEU — National Economics University**.

**Partners:** Intel, Microsoft, Google, Techvico.

Use authentic logo images in the real site, with full accessible organization names. The current mockups may show text names, as the owner explicitly allows. Do not ship the mockup's typeset names as the finished logo treatment. The local implementation uses existing artwork for Ajinomoto, Nidec, FPT Automotive, VTI Solutions and RAIS Tech, the official NEU mark, and image assets for all four partners. Ymner and TNE remain name-only cards because their artwork is not in the repository and TNE's exact organization identity is unresolved; sourcing verified marks is an outstanding content task. See the [asset manifest](../mockup/v3/docs/logo-assets.json) and [real asset review sheet](../mockup/v3/logo-assets.html).

The NEU logo comes from the university's [official identity page](https://neu.edu.vn/he-thong-nhan-dien/) and [official downloadable resource kit](https://fit.neu.edu.vn/en/post/resources). The owner supplies the customer classification; the public identity sources establish the name/artwork, not a Primitive AI engagement claim.

Remove Qualcomm, Canon, YAZAKI, HIK Robotics, Cuulong, Ductoan, EIU/EIU2 and NamVuong from the new relationship block. Preserve recoverable source assets. Do not label all earlier relationships as Core Agentic deployments or add their unverified numerical outcomes.

## 6. About and the full company path

Use the original founder-led story and actual Doan Nguyen portrait. Preserve the company question and the experience building AI for FDI/Vietnamese operating environments. The journey should retain concrete names and the learning that connected them, rather than a simplified generic lineage.

Proposed public path: **early VisionHub/computer-vision work → 2023 company formation → SupportHub/response quality → KnowledgeHub, memory and custom AI services → LegalHub/document workflows → FamilyHub and EduAssess as wider product experience → Core Agentic as the unified enterprise platform.**

Do not show the 2016 personal-learning stage in the public journey. Begin the displayed path with company and product work, and use **2023** for company founding. Present the journey as one connected vertical timeline rather than a grid of cards. The older About file's 2020 founding statement is superseded. Undated product stages preserve lineage without inventing exact release dates; the sequence is a narrative of development, not a newly verified release calendar. The original five-stage founder narrative and older named product milestones remain source material in the inventory.

Retain the four original principles: Customer First, Excellence, Innovation, Responsibility. Keep the separate-product catalog on Products, with contextual links from About. Show Doan Nguyen only; do not migrate unused leadership placeholders.

## 7. Updates and contact

`/update` is the canonical Updates index. Draft editorial cards in mockups do not establish published posts. With zero approved posts, show a concise introduction and the official company channel rather than fabricated articles. The old anonymous case stories and their numbers remain excluded; do not convert them into Updates. No CMS or mailing subscription is introduced by this design step.

Approved contacts: **doannt@primitive-ai.com**; **+84 338 710 391**; **+1 917 508 5261**; **2261 Market Street STE 22919, San Francisco, CA 94114**; **No 04, 98/17 Lane, Tan Trieu, Thanh Liet, Hanoi, Vietnam**. Preserve the [original company LinkedIn](https://www.linkedin.com/company/primitiveai). Contact currently prepares an email draft; it must not claim receipt by a server.

## 8. Implemented routing

| Existing/public path | V3 destination or treatment |
| --- | --- |
| `/` | Integrated Core Agentic homepage |
| `/core-agentic` | Alias to `/`, retaining useful architecture/orchestration/knowledge/control anchors |
| `/business-value` | `/#business-value` |
| `/how-we-work` | `/#how-we-work` |
| `/trust` | `/#control` |
| `/use-cases` | `/#applications`; remap existing inbound/outbound/research/operations fragments to the matching workflow card |
| `/company` | `/about` |
| `/about` | Canonical company/founder page |
| `/products` | New product overview |
| `/services` | Restore the full custom AI development page; **do not redirect to the homepage** |
| `/update` | Canonical Updates index |
| `/updates`, `/success` | `/update`; no conversion of removed case stories into posts |
| `/solutions` | `/products` |
| `/solutions/chatbot`, `/solutions/knowledgehub`, `/solutions/legalhub` | Corresponding homepage application/legacy-context anchors, with useful app links preserved |
| `/solutions/camera-ai`, `/solutions/familyhub`, `/solutions/eduassess` | Retire detail pages and their Products links; keep concise product descriptions on `/products` and redirect these legacy URLs there |
| `/contact`, `/privacy`, `/terms` | Retain and reconcile content |

`/product-service` was a possible future address, not an existing route requiring a redirect. No implementation rule is added for it during this review. If needed later, choose one useful destination rather than publishing a duplicate catalog.

The client route layer preserves incoming query strings and hashes, remaps the old use-case fragments, and supplies the homepage section target when no fragment was provided. Unknown paths still reach the not-found page.

The [route inventory](migration/route-map.csv) specifies conditions, scenario/fragment compatibility and query preservation. Do not redirect application/login/API URLs or every unknown path to home. Implement real host redirects only after their destinations work. Chosen domain: **primitive-ai.com**; no DNS/deployment change is included now.

## 9. Implementation and remaining review

1. **Completed architecture foundation:** conventional pages/shared components/features, central route policy/lifecycle, common i18next and design tokens, explicit legacy archive. See [refactor record](architecture-refactor.md).
2. **V3 design review:** eight image boards, component/interaction descriptions, broad applications, custom development, company history and asset contract remain at [the V3 gallery](../mockup/v3/index.html).
3. **Implemented homepage:** Core Agentic now lives at `/`, with productivity/economics, seven selectable application examples, customers, delivery, controls, company bridge, Custom AI Development and Updates teaser.
4. **Implemented page migration:** Products, Services, About and Updates use the shared page navigation. VisionHub, FamilyHub and EduAssess remain concise, unlinked offerings on Products; their former detail URLs redirect to `/products`. Contact includes optional offering/service context.
5. **Build and layout review:** TypeScript and production build pass. A follow-up 11-route browser sweep checked 483 panels across 320 × 568, 390 × 844, 600 × 400, 768 × 1024, 1024 × 600, 1280 × 720 and 1440 × 900 for viewport fit, snap alignment and horizontal overflow. Wheel scrolling was checked across panel boundaries and within a panel with overflow. Small-phone hero screenshots were reviewed after the compact layout changes.
6. **Remaining before release:** source authentic Ymner/TNE artwork and confirm TNE identity; review translations for newly added copy; complete keyboard, zoom, screen-reader and breakpoint-boundary review; decide release metadata, host redirects and rollback. Deployment and DNS remain separate.

The mockup remains a reference and the V3 pages use native React UI. No publication or DNS change is included. Review the [V3 gallery](../mockup/v3/index.html), [component guide](../mockup/v3/docs/component-guide.md), [review notes](../mockup/v3/docs/review-notes.md), [content inventory](migration/content-inventory.csv) and [route map](migration/route-map.csv).
