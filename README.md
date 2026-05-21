# Primitive AI — Marketing Website

The public-facing marketing site for [Primitive AI](https://primitive.ai), built with React + Vite + TypeScript. Covers the company homepage, product landing pages, services, success stories, about, and contact.

## Tech Stack

| Layer | Library / Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix primitives) |
| Routing | React Router v6 |
| i18n | i18next 26 + react-i18next + browser language detector |
| Icons | Lucide React |
| Data fetching | TanStack Query v5 |
| Process manager | PM2 (`npm run preview`) |

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home — hero, galaxy products, services, partners, success stories, testimonials |
| `/about` | About — mission, leadership, journey timeline |
| `/solutions` | Solutions overview — product cards |
| `/solutions/knowledgehub` | KnowledgeHub detail |
| `/solutions/chatbot` | SupportHub detail |
| `/solutions/camera-ai` | VisionHub detail |
| `/solutions/familyhub` | FamilyHub detail |
| `/solutions/legalhub` | LegalHub detail (beta) |
| `/services` | AI development services |
| `/success` | Customer success stories |
| `/contact` | Contact / demo request form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## i18n

Five languages are supported. The browser language detector picks the locale automatically; users can also switch via the language selector in the navbar.

**Supported locales:** `en` (default) · `vi` · `ja` · `zh` · `ko`

**Namespaces** (one JSON file per namespace per locale):

```
src/i18n/locales/
├── en/
│   ├── common.json       # shared strings (badges, buttons, nav labels)
│   ├── home.json
│   ├── about.json
│   ├── solutions.json
│   ├── services.json
│   ├── success.json
│   ├── contact.json
│   ├── notFound.json
│   ├── knowledgehub.json
│   ├── supporthub.json
│   ├── visionhub.json
│   ├── familyhub.json
│   └── legalhub.json
├── vi/  (same structure)
├── ja/  (same structure)
├── zh/  (same structure)
└── ko/  (same structure)
```

To add a new namespace:
1. Create the JSON file in every locale folder.
2. Import and register it in `src/i18n/index.ts`.
3. Use `useTranslation('namespace')` in the component.

For array-based data (feature lists, steps, etc.) use `t('key', { returnObjects: true })` and cast to the expected type.

## Development

```sh
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Type-check & build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Production Deployment

The site is served as a static preview build managed by PM2.

```sh
# Build
npm run build

# Start / restart with PM2
pm2 start pm2.json
pm2 reload prai   # zero-downtime reload after a new build
```

The `pm2.json` config runs `npm run preview`, which serves the `dist/` folder via Vite's built-in static server.

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── ui/              # shadcn/ui primitives (auto-generated, do not edit)
│   ├── Navbar.tsx        # Top nav + language selector
│   ├── Footer.tsx
│   ├── GalaxyProducts.tsx  # Animated orbit product showcase
│   ├── Partners.tsx
│   ├── CTA.tsx           # Reusable full-screen CTA section (has snap-section built in)
│   ├── ProductCard.tsx   # Card used in /solutions (supports active / beta / coming-soon)
│   └── ...
├── i18n/
│   ├── index.ts          # i18next config + namespace registration
│   └── locales/          # Translation JSON files (see above)
├── pages/
│   ├── Index.tsx         # Home page
│   ├── solution-details/ # Per-product detail pages
│   └── ...
├── index.css             # Global styles, scroll-snap rules, utility classes
└── App.tsx               # Router setup
```

## Scroll Snap

Pages that use full-screen section snapping add `snap-active` to `<html>` via `useLayoutEffect` and remove it on unmount. Individual sections get the `snap-section` class. Currently enabled on the **Home** and **Success** pages.

```tsx
React.useLayoutEffect(() => {
  document.documentElement.classList.add('snap-active');
  return () => document.documentElement.classList.remove('snap-active');
}, []);

// on each <section>:
<section className="... snap-section" data-theme="dark">
```

## Adding a New Product

1. Create the detail page in `src/pages/solution-details/`.
2. Add a route in `src/App.tsx`.
3. Add translation files in all 5 locale folders and register the namespace in `src/i18n/index.ts`.
4. Add a `ProductCard` entry in `src/pages/Solutions.tsx`.
5. Add a `PRODUCT_CONFIG` entry in `src/components/GalaxyProducts.tsx` with a `solutionIdx` mapping to the `solutions` namespace array order.
