import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Clock, Phone } from "lucide-react";
import "./LuxSections.css";

/**
 * Building blocks for branch landing-page content below the banner.
 * Same look as BranchLuxBanner / CbeArchHero: navy · teal · gold,
 * Playfair Display headings, Plus Jakarta Sans body, real interior photos only.
 */

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

/** Section heading: gold pill eyebrow, Playfair title with teal italic accent, gold rule. */
export const LuxHead = ({ eyebrow, title, accent, intro, align = "center", light = false }) => (
  <motion.div className={`lux-head is-${align} ${light ? "is-light" : ""}`} {...fadeUp}>
    {eyebrow && (
      <span className="lux-pill">
        <Sparkles size={13} /> {eyebrow}
      </span>
    )}
    {title && (
      <h2 className="lux-title">
        {title}
        {accent && <> <span className="lux-accent">{accent}</span></>}
      </h2>
    )}
    <span className="lux-rule" />
    {intro && <p className="lux-intro">{intro}</p>}
  </motion.div>
);

/** Full-width section wrapper. tone: "light" | "tint" | "navy" */
export const LuxSection = ({ tone = "light", id, children, className = "" }) => (
  <section id={id} className={`lux-section tone-${tone} ${className}`}>
    <div className="lux-container">{children}</div>
  </section>
);

/** Text + photo side by side. */
export const LuxSplit = ({ image, imageAlt, reverse = false, eyebrow, title, accent, children, badge }) => (
  <div className={`lux-split ${reverse ? "is-reverse" : ""}`}>
    <motion.figure className="lux-split-media" {...fadeUp}>
      <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      {badge && <figcaption className="lux-photo-badge">{badge}</figcaption>}
    </motion.figure>
    <motion.div className="lux-split-copy" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
      {title && <LuxHead eyebrow={eyebrow} title={title} accent={accent} align="left" />}
      <div className="lux-prose">{children}</div>
    </motion.div>
  </div>
);

/** Stacked title + paragraph blocks (used inside LuxSplit). blocks: [{ title, text }] */
export const LuxStack = ({ blocks }) => (
  <div className="lux-stack">
    {blocks.map((b) => (
      <div key={b.title} className="lux-stack-item">
        <h3>{b.title}</h3>
        <p>{b.text}</p>
      </div>
    ))}
  </div>
);

/** Alternating photo / text rows. items: [{ title, text, image, imageAlt, badge }] */
export const LuxFeatureRows = ({ items }) => (
  <div className="lux-rows">
    {items.map((it, i) => (
      <motion.article key={it.title} className={`lux-row ${i % 2 ? "is-reverse" : ""}`} {...fadeUp}>
        <figure className="lux-row-media">
          <img src={it.image} alt={it.imageAlt || it.title} loading="lazy" decoding="async" />
          {it.badge && <figcaption className="lux-photo-badge">{it.badge}</figcaption>}
        </figure>
        <div className="lux-row-copy">
          <span className="lux-row-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </div>
      </motion.article>
    ))}
  </div>
);

/** Photo cards in a grid. items: [{ title, text, image, imageAlt, badge }] */
export const LuxPhotoCards = ({ items }) => (
  <div className={`lux-cards cols-${Math.min(items.length, 3)}`}>
    {items.map((it, i) => (
      <motion.article
        key={it.title}
        className="lux-card"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: i * 0.08 }}
      >
        <figure className="lux-card-media">
          <img src={it.image} alt={it.imageAlt || it.title} loading="lazy" decoding="async" />
          {it.badge && <figcaption className="lux-photo-badge">{it.badge}</figcaption>}
        </figure>
        <div className="lux-card-body">
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </div>
      </motion.article>
    ))}
  </div>
);

/** Navy band for batch timings. chips: ["Morning batches — …", …] */
export const LuxBatchBand = ({ eyebrow, title, accent, paragraphs = [], chips = [] }) => (
  <LuxSection tone="navy">
    <LuxHead eyebrow={eyebrow} title={title} accent={accent} light />
    <motion.div className="lux-band-body" {...fadeUp}>
      {paragraphs[0] && <p>{paragraphs[0]}</p>}
      {chips.length > 0 && (
        <ul className="lux-chips">
          {chips.map((c) => (
            <li key={c}>
              <Clock size={16} /> {c}
            </li>
          ))}
        </ul>
      )}
      {paragraphs.slice(1).map((p) => (
        <p key={p}>{p}</p>
      ))}
    </motion.div>
  </LuxSection>
);

/** Values grid. items: [{ icon: LucideIcon, title, text }] */
export const LuxValues = ({ items }) => (
  <div className="lux-values">
    {items.map(({ icon: Icon, title, text }, i) => (
      <motion.div
        key={title}
        className="lux-value"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: i * 0.06 }}
      >
        <span className="lux-value-icon">{Icon && <Icon size={22} strokeWidth={1.8} />}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </motion.div>
    ))}
  </div>
);

/** Call-to-action panel with optional side photo. blocks: [{ title, text }] */
export const LuxCTA = ({ blocks = [], image, imageAlt, to = "/contact", label = "Contact Us Now" }) => (
  <LuxSection tone="tint">
    <motion.div className={`lux-cta ${image ? "has-media" : ""}`} {...fadeUp}>
      <div className="lux-cta-copy">
        {blocks.map((b) => (
          <div key={b.title} className="lux-cta-block">
            <h2 className="lux-title">{b.title}</h2>
            <span className="lux-rule" />
            <p>{b.text}</p>
          </div>
        ))}
        <Link to={to} className="lux-btn">
          <Phone size={16} /> {label}
        </Link>
      </div>
      {image && (
        <figure className="lux-cta-media">
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
        </figure>
      )}
    </motion.div>
  </LuxSection>
);

/**
 * Wrap the rest of a branch page (FAQ, testimonials, exam slider, gallery, visit-us)
 * so older sections inherit the same fonts and colours.
 */
export const LuxScope = ({ children }) => <div className="lux-scope">{children}</div>;
