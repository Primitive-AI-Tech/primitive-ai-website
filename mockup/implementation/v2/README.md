# Motion and responsive revision

8 November 2026. Updated after feedback requesting responsive layouts, animation, clearer sections and snap-in scrolling.

## What changed

- Nine homepage chapters with native section snapping and desktop chapter shortcuts.
- Separate economics illustration and a distinct blue value chapter.
- Hero sizing responds to viewport width and height.
- Headline entrances, staggered reveals, flowing diagram connections, glowing agents and drifting backgrounds.
- Offscreen animation pauses; reduced-motion preferences disable nonessential animation.
- Small-screen Company headline and timeline overflow fixed.
- Taller phone sections remain scrollable. No custom wheel/touch interception.

## Browser verification

- All eight primary pages: 320 × 740 and 768 × 1024, checking document overflow and text clipping.
- Homepage: 375 × 812, 390 × 844, 600 × 900, 1024 × 768 1280 × 720 and 1440 × 900.
- All nine home sections measure 720 px at the 1280 × 720 laptop viewport.
- A mouse-wheel scroll settles at problem-section top (720 px). Page Down settles at the following value-section top (1440 px).
- At 320 px, the oversized opening remains scrollable through the full mobile agent diagram.
- Contact required-field validation focuses the first invalid field at 201 px from the viewport top, below the header.
- Mobile menu and page navigation remain functional.

Captures in this directory show the current revision. [Open the local website](http://127.0.0.1:4175/) to review actual motion. The earlier gallery is retained for comparison.

- Vietnamese homepage at 390 px: no horizontal overflow or clipped headings/buttons.
- Production preview: no new console errors during the nine-chapter review.
- Production build and TypeScript checks: passed.
