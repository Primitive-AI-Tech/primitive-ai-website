# Products page mockup · Artwork provenance

## Final image board

- [Full-page mockup](images/products-page-v1.png)
- Generated and edited with the built-in Image Generation tool.
- The page board is the image-first visual deliverable. No `/products` production route or HTML implementation was changed.
- The page composition, copy, product concept imagery, custom AI banner, navigation and footer were preserved while the Core Agentic architecture visual was replaced.
- Final page edit prompt: [`prompts/products-page-v1-architecture-edit.txt`](prompts/products-page-v1-architecture-edit.txt).

## Core Agentic architecture

- [Standalone architecture visual](images/core-agentic-architecture-v2.png)
- Generated with the built-in Image Generation tool using the system boundaries and flow documented in the Core Agentic architecture source.
- The former illustration was a glossy stack of generic layers. This version shows the API-to-Worker path, the two compute engines, the governed executor, platform foundations, customer-owned package boundary and external systems of record.
- Final architecture prompt: [`prompts/core-agentic-system-architecture-v2.txt`](prompts/core-agentic-system-architecture-v2.txt).
- Architecture reference: `prai-core-agentic-opencode-replacement/docs/system-architecture.md` and `docs/business/core-agentic-business-foundation.md` in the sibling repository.

## Hybrid architecture candidate · V3

- [Hybrid architecture image](images/core-agentic-architecture-v3.png)
- Generated with the built-in Image Generation tool as a standalone review candidate. The first provided reference supplied the light Liquid Glass styling; the second supplied the component labels and grouping.
- The illustration routes API work into Worker, branches to Agent runtime and Structured workflow engine, then passes through Governed executor. Identity & policy supports that boundary, Execution ledger remains separate, and Systems of record connects only to Governed executor.
- The full-page V1 image has not yet been updated with this candidate.
- Generation and targeted correction prompts: [`prompts/core-agentic-system-architecture-v3.txt`](prompts/core-agentic-system-architecture-v3.txt).

## Specialist product concepts

The three card photographs are concept artwork created for this mockup, not real deployments or product screenshots. Original concept assets and their generation prompts are retained in `assets/` and [`prompts/focused-product-imagery.txt`](prompts/focused-product-imagery.txt). The live `/products` specialist cards reuse these files from `public/images/products/`.
