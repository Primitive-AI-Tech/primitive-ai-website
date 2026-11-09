# Design direction — Core Agentic / v1

## Brand authority

The approved main interface color is **#044EFF**, selected by the user after reviewing the first exploration.

The supplied logo remains the authority for brand identity. Pixel sampling of the original transparent PNG found dominant opaque colors **#32409A** (indigo) and **#0FB4E0** (cyan). These stay in the unchanged logo and become supporting interface accents.

The symbol combines a human profile, an AI-chip motif and a faceted geometric outline. The wordmark separates “Primitive” in indigo from “AI” in cyan. This suggests human capability extended through AI and purposeful connection. It is a visual interpretation, not a newly claimed brand history.

Do not redraw, trace, simplify or recolor the logo from generated pixels. Implement with the original `public/prai-logo.png`. Its transparent canvas is not a black brand background. Preserve intrinsic aspect ratio; do not distort it or add other icons to the mark.

## Color system

| Token | Value | Role |
|---|---|---|
| Main blue | #044EFF | Primary actions, selected navigation, chart emphasis, hero lighting and core interaction |
| Original logo indigo | #32409A | Preserved logo artwork and supporting editorial accents |
| Original logo cyan | #0FB4E0 | Preserved artwork, fine connections and small dark-surface highlights |
| Midnight | #071526 | Hero, platform visual, closing invitation and footer |
| Ink | #101A35 | Text on light surfaces |
| Paper | #F6F9FC | Main reading background |
| Ice | #E9F7FC | Quiet secondary surfaces |
| White | #FFFFFF | Navigation, cards and raised reading panels |
| Border | #D9E3EF | Boundaries on light surfaces |
| Muted text | #526278 | Secondary text on light surfaces |
| Dark-surface text | #D8E5F5 | Secondary text on midnight |
| Focus | #044EFF | Visible focus with offset and an outer white separation ring when required |

Blue should be the dominant chromatic signal. Cyan is an accent, not the main button or text color on white. Use white on main blue, ink on ice, and white/ice on midnight. Verify exact rendered contrast during implementation.

## Inherited from the existing website

- Floating inset capsule navigation and an always-recognizable logo.
- Inter typography, large confident headings and generous negative space.
- Rounded panels, pill-shaped actions and restrained glass treatments.
- A dark introduction followed by lighter reading surfaces.
- Clear responsive navigation and the existing language-switching concept.
- A visual sense of connection and depth.

## Evolved for the new strategy

- Main blue replaces the earlier purple theme.
- A clear organizational-work illustration replaces the multi-product orbit as the main story.
- Reading and comparison sections use calm light backgrounds.
- The homepage order follows the approved business narrative: introduction, problem, value, applications, delivery, platform evidence, company and contact.
- Each page has a clear evaluation task; repeated generic feature grids are avoided.
- Scroll naturally. Section height follows content; no mandatory full-screen scroll snapping.
- Product previews are explicitly conceptual and use sample information.

## Layout and type

- Desktop design baseline: 1440 CSS px, centered content maximum 1280 px, 64–80 px outer gutters when space permits.
- Desktop grid: 12 columns, 24–32 px gaps. Tablet: 8 columns. Mobile: 4 columns with 20–24 px gutters.
- Hero: about 46/54 or 48/52 text/visual split, stacking on mobile.
- Desktop headline: 64–80 px, 1.05–1.12 line height. Mobile: 40–48 px, subject to actual copy width.
- Section headline: 36–48 px desktop, 28–36 px mobile.
- Body: 18–20 px desktop for introductions, 16–18 px for content; 16 px minimum normal mobile body.
- Use at most two weights for body hierarchy. Labels may use measured letter spacing.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- Cards: 16–24 px radius. Inputs: 12–16 px. Buttons: full pill with 44–48 px minimum height.
- Separate sections through background, composition and spacing, not repeated decorative separators.

## Imagery rules

These are image-generated design concepts, not screenshots of a finished website. Conceptual in-product panels must not be described as authentic application captures.

Use approved source assets when implementing the real logo, actual product captures and founder portraits. Generic workplace imagery must not imply an actual customer deployment. Do not add unverified customer logos, testimonials, certifications or production results.

## Revision history

1. Initial exploration inherited the old purple theme.
2. User requested a logo-derived indigo/cyan palette.
3. User selected **#044EFF as the main blue**, with the original logo unchanged.

Only the final-blue images in `v1/images` are the recommended direction. Earlier explorations belong in `explorations`.

