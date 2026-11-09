# Website implementation notes

**V3 local implementation:** 9 November 2026. The canonical implementation scope, migration decisions and remaining release work are in the [V3 migration plan](website-migration-plan.md). The shared architecture is documented in the [architecture refactor](architecture-refactor.md).

## Shared structure

- `src/app/routes.ts` defines page metadata, primary navigation and legacy route redirects. `src/app/AppRoutes.tsx` lazy-loads page modules.
- `src/components/layout` contains the shared header, footer, page lifecycle and homepage chapter navigation.
- `src/features` owns application examples, company history, delivery, value and contact models/content.
- `src/styles/site.css` imports the shared blue/navy styling and page-specific responsive rules.
- `public/prai-logo.png` is the company logo; primary interface blue is **#044EFF**.

## Public structure

`/` is the Core Agentic homepage. It moves from the opening proposition through the operational problem, productivity/economics, seven selectable workflow examples, customers and partners, delivery, controls, company history, Custom AI Development and Updates.

The main navigation is **Home · Products · Services · About · Updates**. `/products` presents Core Agentic as the flagship alongside examples of broad configurations, then concise VisionHub, FamilyHub and EduAssess descriptions without separate detail pages. `/services` restores six Custom AI Development capabilities and the original five-stage engineering process. `/about` uses the founder portrait and a connected vertical company/product path, without the 2016 learning milestone. `/update` has an honest empty state that points to the official company channel.

Legacy section URLs redirect to the relevant homepage anchors. The route layer preserves incoming query parameters and useful fragment links, and keeps unknown paths on the not-found page. Former VisionHub, FamilyHub and EduAssess detail URLs redirect to `/products`.

## Home interactions

- Seven application cards select an example and update approved sources, agent work, human review and a possible output. A separate contact link invites organizations to start from a different workflow.
- The economics worksheet is illustrative and exposes its assumptions. It does not present the example as customer evidence.
- The six-stage Core Agentic delivery story remains distinct from Services' five-stage engineering process.
- Every content route uses native section snapping, including specialist product details and legal copy. Each section panel spans one viewport; the fixed header overlays the top edge while content padding keeps copy below it. Long forms and lists scroll inside their panels. Small-phone hero copy and actions are compacted to stay visible together. The homepage keeps only its top progress bar; it tracks both page movement and scrolling within a panel. Right-side chapter controls and background section numerals remain removed. Reduced-motion preferences disable nonessential movement.
- The official customer and partner image assets remain unmodified. NEU uses its official SVG. Ymner and TNE currently have name-only cards because verified logo assets are unavailable locally; see the outstanding work in the migration plan.

## Contact behavior

Recipient: **doannt@primitive-ai.com**. Name, work email, organization and workflow are required. Offering, specific service, systems and frequency are optional. Links from Services preselect Custom AI Development and carry the service context; workflow links prefill a starting point. Validation preserves values and focuses the first invalid field.

Without `VITE_CONTACT_ENDPOINT`, the form prepares a populated `mailto:` draft. The visitor sends it from their email client. The page says the draft is ready and does not claim the inquiry reached Primitive AI.

With an endpoint configured, the form sends JSON by `POST` with the inquiry fields, `interest`, `service`, `recipient` and `intent`. Only an HTTP success and a JSON response containing `{ "accepted": true }` or `{ "ok": true }` produce the receipt state. Keep credentials out of `VITE_` variables. No endpoint is configured in this local implementation.

## Languages

English, Vietnamese, Japanese, Chinese and Korean remain available. Existing locale data is retained; newly added V3 marketing strings currently fall back to English where a translation is not present. Translation review remains on the release checklist.

## Verification completed

- `npm run typecheck` — passed.
- `npm run build` — passed; Vite reports the existing advisory that the main JavaScript chunk is over 500 kB.
- Browser layout sweep — 11 content routes at 320 × 568, 390 × 844, 600 × 400, 768 × 1024, 1024 × 600, 1280 × 720 and 1440 × 900; 483 panels checked for exact one-viewport sizing, snap alignment and horizontal overflow. Wheel scrolling moved between panels and continued through a panel with internal overflow. The homepage progress bar advanced with both page and panel scrolling.
- Prior mobile visual review — Home, About and product detail heroes at 320 × 568; Home at 390 × 844; legal title at 390 × 844; Services at 768 × 1024; Home at 1440 × 900. Product detail routes have since been retired.

Panel boxes now span the full viewport at all checked sizes. Where all copy or cards cannot fit legibly, the panel itself scrolls so the content remains reachable. The previous 34-viewport audit is preserved in [the responsive review archive](../mockup/implementation/responsive-review/index.html), but was not repeated. Keyboard, zoom, screen-reader and breakpoint-boundary review remains outstanding. No deployment, DNS change, email send or external form submission was performed.
