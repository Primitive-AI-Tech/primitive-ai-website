# V2 component guide

V2 extends the **current uncommitted implementation**, not the older purple website. Review the [images](../index.html) alongside this guide. The [decision ledger](decision-ledger.md) controls content and routing where a generated image contains incidental wording or simplified artwork.

## Inherited design contract

- Original Primitive AI logo at its natural aspect ratio. Production uses the existing asset, not a generated imitation.
- Main blue **#044EFF**, midnight **#071526**, paper/ice reading surfaces, original indigo/cyan supporting accents, Inter typography.
- Inset floating capsule navigation, pill actions, rounded panels, connected-agent illustrations, restrained glass and dotted cyan connectors.
- Clear dark/light chapter changes, subtle reveal/diagram motion, native snapping on major presentation sections and reduced-motion support.
- Readable reflow: normal body text at least 16 px, diagram labels at least 14 px, controls at least 44 px high. Content grows instead of being clipped to fit a viewport.

Reference screenshots are saved in `references`. The boards are raster design proposals; implementation must keep text, controls, tables and diagrams as native UI.

## Board 01 Home and configuration family

[Image](../images/01-home-and-configurations.png)

| Component | Description and intended behavior |
| --- | --- |
| 01.1 Header | Inherit the current capsule. Five labels: Core Agentic, Use Cases, Customers, How We Work, Company. Customers and How We Work lead to home sections. Updates is linked through Company/footer and its home teaser. Active/focus states remain visible; tablet/phone collapse when labels no longer fit. |
| 01.2 Hero | Preserve the approved headline and connected-work proposition. The platform is named immediately. Large heading uses the current blue/white emphasis rather than a new brand treatment. |
| 01.3 Actions | Primary contact action; secondary Use Cases action. Retain current pill proportions and keyboard focus. Phone actions stack without shrinking. |
| 01.4 Connected work | Inherit the measured native agent canvas: request, agent roles, shared Core Agentic hub, approved systems and reviewable output. Clearly illustrative. Use the compact summary on smaller screens. |
| 01.5 Trust cues | Compact approved knowledge, human oversight and visible execution row. Link to the in-page control block rather than the retired Trust destination. |
| 01.6 Configuration cards | Customer operations, organizational knowledge and legal workflows. SupportHub/KnowledgeHub/LegalHub labels explain the lineage. The main message is configured work on one foundation. Cards lead to the relevant configuration on Use Cases. |
| 01.7 Shared foundation | A common rail ties all three configurations to knowledge, agents, tools and controls. It must not include VisionHub, FamilyHub or EduAssess. |

The image puts the family section beside the opening for review. The full home order retains problem/value before the detailed configuration/examples section; see [the approved plan](../../../docs/website-migration-plan.md).

## Board 02 Value, delivery and control

[Image](../images/02-value-delivery-and-control.png)

| Component | Description and intended behavior |
| --- | --- |
| 02.1 Value hierarchy | Productivity and economics remain the main outcomes. Supporting agility, consistency and transparency can remain in concise supporting text rather than another large feature grid. |
| 02.2 Effort worksheet | Preserve the real model: 60 eligible + 40 other minutes; AI leaves 12 eligible + 40 other + 8 review = 60 total. The 40% reduction is illustrative, never a customer result. |
| 02.3 Inline assumptions | “Adjust the assumptions” expands the existing input model in the same chapter. Keep validation, reset, unfavorable outcomes and optional unit-cost assumptions. Expansion grows the section; closing returns focus to its trigger. It does not navigate to Business Value. |
| 02.4 Six-stage process | Desktop 3×2 steps, tablet 3×2 where readable, phone compact numbered rows. Preserve a clear deliverable and evaluation point in each stage. |
| 02.5 Working brief | Process owner, approved data and success measures beside/below the steps. The working-session action preserves `intent=working-session`. |
| 02.6 Shared controls | Keep the existing native knowledge/workflow/tool diagram and activity preview. Connections adapt to actual nodes rather than using a screenshot. |
| 02.7 Activity | A sample request/source/draft/review sequence, explicitly concept/sample data. Offscreen loops pause; reduced-motion mode shows stable states. |
| 02.8 Inline detail | “Explore the controls” reveals access, approval and history detail in place. It replaces navigation to a separate Trust page. Pending, review and exception states must remain understandable without color alone. |

The major merged sections receive stable IDs `business-value`, `how-we-work` and `control`. Old links resolve to their useful equivalents after the actual migration.

## Board 03 Customers, updates and closing

[Image](../images/03-customers-updates-and-footer.png)

| Component | Description and intended behavior |
| --- | --- |
| 03.1 Customer group | Seven owner-approved names: Ajinomoto, Nidec, FPT Automotive, VTI Solutions, RAIS Tech, Ymner, TNE. Use original artwork where available; typeset Ymner/TNE without inventing symbols. The board uses names to make roster review easy. |
| 03.2 Partner group | Intel, Microsoft, Google and Techvico in a separate labeled row. Do not merge them into “Core Agentic customers” or imply an endorsement beyond the approved relationship. |
| 03.3 Responsive roster | A calm grid rather than a fast moving marquee. Reflow to two columns on phones; do not truncate company names. Keep the group reachable through `/#customers`. |
| 03.4 Updates teaser | “From Primitive AI” replaces the old anonymous case-story gallery. Three cards show editorial design drafts, not existing published articles. Categories distinguish product direction and separate offerings. |
| 03.5 Update card | One cover, category, readable title and real eventual destination. Whole-card focus must be clear. Original source/date/author are used only when known. Do not convert old customer percentages into news. |
| 03.6 Closing invitation | Preserve the existing navy/blue-wave closing language and clear contact action. It follows a useful story rather than adding another competing product menu. |
| 03.7 Footer | Home anchors, Company, Updates, Other products and legal links. Email is **doannt@primitive-ai.com** everywhere. United States/Vietnam locations remain concise here, complete on Contact. |

**Zero published updates:** show a concise editorial introduction and the official company-channel link rather than fabricated cards. The Updates index provides an honest empty state. Cards appear when content is approved. No CMS or subscription integration is implied by the mockup.

## Board 04 Company and product lineage

[Corrected image](../images/04-company-history-and-other-products-corrected.png)

| Component | Description and intended behavior |
| --- | --- |
| 04.1 Founder hero | Restore the existing Doan Nguyen portrait and founder identity. Production uses `public/founders/doannt-body.png` directly. No invented additional team. Retain the current navy split hero and rounded editorial frame. |
| 04.2 Founding fact | The company was founded in **2023**, per the owner. Personal learning in 2016 belongs to founder background. Do not present an older product date as a company launch date without a supported explanation. |
| 04.3 Development chronology | Preserve the original applied-AI, conversation, knowledge/memory and specialized-document history, culminating in Core Agentic as the unified enterprise direction. The board shows an edited overview, with room for the fuller original event descriptions. |
| 04.4 Milestone detail | Meaningful event descriptions can expand in place. Retain product names and source material. Only the founding year is newly confirmed; avoid inventing exact launch dates for the other nodes. |
| 04.5 Shared direction | The final Core Agentic node is the strongest blue emphasis. It explains convergence; it does not retroactively rename every older deployment as Core Agentic. |
| 04.6 Other products | VisionHub, FamilyHub and EduAssess are explicitly separate specialist offerings. They support the history but do not join the three-configuration foundation rail. Preserve appropriate existing product/app access. |
| 04.7 Company links | Updates, original LinkedIn, contact and legal content share the same navigation. The footer uses the corrected approved email. |

## Board 05 Responsive behavior

[Corrected image](../images/05-responsive-phone-and-tablet-corrected.png)

| State | Reflow specification |
| --- | --- |
| Phone opening | Logo + menu, 3–4-line headline, stacked full-width actions and vertical request → Core Agentic → approved systems → result summary. The next section can extend below the fold. |
| Phone application | Native labeled selector replaces wide tab rows; one vertical request/source/agent/human/result sequence preserves meaning. |
| Phone relationships | The visible example subset uses approved names only; the complete roster continues vertically. Partners remain separate. No horizontal carousel is needed to discover names. |
| Tablet | Compact capsule with logo, contact action and menu. Hide the full desktop navigation when it would be tiny or crowded. A horizontal four-step summary replaces an unreadable miniature agent canvas. |
| Narrow configurations | Cards stack or use a selector; connectors change orientation. A shared rail must not force the whole viewport wider. |
| Landscape/short screens | Fluid headline, compact header and content-led height. Preserve natural reading within tall chapters. |

The concept board illustrates intended reflow; it is **not** a browser/device test result. The later implementation must run the existing 34-viewport homepage matrix again.

## Board 06 Configured use cases

[Image](../images/06-configured-use-cases.png)

| Component | Description and intended behavior |
| --- | --- |
| 06.1 Configuration selector | Three work families: customer operations, organizational knowledge, legal workflows. Selection updates the scenario choices and their complete supporting context together. |
| 06.2 Scenario selector | Customer operations includes inbound sales, account research and support. Existing internal-operations and research/knowledge entry points remain supported in the new information structure; do not drop old deep links. |
| 06.3 Workflow panel | A concrete request, sources, agent work and human checkpoint paired with a usable output. Keep the existing illustrative/sample labeling. |
| 06.4 Output | Requirements, supporting sources and next step to review. Avoid decorative analytics with fabricated data. |
| 06.5 Evaluation detail | What we connect, what the team controls and what we measure. These support a focused working session rather than promising a universal ready-made integration. |
| 06.6 Lineage | SupportHub experience → configured customer operations → Core Agentic. Parallel KnowledgeHub and LegalHub entry cards reinforce the shared foundation. |
| 06.7 Interaction contract | Keyboard-operable tabs on wide screens, a labeled native selector on narrow screens, shareable selection state and stable reading position while switching. Contact retains the selected workflow context. |

## Board 07 Updates and Contact

[Image](../images/07-updates-and-contact.png)

| Component | Description and intended behavior |
| --- | --- |
| 07.1 Updates masthead | A shorter inherited navy masthead introduces the editorial collection without a full-screen obstacle to reading. |
| 07.2 Category filter | All, Company, Core Agentic, Other products. Filter only real published records. Keep visible focus and a useful no-results state. |
| 07.3 Editorial index | Native cards/rows with cover, title and genuine summary; author/date when available. Board gray lines are composition placeholders, not text to implement. |
| 07.4 Article reading | Use a quiet editorial template, readable line length, meaningful headings, real source/date, related content and ordinary scrolling. No presentation snapping through paragraphs. A separate article board is deferred until actual article copy is selected. |
| 07.5 Contact masthead | “Bring us a workflow worth improving.” inherits the current hero and surfaces. |
| 07.6 Inquiry form | Preserve existing required name/email/organization/workflow and optional systems/frequency, error focus and input preservation. Phone columns stack. |
| 07.7 Draft outcome | “Prepare email draft” is honest about the existing delivery mode. Success says the draft is ready; it does not claim an inquiry was received. The recipient is doannt@primitive-ai.com. |
| 07.8 Company details | Approved Vietnam/US phone and address blocks, from the decision ledger. No arbitrary office photography or additional people. |
| 07.9 Next steps | Understand the workflow, agree a focused proof, evaluate the result. This supports the same delivery story as the homepage. |

## Review priorities

1. Does the shared foundation make SupportHub/KnowledgeHub/LegalHub feel like configured work rather than three competing products?
2. Does the merged homepage preserve the argument without overwhelming the first visit? Inline expansions keep detail available.
3. Are the customer and partner groups placed and labeled correctly?
4. Does the founder/history story preserve the original development journey while clearly using 2023 as the company founding year?
5. Do Updates and separate offerings have useful secondary places without displacing Core Agentic?
6. Are the compact phone/tablet states readable and consistent with the current design?

Record visual changes in [review notes](review-notes.md). Structural choices already recorded by the owner are not reopened by this checklist.
