# Landing-page responsive review

Reviewed 8 November 2026 against the local production build. [Open the visual gallery](index.html).

## What changed

- Consolidated homepage layout into `src/site/home-layout.css`; removed obsolete homepage breakpoint overrides from the older stylesheets.
- Fixed the 999/1,000 px discontinuity. Hero height was 1,586 px just below the breakpoint and 700 px just above it. Both are now 700 px at the tested 700 px height.
- Kept the detailed agent canvas at widths where it remains readable. Smaller layouts use a native four-step summary; tablets can use a horizontal sequence. Diagram labels stay at least 14 px.
- Reworked phone problem cards into illustration/text rows and phone delivery cards into compact numbered steps. Delivery grids become 2 or 3 columns as room becomes available.
- Kept the contact action visible in tablet headers. Full navigation appears when its labels fit; Vietnamese has a later threshold. Increased shared navigation/footer hit areas.
- Fixed white-on-white use-case selector text at tablet widths by moving its complete control styling out of the phone-only breakpoint.
- Adapted the use-case panel, output cards, economics table, architecture nodes, working brief and footer to available space.
- Preserved #044EFF, original logo, section entrances, diagram/background animation and native section snapping. Chapters grow with their content, including on laptops. No wheel/touch interception was added.

## Measured hero heights

Height is the entire section, including the diagram and its padding. Phone sections may exceed one screen so the text and controls remain readable.

| Viewport | Before | After |
| --- | ---: | ---: |
| 600 × 900 | 1524 px | 1017 px |
| 768 × 1024 | 1542 px | 1024 px |
| 999 × 700 | 1586 px | 700 px |
| 1000 × 700 | 700 px | 700 px |
| 1280 × 720 | 720 px | 720 px |

## Production viewport matrix

Every row checks all nine chapters, not only the opening screen. The audit inspects rendered DOM dimensions, document overflow, text scroll widths, visible content bounds, header-control intersections, section-heading clearance below the fixed header and shown diagram font sizes. All requested viewport dimensions matched. No out-of-bounds content or diagram label below 14 px was detected; every chapter heading cleared the header by at least 12 px.

| Viewport | Horizontal overflow | Clipped text detected | Header overlaps | Smallest hero diagram label |
| --- | ---: | ---: | ---: | ---: |
| 320 × 568 | 0 px | 0 | 0 | 16 px |
| 360 × 640 | 0 px | 0 | 0 | 16 px |
| 375 × 667 | 0 px | 0 | 0 | 16 px |
| 390 × 844 | 0 px | 0 | 0 | 16 px |
| 430 × 932 | 0 px | 0 | 0 | 16 px |
| 568 × 320 | 0 px | 0 | 0 | 14 px |
| 600 × 900 | 0 px | 0 | 0 | 16 px |
| 768 × 1024 | 0 px | 0 | 0 | 16 px |
| 820 × 1180 | 0 px | 0 | 0 | 16 px |
| 900 × 700 | 0 px | 0 | 0 | 18 px |
| 999 × 700 | 0 px | 0 | 0 | 18 px |
| 1000 × 700 | 0 px | 0 | 0 | 18 px |
| 1024 × 768 | 0 px | 0 | 0 | 18 px |
| 1100 × 700 | 0 px | 0 | 0 | 18 px |
| 1150 × 800 | 0 px | 0 | 0 | 18 px |
| 1279 × 720 | 0 px | 0 | 0 | 14 px |
| 1280 × 720 | 0 px | 0 | 0 | 14 px |
| 1366 × 768 | 0 px | 0 | 0 | 14 px |
| 1440 × 900 | 0 px | 0 | 0 | 14 px |
| 1920 × 1080 | 0 px | 0 | 0 | 14 px |
| 479 × 800 | 0 px | 0 | 0 | 16 px |
| 480 × 800 | 0 px | 0 | 0 | 16 px |
| 599 × 800 | 0 px | 0 | 0 | 16 px |
| 639 × 800 | 0 px | 0 | 0 | 16 px |
| 640 × 800 | 0 px | 0 | 0 | 16 px |
| 719 × 800 | 0 px | 0 | 0 | 16 px |
| 720 × 800 | 0 px | 0 | 0 | 16 px |
| 899 × 800 | 0 px | 0 | 0 | 16 px |
| 959 × 800 | 0 px | 0 | 0 | 18 px |
| 960 × 800 | 0 px | 0 | 0 | 18 px |
| 1199 × 800 | 0 px | 0 | 0 | 18 px |
| 1200 × 800 | 0 px | 0 | 0 | 14 px |
| 1349 × 800 | 0 px | 0 | 0 | 14 px |
| 1350 × 800 | 0 px | 0 | 0 | 14 px |

Raw records: [before](before/audit.json), [production after](after/audit.json).

## Interaction and visual review

Native keyboard scrolling reached the footer at each size below. All visible entrance-animation targets had been revealed by the end. Each scroll record is saved in `after/scroll-WIDTHxHEIGHT.json`.

| Viewport | Footer reached | Unrevealed visible targets |
| --- | --- | ---: |
| 320 × 568 | Yes | 0 |
| 390 × 844 | Yes | 0 |
| 568 × 320 | Yes | 0 |
| 768 × 1024 | Yes | 0 |
| 1280 × 720 | Yes | 0 |

- At 1,280 × 720, native wheel scrolling moved the opening from y=0 to the next chapter at y=720. Taller chapters allowed continued native scrolling; content was not clipped to enforce one-screen sections.
- All four use-case choices were selected on phone (390 × 844) and tablet (768 × 1,024), with no detected clipping or content outside the viewport. [Phone records](after/scenarios-phone.json), [tablet records](after/scenarios-tablet.json).
- Mobile navigation successfully opened How We Work at 320 px. Vietnamese home copy was reviewed at 390 px, then English was restored.
- Manually inspected phone hero, problem cards, delivery steps and platform; tablet hero, use-case selector/output and delivery; short-landscape hero; intermediate-width hero; laptop diagram and economics; and large-desktop composition.
- Production browser console: no new errors during verification.
- TypeScript check and production build: passed. Build retains existing nonblocking bundle-size and browsers-data advisories.

## Scope and limits

These are browser viewport emulations on the available browser engine. They verify responsive layout and native scrolling in this environment, not physical-device touch behavior or every Safari/Firefox version. Screenshots show native rendered page content; offscreen entrance animations were revealed through normal scrolling before whole-page captures. Screenshot raster dimensions may be scaled by the browser capture surface; filenames and audit rows identify the tested CSS viewport.

No deployment or inquiry submission was performed. The local preview is at `http://127.0.0.1:4175/` while its preview process is running. Contact remains `doannt@primitive-ai.com`.
