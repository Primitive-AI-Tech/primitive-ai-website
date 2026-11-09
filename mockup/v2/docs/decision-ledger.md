# Approved decisions and V2 design basis

The owner's answers in [the decision sheet](../../../docs/website-migration-decisions.md) supersede the earlier proposal. This ledger translates those answers into the V2 design. Blank item-level fields remain unconfirmed; they are not inferred approvals of old results or publication dates.

| Source | Recorded direction | V2 treatment |
| --- | --- | --- |
| D01 A | Core Agentic at `/` | One canonical home; `/core-agentic` becomes an alias during migration. |
| D02 A | Platform foundation with business narrative | Preserve current visual design; consolidate product, value, economics, process and control into the home. |
| D03 A + B | Add How We Work to the main navigation | Core Agentic, Use Cases, Customers, How We Work, Company. Customers and How We Work link to home sections. |
| D04 B | Merge Business Value, How We Work and Trust into the home | Inline worksheet and control details; no competing detail-page destinations in the V2 design. |
| D05 custom | Customer list belongs on the homepage | Separate customer and partner groups at `/#customers`; no new customer directory or customer-story pages. |
| D06 / product-wide instruction | Tell product stories as Core Agentic configurations | SupportHub → customer operations; KnowledgeHub → organizational knowledge; LegalHub → legal workflows. Show the common knowledge/agent/tool/control foundation. |
| P03, P05, P06 | VisionHub, FamilyHub and EduAssess are extra products | A distinct Other products group on Company; retain appropriate standalone-product access. Never connect them into the Core Agentic configuration rail. |
| D07 custom | Preserve the original history of specialized solutions leading to a unified enterprise platform | Founder → applied AI → conversational work → knowledge/memory → specialized document workflows → Core Agentic. Preserve useful original events and their product attribution. |
| F01 | Company founded in 2023 | Use 2023. Personal learning in 2016 is background. Pre-2023 product dates cannot be presented as company launch dates without explanation. |
| F02 | Only the founder; existing LinkedIn; US + Vietnam contacts | Doan Nguyen portrait, existing LinkedIn, approved contact details below. No fabricated leadership/team profiles. |
| D08 A | primitive-ai.com | Proposed canonical host, subject to later deployment configuration. No DNS change in this work. |
| C01–C07 table-wide instruction | Remove old case stories; replace with company updates/news, including a home section | `/updates` plus home teaser; exclude all seven old anonymous case candidates and their percentages from the V2 design. |

## Customers and partners

**Customers:** Ajinomoto, Nidec, FPT Automotive, VTI Solutions, RAIS Tech, Ymner, TNE.

**Partners:** Intel, Microsoft, Google, Techvico.

**Remove from the new public design:** Qualcomm, Canon, YAZAKI, HIK Robotics, Cuulong, Ductoan, EIU/EIU2, NamVuong. PRAI remains company branding.

Use existing approved artwork for the brands that have it. Ymner and TNE can be typeset as names. Do not imply that every listed customer has deployed Core Agentic. The source images may use typeset placeholders for customer marks; the original artwork and this roster govern implementation.

## Contact details

- Email: **doannt@primitive-ai.com**.
- Vietnam phone: **+84 338 710 391**.
- United States phone: **+1 917 508 5261** (formatting of the supplied +19175085261).
- United States: **2261 Market Street STE 22919, San Francisco, CA 94114**, from the original contact copy.
- Vietnam: **No 04, 98/17 Lane, Tan Trieu, Thanh Liet, Hanoi, Vietnam**, as supplied by the owner.
- Company founded: **2023**.
- Other people: **none**.

## Updates clarify the earlier instruction

The earlier chat permitted skipping a missing post archive. The later edited decision explicitly requests an Updates destination and homepage section instead of the case-story collection. Therefore V2 includes those surfaces, while no missing archive is invented or imported. Editorial titles on boards are design drafts; no new articles or publication dates have been approved or published. The one discovered FamilyHub LinkedIn update is source material, not a complete archive.

## Remaining content facts

Exact product milestone dates other than company founding, current availability of specialist products, final editorial copy and individual testimonial/metric approvals remain separate content checks. Preserve their source records without inventing answers. This does not reopen the structural decisions above.

## Scope boundary

The code refactor preserves the current rendered website and routes. V2 migration behavior, homepage replacement, new update pages and new approved contact/customer content are specified by these mockups; they are not implemented into the running site until the design review.
