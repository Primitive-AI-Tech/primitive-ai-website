# Artwork provenance

## Website artwork from the presentation

The [Vietnamese homepage](website-review.html) uses the website’s current hero source and its shared invitation component. The homepage and Products preview pair the presentation media with responsive HTML for the explanatory sections and interactive examples.

| Website asset | Source | Placement |
| --- | --- | --- |
| [Home hero](../../src/pages/Index.tsx) | Website section including FlowBackdrop, HeroParticleField and AgentCanvas | Opening |
| [deck-trace.webp](assets/deck-trace.webp) | VI slide 3, PPTX media `image14.png` | Sample execution trail |
| [deck-valves.webp](assets/deck-valves.webp) | Manufacturing photograph in the presentations | Products · order planning example |
| [deck-warehouse.webp](assets/deck-warehouse.webp) | Warehouse photograph in the presentations | Products · inventory reconciliation example |
| [receivables.webp](assets/receivables.webp) | Finance photograph in the presentations | Products · receivables reporting example |
| [deck-pilot.webp](assets/deck-pilot.webp) | VI slide 16 photograph | Homepage delivery and Products · Your use case |
| [services-workshop.webp](assets/services-workshop.webp) | Built-in ImageGen workshop scene ([prompt](services-handoff.md#hero-image)) | Services hero |
| [Founder portrait](../../public/founders/doannt-body.png) and [VisionHub](../../public/vision-hub.png) | Current About page artwork | About hero and journey |
| [Hanoi Hackathon photo](assets/hackathon-hanoi-2026.webp) | Original event photo `DSC04425.JPG`, with responsive WebP copies from the [organizer's photo archive](../../../doanntr-website/docs/hackathon-photo-sources.md) | Updates hero |
| [deck-studio.webp](assets/deck-studio.webp) | VI slide 5, PPTX media `image27.png` | Products · Workflow Studio screenshot |
| [Slide 14](slides/vi/slide-14.png) | Original Vietnamese slide render, cropped to the approval capture | Controls and approval |
| [Core Agentic architecture diagram](products-layout.html) | HTML and CSS cards styled after the homepage hero’s [AgentCanvas](../../src/components/diagrams/AgentCanvas.tsx), with components and connections based on the [3D architecture reference](../../public/images/products/core-agentic-system-architecture-v3.png) | Products hero |
| [VisionHub](../../public/images/products/visionhub-concept.jpg), [FamilyHub](../../public/images/products/familyhub-concept.jpg), [EduAssess AI](../../public/images/products/eduassess-concept.jpg) | Concept images from the current Products page | Specialist product cards |
| `assets/deck-icons/` | Icons extracted from the Vietnamese PowerPoint | Friction, workflow, applications, roles, controls, delivery and pricing |
| `public/prai-logo.png` and `public/images/partners/` | Current Primitive AI website artwork | Navigation, customer logos and footer |
| [Ymner.png](../../public/images/partners/Ymner.png) | Ymner site wordmark for light backgrounds, from [oscar-ymner](../../../oscar-ymner/client/public/assets/img/ymner_black_RGB.png) | Customer logos |
| [MinhVietTrans.png](../../public/images/partners/MinhVietTrans.png) | [Official Minh Việt Trans header logo](https://minhviettrans.com/images/banner/logo.png) | Customer logos |
| [Shared invitation](../../src/components/marketing/InvitationCTA.tsx) | Current website section and NASA Earth sunrise photograph | Contact CTA |

The source image notes record how the deck illustrations were made. [Deck asset provenance](../../../prai-core-agentic-opencode-replacement/output/core-agentic-customer-introduction/visual-assets/image-provenance.md)

## Products and original slides

The images in `slides/en/` and `slides/vi/` are 1440 × 810 DeckCraft renders of the original presentations. The [English reference](index.html) and [Vietnamese reference](slides-vi.html) present the original sequence. [Products](products.html) adapts slides 4–10 into its interactive examples and test results, and slides 11–12 into its configuration and integration chapters. The Products footer links to the Vietnamese reference, and the homepage approval example links to its source slide. Interface controls shown inside a capture are part of the example.

## Earlier website imagery

These images were generated with the built-in Image Generation tool for an earlier web concept. The original PNGs remain in the generator’s output folder and their WebP copies remain in this package. [Image prompts](prompts/editorial-art.txt)

| File | Subject | Original PNG |
| --- | --- | --- |
| [manual-handoffs.webp](assets/manual-handoffs.webp) | Manual work between business systems | `exec-a3f91058-2941-4963-930b-a21c992657da.png` |
| [order-planning.webp](assets/order-planning.webp) | Materials planning on the production floor | `exec-112f3fa0-637d-4ada-9620-ec89f9536fcd.png` |
| [stocktake.webp](assets/stocktake.webp) | Warehouse stock count | `exec-d0de0eff-be16-4ecc-8885-3af333a222dd.png` |

The Earth sunrise photograph used in the shared CTA comes from NASA’s Expedition 70. [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/sunrise-from-the-station-152259/)
