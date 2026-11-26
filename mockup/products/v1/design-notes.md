# Products page mockup · Design notes

## Story sequence

The page introduces a broad platform first, shows the range of work it can support, then distinguishes focused products and custom development. It follows the homepage's business-first framing and keeps the product page as one continuous story.

1. **Navigation** — the familiar floating capsule carries the original logo, primary routes, language selector and one contact action. Products is the active route.
2. **Page proposition** — “One platform. Configured for your work.” leads with the breadth and flexibility of Core Agentic. The supporting line explains that agents, approved knowledge and business tools connect around team workflows.
3. **Core Agentic platform panel** — a single spacious surface pairs a plain-language product description and CTA with a large system architecture visual. The “Application examples” row gives visitors recognizable starting points: Sales & support, Knowledge, Operations, Finance, People and Documents.
4. **Specialist products** — three equal image-led cards present VisionHub, FamilyHub and EduAssess AI through a human or product context and a one-sentence explanation. Each image is marked as concept artwork. The live card CTA opens the shared specialist-products inquiry; there are no individual product subpages.
5. **Custom AI invitation** — a dark, high-contrast band makes custom development a clear path for a business whose needs do not fit a focused product.
6. **Footer** — repeats primary navigation and the published contact email without adding another competing pitch.

## System architecture visual

The latest standalone candidate combines the first reference's bright Liquid Glass treatment with the second reference's labels and component grouping. The full-page V1 board still contains the previous architecture image; this new candidate remains separate for review.

Its hierarchy follows the documented Core Agentic boundaries:

- The **Core Agentic enclosure** owns identity, authority, durable execution, files and observable history.
- The **API** is the request entrance for authentication, validation and admission.
- The **Worker** runs leased agent, tool and workflow work. The OpenCode agent loop and structured workflow engine are shown as compute engines inside this area.
- The **Core Executor** is the governed boundary between computation and capability effects. It applies access checks, selected dependencies, input validation, approval, cancellation, idempotency and bounded results.
- **Identity & policy** and **Durable runs · files · history** are foundational platform services.
- The **Customer package** stays outside the Core Agentic boundary and supplies customer-owned instructions, skills, tools and domain contracts through the runtime contract.
- **Systems of record** stay outside the platform. Their only depicted route to execution passes through the Core Executor and its connectors.

The visual uses a transparent light glass shell to distinguish the platform boundary, with satin internal surfaces, restrained blue for governed flow and labels on each area. The API enters the Worker before work reaches its compute modules; both modules use the Governed executor. Identity & policy governs that executor. The Execution ledger is a supporting service, not the route to company data. Glass is selective so it adds depth without turning every component into a shiny tile. This is a conceptual architecture picture; it does not claim to show process deployment, service count or infrastructure topology.

## Visual and content notes

- The board retains the V4 palette and page rhythm: #044EFF accents, midnight navy, pale blue and white reading surfaces.
- The platform panel is the page's visual anchor; product cards are secondary and equal in weight.
- The six application chips show possible work areas, not six separate products or a promise that every capability is enabled by default.
- Specialist product images are editorial concepts. Replace them with approved real product or customer imagery only when available. The live section reuses these image files from the mockup package.
- The custom AI band gives services a distinct place without presenting them as another platform module.
- The board is a single tall image for visual review. It is not an implemented responsive page; the composition should be reflowed and all copy rebuilt as live text before implementation.
