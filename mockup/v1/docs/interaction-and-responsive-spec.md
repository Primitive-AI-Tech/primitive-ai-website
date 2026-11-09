# Interaction and responsive specification

## Global navigation

- Keep the unchanged source logo inside the light floating capsule. Logo links home.
- Main routes: Core Agentic, Business Value, Use Cases, How We Work, Company. Contact is the primary action.
- Core Agentic may expose Overview and Trust & Control in a concise submenu. Use real links and communicate the current page with `aria-current`.
- Menu opens by click and keyboard, not hover alone. Escape closes, and focus returns to its trigger. Dismiss on outside click.
- Keep the existing language choices: English, Tiếng Việt, 日本語, 中文, 한국어. A language change preserves the current equivalent route.
- Navigation may become compact while scrolling, but should retain a solid readable surface. Header does not hide anchor headings or focus rings.

## Homepage and calls to action

- Preserve the exact headline: **Put AI to work across your organization.**
- Main action: **Talk to our team** → /contact. Secondary: **Explore use cases** → /use-cases.
- The working-session action may pass the inquiry intent to Contact. Do not silently schedule an event or claim a booking.
- Natural vertical scroll replaces mandatory full-screen snapping.
- Main navigation and footer give access to all pages without requiring visitors to complete the narrative.
- Do not gate case information behind submitting an email.

## Use-case exploration

- Pictured selection: Internal operations. Other choices: Inbound sales, Outbound research, Research & knowledge.
- Switching selection changes the request, sources, agent contribution, human checkpoint, output and measures together.
- Keep selections linkable through a stable hash or query value.
- For desktop tabs, use the standard tab keyboard pattern. On mobile use a labeled selector or stacked links when four tabs cannot fit. Do not rely on clipped horizontal pills.
- Copy distinguishes an illustrative scenario, a demonstrated configuration and a measured customer result.

## Economics worksheet

### Initial assumptions

| Input | Initial value | Validation |
|---|---:|---|
| Baseline human effort | 100 minutes | Positive number |
| Eligible share | 60% | 0–100% |
| Eligible work handled by AI | 80% | 0–100% |
| Added human review | 8 minutes | Nonnegative number |

Remaining eligible effort = baseline × eligible share × (1 − AI-handled share).
Other effort = baseline × (1 − eligible share).
Total assisted human effort = remaining eligible effort + other effort + added review.

The initial result is **60 minutes**, or **40% less human effort**. This is illustrative. A different assumption may yield no reduction or an increase; preserve and explain that result.

- Sliders have numeric input alternatives with visible units. Update results without moving keyboard focus.
- Round display values consistently and retain enough precision for calculations.
- Do not clamp an unfavorable result to zero or manufacture a positive return.
- Use a common zero baseline for comparisons. Give direct values and an accessible data table.
- If financial fields are added, keep implementation, platform, usage and operations visible. Make calculation horizon explicit.
- Released capacity, avoided hiring and actual cash savings are different outcomes. Do not double-count them.
- Reset restores the illustrative example. No uploaded or private customer data is required to use the example.

## Conceptual product previews

- Render these as marketing explanations, with a persistent **Concept preview · sample data** label.
- The Reasoning panel shows exposed planning summaries and tool activity. It does not imply access to all hidden model reasoning.
- An approval concept shows the specific proposed change, affected resource, actor and decision. The real control must operate on the exact approved action.
- Keep simulated controls visually clear and distinguish illustrative previews from a live interactive product.

## Proof and delivery

- A working session is scoped around a business owner, approved information and agreed evaluation criteria.
- Steps: identify, scope, build, evaluate, put into operation, expand.
- The evaluation explicitly allows proceed, refine or stop. No production contract is accepted automatically.
- Do not publish a five-day promise, free pilot, fixed price, hosting guarantee or certification because it appeared in a reference discussion.
- Include employee training, ownership, support and review of exceptions.

## Contact

- Required: Name, Work email, Organization, Workflow/problem.
- Optional context is disclosed progressively and remains optional.
- Visible labels persist when typing. Use semantic input types and autocomplete where appropriate.
- Show validation adjacent to the field and in an accessible error summary where useful.
- Preserve all entered information when correcting an error. Announce submission progress and receipt.
- A success message appears only after the configured destination has actually accepted the inquiry. A mailto window opening is not confirmed receipt.
- Confirm current public contact details and privacy wording before implementation. The mockups intentionally do not invent them.

## Responsive behavior

| Width | Layout |
|---|---|
| 1280 px and above | Full capsule navigation, two-column hero, content max-width around 1280 px |
| 768–1279 px | Collapse navigation when content needs it; use two columns only where text and controls fit |
| Below 768 px | One-column story, 20–24 px gutters, stacked actions, diagrams reflowed as vertical relationships |

- Preserve meaningful content when changing layout.
- Reflow architecture into a vertical sequence or provide a labeled expanded diagram. Do not shrink every node into unreadable text.
- Charts retain units and accessible text; forms have 16 px or larger input text to avoid mobile zoom surprises.
- A mobile sticky contact action is optional; it must respect safe areas, keyboard appearance and the footer and never cover content.
- No hover-only information, auto-advancing carousel or essential drag-only input.
- Mobile menu traps focus while open, closes with Escape, and restores the triggering focus. Lock only background scrolling.

## Accessibility and motion

- Use semantic headings, landmarks, buttons and links. Headings and copy are real text, not baked-in art.
- Target WCAG AA contrast for implementation. White on #044EFF is suitable for primary actions; original cyan is not a normal-text color on white.
- At least 44 × 44 px interactive targets, preferably 48 px. Clear focus state with sufficient separation from blue controls.
- Provide a text equivalent to every meaningful diagram and chart; hide purely decorative glow from assistive technology.
- Respect reduced motion. Keep optional route animations subtle, short and nonessential. Avoid parallax, flashing trails and continuous distraction.
- At 200% zoom, text and navigation reflow without truncating decisions or hiding controls.

## Image-to-implementation boundary

The PNGs are review artifacts. Use this specification and the approved strategy for exact content and behavior. Use the original logo file, Lucide-compatible icons, real product screenshots and approved photography in implementation. Generated logo variations or image-rendered copy must not become production source assets.

