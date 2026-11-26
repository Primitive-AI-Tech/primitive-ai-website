# Primitive AI website mockup · V5

[Open the Vietnamese homepage](website-review.html). It uses the site's current hero and Earth sunrise invitation around a website adaptation of the Vietnamese product presentation. The homepage introduces scattered data and cross-system handoffs, then explains the product and business value before covering roles, integration, controls, delivery and the proposed pricing model. Examples and measured test runs are available on Products.

- Homepage boards: [desktop](images/homepage-vi-desktop.webp) and [mobile](images/homepage-vi-mobile.webp).
- [Products preview](products.html) opens with a component-based architecture diagram styled like the homepage hero. It continues through the applications carousel, agent configuration, integration and specialist products. [Desktop board](images/products-vi-desktop.webp) · [mobile board](images/products-vi-mobile.webp).
- [Services preview](services.html) explains when to configure Core Agentic or commission custom AI, what each service can deliver, and how a project progresses. [Desktop board](images/services-vi-desktop.webp) · [mobile board](images/services-vi-mobile.webp) · [Services handoff](services-handoff.md).
- [About preview](about.html) introduces Primitive AI and its founder, traces the company’s journey from its 2023 founding through VisionHub to Core Agentic, and presents its working principles. [Desktop board](images/about-vi-desktop.webp) · [mobile board](images/about-vi-mobile.webp).
- [Updates preview](update.html) opens with the Hanoi Codex Community Hackathon and links to the official event and company LinkedIn. [Desktop board](images/update-vi-desktop.webp) · [mobile board](images/update-vi-mobile.webp).
- [Vietnamese slide reference](slides-vi.html) and [English slide reference](index.html) show the complete original presentations in order.
- [Homepage handoff](homepage-handoff.md), [Products handoff](products-handoff.md), [source review](source-review.md) and [artwork provenance](provenance.md) document the sections and source assets.

The five page previews mount the capsule navigation from the current React app, including the mobile drawer and language selector. All five heroes use the homepage’s midnight navy backdrop, blue waves, white and brand-blue headlines, and light description text. Native proximity snapping brings a chapter into view, while taller chapters scroll with the document. On Products, each application and test run has a direct link. The homepage integration and approval examples link to product details.

## Refresh the local previews

Run these commands from the website repository after updating the source they read.

```sh
node mockup/v5/build-live-hero.mjs
python3 mockup/v5/build-deck-website.py
```

The first command bundles the current React header, homepage hero, shared curves and closing invitation for the local review. The navigation retains its five-language selector. The mockup chapters use Vietnamese. The second command assembles Products from `products-layout.html`, `products-sections.html` and `products-technical.html`. Edit the relevant file before regenerating `products.html`. Services, About and Updates use their own HTML and CSS files.

## Presentation sources

- [Vietnamese PowerPoint](<../../../prai-core-agentic-opencode-replacement/output/core-agentic-customer-introduction/Core Agentic - Giới thiệu sản phẩm.pptx>)
- [Matching Vietnamese PDF export](<../../../prai-core-agentic-opencode-replacement/output/primitive-ai-productivity-final/Core Agentic - Giới thiệu sản phẩm.pdf>)
- [English PowerPoint](<../../../prai-core-agentic-opencode-replacement/output/core-agentic-customer-introduction/Core Agentic - Customer Presentation.pptx>)
