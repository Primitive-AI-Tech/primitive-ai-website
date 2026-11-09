# V3 sources and provenance

## Design inheritance

V3 uses the current uncommitted blue/navy implementation and selected V2 images as visual references. It does not restart from the older purple website. `references/current-home-desktop.jpg` and `current-home-phone.jpg` preserve current implementation captures. Original identity inputs are copied from `public/prai-logo.png` and `public/founders/doannt-body.png`. Production must use those authentic originals directly.

Boards 01/03/04/05/06/07 extend the design with the new content structure. Boards 02 and 08 are targeted edits to existing V2 boards, preserving their main composition while updating navigation and inquiry context. The complete initial instructions and any targeted correction prompts are retained in `prompts`. Selected image metadata and hashes are recorded in `manifest.json`.

## Content sources

- Latest owner feedback: broad applications, NEU, real logos in production, fuller company journey, page-level navigation, `/about`, `/update`, and restored Custom AI Development.
- `docs/website-migration-decisions.md`: homepage, merged content, customer/partner classification, independent products, founding year, contacts and excluded case stories.
- `src/features/company/content.ts`: original founder learning, practical vision work, SupportHub response quality, KnowledgeHub/memory and convergence into Core Agentic.
- `src/i18n/locales/en/about.json`: fuller named milestones and original company values. The 2020 founding date and stale/unsupported claims are explicitly superseded, not revived.
- `docs/website-strategy-and-outline.md`: founder motivation, FDI/Vietnam context and the development path into enterprise work.
- `src/i18n/locales/en/services.json` and `src/legacy/pages/Services.tsx`: six real service categories and Discovery/Strategy/Build/Deploy/Optimize process.
- Existing approved corporate artwork under `public/images/partners`: authentic source images, classified by the owner rather than inferred from file presence.

## NEU primary sources

The owner supplied the customer classification. The public sources below establish the organization's name and authentic artwork, not the Primitive AI engagement.

- [NEU official identity system](https://neu.edu.vn/he-thong-nhan-dien/): university branding page. The observed image URL is `https://neu.edu.vn/wp-content/uploads/2026/01/Bieu-tuong-1-1-scaled.webp`, saved unchanged as `references/NEU-official.webp`. This is a large branding-page composition with margins and a trailing rule, so use the isolated kit artwork for a logo grid.
- [NEU official faculty resources](https://fit.neu.edu.vn/en/post/resources): links the official downloadable logo kit at `https://fit.neu.edu.vn/admin/uploads/NEU_6bf62d9fce.zip`, saved as `references/NEU-official-kit.zip`.
- Exact kit entries `NEU/Logo NEU.png` and `NEU/NEU.svg` were extracted as `references/NEU-official-kit.png` and `references/NEU-official-kit.svg`. Both the inspected isolated artwork and the current branding-page example use the ring wording “ĐẠI HỌC KINH TẾ QUỐC DÂN”. Prefer the official isolated SVG for the final grid; preserve its geometry, colors and accessible name.

Use the official English name **National Economics University**, with abbreviation **NEU**. The [asset manifest](logo-assets.json) records the build treatment. Authentic Ymner/TNE artwork remains missing; no marks were generated for them.

## Targeted corrections

- **Board 05:** the first tablet draft used a dark applications surface that differed from the desktop component. The selected correction restores the same pale surface, six example cards, shared foundation rail and open-ended Your workflow invitation, retaining the two phone states.
- **Board 08:** the selected correction changes the generic Products editorial filter to Core Agentic, alongside Company, Services and Other products, preserving the complete inquiry and company details.

Superseded first drafts are retained in `explorations`, excluded from the review gallery. Correction prompts and selected filenames are recorded in the manifest. All eight selected boards, including both corrected images, were visually inspected.

## Generation and validation boundary

All selected mockup images were created with the **built-in Image Generation tool**. No image API/CLI fallback or programmatic image editing was used. Files are copied into this repository. The images are design concepts with illustrative diagrams and editorial drafts, not screenshots of new production pages.

The selected outputs are inspected for navigation, application breadth, roster, history, services, founder/brand identity and contact details. Any corrected outputs and incidental image-copy limitations are recorded in the artifact manifest/review record. Exact text and original image assets in the specification govern implementation.

The static gallery and asset sheet use local assets and no external libraries. Local verification checks paths, metadata, hashes, expected content and inventory consistency. This revision does not constitute a new browser/device regression run or a production route migration.
