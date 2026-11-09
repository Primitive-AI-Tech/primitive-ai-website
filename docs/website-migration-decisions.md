# Primitive AI website migration decisions

**Review date:** 8 November 2026  
**Status:** Owner decisions preserved; latest chat directions recorded in Part E and the [V3 decision ledger](../mockup/v3/docs/decision-ledger.md). Earlier recommendations below are historical where superseded.

Use this document to leave your decisions. The [full migration plan](website-migration-plan.md) contains the reasoning and audit. This decision sheet is the review record; the content and route CSVs remain supporting inventories.

> **Latest review:** Start with [Part E](#part-e-v3-chat-directions--8-november-2026) and the [V3 gallery](../mockup/v3/index.html). Earlier answers remain below as the original decision record.

## How to review

1. Start with the eight decisions in Part B. Choose **A**, **B** or **C**, or write a different instruction.
2. Fill the content tables in Part C where you want to choose individual items or correct facts. You can give one instruction for an entire table and list only exceptions.
3. Edit the blank fields here, or reply in chat using the IDs. For example: **“D01 A; D03 B; keep all products in the portfolio except P04, which should be hidden.”**

Recommendations are proposals, not recorded approvals. An empty field means undecided. You can also write **Defer** and state what should happen meanwhile. Accepting a recommendation does not supply a missing founding date, product status or measurement source.

## Part A Directions already given

These do not need approval again. Add a correction only if you want to change them.

| Direction | Recorded instruction |
| --- | --- |
| Main solution | Core Agentic becomes the homepage content and focus. The exact public address is D01. |
| Headline | Keep “Put AI to work across your organization.” |
| Brand | Keep the original company logo and #044EFF as the primary blue. |
| Existing company content | Bring customer relationships, company history and useful older content into the new experience. |
| Experience | Keep responsive layouts, animation and native snapping on presentation sections. |
| Contact | Use doannt@primitive-ai.com. |
| Missing posts | Skip post migration if no archive is found. No empty Insights section or new CMS at launch. |
| Current task | Prepare the migration for review; no website migration or deployment is performed by this document. |

**Changes to any direction above:** ____

## Part B Main decisions

The table is an overview. Record each choice once in its numbered section below.

| ID | Subject | Recommendation |
| --- | --- | --- |
| D01 | Homepage address | A — Core Agentic at `/` |
| D02 | Homepage composition | A — platform foundation with selected business and customer material |
| D03 | Main navigation | A — four main items |
| D04 | Supporting pages | A — retain as contextual detail pages |
| D05 | Customer destination | A — dedicated `/customers` |
| D06 | Other products | A — secondary `/portfolio` |
| D07 | Company history structure | A — founder introduction plus dated company chronology |
| D08 | Public domain | A — primitive-ai.com, subject to company control |

### D01 Homepage address

- **A — Recommended:** Put Core Agentic at `/`. Redirect `/core-agentic` to `/`, retaining its useful section links. The logo and homepage navigation lead to `/`.
- **B:** Keep `/core-agentic` as the literal homepage address. Redirect `/` there instead.
- **C:** Another address or instruction.

Both A and B make Core Agentic the homepage. Choose the address visitors should see; publish one primary version.

**Your choice:** A
**Your notes:** ____

### D02 Homepage composition

- **A — Recommended:** Use the current platform page as the foundation, keeping the approved headline and selected business-value, use-case, delivery and customer-evidence blocks. Remove duplication from the separate current homepage.
- **B:** Promote the current `/core-agentic` page with minimal content changes. Put most business narrative and customer evidence on supporting pages.
- **C:** A custom mix; specify the sections below.

Proposed sequence for A:

**Hero → selected customer names → operational problem → productivity/economics → use cases → customer evidence → working process → orchestration → knowledge/control → brief company story → contact.**

Compact strips do not become forced full-screen sections. Detailed chronology stays on Company; the full calculator stays on Business Value.

**Your choice:** A
**Sections to add, remove or reorder:** ____

### D03 Main navigation

- **A — Recommended:** Core Agentic · Use Cases · Customers · Company, plus language and **Talk to our team**.
- **B:** Also make **How We Work** a main navigation item.
- **C:** Specify your own navigation order.

Insights remains absent at launch because the website has no post archive to migrate. Other products stay secondary unless D06 changes that placement.

**Your choice:** A + B

**Your preferred labels or order:** ____

### D04 Business Value, How We Work and Trust

- **A — Recommended:** Keep `/business-value`, `/how-we-work` and `/trust`, with links from the relevant homepage sections and footer.
- **B:** Merge their content into the homepage and retire the separate pages once their useful content is preserved.
- **C:** Decide per page below.

| Page | Recommended treatment | Your override, if any |
| --- | --- | --- |
| Business Value | Retain the interactive worksheet and detailed economics | ____ |
| How We Work | Retain the six-stage approach; merge useful older service detail | ____ |
| Trust | Retain a detailed explanation of boundaries, approvals and visibility | ____ |

**Your choice:** B

**Your notes:** ____

### D05 Customer destination

- **A — Recommended:** Create `/customers` for correctly labeled relationships, attributed testimonials and substantial stories. Use selected material on the homepage.
- **B:** Put the complete customer section inside `/company`; do not create a separate directory.
- **C:** Another structure.

Older VisionHub, SupportHub or custom-services engagements keep their original attribution. They are not automatically Core Agentic deployments. The item-level choices are in L01–L19, T01–T03 and C01–C07 below.

**Your choice:** Migrate customer list as part of Homepage

**Preferred public page name — Customers, Our Work, Experience, or another label:** ____  
**Your notes:** ____

### D06 Other products

- **A — Recommended:** Create a secondary `/portfolio` with compact records for the six other products. Keep it out of the main homepage product pitch and main navigation.
- **B:** Put a compact portfolio section inside Company instead of a separate index.
- **C:** Hide the older product marketing pages from the new public site; preserve useful company history and working standalone app access.

Choose individual exceptions and availability in P01–P06. Hiding a marketing page does not mean disabling its customer application.

**Your choice:** I want to tweak the product list as the direfent part of Core Agentic (how we customize it for different usecase), so probbably you need to think deep on how to tell good stories

**Preferred portfolio label, if different:** ____  
**Your notes:** ____

### D07 Company history structure

- **A — Recommended:** A founder introduction and authentic portrait, followed by a dated company/product chronology and the reason Core Agentic is the current focus.
- **B:** A shorter company chronology on the main Company page, with the detailed history in a separate history section/page.
- **C:** Another storytelling structure.

Preserve relevant history under either A or B. Separate personal learning in 2016 from company founding. Record the correct founding year in F01 and event corrections in H01–H09.

**Your choice:** Preserve the original version off company history, from how we develope different AI solution, to build Core Agentic as an unified solution for enteprises  
**Your notes:** ____

**Implementation refinement (2026-11-09):** Omit the 2016 personal-learning milestone from the public journey. Show the company and product history as a connected vertical path instead of a grid of cards; use 2023 as the company founding milestone.

### D08 Public domain

- **A — Recommended:** Use `primitive-ai.com` as the main public domain if it is the company's chosen controlled domain, consistent with the agreed contact email.
- **B:** Keep `prai.tech` as the main public domain.
- **C:** Defer the domain move; keep the current production host while migrating content.

This is a routing decision for the later migration. It does not authorize a DNS change or deployment during this review.

**Your choice:** A  
**Domain/hosting context or preferred hostname:** ____

## Part C Content choices and factual corrections

You do not need to decide every row before reviewing the main structure. Use a table-wide instruction where appropriate. Keep facts separate from placement decisions: “put this in the portfolio” does not establish whether the product is active.

### F01 Company founding year

The old About copy says **2020**; the LinkedIn page linked by the old footer says **2023**. The newer founder narrative starts with learning in **2016**. The [full plan](website-migration-plan.md#5-approved-evidence-and-company-facts) records the source discrepancy.

**Founding year to show publicly:** founed in 2023  
**Does another date refer to incorporation, an earlier business or the start of operations?** ____  
**Preferred wording for that distinction:** ____

### F02 Public company details

Email is already fixed as **doannt@primitive-ai.com**. Older sources contain different phone values; provide the details you want shown, or explicitly write **Omit**.

**Public phone:** _+84 338 710 391 / + 19175085261_  
**Public address/location:** US address originally in the old page and No 04, 98/17 Lane, Tan Trieu, Thanh Liet, Hanoi, Vietnam  
**Company LinkedIn URL, if different from the existing linked account:** original  
**Other people and roles to show, if any:** no one

### P01–P06 Product placement and availability

**Placement choices:** Portfolio · Company history · External link only · Hide · Other.  
**Availability choices:** Active · Beta · Historical · Unknown. Confirm from current business reality; do not infer from the old page.

**Instruction for all products, with exceptions if needed:** as I mentioned before, tweak the poducts as usecases of Core Agentic

| ID | Product | Recommendation | Your placement | Actual availability | Your notes |
| --- | --- | --- | --- | --- | --- |
| P01 | SupportHub | Secondary portfolio; keep support-workflow experience | ____ | ____ | ____ |
| P02 | KnowledgeHub | Secondary portfolio; preserve the correct standalone app link | ____ | ____ | ____ |
| P03 | VisionHub | Secondary industrial AI portfolio and relevant customer history | extra product, not part of Core Agentic ecosystem | ____ | ____ |
| P04 | LegalHub | Secondary record after current/historical status is clear; old copy says beta | ____ | ____ | ____ |
| P05 | FamilyHub | Secondary portfolio or standalone-product link; off the enterprise homepage | extra product, not part of Core Agentic ecosystem | ____ | ____ |
| P06 | EduAssess AI | Secondary education portfolio or standalone-product link | extra product, not part of Core Agentic ecosystem | ____ | ____ |

### L01–L19 Relationship labels and logo placement

**Relationship choices:** Customer · Delivery partner · Technology ecosystem · Institution · Historical relationship · Unclear.  
**Display choices:** Homepage + directory · Directory only · Hide. Use the dedicated directory or Company section chosen in D05.

The list contains existing organization names and unclassified asset labels, not a verified customer count. PRAI's own logo stays company branding. EIU's two artwork files appear as one review row. Ymner and TNE can appear as names without invented logos.

**Instruction for all entries, with exceptions if needed:** ____

| ID | Existing name or asset label | Existing artwork | Actual relationship | Your display choice | Corrections or notes |
| --- | --- | --- | --- | --- | --- |
| L01 | Qualcomm | Qualcomm.png | remove | ____ | ____ |
| L02 | Intel | Intel.png | partner | ____ | ____ |
| L03 | Microsoft | Microsoft.png | partner | ____ | ____ |
| L04 | Google | Google.png | partner | ____ | ____ |
| L05 | Canon | Canon.png | remove | ____ | ____ |
| L06 | Ajinomoto | Ajinomoto.png | customer | ____ | ____ |
| L07 | YAZAKI | Yazaki.png | remove | ____ | ____ |
| L08 | Nidec | Nidec.png | customer | ____ | ____ |
| L09 | FPT Automotive | FA.png | customer | ____ | ____ |
| L10 | HIK Robotics | HIK.png | remove | ____ | ____ |
| L11 | VTI Solutions | vti-solutions.png | customer | ____ | ____ |
| L12 | RAIS Tech | RAIS.png | customer | ____ | ____ |
| L13 | Cuulong — confirm public name | Cuulong.png | remove | ____ | ____ |
| L14 | Ductoan — confirm public name | Ductoan.png | remove | ____ | ____ |
| L15 | EIU — reconcile two artwork variants | EIU.png / EIU2.png | remove | ____ | ____ |
| L16 | NamVuong — confirm public name | NamVuong.png | remove | ____ | ____ |
| L17 | Techvico — confirm public name | Techvico.png | partner | ____ | ____ |
| L18 | Ymner — named in testimonial | No local logo file | customer | ____ | ____ |
| L19 | TNE — named in testimonial | No local logo file | customer | ____ | ____ |

### T01–T03 Testimonials

**Decision choices:** Homepage + Customers · Customers only · Hold for correction · Omit. Use the equivalent Company placement if D05 selects B. These are the existing quotes; edit or correct them in the fields rather than treating a placement choice as confirmation of a numerical claim.

### T01 Ymner

**Existing attribution:** Oscar P. Ridell, CEO, Ymner.

> Primitive AI have helped us with AI Agent Development and deployment with high quality and fast speed. We are very satisfied with their service.

**Recommended placement:** Homepage + Customers; describe the AI-agent delivery engagement accurately.

**Your decision:** ____  
**Attribution or wording corrections:** ____  
**Your notes:** ____

### T02 TNE

**Existing attribution:** Duyen Nguyen, CTO, TNE.

> Before, our 10 employee team could only serve 5% of our customers' support tickets. Now, we can serve all of them instantly 24/7, with high accuracy and satisfaction.

**Recommended placement:** Customers; a homepage quote is possible after its ticket-volume comparison is clear.

**Your decision:** ____  
**Attribution or wording corrections:** ____  
**Your notes:** ____

### T03 RAIS Tech

**Existing attribution:** Kiem Nguyen, General Manager, RAIS Tech.

> The Camera AI Platform has significantly improved our workplace safety. We've seen a 40% reduction in incidents since implementation.

**Recommended placement:** Customers + industrial experience; keep the Camera AI / VisionHub context.

**Your decision:** ____  
**Attribution or wording corrections:** ____  
**Your notes:** ____

### C01–C07 Customer story candidates

**Decision choices:** Publish description · Publish with supported metrics · Keep draft · Omit. “Publish description” preserves the work without using an unconfirmed percentage. A fuller story needs the actual project context; do not assign an anonymous case to a named customer by guessing.

**Instruction for all stories, with exceptions if needed:** Remove this, replace with a place for all updates (posts/news, etc) from us.Probably we also need a section for updates in our homepage

| ID | Existing story | Existing headline claim to review | Your decision | Client/project facts, evidence or corrections |
| --- | --- | --- | --- | --- |
| C01 | Transforming Workplace Safety in Manufacturing | 40% Reduction in workplace incidents | ____ | ____ |
| C02 | Revolutionizing Customer Support in FinTech | 30% Increase in customer satisfaction | ____ | ____ |
| C03 | Accelerating Legal Operations at Scale | 60% Faster document processing | ____ | ____ |
| C04 | Enterprise Knowledge Management Transformation | 70% Reduction in knowledge search time | ____ | ____ |
| C05 | AI-Powered Quality Control in Electronics | 99.2% Defect detection accuracy | ____ | ____ |
| C06 | Family Story Preservation for a National Foundation | 92% Family satisfaction score | ____ | ____ |
| C07 | Transforming English Assessment in Education | 85% Reduction in grading time | ____ | ____ |

### H01–H09 History and dates

**Decision choices:** Confirm · Correct · Include without exact date · Omit. A date printed in the old copy is a source to review, not a newly confirmed fact.

| ID | Event | Date in existing material | Your decision | Correct date, wording or notes |
| --- | --- | --- | --- | --- |
| H01 | Founder learning machine learning | 2016; newer founder narrative | ____ | ____ |
| H02 | Company founded | 2020 versus 2023; resolve in F01 | ____ | ____ |
| H03 | VisionHub first launch | August 2020 | ____ | ____ |
| H04 | SupportHub launch | June 2023 | ____ | ____ |
| H05 | KnowledgeHub and AI services | January 2024 | ____ | ____ |
| H06 | LegalHub beta | February 2025 | ____ | ____ |
| H07 | FamilyHub and company expansion | 2025; expansion scope also needs a factual description | ____ | ____ |
| H08 | EduAssess milestone | No confirmed date in the reviewed chronology | ____ | ____ |
| H09 | Core Agentic milestone | No confirmed launch date in the reviewed chronology | ____ | ____ |

## Part D Implementation defaults and exceptions

The following are the proposed implementation defaults from the plan. Record exceptions; you do not need to approve every individual link or routine implementation choice.

| Existing content or route | Proposed treatment | Your exception, if any |
| --- | --- | --- |
| Current separate homepage | Consolidate with Core Agentic under D01/D02; retire the competing composition | ____ |
| `/about` | Restore the history/founder material, then send visitors to `/company` | ____ |
| `/services` | Merge useful capabilities into How We Work before retiring the older page | ____ |
| `/success` | Move to the customer destination chosen in D05; replace dead story links | ____ |
| `/solutions` and six product pages | Follow D06 and individual P01–P06 choices | ____ |
| `/privacy`, `/terms` | Keep, use the new editorial design, reconcile actual scope and company details | ____ |
| Existing section/scenario links | Preserve meaningful deep links and inquiry context | ____ |
| Search and old URLs | Map to relevant replacements; retain actual not-found behavior where there is no equivalent | ____ |
| Translation | Preserve the five-language experience with shared factual records and honest fallbacks | ____ |
| Missing posts | Skip; no Insights index, article import or CMS work at launch | ____ |
| Visual treatment | New blue theme throughout retained public pages; original customer identities preserved | ____ |
| Reading and motion | Snap presentation chapters; use normal reading scroll for directories, stories and policies | ____ |

Detailed supporting records: [content inventory](migration/content-inventory.csv) · [route and link map](migration/route-map.csv).

## Part E Review handoff

**Overall review status:** ____  
Use **Reviewing**, **Ready with decisions above**, or **Revise and return for review**.

**Priority changes or additional instructions:** ____  
**Items to defer and their interim treatment:** ____

For a quick chat reply, use this optional format:

```text
Main decisions: D01 ..., D02 ..., D03 ..., D04 ..., D05 ..., D06 ..., D07 ..., D08 ...
Founding year and company details: F01 ..., F02 ...
Products: [one instruction for all, then Pxx exceptions]
Relationships: [one instruction for all, then Lxx exceptions]
Testimonials: T01 ..., T02 ..., T03 ...
Stories and history: [one instruction for each table, then Cxx/Hxx exceptions]
Other instructions: ...
```

New choices remain blank until you enter them here or provide them in chat. The already given directions in Part A remain in effect.


## Part E V3 chat directions — 8 November 2026

This addendum records the latest chat feedback without overwriting the owner's earlier answers. It supersedes conflicting D03 navigation and V2 service/history interpretations.

| ID | Recorded owner direction | V3 treatment |
| --- | --- | --- |
| V3-01 | “One platform. Configured for your work.” is good; SupportHub, KnowledgeHub and LegalHub are only use cases. Extend beyond those three. | Broad examples across six work areas plus Your workflow; the three names remain contextual lineage, not fixed pillars. |
| V3-02 | Real logo images in the real website; text is acceptable in mockups. Add NEU as a customer. | Eight customers, four partners; authentic asset contract and official NEU references. Ymner/TNE logo artwork still missing. |
| V3-03 | Remove “Applied AI foundations”; prefer the original company path over the simplified version. | Restore the fuller founder/product-development narrative and named milestones. Company founding stays 2023. |
| V3-04 | Topbar should treat Core Agentic, use cases, customers and how we work as the homepage, not separate primary destinations. `/`, `/about`, `/update`. | Page-level Home, Products, Services, About, Updates; platform story remains integrated at `/`. |
| V3-05 | Consider `/product-service` or separate Products and Services pages. Restore Custom AI Development from the old page. | Recommended split `/products` and `/services`; implemented locally after the follow-up instruction to implement V3. `/products` introduces the platform and specialist products; `/services` restores Custom AI Development. |

**Review package:** [V3 gallery](../mockup/v3/index.html), [revised plan](website-migration-plan.md), [V3 notes](../mockup/v3/docs/review-notes.md).

**Your decision on separate `/products` + `/services`:** ____  
**Changes to the new navigation:** ____  
**Other V3 feedback:** ____

### Implementation follow-up — 9 November 2026

The subsequent instruction to implement the reviewed V3 direction authorizes the recommended `/products` + `/services` split locally. `/products` introduces Core Agentic and lists the separate specialist products; `/services` restores Custom AI Development. This records implementation scope, not production deployment approval. Host-level redirects and release timing remain open.
