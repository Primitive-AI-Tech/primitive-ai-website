# Website architecture review and refactor

**Date:** 8 November 2026  
**Scope:** Refactor the uncommitted implementation while retaining its design; prepare V2 before implementing the approved migration.

## Findings and resolution

| Finding | Effect | Refactor |
| --- | --- | --- |
| A parallel `src/site` tree owned pages, layout, domain logic, copy loading and styling | The established pages/components structure no longer described the running application | Route compositions now live in `src/pages`; shared UI in `src/components`; feature behavior/content in `src/features`. `src/site` is removed. |
| `components.tsx` mixed 24 components and multiple feature responsibilities in 927 lines | Diagrams, delivery, economics and generic UI changed together | Split shared primitives, diagrams, marketing presentation components and feature-owned components. No feature components are re-exported through a shared UI barrel. |
| Route titles, presentation policy and primary navigation were maintained separately | New paths could receive the wrong layout or scroll behavior | `src/app/routes.ts` is the single route policy source. Navigation and shell metadata consume it. |
| Layout contained routing, focus, section motion and content-readiness assumptions | Lazy routes can mount after layout effects have already scanned for sections and anchors | `PageLifecycle` mounts inside the route Suspense boundary, so its effects see the resolved page. Layout now renders the shared shell. |
| New copy used a separate dictionary cache and hook alongside i18next | Two resource systems could disagree about language and loading | Marketing dictionaries now belong to the existing i18next instance and conventional locale folders. Async resource additions notify React through the shared store. |
| Brand variables were declared in both global and presentation styles | Effective theme depended on later overrides | Consolidated 53 effective tokens into `src/styles/tokens.css`. Existing default token values are preserved. |
| One 5,792-line presentation stylesheet mixed every responsibility | Page ownership and cascade dependencies were difficult to inspect | Split foundation, navigation, shared presentation, seven page styles and ordered responsive compatibility styles. Motion and homepage reflow have explicit owners. |
| Superseded original pages/components remained alongside active equivalents | It was unclear which implementation was routed and which was historical source | Preserve four original pages and three unused components in `src/legacy`; active application code does not import that archive. |

## Structure and dependency direction

```text
src/
  app/                 route registry, lazy page composition, resolved-page lifecycle
  pages/               route-level composition; no app-wide providers
  components/
    layout/            shared header, footer and chapter navigation
    marketing/         shared presentation primitives and sections
    diagrams/          native connected-work and activity components
    ui/                existing shared UI primitives
  features/
    business-value/    effort model and economics components
    contact/           inquiry validation/encoding and questions
    use-cases/         scenario data, selectors, output and selection behavior
    delivery/          working-proof content, stages and working brief
    company/           journey content
    home/              home-specific illustration component
  config/              shared company configuration
  hooks/               shared presentation lifecycle behavior
  i18n/                one i18next instance and locale resources
  styles/              shared tokens and ordered presentation/page styles
  legacy/              original, unrouted source retained for migration provenance
```

`App` owns providers and the router. `AppRoutes` owns route composition. `Layout` reads route policy and renders shared chrome. Pages compose feature and shared UI components; feature models remain independent of rendering. Shared layout does not contain the page route table or a hardcoded old/new path list.

Keep future configuration and Updates content in their feature modules, not in the shell. Add their page metadata to the registry when implementation is authorized. The V2 mockups do not require a second app or a second translation engine.

## What was deliberately preserved

- The current uncommitted blue/navy design, source copy, native diagrams, contact behavior and public route destinations.
- All 24 extracted shared component bodies, checked against the pre-refactor source snapshot.
- The stylesheet rule order and declarations, excluding the deliberate consolidation of effective root tokens.
- Motion and homepage responsive CSS are byte-identical to the pre-refactor files.
- Four marketing translation dictionaries are moved without changing their content.
- Original homepage, About, Services and Contact source, plus older Navbar/Footer/LeadershipTeam source, are retained in `src/legacy` rather than destroyed.

The preservation check is recorded in [refactor-preservation.json](refactor-preservation.json). A local pre-refactor safety snapshot is retained outside the repository at `/Users/doannguyen/.codex/backups/primitive-ai-website/before-architecture-refactor-20261108.tar.gz`.

Current routes are preserved during this phase, including the existing separate homepage/platform pages and older product pages. The owner's planned homepage replacement and content/routing consolidation are represented by [the V2 design](../mockup/v2/index.html), not silently implemented during refactoring.

## Behavioral improvements in the foundation

- All route pages can load on demand, while the shared shell stays available.
- Focus, hash entry and section-motion setup run after the page resolves.
- Existing About/Services preview redirects retain query strings and fragments, including inquiry context.
- Trailing-slash entries share the correct route policy.
- Editorial and missing pages do not inherit presentation motion policy.
- Legacy product routes receive meaningful document titles from the registry.
- Marketing sentence keys preserve punctuation and English defaults while using the same language state as older namespaces.

## Validation

- TypeScript check: passed.
- Ten tests: passed. They cover the existing effort/inquiry contracts, redirect context, route policy and actual loading/fallback/cache behavior for all four non-English marketing dictionaries.
- Production build: passed. The existing main-chunk-size and browsers-data advisories remain nonblocking.
- Source-preservation checks: passed for extracted component bodies, stylesheet ordering, default tokens, source archives and moved dictionaries.
- Fresh browser visual verification: **not completed**. The embedded browser access host was unavailable; the native Chrome attempt was interrupted. No fresh viewport sweep or pixel comparison is claimed for this refactor. The V2 reference captures are the previously reviewed implementation, not new regression captures.

No migration deployment, DNS change, inquiry submission or message sending was performed.
