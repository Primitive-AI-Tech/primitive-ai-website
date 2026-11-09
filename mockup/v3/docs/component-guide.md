# V3 component and interaction guide

Review the [image gallery](../index.html) with this specification. V3 extends the current uncommitted design and supersedes the affected V2 navigation, application, history and services treatment. It does not migrate the running React pages.

## Shared design contract

Keep the original logo, primary **#044EFF**, midnight **#071526**, paper/ice reading surfaces, Inter, floating capsule header, pill actions, rounded cards, restrained glass diagrams, thin cyan connectors and blue corner waves. Preserve the existing dark/light chapter rhythm and measured motion. Use native text, controls and diagrams when implementing; generated marks and text are not production assets.

The primary navigation is **Home · Products · Services · About · Updates**, plus language and **Talk to our team**. Recommended destinations: `/`, `/products`, `/services`, `/about`, `/update`, `/contact`. Customers, applications, value, process and control belong to Home. Page labels remain consistent on desktop, tablet, mobile and footer.

Body copy targets at least 16 px, meaningful diagram labels at least 14 px, and interactive targets at least 44 px. Widths are fluid and content drives height. Avoid fixed viewport clipping, miniature desktop diagrams and horizontally hidden essential content. Full implementation validation remains required; these are visual design boards.

## Board 01 Home and open-ended applications

[Image](../images/01-home-and-open-applications.png) · **/**

The inherited opening now leads to six broad work areas and an open invitation to configure the platform for another workflow.

| Component | Purpose and behavior |
| --- | --- |
| 01.1 Page navigation | Preserve the floating capsule and original logo. Home, Products, Services, About and Updates are page links, followed by language and Talk to our team. Use aria-current=page, visible keyboard focus and a clear active state. No homepage chapter names in the primary menu. |
| 01.2 Opening | Keep the exact headline: Put AI to work across your organization. Name Core Agentic immediately. Preserve the current large type, navy canvas, #044EFF emphasis and blue corner waves. |
| 01.3 Two actions | Talk to our team opens Contact. Explore applications moves within Home to #applications. Preserve pill proportions; stack full-width controls on phones. |
| 01.4 Connected work | Native request, agents, Core Agentic, approved systems and reviewable-output diagram. This is an illustrative workflow, not a live product screenshot. Adapt connectors to actual node positions; smaller screens use a concise vertical flow. |
| 01.5 Work areas | Six examples: Sales & customer support, Knowledge & research, Internal operations, Finance & reconciliation, People & HR, Documents & legal. These describe organizational work rather than six separately sold products. |
| 01.6 Shared foundation | All examples connect to knowledge, agents, tools and controls. SupportHub/KnowledgeHub/LegalHub are contextual examples, not fixed platform pillars. Separate VisionHub/FamilyHub/EduAssess products stay outside this foundation. |
| 01.7 Your workflow | An open-ended final tile invites the visitor to describe their actual workflow. Link to Contact with workflow context. The six visible examples are a starting set, not a ceiling on what the platform can be configured to support. |
| 01.8 Scenario detail | Below the cards, retain a native selectable example: request, approved sources, agent work, human review and usable output. Wide screens use accessible tabs; narrow screens use a labeled selector. Preserve sales/research/internal-operations deep links and reading position when changing selection. |

## Board 02 Value, working proof and control

[Image](../images/02-value-process-and-control.png) · **/**

The existing value, delivery and control design remains part of the homepage, with the new page-level topbar.

| Component | Purpose and behavior |
| --- | --- |
| 02.1 Outcomes | Productivity and economics lead. Supporting consistency, agility and transparency explain why the operational changes matter without claiming perfect accuracy or universally cheaper delivery. |
| 02.2 Illustrative effort model | Preserve the actual model: before = 60 eligible + 40 other minutes; after = 12 eligible + 40 other + 8 review = 60 minutes. The resulting 40% effort reduction is illustrative, never a customer result. |
| 02.3 Editable assumptions | Adjust the assumptions expands the existing worksheet inline at #business-value. Keep validation, reset, optional total-cost assumptions and unfavorable outcomes. The chapter grows; it must not clip or prevent scrolling. Closing returns focus to its trigger. |
| 02.4 Core Agentic process | Keep six stages: agree the opportunity, define the proof, build together, evaluate, put into operation and expand. Include training/operating handoff. This is the platform working-proof narrative, distinct from the Services page's five-stage engineering process. |
| 02.5 Session brief | Show process owner, approved information and success measures. Preserve intent=working-session in the Contact action. |
| 02.6 Knowledge and control | Retain source → agent/tool work → checkpoint → visible result. Detailed access, approvals and history expand within #control instead of opening a separate Trust page. |
| 02.7 Motion and states | Use subtle existing reveals and restrained diagram activity; pause offscreen loops. Review, exception and pending states need text/icons as well as color. Reduced-motion mode shows stable complete states. |

## Board 03 Real organizations, custom services and Updates

[Image](../images/03-customers-services-and-updates.png) · **/**

Eight customers, four separately labeled partners, the restored custom-development invitation and the editorial closing.

| Component | Purpose and behavior |
| --- | --- |
| 03.1 Customers | Ajinomoto, Nidec, FPT Automotive, VTI Solutions, RAIS Tech, Ymner, TNE and NEU — National Economics University. Text names are acceptable in these concept boards; the real build must use authentic logo images. Do not label every relationship a Core Agentic deployment. |
| 03.2 Partners | Intel, Microsoft, Google and Techvico form a separately labeled group. Preserve each brand's actual artwork and proportions rather than generating marks or applying the primary blue to every logo. |
| 03.3 Logo treatment | Use a calm optical-size grid on light surfaces; four columns on wide screens, fewer as space permits and two on phones. Natural aspect ratio, contain fitting, full accessible organization name. Missing Ymner/TNE files remain explicit asset tasks; see logo-assets.json and logo-assets.html. |
| 03.4 Custom-services invitation | Custom AI. Built for your business. Introduce bespoke agents, workflow automation, APIs, model adaptation, AI products and strategy. This is a substantive second offer, linked to /services; it is not merely a line about installing Core Agentic. |
| 03.5 Updates teaser | From Primitive AI previews three editorial concepts. Draft titles in the mockup are not published articles. The real teaser is driven by approved content; with no posts, use a concise introduction and the official company channel instead of fabricated cards. |
| 03.6 Closing | Preserve the existing navy/blue-wave invitation and focused contact action. Avoid unsupported customer percentages and the removed anonymous case-story collection. |
| 03.7 Footer | Use the same page destinations as the topbar, Contact, Privacy, Terms and original LinkedIn. Optional contextual homepage anchors can be secondary. Email stays doannt@primitive-ai.com everywhere. |

## Board 04 About and the fuller original journey

[Image](../images/04-about-and-original-journey.png) · **/about**

A founder-led company story with the concrete named product path restored, culminating in Core Agentic.

| Component | Purpose and behavior |
| --- | --- |
| 04.1 Founder hero | Retain More potential. More productive organizations. and the authentic Doan Nguyen portrait. The production image is public/founders/doannt-body.png, not the generated rendering. Founder only; no invented team members. |
| 04.2 Founding fact | Primitive AI was founded in 2023 per the owner. 2016 describes personal learning. The older file's 2020 company-founding statement must not return. |
| 04.3 Founding question | Restore the original motivation and concrete FDI/Vietnamese operating context. A question that stayed with us is an editorial treatment of the existing narrative, not a sourced customer quote or independent economic claim. |
| 04.4 Fuller path | 2016 learning → early VisionHub/computer vision → 2023 company formation → SupportHub/response quality → KnowledgeHub, memory and custom services → LegalHub/documents → FamilyHub & EduAssess wider applications → Core Agentic. Preserve the original detailed source material for expansion. Product stages are undated lineage, not new verified launch dates. |
| 04.5 Timeline design | A connected vertical path with distinct named milestone cards. Keep meaningful descriptions visible; optional More detail expands inline. The final Core Agentic node has the strongest blue emphasis. Remove the generic Applied AI foundations stage entirely. |
| 04.6 Principles | Restore Customer First, Excellence, Innovation and Responsibility in the inherited rounded-card style, with concrete supporting copy during implementation. |
| 04.7 Catalog link | About links to Products and Services without duplicating their complete catalogs. VisionHub/FamilyHub/EduAssess retain independent product identities. Standard reading scroll, not presentation snapping through the chronology. |

## Board 05 Phone, tablet and the page menu

[Image](../images/05-phone-tablet-and-navigation-corrected.png) · **Responsive states**

A stacked phone opening, open page-level mobile menu and readable tablet applications layout.

| Component | Purpose and behavior |
| --- | --- |
| 05.1 Phone opening | Compact logo/menu header, fluid headline, stacked actions and vertical request → Core Agentic → approved systems → result summary. Let tall content continue below the fold. |
| 05.2 Open menu | Home, Products, Services, About, Updates and Talk to our team. Menu button exposes expanded state and controls the menu; Escape and navigation close it and restore focus where appropriate. The menu scrolls internally on short viewports so the contact and language controls remain reachable. Use at least 44 px targets. Homepage chapter links do not reappear as competing main menu entries. |
| 05.3 Tablet header | Collapse to logo/contact/menu when the five page labels no longer fit comfortably. Do not shrink a desktop navigation bar into tiny labels. Determine the transition by available space and translated-label length. |
| 05.4 Application reflow | Six examples use three columns where a wide tablet has room, two on narrower tablets and one on phones. Shared connectors reorient; no fixed-width canvas or clipped horizontal card strip. Your workflow remains available after the examples. |
| 05.5 Relationship subset | The compact view shows a subset only; all eight customer records remain reachable vertically. The full accessible name for NEU is National Economics University. Partners retain their own label. |
| 05.6 Short screens and motion | Natural content heights at landscape widths and text zoom; native proximity snapping only where it aids reading. Expanded sections remain scrollable. Reduced-motion mode preserves complete content. This image is a design state, not proof of browser/device testing. |

## Board 06 Products and the shared platform

[Image](../images/06-products-and-platform.png) · **/products**

Core Agentic is the flagship. The three independent specialist products remain visible without confusing the platform's configurable applications.

| Component | Purpose and behavior |
| --- | --- |
| 06.1 Products masthead | A shorter inherited navy masthead introduces the catalog without repeating the whole homepage. Active header item is Products. |
| 06.2 Flagship | Core Agentic leads with its shared knowledge/agents/tools/controls diagram, a concise enterprise proposition and a Home link to the full story. Reuse existing native diagram components. |
| 06.3 Applications | Generic work-area chips/examples show breadth. Sales/support, operations, knowledge/research, finance, HR and documents are configurations. SupportHub/KnowledgeHub/LegalHub are contextual lineage examples, not separate top-level products here. |
| 06.4 Separate offerings | Three distinct cards: VisionHub (computer vision in operating environments), FamilyHub (family knowledge and memory), EduAssess (English language assessment). They are explicitly outside the Core Agentic ecosystem. Preserve useful existing product/app links; no invented active/beta status or new capabilities. |
| 06.5 Custom-build bridge | Need something tailored? links to /services and its custom-development contact intent. Keep a product-first visitor's next step clear while exposing the engineering offer. |
| 06.6 Routing | The /products split is recommended for this review. Existing specialist paths can remain in the shared template until any replacement is reviewed. Do not touch application, login or API routes as a side effect of catalog migration. |

## Board 07 Custom AI Development services

[Image](../images/07-custom-ai-development-services.png) · **/services**

The complete original service offer returns, with six capabilities, useful deliverables and a practical engineering process.

| Component | Purpose and behavior |
| --- | --- |
| 07.1 Services opening | Custom AI. Built for your business. explicitly presents bespoke AI engineering. The active topbar item is Services. Primary CTA Discuss your project opens Contact with intent=custom-development. |
| 07.2 Two starting paths | Configure Core Agentic for a workflow, or develop custom AI for a tailored requirement. A custom project need not use Core Agentic; do not force every engagement into the platform story. |
| 07.3 Six capabilities | AI Agent Development; AI Workflow Automation; AI API Development; Model Training & Fine-Tuning; AI Product Development; Consulting & Strategy. Retain all original areas, with concise practical outcomes and optional examples rather than unsupported guarantees. |
| 07.4 Deliverable focus | Describe the scoped workflow/application, approved information and systems, task evaluation, exceptions/review requirements and deployment/operating handoff. These are engagement topics to agree, not a fixed universal package. |
| 07.5 Engineering process | Restore Discovery → Strategy → Build → Deploy → Optimize from the original Services page. Use connected horizontal steps on wide screens and numbered vertical rows on phones. Keep this distinct from the six-stage Core Agentic working-proof story on Home. |
| 07.6 Inquiry context | Discuss your project retains the service intent and any chosen capability in the inquiry. Existing email-draft interaction remains honest; recipient doannt@primitive-ai.com. No new external submission service is implied. |
| 07.7 Source restraint | Do not carry forward original marketing counts, unqualified 24/7 autonomy, accuracy promises or guaranteed integrations without evidence. Use real approved delivery examples only when their scope is clear. |

## Board 08 Updates and offering-aware Contact

[Image](../images/08-update-and-contact-corrected.png) · **/update and /contact**

The editorial and inquiry design retains its current visual language, with canonical /update and context for custom-development inquiries.

| Component | Purpose and behavior |
| --- | --- |
| 08.1 Updates index | The public path is /update; the label is Updates. Keep a compact navy masthead, readable cards and filtering only when actual content exists. All, Company, Core Agentic, Services and Other products are useful categories. |
| 08.2 Editorial cards | Preview titles are design drafts with no invented dates. Do not convert removed anonymous cases into articles. With zero published posts, show the editorial introduction and real company channel; never a false archive. |
| 08.3 Article reading | A later real article uses a quiet reading template, meaningful headings, original source/date/author when known and ordinary scrolling. No presentation snap through paragraphs. /update/:slug is reserved for actual approved records. |
| 08.4 Contact introduction | Bring us a workflow worth improving. still works for both platform and custom engineering inquiries. Use Project or workflow for the description field. |
| 08.5 Offering context | Optional Interested in: Core Agentic, Custom AI development, Specialist products. A Services link preselects Custom AI development. Keep name/email/organization/project requirements, optional systems/frequency, input preservation, clear errors and error focus. |
| 08.6 Honest submission | Prepare email draft creates a draft addressed to doannt@primitive-ai.com. Success describes the prepared draft, not receipt by Primitive AI. Preserve current fallback/copy behavior and query context. |
| 08.7 Company details | +84 338 710 391; +1 917 508 5261. US: 2261 Market Street STE 22919, San Francisco, CA 94114. Vietnam: No 04, 98/17 Lane, Tan Trieu, Thanh Liet, Hanoi, Vietnam. Original company LinkedIn only. |
| 08.8 Responsive and shared UI | Forms stack on phones, labels stay above inputs and details remain in natural reading order. Use the same page-level header/footer on every page. All text and controls are native UI in the implementation. |

## Implementation boundaries

The homepage content order is specified in the [migration plan](../../../docs/website-migration-plan.md); boards group related components for review. Expandable economics/control details remain inline. Preserve native snap behavior on the major homepage chapters without blocking tall content. About, Services, Contact and Updates use normal reading scroll. Keep reduced-motion, focus and fragment/query compatibility.

The first six application cards are example content. A reusable workflow record should hold a stable identifier, title, audience, request, approved sources, agent work, human checkpoint, output, evaluation points and contact context. The content model must support additional workflows without hard-coding six categories or three legacy Hub names into layout logic.

Customer classification is owner supplied. Real artwork is a build requirement: see [logo-assets.json](logo-assets.json) and the [asset sheet](../logo-assets.html). Product availability, new integration support, editorial publication and measured outcomes require actual source content; design alone does not establish them.

[Review notes](review-notes.md) provide space for decisions. The [decision ledger](decision-ledger.md) distinguishes owner directions from the recommended Products/Services split.
