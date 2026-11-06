import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Full-screen, cinematic client/partner showcase. Hovering (or tapping, on
 * touch devices) a name swaps the entire section background to that
 * client's image with a horizontal-wipe reveal. Self-contained: styles are
 * injected via the <style> tag below, no external CSS file or animation
 * library required.
 *
 * @typedef {Object} ShowcaseClient
 * @property {string} name
 * @property {string} image
 * @property {string} [href] - internal route ("/...") or external URL ("https://...")
 *
 * @param {Object} props
 * @param {string} [props.brand="Arc Atelier"]
 * @param {{label: string, href: string}[]} [props.navLinks]
 * @param {string} [props.sectionLabel="Selected Partners"]
 * @param {ShowcaseClient[]} [props.clients]
 * @param {string[]} [props.images] - optional separate image list, cycled with modulo if it doesn't match clients.length
 * @param {string} [props.footerLeft="Archive No. 24"]
 * @param {string} [props.footerRight="Independent Creative Studio"]
 * @param {string} [props.backgroundColor="#0a0a0a"]
 */
export function ClientShowcase({
  brand = "Arc Atelier",
  navLinks = [
    { label: "Index", href: "#" },
    { label: "Work", href: "#" },
    { label: "Studio", href: "#" },
  ],
  sectionLabel = "Selected Partners",
  clients = DEFAULT_CLIENTS,
  images,
  footerLeft = "Archive No. 24",
  footerRight = "Independent Creative Studio",
  backgroundColor = "#0a0a0a",
}) {
  const resolvedClients = useMemo(() => {
    if (!images || images.length === 0) return clients;
    return clients.map((c, i) => ({
      ...c,
      image: c.image || images[i % images.length],
    }));
  }, [clients, images]);

  const [activeIndex, setActiveIndex] = useState(null);
  const [supportsHover, setSupportsHover] = useState(true);
  const rootRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setSupportsHover(mq.matches);
    const onChange = (e) => setSupportsHover(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  // Preload so the first hover/tap never feels delayed.
  useEffect(() => {
    resolvedClients.forEach((c) => {
      if (!c.image) return;
      const img = new window.Image();
      img.src = c.image;
    });
  }, [resolvedClients]);

  const handleEnter = (index) => {
    if (supportsHover) setActiveIndex(index);
  };

  const handleLeave = () => {
    if (supportsHover) setActiveIndex(null);
  };

  const handleFocus = (index) => setActiveIndex(index);

  const handleItemClick = (e, index) => {
    if (supportsHover) return; // normal link behavior on devices with real hover
    if (activeIndex !== index) {
      // First tap on a touch device: preview only, don't navigate yet.
      e.preventDefault();
      setActiveIndex(index);
    }
    // Second tap on the already-active item: let the link navigate.
  };

  return (
    <section
      ref={rootRef}
      className="cs-root"
      style={{ "--cs-bg": backgroundColor }}
      onMouseLeave={handleLeave}
      aria-label={`${sectionLabel}: ${brand}`}
    >
      <style>{CLIENT_SHOWCASE_CSS}</style>

      <div className="cs-default-bg" aria-hidden="true" />
      <div className="cs-grain" aria-hidden="true" />

      <div className="cs-image-stack" aria-hidden="true">
        {resolvedClients.map((c, i) => (
          <img
            key={`${c.name}-${i}`}
            src={c.image}
            alt=""
            className={`cs-bg-image${activeIndex === i ? " is-active" : ""}`}
            style={{ zIndex: activeIndex === i ? 2 : 1 }}
            loading="lazy"
          />
        ))}
      </div>

      <div className="cs-overlay-h" aria-hidden="true" />
      <div className="cs-overlay-v" aria-hidden="true" />

      <header className="cs-header">
        <span className="cs-brand">{brand}</span>
        <nav className="cs-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="cs-nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="cs-content">
        <span className="cs-label">{sectionLabel}</span>
        <p className="cs-client-wall">
          {resolvedClients.map((c, i) => {
            const isLast = i === resolvedClients.length - 1;
            const isInternal = c.href && c.href.startsWith("/");
            const common = {
              className: `cs-client${activeIndex === i ? " is-active" : ""}`,
              onMouseEnter: () => handleEnter(i),
              onFocus: () => handleFocus(i),
              onBlur: () => setActiveIndex(null),
              onClick: (e) => handleItemClick(e, i),
            };
            return (
              <React.Fragment key={c.name}>
                {c.href ? (
                  isInternal ? (
                    <Link to={c.href} {...common}>
                      {c.name}
                    </Link>
                  ) : (
                    <a href={c.href} {...common}>
                      {c.name}
                    </a>
                  )
                ) : (
                  <button type="button" {...common}>
                    {c.name}
                  </button>
                )}
                <span className="cs-punct">{isLast ? "." : ", "}</span>
              </React.Fragment>
            );
          })}
        </p>
      </div>

      <footer className="cs-footer">
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </footer>
    </section>
  );
}

const DEFAULT_CLIENTS = [
  { name: "Aster Labs", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90" },
  { name: "Northline", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=90" },
  { name: "Form House", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=90" },
  { name: "Lumen Audio", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=90" },
  { name: "Nova Works", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=2400&q=90" },
  { name: "Mono Studio", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=90" },
  { name: "Silver Frame", image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=2400&q=90" },
  { name: "Orbital Design", image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=2400&q=90" },
  { name: "Field Theory", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90" },
  { name: "Paper District", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2400&q=90" },
  { name: "Quiet Systems", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=90" },
  { name: "Vela Objects", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=90" },
];

const CLIENT_SHOWCASE_CSS = `
.cs-root {
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background: var(--cs-bg, #0a0a0a);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.cs-default-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 55% at 30% 70%, rgba(255, 255, 255, 0.06), transparent 70%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.035) 0%, transparent 55%),
    var(--cs-bg, #0a0a0a);
  z-index: 0;
}

.cs-grain {
  position: absolute;
  inset: -20%;
  z-index: 1;
  opacity: 0.035;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@media (prefers-reduced-motion: no-preference) {
  .cs-grain { animation: csGrainShift 9s steps(8) infinite; }
}
@keyframes csGrainShift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-6%, 4%); }
}
@media (prefers-reduced-motion: reduce) {
  .cs-grain { display: none; }
}

.cs-image-stack {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.cs-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transform: scale(1.12);
  filter: blur(3px);
  clip-path: inset(50% 0 50% 0);
  transition:
    clip-path 900ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 650ms ease,
    filter 900ms ease;
}

.cs-bg-image.is-active {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
  clip-path: inset(0 0 0 0);
}

@media (prefers-reduced-motion: reduce) {
  .cs-bg-image {
    transform: none;
    filter: none;
    clip-path: inset(0 0 0 0);
    transition: opacity 250ms ease;
  }
}

.cs-overlay-h {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.72) 0%,
    rgba(0, 0, 0, 0.3) 45%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.cs-overlay-v {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0) 22%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.72) 100%
  );
}

.cs-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  color: #fff;
}

.cs-brand {
  font-family: "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cs-nav {
  display: flex;
  gap: 1.75rem;
}

.cs-nav-link {
  position: relative;
  display: inline-block;
  font-family: "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  padding-bottom: 3px;
}

.cs-nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
}

.cs-nav-link:hover::after,
.cs-nav-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.cs-nav-link:focus-visible {
  outline: 1px solid rgba(255, 255, 255, 0.6);
  outline-offset: 4px;
}

.cs-content {
  position: absolute;
  left: 0;
  bottom: 4.4rem;
  z-index: 5;
  width: 90%;
  max-width: 1400px;
  padding: 0 2.4rem;
}

.cs-label {
  display: inline-block;
  margin-bottom: 1.1rem;
  font-family: "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.cs-client-wall {
  margin: 0;
  text-align: left;
  font-size: clamp(2rem, 4.4vw, 4.8rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #fff;
}

.cs-client {
  position: relative;
  display: inline-block;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: #fff;
  cursor: pointer;
  opacity: 0.38;
  transform: translateY(0);
  transition: opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

a.cs-client {
  text-decoration: none;
}

.cs-client::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.06em;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
}

.cs-client:hover,
.cs-client:focus-visible,
.cs-client.is-active {
  opacity: 1;
  transform: translateY(-0.06em);
}

.cs-client:hover::after,
.cs-client:focus-visible::after,
.cs-client.is-active::after {
  transform: scaleX(1);
}

.cs-client:focus-visible {
  outline: none;
}

.cs-punct {
  color: rgba(255, 255, 255, 0.5);
}

.cs-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 2.4rem;
  font-family: "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.cs-footer span:last-child {
  text-align: right;
}

@media (max-width: 900px) {
  .cs-overlay-h {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.55) 100%
    );
  }
  .cs-content { width: 100%; bottom: 5.4rem; }
  .cs-client-wall { font-size: clamp(1.7rem, 5.6vw, 3rem); }
}

@media (max-width: 640px) {
  .cs-root { height: 100svh; min-height: 100svh; overflow-y: auto; }
  .cs-header { padding: 1.25rem 1.25rem; flex-wrap: wrap; gap: 0.6rem; }
  .cs-nav { flex-wrap: wrap; gap: 1rem; }
  .cs-content { padding: 0 1.25rem; bottom: 5.6rem; }
  .cs-client-wall { font-size: clamp(1.45rem, 7vw, 2.15rem); }
  .cs-client::after { height: 2px; }
  .cs-footer {
    padding: 1rem 1.25rem;
    flex-wrap: wrap;
  }
  .cs-footer span:last-child { text-align: right; margin-left: auto; }
}
`;
