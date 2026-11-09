# Primitive AI website migration plan

**Status:** Proposal for review  
**Date:** 8 November 2026  
**Scope:** Content, information architecture, visual integration, routes and launch sequencing

**Start your review:** [Decision sheet with choices and space for your notes](website-migration-decisions.md). This plan remains the supporting rationale.

Core Agentic should become the front door to Primitive AI. The existing company history, customer relationships, delivery experience and published material should give that proposition credibility. They need clear places in the new website, with the same design and navigation throughout.

The previous implementation replaced the central narrative but did not complete this migration. It redirected About and Services, retained several older product and success pages, and omitted important company material from the new experience. This plan addresses that gap.

This is a review document. It does not change the homepage, public routes, customer claims or deployment. The accompanying [content inventory](migration/content-inventory.csv) records the discovered material; the [route map](migration/route-map.csv) records proposed destinations and conditions.

## 1. Recommended decisions

| Area | Recommendation |
| --- | --- |
| Homepage | Make the current `/core-agentic` platform page the foundation of `/`, enriched with the strongest business narrative and company evidence. Retire the separate current homepage composition. |
| Homepage address | Use `/` as the single canonical homepage. Redirect `/core-agentic` to `/`, retaining its section links. This interprets “Core Agentic should be the homepage” as a content and positioning decision. If the literal `/core-agentic` address is preferred, reverse that one mapping before implementation; do not publish duplicate homepages. |
| Company credibility | Restore customer relationships, attributed quotes, founder identity and dated milestones in the new design. Keep historical product work accurately identified. |
| Customer evidence | Add `/customers`, with real story destinations where sufficient material exists. Keep hypothetical use cases separate from customer results. |
| Posts | Skip a website post migration at launch: no post archive was found in the repository, and the user agreed to skip missing posts. Keep `/insights` as a later option rather than publishing an empty section. |
| Other products | Move them out of the main acquisition journey into a secondary `/portfolio`. Preserve useful product access and historical context. |
| Supporting pages | Keep Business Value, How We Work and Trust as useful detail pages, linked contextually and in the footer rather than all competing in the header. |
| Visual migration | Every public destination uses the new shell and appropriate new content template. A page removed from the menu must not remain an unreviewed purple page behind a direct link. |

The intended hierarchy is **Core Agentic as the solution → company experience as evidence → other products as supporting context**.

## 2. What the audit found

The inventory compares the original tracked website with the current working tree. Finding content in the source confirms that it exists; it does not independently verify every commercial claim in that content.

| Material | Current evidence | Migration problem |
| --- | --- | --- |
| Customer and partner logos | 12 organizations in `src/components/Partners.tsx`; 19 image files in `public/images/partners` | The new homepage does not use them. The old component mixes organizations under a broad trust heading without recording the relationship type. |
| Testimonials | Three named quotes in the old home translations: Kiem Nguyen / RAIS Tech; Oscar P. Ridell / Ymner; Duyen Nguyen / TNE | They disappeared from the main journey. Their project context is not linked to a proper story page. |
| Customer stories | Six records in `success.json`; the old home also contains a distinct EduAssess education story | Seven distinct story candidates need reconciliation. Some old “Read Case Study” links default to `#`. |
| Company history | Six dated milestones in `about.json`, plus the newer founder-learning and product-evolution narrative in `src/site/content.ts` | `/about` redirects to a new Company page that does not restore the dated company timeline or founder portrait. |
| Founder and people assets | Doan Nguyen portrait used by the old About page; additional files in `public/founders` | Preserve the real founder identity. Other filenames alone do not establish names or roles. An unused leadership component contains unverified profiles and stock imagery. |
| Product portfolio | Six marketing pages, with separate app links for KnowledgeHub, FamilyHub and EduAssess | Still reachable with older layouts and positioning. Their relationship to Core Agentic is not explained. |
| Services | Six service descriptions and an older five-stage delivery process | The `/services` redirect loses the service detail; the new approach uses six stages. Reconcile the useful delivery capabilities into that approach. |
| Posts and articles | No article collection, post routes or CMS integration found in this repository | Skip this work at launch, following the user’s direction. A publicly visible LinkedIn FamilyHub update can be noted as optional portfolio context. |
| Languages | English, Vietnamese, Japanese, Chinese and Korean content in two translation systems | Dates, names, numbers and migration status need one shared record, rather than independent copies in five locales. |
| Search and route metadata | Client-side About/Services redirects; shared initial description and social metadata; no sitemap found | A production migration needs host redirects, destination-specific metadata and an explicit URL inventory. |

There is also a material history discrepancy: the old About copy says the company was founded in 2020, while the [LinkedIn page linked by the old footer](https://www.linkedin.com/company/primitiveai) lists 2023. The newer Company narrative starts with personal learning in 2016. These dates may describe different events; the plan does not choose a company founding date by inference.

## 3. Proposed website structure

Launch with four main choices plus the language control and contact action: Core Agentic, Use Cases, Customers and Company. Add Insights only if a useful article collection is commissioned later. The logo always returns to the Core Agentic homepage.

| Header item | Destination | Role |
| --- | --- | --- |
| Core Agentic | `/` | Understand the solution and how it works |
| Use Cases | `/use-cases` | Explore relevant work across sales, operations and knowledge |
| Customers | `/customers` | See who Primitive AI has worked with and what was delivered |
| Insights — deferred | `/insights` | Future articles and company updates; omit from launch navigation |
| Company | `/company` | Understand the founder, history and operating principles |
| Talk to our team | `/contact` | Describe a workflow or request a working session |

Business Value, How We Work and Trust remain direct, shareable pages. Link to them beside the relevant explanation on the homepage and in the footer. Do not squeeze additional top-level labels into the header; the mobile and tablet menus must show the same hierarchy.

The footer should group **Core Agentic**, **Customer experience**, and **Company**, with the secondary portfolio and legal links below. Restore the existing company LinkedIn link after confirming it is the intended account. Keep the agreed contact destination, **doannt@primitive-ai.com**. Carry forward address and phone information only after reconciling the older conflicting values.

## 4. Core Agentic becomes the homepage

This is more than swapping two route components. The existing platform page provides the product explanation; the current homepage contributes the approved headline, operational argument, use-case interactions and delivery narrative. Combine and edit those blocks into one product-led experience.

| Order | Content block | Source and treatment |
| --- | --- | --- |
| 1 | **Put AI to work across your organization.** | Retain the approved headline. Identify Core Agentic immediately. Use the connected-agent illustration from the current platform presentation, with readable small-screen variants. Primary CTA: Talk to our team; secondary: Explore use cases. |
| Supporting strip | Selected customer experience | Show a small selection of correctly classified customer names/logos. The label must describe the relationship, not imply every organization uses Core Agentic. This is not a full-screen chapter. |
| 2 | The work between systems | Keep the concrete searching, copying, chasing and checking problem. Reduce repetition from the current homepage. |
| 3 | Productivity and operating economics | Keep productivity, agility, consistency and transparency. Use a compact, clearly illustrative economics example, with the full worksheet on `/business-value`. Do not mix illustrative numbers with measured customer results. |
| 4 | Practical applications | Retain the four existing linked scenarios. Reuse relevant SupportHub/KnowledgeHub lessons as context without presenting all their old capabilities as shipped Core Agentic functionality. |
| 5 | Experience that supports the promise | Feature one or two substantial customer examples or attributed quotes. State the actual product/service delivered. Link to `/customers` or a real story. |
| 6 | How we work with your team | Keep the six-stage approach: opportunity, proof definition, build, evaluate, operation, expansion. Absorb relevant integration, training and support services here; link to `/how-we-work`. |
| 7 | How agents carry out work | Retain the current platform orchestration sequence and visible activity example. Label simulated activity as a concept preview. |
| 8 | Knowledge and control | Retain the source-evidence and knowledge explanation. Connect permissions, approvals and execution history to `/trust`. Keep `#knowledge` and `#control` entry points. |
| Supporting strip | Why Primitive AI and latest thinking | A concise founder/history bridge to `/company`, plus selected articles when available. Keep the full chronology and article reading off the homepage. |
| 9 | Start with a valuable workflow | End with a practical working-session invitation and the existing contact flow. |

These are content blocks, not a requirement to force each block into a full screen. Preserve native snapping for the major presentation chapters, allow taller content to scroll, and keep compact proof/editorial strips compact. Avoid repeating the same agent diagram or financial table in multiple chapters.

The current `/core-agentic` anchors `#architecture`, `#orchestration`, `#knowledge` and `#control` must continue to work at the new home. Existing homepage scenario links and useful chapter links also need an explicit compatibility mapping.

## 5. Customer relationships and evidence

### Customer and partner directory

Replace the single undifferentiated logo wall with records that distinguish **customer**, **delivery partner**, **technology ecosystem**, **institutional relationship** and **historical relationship**. Classify the relationship from company records, not the brand's prominence or the filename.

The old active list is Qualcomm, Intel, Microsoft, Google, Canon, Ajinomoto, YAZAKI, Nidec, FPT Automotive, HIK Robotics, VTI Solutions and RAIS Tech. Preserve every entry in the inventory. A technology used by the team is not automatically a customer or an endorsed partnership.

The seven additional files are Cuulong, Ductoan, EIU, EIU2, NamVuong, PRAI and Techvico. EIU/EIU2 need identity and artwork reconciliation; PRAI is company branding, not customer proof. The inventory therefore records **19 logo files**, not “19 customers.” Ymner and TNE appear in testimonials without corresponding local logo files; use their names rather than inventing logos.

On `/customers`, present relationships in clearly labeled groups. On the homepage, prefer a small relevant subset with a link to that directory. Preserve existing approved uses and record their context and restrictions. Unclassified entries remain in the review inventory until a truthful public label is established.

### Named testimonials

| Existing attribution | Recommended use | Check before publication in the new context |
| --- | --- | --- |
| Oscar P. Ridell, CEO, Ymner | Strong candidate for the AI-agent delivery story and a homepage quote | Exact attribution, engagement scope and whether the work used Core Agentic or a different implementation |
| Duyen Nguyen, CTO, TNE | Support-operations experience on `/customers`; potential use-case context | What “5% of tickets” measures, the comparison period, current relevance and exact wording |
| Kiem Nguyen, General Manager, RAIS Tech | Industrial AI experience and the company journey | Scope and basis of the stated 40% incident reduction; retain the VisionHub/Camera AI attribution |

Reuse approved wording accurately. Do not convert a services engagement or VisionHub result into a Core Agentic customer claim. Do not match an anonymous case to a named customer by guessing.

### Seven story candidates

| Existing story | Recommended destination and framing |
| --- | --- |
| Manufacturing workplace safety / VisionHub | Industrial AI experience; full customer story when its evidence is reconciled |
| FinTech customer support / SupportHub | Relevant support-workflow experience; retain the actual product and anonymous identity if required |
| Legal operations / LegalHub | Historical or current legal-document experience, according to verified delivery and product status |
| Retail knowledge management / KnowledgeHub | Strong context for approved organizational knowledge; separate the old deployment from new platform claims |
| Electronics quality control / VisionHub | Additional industrial capability; secondary to the main Core Agentic homepage |
| Senior-care story preservation / FamilyHub | Secondary portfolio/customer experience; do not force it into enterprise-agent positioning |
| English assessment / EduAssess | Education portfolio evidence; reconcile the homepage-only record with the customer-story collection |

Prioritize publishable customer material over the largest percentage. Build `/customers` around verified relationships and available stories; the page can still be useful without an inflated metrics band.

Each published story should have a real URL such as `/customers/<approved-slug>` and explain the starting problem, delivered work, systems involved, human responsibilities and result. A numeric result needs its unit, baseline, time period, scope and source. Preserve an approved anonymized description where the customer cannot be named.

Hold aggregate claims such as “50+ clients,” “40–70% efficiency gains,” “99.9% uptime” and universal accuracy improvements out of new promotional copy until their definitions and evidence are available. The clearly labeled illustrative economics worksheet can remain; it is not customer proof.

## 6. Company history and founder story

Rebuild `/company` around a real founder introduction, the original mission, a coherent chronology and the reason Core Agentic is the current focus. Restore the existing Doan Nguyen portrait where appropriate. Retain contextual illustrations as illustrations rather than presenting them as photographs of the team or facilities.

| Source date or event | Migration treatment |
| --- | --- |
| 2016 — learning machine learning | Founder background before the company timeline; do not call this the incorporation date |
| January 2020 — company founded, according to old copy | Reconcile with the 2023 LinkedIn date and the relevant entity/history records |
| August 2020 — VisionHub launch | Retain as an original product milestone once the date and release description are confirmed |
| June 2023 — SupportHub launch | Preserve its place in the move toward language-model applications |
| January 2024 — KnowledgeHub and AI services | Connect knowledge, memory and delivery experience to the current platform direction |
| February 2025 — LegalHub beta | Preserve beta as a historical status; do not imply it is still current or has become generally available |
| 2025 — FamilyHub and expansion | Separate the product event from regional-expansion claims; keep only supported geography and scale statements |
| EduAssess | Add the product milestone if appropriate, using a confirmed date rather than inferring one from a code change |
| Core Agentic | Explain the convergence of knowledge, agents and tools; add a date only when the intended product milestone is established |

Use one structured chronology across all five languages. Translation changes the wording, not the dates or facts. The full history belongs here; the homepage needs only the most relevant bridge.

Do not migrate the unverified people from the unused `LeadershipTeam.tsx`. Other founder-photo files remain catalogued until names, roles and intended use are clear. Replace generic “leading provider” language with specific experience and work that can be described accurately.

## 7. Posts omitted from launch

No repository post archive, article routes or CMS integration were found. Following the user’s clarification to skip posts if none are found, **omit a website post migration from this release**. Do not add an empty Insights index, a new CMS or filler articles. Insights stays out of launch navigation.

The [company LinkedIn page linked by the old footer](https://www.linkedin.com/company/primitiveai) exposes one FamilyHub announcement. Record it as optional portfolio context at its existing source; it does not justify a separate blog workstream. If reused, preserve its authorship and source link. Do not infer an exact publication date from the relative “months ago” label or fabricate a longer article from the announcement.

The seven customer-story candidates are different: they exist in the website source and remain in the customer migration scope. If an actual website article archive is found later, give its useful posts individual destinations and URL mappings at that time.

## 8. Secondary product portfolio

Create `/portfolio` as a concise overview of other Primitive AI products and earlier work. It should support existing visitors and company credibility without presenting six equally important alternatives to Core Agentic on the homepage.

| Product | Recommended treatment |
| --- | --- |
| SupportHub | Preserve support-automation experience and a concise product record. Relevant lessons can support use cases, but its channel, voice and deployment claims do not automatically become Core Agentic features. |
| KnowledgeHub | Preserve the organizational-knowledge story and existing app access after checking the destination. Explain the relationship to the current knowledge direction without asserting that the applications are the same runtime. |
| VisionHub | Keep as industrial AI portfolio work and relevant customer history. Remove it from the main Core Agentic product pitch. |
| LegalHub | Reconcile the old beta status and actual offering before exposing a current sales CTA. Historical copy can remain dated. |
| FamilyHub | Keep off the enterprise homepage. Use a portfolio record and the existing standalone product destination when verified. |
| EduAssess AI | Keep education assessment separate from the Core Agentic pitch. Preserve the standalone product link and relevant history when verified. |

Use compact shared product templates at `/portfolio/<product>`, rather than rebuilding six large sales microsites. Each record identifies what the product does, whether it is available or historical, the relationship to Primitive AI and the correct next action.

“Not in the main menu” means secondary public content. “Archived” means explicitly historical. “Draft” means unpublished content, not merely a route omitted from navigation. Assign these states deliberately. Unknown availability must not be converted into an Active badge.

Preserve working app-entry paths; marketing-route migration must not redirect login pages, customer applications or their APIs. Remove old buttons that point to nonexistent `#pricing` sections unless a real pricing destination is supplied.

## 9. Route migration

The table specifies the proposed end state. Redirects become active only after their destinations are complete. Detailed conditions are in [route-map.csv](migration/route-map.csv).

| Existing route | Proposed destination | Treatment |
| --- | --- | --- |
| `/` | `/` | Replace the current composition with the integrated Core Agentic homepage |
| `/core-agentic` | `/` | Permanent alias; preserve platform anchors |
| `/business-value` | Same | Keep and align with the homepage; no duplicate full worksheet on the home |
| `/use-cases` | Same | Keep the four existing scenario links and distinguish examples from customer deployments |
| `/how-we-work` | Same | Keep; absorb useful legacy service detail |
| `/trust` | Same | Keep; review current platform claims against release evidence |
| `/company` | Same | Rebuild with founder, chronology and current direction |
| `/about` | `/company` | Replace the client-only redirect with a production redirect after content restoration |
| `/services` | `/how-we-work` | Merge useful service detail before completing the redirect |
| `/success` | `/customers` | Migrate verified relationships and stories; replace dead story links |
| `/solutions` | `/portfolio` | Replace the broad suite/services landing page with the secondary portfolio |
| `/solutions/chatbot` | `/portfolio/supporthub` | Rebuild a concise product/experience record, then redirect |
| `/solutions/knowledgehub` | `/portfolio/knowledgehub` | Preserve the knowledge-product context and appropriate app link |
| `/solutions/camera-ai` | `/portfolio/visionhub` | Preserve industrial AI context |
| `/solutions/legalhub` | `/portfolio/legalhub` | Publish an accurate current or historical record before redirecting |
| `/solutions/familyhub` | `/portfolio/familyhub` | Preserve the standalone product path through the record |
| `/solutions/eduassess` | `/portfolio/eduassess` | Preserve the standalone assessment-product path through the record |
| `/contact` | Same | Preserve inquiry intent, existing validation and the approved email destination |
| `/privacy`, `/terms` | Same | Use the new editorial shell; reconcile policy scope, company details and effective dates |
| `/why-choose-us` | `/company#principles` | Repair the old About-page link; this path is referenced but is not a defined current route |
| Existing post URLs | None found in this repository | No post redirects are scheduled for launch; add exact mappings only if URLs are later discovered |
| Unrecognized/removed URL without an equivalent | Helpful not-found response | Do not send every old path to the homepage |

Useful existing homepage links such as `#business-value`, `#applications`, `#approach` and `#story` should remain as aliases or move directly to the relevant destination. Keep all four scenario IDs. A direct scenario link should open the intended example; changing a selection within the page should preserve reading position. Contact query parameters such as `intent=working-session` must survive internal navigation and migration redirects.

For production, use direct server/host permanent redirects rather than relying solely on React navigation. Point merged content to its actual replacement, avoid redirect chains, and return an appropriate error for content with no replacement. These choices follow [Google's redirect guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects) and [site-migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

Canonical-domain choice is separate from the homepage-content change. Recommend `primitive-ai.com` for consistency with the agreed email, subject to the company's chosen domain and hosting control. If the domain changes from `prai.tech`, map host and path directly to the final destination, preserve query parameters, and plan the applicable Search Console move. Keep old redirects available for at least a year, preferably longer, following the [migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). Do not change DNS or external profiles as part of reviewing this proposal.

## 10. Design and content integration

### Shared visual system

Keep the original logo, **#044EFF** primary blue, navy surfaces, light content panels, Inter type and capsule navigation. Rebuild older blocks with this system rather than copying their purple gradients and component spacing.

Use three page types:

| Type | Pages | Reading and motion |
| --- | --- | --- |
| Presentation | Homepage and selected solution detail pages | Native section snapping, restrained entrances, readable responsive diagrams |
| Directory | Customers and portfolio; Insights if later introduced | Normal scrolling, clear category controls, consistent cards and real links |
| Editorial | Full customer stories and legal pages; future articles | Normal scrolling, readable body measure, meaningful headings and restrained motion |

Customer logos keep their own identity inside neutral cards; changing the site theme does not mean recoloring every customer's brand blue. Portraits and authentic project media should carry the company story. Generic photos and generated imagery must not stand in for customer evidence or real product screenshots.

All new templates must use the same responsive header, language behavior, footer, contact action and focus styles. Preserve reduced-motion behavior. Apply the latest landing-page responsive work to the new homepage composition rather than assuming it survives a component swap unchanged.

### Shared content records

Create shared records for organizations, relationships, quotes, cases, milestones and products. Keep IDs, dates, numbers, URLs, source references and publication state separate from translated prose.

At minimum, a migrated record needs its source, destination, content owner, public wording, product attribution, relevant date and publication state. Customer results additionally need measurement context; products need availability and app-link status.

This replaces hardcoded logo arrays and repeated claims across old translation files. Preserve the existing five-language visitor experience while reviewing migrated copy. If a translation is unavailable, present an honest language fallback; do not create pretend localized article URLs or metadata. Decide searchable locale URLs separately if needed, rather than combining another URL migration into this one by accident.

### Implementation areas

| Area | Planned work |
| --- | --- |
| `src/App.tsx` | New homepage composition, customer/portfolio routes and preview aliases; no empty Insights route |
| `src/components/Layout.tsx` | Replace the fixed old/new pathname split with explicit page metadata and page-type behavior; add destination-specific titles and metadata |
| `src/site/Platform.tsx`, `Home.tsx` | Consolidate into one Core Agentic homepage; remove competing public compositions |
| `src/site/Navigation.tsx`, `Footer.tsx`, `content.ts` | Implement the lean hierarchy, secondary links and shared content sources |
| `src/site/styles.css`, `experience.css`, `home-layout.css` | Shared templates, page-specific motion, responsive integration and removal of obsolete legacy rules after migration |
| Older pages/components/translations | Extract useful content into shared records before removing unused rendering code |
| Hosting configuration | Real redirects, direct deep-route responses, correct errors and canonical-host handling; select the adapter for the actual host |
| Search/social output | Route-specific descriptions, canonical URLs, social titles/images and a sitemap containing the intended public destinations |

Preserve the currently working site and historical mockup/review artifacts during implementation. Do not delete old source content before it has a recorded disposition and a recoverable copy.

## 11. Delivery sequence

Build and review the migration in a staging preview, then cut over the public routes together. The phase order is not a proposal to leave the public website half migrated between releases.

| Phase | Work | Reviewable output and completion condition |
| --- | --- | --- |
| 1. Reconcile the inventory | Classify relationships, select publishable quotes/cases, resolve the company date, record the skipped post import, establish product status | Updated inventory with every discovered item retained, merged, secondary, historical or held; named owners for unresolved facts |
| 2. Establish the new front door | Integrate Core Agentic and the strongest homepage content; implement the new navigation and page types | Clickable homepage and navigation preview with working architecture/use-case/contact links |
| 3. Restore company evidence | Build Customers, real story destinations and the fuller Company page | Relevant logos/relationships, correctly attributed quotes and a coherent dated history in the new theme |
| 4. Complete the secondary migration | Build portfolio records, merge service material, restyle legal content; note the optional social announcement without building a blog | No publicly reachable old-layout pages; preserved product access; no empty Insights section |
| 5. Validate the complete site | Recheck facts and language consistency; validate routes, metadata, content states, keyboard use and responsive templates | Reviewed route/content matrices, before/after screenshots and an issue list with launch blockers resolved |
| 6. Launch and monitor | Activate approved production routing and canonical configuration; check destinations and inquiries; retain rollback package | One coherent site, verified live redirects and an immediate launch report; review traffic/errors after launch and during the following month |

The missing website post archive is recorded as skipped by user direction, not a launch blocker. The single discovered social update is optional context; no blog import, new CMS or article production is required for this release.

## 12. Acceptance criteria

- `/` presents Core Agentic as the solution, retains the approved headline and includes relevant company evidence. `/core-agentic` resolves to that same homepage without a duplicate public version.
- Existing customer assets, all three testimonials, all seven case candidates and the original milestones each have a recorded disposition. No valuable material disappears simply because its old page is hidden.
- Published relationships have truthful category labels. Historical product results are not relabeled as Core Agentic results. Numerical claims retain their measurement context.
- Company history separates founder learning from company founding and reconciles the 2020/2023 discrepancy before using a founding year publicly.
- Customer-story cards open real destinations. There are no empty `#` case links, dead pricing links or empty content indexes.
- Every public page uses a new template. Hidden draft material is not exposed through an unlisted but still public old route.
- App links continue to reach the right products. Contact goes to `doannt@primitive-ai.com`, retains the working-session context and accurately describes the current email-draft behavior.
- The new homepage is reviewed across the existing 34-viewport matrix. Each new directory/editorial template is checked at small phone, tablet and desktop sizes, including long titles, translated copy and short landscape screens where relevant.
- Native snapping and animation remain appropriate to presentation pages; customer stories, directories and policies remain comfortable to read and navigate normally.
- Redirects and direct loads are tested on the actual host. Known old URLs reach the intended replacement in one step where possible, fragments and queries work, and missing content has a real not-found response.
- Public metadata and sitemap reflect the final URLs. Any staging indexing restrictions are removed only for intended public destinations.
- Build/type checks and relevant route/content validation pass. The release includes a recoverable source/content snapshot and a rollback plan that accounts for redirect rules as well as page files.

## 13. Decisions for this review

Record your answers in the [decision sheet](website-migration-decisions.md). It separates already given directions, open choices and factual corrections, and includes product, relationship, testimonial, story and history tables.

| Decision | Proposed default |
| --- | --- |
| Core Agentic homepage address | Integrated content at `/`; `/core-agentic` becomes a permanent alias |
| Main navigation | Core Agentic, Use Cases, Customers, Company; contact as the main action. Defer Insights. |
| Other products | Secondary portfolio, with current or historical status stated accurately; no six-product grid on the main homepage |
| First customer evidence | Prioritize the relevant Ymner/TNE agent and support experience; retain RAIS/industrial work as supporting breadth, subject to accurate project attribution |
| Company founding date | Reconcile original 2020 copy with the linked LinkedIn page's 2023 entry; treat 2016 as founder background |
| Post collection | Skip at launch, as requested when no archive is found. The LinkedIn FamilyHub update is optional portfolio context, not a new blog workstream. |
| Canonical domain | Prefer `primitive-ai.com` if that is the company's chosen controlled domain; review domain migration separately from this content decision |

## Source references

- [Business and product foundation](../../prai-core-agentic-opencode-replacement/docs/business/core-agentic-business-foundation.md)
- [Approved website strategy](website-strategy-and-outline.md)
- [Current implementation notes](website-implementation.md)
- [Original About component](../src/legacy/pages/About.tsx), [dated history copy](../src/i18n/locales/en/about.json), [new journey data](../src/features/company/content.ts)
- [Original organization list](../src/components/Partners.tsx), [home testimonials and featured stories](../src/i18n/locales/en/home.json), [success-story collection](../src/i18n/locales/en/success.json)
- [Original case-card behavior](../src/components/SuccessStoryCard.tsx), [current routes](../src/App.tsx), [current shell](../src/components/Layout.tsx)
- [LinkedIn profile linked from the old footer](https://www.linkedin.com/company/primitiveai), inspected for available company metadata and public update content; its year is a conflicting source to reconcile, not a chosen company fact

The route and content CSVs are planning records, not deployed redirect rules or a publication manifest.
