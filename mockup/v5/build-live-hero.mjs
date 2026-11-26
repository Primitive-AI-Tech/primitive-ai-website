/** Export the site's navigation, homepage hero and invitation for V5 review. */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { build, transformWithEsbuild } from 'vite';
import postcss from 'postcss';

const packageDirectory = fileURLToPath(new URL('.', import.meta.url));
const repository = resolve(packageDirectory, '../..');
const homepage = await readFile(resolve(repository, 'src/pages/Index.tsx'), 'utf8');
const sectionStart = homepage.indexOf('<section className="home-hero dark-section" id="intro">');
const sectionEnd = homepage.indexOf('</section>', sectionStart);
if (sectionStart === -1 || sectionEnd === -1) {
  throw new Error('The homepage hero markup changed. Update the mockup export selector.');
}
const hero = homepage.slice(sectionStart, sectionEnd + '</section>'.length);

const entry = 'virtual:v5-live-hero.jsx';
const copy = 'virtual:v5-live-copy.jsx';
const router = 'virtual:v5-local-links.jsx';
const invitation = resolve(repository, 'src/components/marketing/InvitationCTA.tsx');
const header = resolve(repository, 'src/components/layout/Header.tsx');
const cssPath = 'live-hero.css';
const previewCopy = {};
const navLabels = [
  'Home', 'Products', 'Services', 'About', 'Updates', 'Talk to our team',
  'Main navigation', 'Open navigation', 'Close navigation', 'Choose a page or language.',
  'Change language', 'Language', 'Privacy', 'Terms',
];
for (const lang of ['vi', 'ja', 'zh', 'ko']) {
  const dictionary = JSON.parse(await readFile(
    resolve(repository, `src/i18n/locales/${lang}/marketing.json`), 'utf8',
  ));
  previewCopy[lang] = Object.fromEntries(navLabels.map(label => [label, dictionary[label] ?? label]));
}

const sharedEntry = `
import { createRoot } from 'react-dom/client';
import { Layers3, UsersRound, Zap } from 'lucide-react';
import { ContactDestination, Link } from 'react-router-dom';
import { contactEmail } from '@/config/company';
import SiteNavigation from '@/components/layout/Header';
import { Button, Eyebrow } from '@/components/marketing/primitives';
import { FlowBackdrop } from '@/components/marketing/FlowBackdrop';
import { HeroParticleField } from '@/components/marketing/HeroParticleField';
import { AgentCanvas, MobileAgentCanvas } from '@/components/diagrams/AgentCanvas';
import { ScrollCue } from '@/components/layout/StoryProgress';
import { InvitationCTA } from '@/components/marketing/InvitationCTA';
import { NavigationCopy, useCopy } from '@/i18n/useCopy';
import '@/index.css';
import '@/styles/site.css';

function HomeHero() {
  const t = useCopy();
  return (${hero});
}

const stylesheetUrl = new URL('${cssPath}', document.currentScript.src).href;

const nav = document.getElementById('v5-live-nav');
if (nav) {
  createRoot(nav).render(
    <NavigationCopy.Provider value={true}>
      <ContactDestination.Provider value="https://primitive-ai.com/contact">
        <SiteNavigation />
      </ContactDestination.Provider>
    </NavigationCopy.Provider>,
  );
}

for (const backdrop of document.querySelectorAll('.v5-hero-backdrop')) {
  createRoot(backdrop).render(<FlowBackdrop />);
}

function mount(id, anchorId, content, startsPage = true) {
  const host = document.getElementById(id);
  if (!host) return;
  if (!document.getElementById(anchorId)) {
    const anchor = document.createElement('span');
    anchor.id = anchorId;
    anchor.setAttribute('aria-hidden', 'true');
    host.before(anchor);
  }
  host.lang ||= 'vi';
  const shadow = host.attachShadow({ mode: 'open' });
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = stylesheetUrl;
  const mountPoint = document.createElement('v5-page');
  mountPoint.className = 'experience-page';
  mountPoint.dataset.page = '/';
  shadow.append(stylesheet, mountPoint);
  // Production applies distinct rules to the first section (the hero).
  const priorSection = startsPage ? null : <section hidden aria-hidden="true" />;
  createRoot(mountPoint).render(<>{priorSection}{content}</>);
}

mount('v5-live-hero', 'intro', <HomeHero />);
mount('v5-live-cta', 'next-step', <ContactDestination.Provider value={'mailto:' + contactEmail}><InvitationCTA id="next-step" /></ContactDestination.Provider>, false);
`;

const localizedCopy = `
import { createContext, useContext, useSyncExternalStore } from 'react';
import marketing from '@/i18n/locales/vi/marketing.json';
const navigation = ${JSON.stringify(previewCopy)};
const storageKey = 'primitive-ai-v5-nav-language';
const listeners = new Set();
let language = 'vi';
try { language = localStorage.getItem(storageKey) || language; } catch {}
if (!Object.hasOwn(navigation, language) && language !== 'en') language = 'vi';
document.body.dataset.v5NavLanguage = language;
const navMount = document.getElementById('v5-live-nav');
if (navMount) navMount.lang = language;
const subscribe = listener => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
const current = () => language;
export const NavigationCopy = createContext(false);
export function useCopy() {
  const isNavigation = useContext(NavigationCopy);
  const selected = useSyncExternalStore(subscribe, current);
  const dictionary = isNavigation ? navigation[selected] : marketing;
  return (text) => dictionary?.[text] ?? text;
}
export function useTranslation() {
  const selected = useSyncExternalStore(subscribe, current);
  return {
    i18n: {
      resolvedLanguage: selected,
      changeLanguage: async next => {
        language = next;
        document.body.dataset.v5NavLanguage = next;
        if (navMount) navMount.lang = next;
        try { localStorage.setItem(storageKey, next); } catch {}
        listeners.forEach(listener => listener());
      },
    },
  };
}
export const loadCopy = () => Promise.resolve();
`;

const previewLinks = `
import { createContext, useContext } from 'react';
import { contactEmail } from '@/config/company';
export const ContactDestination = createContext('#next-step');
function destination(to, contact) {
  const previewDestinations = {
    '/': 'website-review.html#intro',
    '/contact': contact,
    '/products': 'products.html#execution',
    '/products#product-applications': 'products.html#applications',
    '/services': 'services.html#service-intro',
    '/about': 'about.html#about-intro',
    '/update': 'update.html#update-intro',
    '/privacy': 'https://primitive-ai.com/privacy',
    '/terms': 'https://primitive-ai.com/terms',
  };
  return previewDestinations[to] ?? (to.startsWith('/#') ? to.slice(1) : to);
}
export function useLocation() {
  const previewRoutes = { products: '/products', services: '/services', about: '/about', update: '/update' };
  return { pathname: previewRoutes[document.body.dataset.v5Preview] ?? '/' };
}
export function Link({ to, ...props }) {
  return <a href={destination(to, useContext(ContactDestination))} {...props} />;
}
export function NavLink({ to, className, ...props }) {
  const isActive = useLocation().pathname === to;
  const classes = typeof className === 'function' ? className({ isActive }) : className;
  return <Link to={to} aria-current={isActive ? 'page' : undefined} className={classes ?? (isActive ? 'active' : undefined)} {...props} />;
}
`;

const result = await build({
  root: repository,
  configFile: false,
  publicDir: false,
  resolve: {
    alias: [
      { find: '@/i18n/useCopy', replacement: copy },
      { find: '@/i18n/marketing', replacement: copy },
      { find: 'react-i18next', replacement: copy },
      { find: 'react-router-dom', replacement: router },
      { find: '@', replacement: resolve(repository, 'src') },
    ],
  },
  esbuild: { jsx: 'automatic' },
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  plugins: [{
    name: 'v5-review-only',
    enforce: 'pre',
    resolveId(id) {
      if ([entry, copy, router].includes(id)) return `\0${id}`;
    },
    load(id) {
      const sources = { [entry]: sharedEntry, [copy]: localizedCopy, [router]: previewLinks };
      const name = id.slice(1);
      if (id.startsWith('\0') && Object.hasOwn(sources, name)) {
        return transformWithEsbuild(sources[name], name, { loader: 'jsx', jsx: 'automatic' });
      }
    },
    transform(source, id) {
      if (id === header) return source.replaceAll('"/prai-logo.png"', '"../../public/prai-logo.png"');
      if (id !== invitation) return;
      const image = '/images/earth-sunrise-iss070-full.jpg';
      if (!source.includes(image)) throw new Error('The invitation image changed. Review its preview asset path.');
      return source.replace(image, '../../public' + image);
    },
  }],
  build: {
    write: false,
    assetsInlineLimit: 0,
    cssMinify: false,
    rollupOptions: { input: entry },
    lib: { entry, name: 'PrimitiveAIReview', formats: ['iife'], fileName: () => 'live-hero.js' },
  },
});

const outputs = Array.isArray(result) ? result.flatMap(build => build.output) : result.output;
const script = outputs.find(file => file.type === 'chunk');
const css = outputs.find(file => file.type === 'asset' && file.fileName.endsWith('.css'));
if (!script || !css) throw new Error('The preview bundle is missing JavaScript or styles.');

const stylesheet = postcss.parse(css.source);
const navigationStyles = stylesheet.clone();
const bodyScope = ':where(body[data-v5-preview])';
const navigationClass = /\.(?:site-header|nav-capsule|site-brand|desktop-navigation|desktop-nav-actions|language-trigger|language-menu|language-item|nav-contact|mobile-menu[\w-]*|mobile-nav-section|mobile-language[\w-]*)(?![\w-])/;
navigationStyles.walkRules(rule => {
  const selectors = rule.selectors.flatMap(selector => {
    if (navigationClass.test(selector)) {
      if (selector.startsWith('html[lang="vi"] ')) {
        return ['body[data-v5-nav-language="vi"] ' + selector.slice('html[lang="vi"] '.length)];
      }
      return [`${bodyScope} ${selector}`];
    }
    if (/^\.site-button(?![\w-])/.test(selector)) {
      return ['.site-header', '.mobile-menu'].map(container => `${bodyScope} ${container} ${selector}`);
    }
    return [];
  });
  if (selectors.length) rule.selectors = selectors;
  else rule.remove();
});
navigationStyles.walkAtRules(rule => {
  if (rule.nodes && !rule.nodes.length) rule.remove();
  else if (['font-face', 'property', 'keyframes', '-webkit-keyframes'].includes(rule.name)) rule.remove();
});
navigationStyles.prepend(`
${bodyScope} :is(#v5-live-nav, .mobile-menu, .language-menu) {
  --blue: #044eff;
  --blue-hover: #003ed4;
  --ink: #101a35;
  --cyan: #0fb4e0;
  --site-border: #cbdcf0;
  color: var(--ink);
  font: 16px/1.5 Inter, system-ui, -apple-system, sans-serif;
}
${bodyScope} :is(#v5-live-nav, .mobile-menu, .language-menu, #v5-live-nav *, .mobile-menu *, .language-menu *) {
  box-sizing: border-box;
}
${bodyScope} :where(#v5-live-nav, .mobile-menu, .language-menu) :where(a) {
  color: inherit;
  text-decoration: none;
}
${bodyScope} :where(#v5-live-nav, .mobile-menu, .language-menu) :where(button) {
  padding: 0;
  font: inherit;
  cursor: pointer;
}
${bodyScope} :where(#v5-live-nav, .mobile-menu, .language-menu) :where(svg) {
  display: block;
  vertical-align: middle;
}
${bodyScope} :where(#v5-live-nav, .mobile-menu, .language-menu) :focus-visible {
  outline: 2px solid #044eff;
  outline-offset: 4px;
}
${bodyScope} .mobile-menu ul { margin: 0; list-style: none; }
${bodyScope} .mobile-menu .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
`);
const fontStylesheet = postcss.root();
const fontPackage = resolve(repository, 'node_modules/@fontsource/inter');
for (const weight of [400, 500, 600, 700, 800, 900]) {
  const inter = postcss.parse(await readFile(resolve(fontPackage, `${weight}.css`), 'utf8'));
  for (const rule of inter.nodes.filter(node => node.type === 'atrule' && node.name === 'font-face')) {
    const sources = rule.nodes.find(node => node.type === 'decl' && node.prop === 'src');
    const file = sources?.value.match(/inter-(?:vietnamese|latin-ext|latin)-\d+-normal\.woff2/)?.[0];
    if (!file) continue;
    const font = await readFile(resolve(fontPackage, 'files', file));
    sources.value = `url(data:font/woff2;base64,${font.toString('base64')}) format('woff2')`;
    fontStylesheet.append(rule.clone());
  }
}
stylesheet.walkRules(rule => {
  rule.selector = rule.selector
    .replace(/\bhtml(\[[^\]]+\]|\.[\w-]+|:not\(\[[^\]]+\]\))/g, ':host($1)')
    .replace(/(?<![\w.:#-])(?:html|body)(?![\w-])|:root/g, ':host')
    .replace(/\bmain(?=\[data-page)/g, 'v5-page');
});
stylesheet.append(':host { display: block; font-family: Inter, system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }');
stylesheet.append('v5-page { display: block; } v5-page > section[hidden] { display: none; }');
// Register font faces in the document so Chromium can use them inside both shadow roots.
const fontRegistration = `\nconst v5Fonts = document.createElement('style');\nv5Fonts.textContent = ${JSON.stringify(fontStylesheet.toString())};\ndocument.head.append(v5Fonts);\n`;
await writeFile(resolve(packageDirectory, script.fileName), fontRegistration + script.code);
await writeFile(resolve(packageDirectory, cssPath), stylesheet.toString());
await writeFile(resolve(packageDirectory, 'live-nav.css'), navigationStyles.toString());
