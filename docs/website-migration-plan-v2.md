# Primitive AI approved website migration plan

**Status:** Owner decisions recorded; V2 mockups prepared before migration implementation  
**Date:** 8 November 2026

Core Agentic becomes the homepage at `/`. The current uncommitted blue/navy design is the visual baseline. The site will explain one platform configured for different organizational workflows, supported by Primitive AI's real customer relationships and the history of developing specialized AI solutions.

The source of approval is the [owner's decision sheet](website-migration-decisions.md). The [decision ledger](../mockup/v2/docs/decision-ledger.md) records the resolved interpretation. The [earlier proposal](website-migration-plan-proposal.md) remains available for comparison; its customer-directory, portfolio and separate detail-page recommendations are superseded where they conflict with these decisions.

## 1. Work in this revision

1. Refactor the current code into conventional route pages, shared UI, feature modules, shared localization and explicit route policy, preserving current UI behavior and source material.
2. Prepare [V2 images and component descriptions](../mockup/v2/index.html) from the current design.
3. Review the new design before implementing the content and route migration below. No deployment or DNS change is included in this revision.

## 2. Approved information architecture

| Surface | Destination | Content |
| --- | --- | --- |
| Core Agentic | `/` | Platform introduction, business problem/value, economics, configuration families, examples, delivery, knowledge/control, customers and updates |
| Use Cases | `/use-cases` | Shared Core Agentic foundation with customer operations, organizational knowledge and legal-workflow configurations |
| Customers | `/#customers` | Seven approved customer names and four partners, in separate labeled groups |
| How We Work | `/#how-we-work` | Six-stage working-proof approach, including training and operating handoff |
| Company | `/company` | Founder, original solution-development history, company founded in 2023, convergence into Core Agentic and separate specialist products |
| Updates | `/updates`, plus `/#updates` | Company/product news and perspectives; replaces the old anonymous case-story collection |
| Contact | `/contact` | Existing inquiry interaction plus approved US/Vietnam contact information |
| Other products | `/company#other-products`, with useful existing product entry pages | VisionHub, FamilyHub, EduAssess; clearly outside the Core Agentic configuration family |
| Legal | `/privacy`, `/terms` | Shared editorial design and reconciled company/website details |

The five primary navigation items are **Core Agentic · Use Cases · Customers · How We Work · Company**, plus language and **Talk to our team**. Updates is discoverable from its homepage section, Company and the footer. Customers and How We Work are home anchors, not duplicate detail pages.

## 3. Homepage content flow

| Block | Purpose and design |
| --- | --- |
| Opening | Preserve “Put AI to work across your organization.”, current capsule header, connected-agent visual, blue/navy waves and two primary actions. |
| Operational problem | Explain searching, copying, coordinating and checking between systems. |
| Productivity and economics | Preserve the outcome hierarchy and clearly illustrative effort model. The full worksheet expands inline rather than navigating to Business Value. |
| One platform, configured for your work | Connect SupportHub customer operations, KnowledgeHub organizational knowledge and LegalHub legal workflows to a shared Core Agentic foundation. |
| Practical examples | Explain request, approved sources, agent work, human review and usable output. Preserve relevant existing scenario entry points. |
| How we work | Agree the opportunity, define the proof, build together, evaluate, put into operation and expand. Merge useful service detail into the same story. |
| Knowledge, agents and control | Show the source path, bounded tools, approvals and visible execution. Detailed controls expand inline rather than linking to a separate Trust page. |
| Customers and partners | Show exactly the owner-approved roster with truthful labels. Avoid customer-outcome statistics and implications that all relationships are Core Agentic deployments. |
| Company bridge | Briefly explain how specialized AI work led to the unified platform; link to the fuller chronology. |
| Updates | Introduce recent company thinking and product news. Preview titles are editorial drafts until content is supplied and reviewed. |
| Closing | Focused workflow invitation, consistent contact and footer. |

Keep the presentation's native snap behavior for major chapters, content-driven heights and reduced-motion support. Compact name strips and editorial teasers do not need to consume a full screen. Direct scenario links should select and reveal the right example; changing the selection should preserve reading position.

## 4. Configuration story and separate products

**SupportHub → customer operations:** bring approved service knowledge and customer context into response preparation, inquiry routing and reviewed next steps. Sales intake, account research and support are workflows within the family.

**KnowledgeHub → organizational knowledge:** find and interpret approved information with evidence and a path back to the source. Organizational knowledge and memory support useful work across teams.

**LegalHub → legal workflows:** tailor document preparation and review workflows to approved material, rules and expert checkpoints.

The common story is **knowledge + agents + tools + controls**, configured for different work. Legacy project results and old product feature lists do not automatically establish current Core Agentic availability. Describe a configured solution accurately; preserve the historical product names as lineage rather than presenting three unrelated sales products.

**VisionHub, FamilyHub and EduAssess AI remain separate offerings**, as explicitly directed. They may support the company history and Other products section, but must not appear as nodes in the Core Agentic configuration diagram. Preserve useful standalone app access without migrating login/API behavior.

## 5. Approved evidence and company facts

**Customers:** Ajinomoto, Nidec, FPT Automotive, VTI Solutions, RAIS Tech, Ymner, TNE.

**Partners:** Intel, Microsoft, Google, Techvico.

Remove Qualcomm, Canon, YAZAKI, HIK Robotics, Cuulong, Ductoan, EIU/EIU2 and NamVuong from new public relationship blocks. Keep the inventory/source assets recoverable. Ymner and TNE may appear as names until real logo artwork is available.

The company was **founded in 2023**. Preserve the original history of applied vision work, conversational support, knowledge/memory and specialized documents leading to Core Agentic. Distinguish pre-company work from company events and retain only supported milestone dates. Show **Doan Nguyen only**, using the existing authentic portrait; do not migrate the unused placeholder leadership profiles.

The approved contacts are **doannt@primitive-ai.com**, **+84 338 710 391**, **+1 917 508 5261**, the existing US address **2261 Market Street STE 22919, San Francisco, CA 94114**, and **No 04, 98/17 Lane, Tan Trieu, Thanh Liet, Hanoi, Vietnam**. Preserve the existing company LinkedIn link.

The owner removed all seven anonymous case-story candidates from the migration. They do not become Updates posts and their percentages do not become Core Agentic claims. Individual testimonial fields remain blank; V2 does not depend on using their numerical claims.

## 6. Updates and publishing

Create an Updates index and homepage teaser, with an editorial reading template. Cover company news, Core Agentic perspectives and clearly labeled separate-product updates. Do not invent a missing archive, published dates or new customer results. The discovered FamilyHub social update can be considered as source material, with its original source retained.

A publishing service/CMS is a later implementation choice based on actual editorial needs. The mockups specify browsing, filtering, reading, empty-state behavior and responsive layout without committing to a new external system.

## 7. Migration routing after design review

| Existing route | Approved destination/treatment |
| --- | --- |
| `/` | Integrated Core Agentic homepage |
| `/core-agentic` | Alias to `/`; preserve architecture/orchestration/knowledge/control anchors |
| `/business-value` | `/#business-value`, after the worksheet and economics detail are merged |
| `/how-we-work`, `/services` | `/#how-we-work`, after useful process and service detail are merged |
| `/trust` | `/#control`, after detailed controls are merged |
| `/use-cases` | Retain and reshape around configured workflow families |
| `/company`, `/about` | Full Company story at `/company` |
| `/success` | Replace the case-collection destination with `/updates`; do not convert anonymous stories into posts |
| `/solutions` | `/use-cases`, with the configuration lineage and a clear route to separate offerings |
| `/solutions/chatbot` | `/use-cases#customer-operations`, after the target contains the relevant context |
| `/solutions/knowledgehub` | `/use-cases#organizational-knowledge`, preserving useful standalone app access |
| `/solutions/legalhub` | `/use-cases#legal-workflows`, with accurate status and review boundaries |
| `/solutions/camera-ai`, `/solutions/familyhub`, `/solutions/eduassess` | Retain useful separate-product entry paths using the new shared design; no Core Agentic ecosystem claim |
| `/contact`, `/privacy`, `/terms` | Retain; migrate approved content and templates |

Implement real host redirects when the migration is ready, preserve inquiry queries and useful browser fragments, and avoid a blanket redirect of every unknown URL to home. The chosen canonical domain is **primitive-ai.com**. Domain/hosting changes are a later deployment task, not an effect of approving the mockups.

## 8. Implementation sequence

1. **Architecture foundation:** route registry and resolved-page lifecycle; conventional pages/components/features; shared i18next and tokens; explicit archival of superseded source. Preserve current behavior.
2. **V2 review:** inspect all seven image boards and their component descriptions, particularly homepage density, configuration naming, customer grouping, founder/history and responsive states.
3. **Homepage migration:** integrate platform/value/process/controls, inline worksheet, approved roster and Updates teaser.
4. **Supporting migration:** rebuild Use Cases, Company, Updates, Contact and separate-product entry templates; preserve source records and app access.
5. **Content and responsive validation:** shared language facts, image provenance, real links, keyboard/focus/reduced motion, full home scroll reachability and representative reading-page widths.
6. **Release preparation:** destination-specific metadata, canonical URLs, host redirects, direct-load behavior, build checks and a recoverable rollback package. Publish only in the later authorized implementation/release phase.

## 9. Review artifacts and validation boundary

- [V2 gallery](../mockup/v2/index.html)
- [V2 design and component specification](../mockup/v2/docs/component-guide.md)
- [Decision ledger](../mockup/v2/docs/decision-ledger.md)
- [Architecture review and refactor record](architecture-refactor.md)
- [Content inventory](migration/content-inventory.csv) and [route map](migration/route-map.csv)

This revision refactors the running code and produces the next design for review. The approved migration is not silently applied as part of generating mockups. Original decision wording is preserved in the owner's sheet.
