# V2 references and generation record

## Inputs

The baseline is the current uncommitted implementation: desktop hero and phone hero from the responsive review, platform/control presentation and company presentation from the latest implementation captures. Copies are saved in `references` so V2 can be reviewed independently of later source movement.

Original identity inputs are the repository's `public/prai-logo.png` and `public/founders/doannt-body.png`. They are copied into `references`. The production implementation must reuse those assets directly rather than a generated rendering.

## Generation

All seven selected boards were created with the **built-in image generation tool**, using current implementation screenshots as references. No CLI/API fallback was used. The exact prompts are in `prompts`; `manifest.json` identifies selected images. Images are review concepts, not real application captures.

The initial Company board contained an incorrect footer email and a spelling error. A targeted edit corrected both while retaining the design and founder composition. The initial responsive board contained unapproved placeholder organizations and a crowded tablet header. A targeted edit replaced the visible names with approved customers/partners and restored the compact tablet header. Superseded drafts are retained in `explorations`, outside the review gallery.

## Visual review performed

All seven selected images were inspected, including the two corrected boards. The selected customer board contains seven approved customers and four partners; the responsive subset contains approved names. The company board uses 2023 and separates VisionHub, FamilyHub and EduAssess from Core Agentic. The contact board uses the approved recipient, phones and locations. The worksheet remains labeled illustrative; editorial preview titles do not carry invented publication dates.

Generated image typography and brand artwork are visual references. Exact copy, original logo assets, contacts, relationship classification and responsive implementation requirements are specified by the decision ledger and component guide. No real posts, customer results, new production routes or CMS were created by this design step.

The gallery is static and opens locally without external libraries. Fresh browser rendering of the gallery and runtime regression checks could not be completed because browser access was unavailable/interrupted; markup and asset links were checked locally.
