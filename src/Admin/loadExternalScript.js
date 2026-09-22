// Loads an external <script> once and caches the promise, so multiple
// components asking for the same CDN script don't inject it twice.
const loaded = {};

export function loadExternalScript(src) {
  if (loaded[src]) return loaded[src];
  loaded[src] = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
  return loaded[src];
}
