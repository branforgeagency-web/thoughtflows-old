/**
 * Prerender: after `react-scripts build`, load every public route in jsdom,
 * let React render it, and save the finished HTML to build/<route>/index.html.
 * Crawlers that don't run JavaScript (Screaming Frog text mode, Bing,
 * WhatsApp/Facebook previews) then see real content, links, H1 and meta tags.
 * The browser still boots the normal React app on top (createRoot replaces it).
 *
 * Usage: node scripts/prerender.js            (all routes from sitemap + extras)
 *        node scripts/prerender.js /about /cpc (only these routes)
 */
const fs = require('fs');
const path = require('path');
const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');

const ORIGIN = 'https://www.thoughtflows.in';
const BUILD_DIR = path.resolve(process.env.PRERENDER_BUILD_DIR || path.join(__dirname, '../build'));
const SETTLE_MS = Number(process.env.PRERENDER_SETTLE_MS || 3500); // time for data, animations, Helmet
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 3);

// Routes that exist in App.js but aren't in sitemap.xml (aliases kept as real pages)
const EXTRA_ROUTES = [
  '/fy-2027-icd-10-cm-updates',
  '/best-medical-coding-course-in-india',
  '/blog/best-medical-coding-course-in-india-fees-duration',
  '/aapc-ceus',
];
// Never prerender these
const SKIP_ROUTES = new Set(['/admin']);

const templatePath = path.join(BUILD_DIR, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('[prerender] build/index.html not found. Run the build first.');
  process.exit(1);
}
const TEMPLATE = fs.readFileSync(templatePath, 'utf8');
// Keep an untouched copy of the empty app shell (useful as an SPA fallback)
fs.writeFileSync(path.join(BUILD_DIR, 'shell.html'), TEMPLATE, 'utf8');

function routesFromSitemap() {
  const p = path.join(BUILD_DIR, 'sitemap.xml');
  if (!fs.existsSync(p)) return ['/'];
  const xml = fs.readFileSync(p, 'utf8');
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1].replace(/^https?:\/\/[^/]+/, '') || '/');
}

function normalise(r) {
  if (!r.startsWith('/')) r = '/' + r;
  if (r.length > 1) r = r.replace(/\/+$/, '');
  return r;
}

class LocalLoader extends ResourceLoader {
  fetch(url, options) {
    try {
      const u = new URL(url);
      if (u.origin === ORIGIN) {
        const file = path.join(BUILD_DIR, decodeURIComponent(u.pathname));
        if (file.startsWith(BUILD_DIR) && /\.(js|css|json)$/.test(file) && fs.existsSync(file)) {
          return Promise.resolve(fs.readFileSync(file));
        }
      }
    } catch (e) { /* ignore */ }
    // Analytics, pixels, fonts, images, APIs: return nothing
    return Promise.resolve(Buffer.from(''));
  }
}

function installBrowserStubs(window) {
  const noop = () => {};
  class IO {
    constructor(cb) { this.cb = cb; }
    observe(el) {
      // Report everything as visible so in-view animations/content render
      setTimeout(() => this.cb([{ isIntersecting: true, intersectionRatio: 1, target: el,
        boundingClientRect: el.getBoundingClientRect(), intersectionRect: el.getBoundingClientRect(),
        rootBounds: null, time: Date.now() }], this), 0);
    }
    unobserve() {} disconnect() {} takeRecords() { return []; }
  }
  window.IntersectionObserver = IO;
  window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
  window.matchMedia = window.matchMedia || ((q) => ({ matches: false, media: q, onchange: null,
    addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop, dispatchEvent: () => false }));
  window.scrollTo = noop;
  window.scroll = noop;
  window.HTMLElement.prototype.scrollIntoView = noop;
  // 2D canvas: harmless no-op context. WebGL: unsupported (components fall back).
  const ctx2d = new Proxy({}, {
    get: (t, k) => (k in t ? t[k] : (k === 'canvas' ? null :
      (k === 'measureText' ? () => ({ width: 0 }) :
      (k === 'getImageData' || k === 'createImageData') ? () => ({ data: [] }) :
      (k === 'createLinearGradient' || k === 'createRadialGradient' || k === 'createPattern') ? () => ({ addColorStop: noop }) : noop))),
    set: (t, k, v) => { t[k] = v; return true; },
  });
  window.HTMLCanvasElement.prototype.getContext = function (type) { return type === '2d' ? ctx2d : null; };
  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  window.HTMLMediaElement.prototype.pause = noop;
  window.HTMLMediaElement.prototype.load = noop;
  if (!window.fetch) window.fetch = () => Promise.reject(new Error('fetch disabled during prerender'));
  window.__PRERENDER__ = true;
}

const templateScriptSrcs = new Set([...TEMPLATE.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]));

function cleanUp(document) {
  // Remove scripts added at runtime (webpack chunks are reloaded by the app; pixels/analytics re-inject themselves)
  document.querySelectorAll('script[src]').forEach((s) => {
    if (!templateScriptSrcs.has(s.getAttribute('src'))) s.remove();
  });
  document.querySelectorAll('script:not([src])').forEach((s) => {
    const type = (s.getAttribute('type') || '').toLowerCase();
    if (type === 'application/ld+json') return;
    if (!TEMPLATE.includes(s.textContent.trim().slice(0, 80))) s.remove();
  });
  // Helmet owns these tags: drop any static duplicates so each page has exactly one
  document.querySelectorAll('meta[data-rh][name], meta[data-rh][property]').forEach((m) => {
    const attr = m.hasAttribute('name') ? 'name' : 'property';
    const sel = `meta[${attr}="${m.getAttribute(attr)}"]:not([data-rh])`;
    document.querySelectorAll(sel).forEach((d) => d.remove());
  });
  if (document.querySelector('link[rel="canonical"][data-rh]')) {
    document.querySelectorAll('link[rel="canonical"]:not([data-rh])').forEach((d) => d.remove());
  }
  // Drop jsdom-only leftovers
  document.querySelectorAll('iframe[src*="facebook"], iframe[src*="google"]').forEach((n) => n.remove());
}

function carryOverJsonLd(document, existingHtml) {
  if (!existingHtml) return;
  const blocks = [...existingHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1].trim());
  const present = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent.trim());
  blocks.forEach((b) => {
    if (!present.includes(b) && !TEMPLATE.includes(b)) {
      const s = document.createElement('script');
      s.setAttribute('type', 'application/ld+json');
      s.textContent = b;
      document.head.appendChild(s);
    }
  });
}

function outFile(route) {
  // The homepage goes to index-home.html, NOT index.html. index.html stays the plain app
  // shell, because hosting rewrites send unknown URLs to it: if it held the homepage,
  // every such URL would get the homepage's title, description and canonical.
  return route === '/' ? path.join(BUILD_DIR, 'index-home.html') : path.join(BUILD_DIR, route.slice(1), 'index.html');
}

function renderRoute(route) {
  return new Promise((resolve) => {
    const errors = [];
    const vc = new VirtualConsole();
    vc.on('jsdomError', (e) => errors.push(String(e && e.message || e).split('\n')[0]));
    let dom;
    try {
      dom = new JSDOM(TEMPLATE, {
        url: ORIGIN + route,
        runScripts: 'dangerously',
        resources: new LocalLoader(),
        pretendToBeVisual: true,
        virtualConsole: vc,
        beforeParse: installBrowserStubs,
      });
    } catch (e) {
      return resolve({ route, ok: false, reason: e.message });
    }
    const { window } = dom;
    setTimeout(() => {
      try {
        const doc = window.document;
        const finalPath = normalise(window.location.pathname);
        const root = doc.getElementById('root');
        if (finalPath !== route) {
          window.close();
          return resolve({ route, ok: false, reason: `redirects to ${finalPath} (skipped)`, skip: true });
        }
        if (!root || root.children.length === 0 || root.textContent.trim().length < 50) {
          window.close();
          return resolve({ route, ok: false, reason: 'rendered empty', errors });
        }
        cleanUp(doc);
        const file = outFile(route);
        const existing = route !== '/' && fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
        carryOverJsonLd(doc, existing);
        const html = '<!DOCTYPE html>' + doc.documentElement.outerHTML;
        const h1 = doc.querySelector('h1');
        const desc = doc.querySelector('meta[name="description"]');
        window.close();
        resolve({ route, ok: true, html, file,
          h1: h1 ? h1.textContent.trim().slice(0, 60) : '(no h1)',
          desc: desc ? desc.getAttribute('content').slice(0, 60) : '(no description)',
          links: (html.match(/<a\s[^>]*href="\//g) || []).length, errors });
      } catch (e) {
        try { window.close(); } catch (_) {}
        resolve({ route, ok: false, reason: e.message, errors });
      }
    }, SETTLE_MS);
  });
}

async function main() {
  const cli = process.argv.slice(2);
  let routes = cli.length ? cli : [...routesFromSitemap(), ...EXTRA_ROUTES];
  routes = [...new Set(routes.map(normalise))].filter((r) => !SKIP_ROUTES.has(r));

  console.log(`[prerender] ${routes.length} routes, concurrency ${CONCURRENCY}`);
  const results = [];
  const queue = [...routes];
  async function worker() {
    while (queue.length) {
      const r = queue.shift();
      const res = await renderRoute(r);
      if (res.ok) {
        fs.mkdirSync(path.dirname(res.file), { recursive: true });
        fs.writeFileSync(res.file, res.html, 'utf8');
        console.log(`  ✓ ${r}  | h1: ${res.h1} | desc: ${res.desc}… | links: ${res.links}`);
      } else {
        if (!res.skip) {
          // Keep the hosting rewrite for this route working: serve the normal app shell instead
          const file = outFile(r);
          fs.mkdirSync(path.dirname(file), { recursive: true });
          if (r !== '/' && !fs.existsSync(file)) fs.writeFileSync(file, TEMPLATE, 'utf8');
          if (r === '/') fs.writeFileSync(file, TEMPLATE, 'utf8');
        }
        console.log(`  ${res.skip ? '-' : '✗'} ${r}  ${res.reason}${res.errors && res.errors.length ? ' | ' + res.errors[0] : ''}`);
      }
      results.push(res);
    }
  }
  // Write '/' (build/index.html) only after every other route is done
  const home = routes.includes('/') ? routes.splice(routes.indexOf('/'), 1) : [];
  queue.splice(0, queue.length, ...routes);
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  if (home.length) { queue.push('/'); await worker(); }

  const ok = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok && !r.skip);
  console.log(`[prerender] done: ${ok} rendered, ${results.length - ok - failed.length} skipped, ${failed.length} failed`);
  // Never fail the deploy because of prerendering: failed routes simply keep the normal SPA shell.
}

main().catch((e) => { console.error('[prerender] fatal:', e); process.exit(0); });
