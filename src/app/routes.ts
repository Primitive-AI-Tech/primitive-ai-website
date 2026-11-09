/** Route policy is independent of rendering so layout, navigation and tests share it. */
type PagePolicy = {
  id: string;
  path: string;
  title: string;
  surface: "marketing" | "legacy";
  scroll: "story" | "natural";
  navigation?: { label: string; order: number };
};

// The public navigation follows the reviewed V3 page structure. Homepage
// chapters remain addressable as anchors; legacy routes resolve below.
export const pageRoutes = [
  {
    id: "home",
    path: "/",
    title: "Put AI to work across your organization.",
    surface: "marketing",
    scroll: "story",
    navigation: { label: "Home", order: 0 },
  },
  {
    id: "products",
    path: "/products",
    title: "Products",
    surface: "marketing",
    scroll: "story",
    navigation: { label: "Products", order: 1 },
  },
  {
    id: "services",
    path: "/services",
    title: "Custom AI Development",
    surface: "marketing",
    scroll: "story",
    navigation: { label: "Services", order: 2 },
  },
  {
    id: "about",
    path: "/about",
    title: "About Primitive AI",
    surface: "marketing",
    scroll: "story",
    navigation: { label: "About", order: 3 },
  },
  {
    id: "updates",
    path: "/update",
    title: "Updates",
    surface: "marketing",
    scroll: "story",
    navigation: { label: "Updates", order: 4 },
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact",
    surface: "marketing",
    scroll: "story",
  },
  {
    id: "privacy",
    path: "/privacy",
    title: "Privacy",
    surface: "marketing",
    scroll: "story",
  },
  {
    id: "terms",
    path: "/terms",
    title: "Terms",
    surface: "marketing",
    scroll: "story",
  },
] as const satisfies readonly PagePolicy[];

export type PageId = (typeof pageRoutes)[number]["id"];
export type PageMetadata = PagePolicy;

export const redirects = [
  { path: "/core-agentic", destination: "/" },
  { path: "/business-value", destination: "/#business-value" },
  { path: "/use-cases", destination: "/#applications" },
  { path: "/how-we-work", destination: "/#how-we-work" },
  { path: "/trust", destination: "/#control" },
  { path: "/company", destination: "/about" },
  { path: "/updates", destination: "/update" },
  { path: "/success", destination: "/update" },
  { path: "/solutions", destination: "/products" },
  { path: "/solutions/camera-ai", destination: "/products" },
  { path: "/solutions/familyhub", destination: "/products" },
  { path: "/solutions/eduassess", destination: "/products" },
  { path: "/solutions/chatbot", destination: "/#sales-support" },
  { path: "/solutions/knowledgehub", destination: "/#knowledge-research" },
  { path: "/solutions/legalhub", destination: "/#documents-legal" },
] as const;

export const navigation = pageRoutes
  .flatMap((page) =>
    "navigation" in page ? [{ path: page.path, ...page.navigation }] : [],
  )
  .sort((a, b) => a.order - b.order);

export const notFoundPage: PageMetadata = {
  id: "not-found",
  path: "*",
  title: "Page not found",
  surface: "legacy",
  scroll: "natural",
};

export function getPageMetadata(pathname: string): PageMetadata {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return pageRoutes.find((page) => page.path === normalized) ?? notFoundPage;
}

/** Redirect paths change, while inquiry context and section entry points survive. */
export function redirectLocation(
  destination: string,
  location: { pathname: string; search: string; hash: string },
) {
  const hashIndex = destination.indexOf("#");
  const destinationHash = hashIndex < 0 ? "" : destination.slice(hashIndex);
  const route = hashIndex < 0 ? destination : destination.slice(0, hashIndex);
  const queryIndex = route.indexOf("?");
  const oldFragments: Record<string, Record<string, string>> = {
    "/core-agentic": {
      "#architecture": "#platform",
      "#orchestration": "#control",
      "#knowledge": "#control",
      "#control": "#control",
    },
    "/business-value": { "#effort-comparison": "#economics" },
    "/use-cases": {
      "#inbound-sales": "#sales-support",
      "#outbound-research": "#outbound-research",
      "#internal-operations": "#internal-operations",
      "#research-knowledge": "#knowledge-research",
    },
    "/solutions/chatbot": { "#inbound-sales": "#sales-support" },
    "/solutions/knowledgehub": { "#research-knowledge": "#knowledge-research" },
    "/solutions/legalhub": { "#legal-documents": "#documents-legal" },
  };
  const compatibleHash =
    oldFragments[location.pathname]?.[location.hash] || location.hash;
  return {
    pathname: queryIndex < 0 ? route : route.slice(0, queryIndex),
    search:
      location.search || (queryIndex < 0 ? "" : route.slice(queryIndex)),
    // Existing deep links win over the generic chapter target.
    hash: compatibleHash || destinationHash,
  };
}
