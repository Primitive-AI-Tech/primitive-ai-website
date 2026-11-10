# Primitive AI homepage mockup · V4, revision 3

Open [the review gallery](index.html) for all 12 homepage section images and descriptions. Every board is a 1600 × 1000 PNG.

## Current revision · 10 November 2026

| Section | Change |
| --- | --- |
| 01 · Hero | Only the illustration was replaced: one team around one shared table, with AI moving work between people. Hero copy and layout are retained. |
| 05 · Platform | A new sculpted three-layer architecture object, with precise callouts and a highlighted Core Agentic layer. Visual direction informed by Apple’s architecture presentation. |
| 08 · Trust and control | Completely rebuilt around a visible workflow: sources, draft, human approval and activity trail. |
| 10 · Custom AI | Direct tasks: answer customer questions, find company information, check products for defects, compare contracts. |
| 12 · Invitation | Actual NASA photograph of sunrise over Earth as a full-section background, with readable text overlays and an on-board credit. |

The three-phase delivery journey and latest-news cards from revision 2 remain in the sequence.

## Files

- [index.html](index.html): gallery, reading order and component descriptions.
- [source.html](source.html), [revision.css](revision.css), [refinement.css](refinement.css): editable board compositions.
- `images/`: the 12 section PNGs.
- `assets/`: locally saved illustration assets and NASA photograph.
- [provenance.md](provenance.md): generation prompts, reference links and photo credit.
- `prompts/`: exact prompts used with built-in Image Generation.

## Content and implementation notes

- The economics model remains illustrative, not a customer result: 100 human minutes before; 60 with AI, including 8 minutes of review.
- Customer and partner relationships stay separate; NEU is included.
- Custom AI cards describe potential engagements, not claimed customer case-study outcomes.
- The current Updates implementation contains an empty editorial state. The mockup news headlines are visibly marked as samples. Production must use the latest three genuine published records, their dates, images and article links.
- The news destination is `/updates`. The current app redirects that path to `/update`; canonical-route alignment belongs to the implementation step.
- Trust/control is an illustrative workflow design, not an actual product screenshot.
- All boards are desktop design references. On narrow screens, use a vertical reading order, readable text, stacked architecture labels, a continuous delivery journey and single-column use-case/news cards.

This revision updates the mockup package only.

Latest artwork update: sections 01 and 05 now use surface-labeled 3D blocks. The hero follows the live `AgentCanvas` weekly-review workflow; the platform maps agents, skills, workflows, execution controls and connected resources. See [provenance.md](provenance.md) for source mapping and exact prompts.
