import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { mediaUrl } from "../config/media";

const backdropPhoto = mediaUrl("images/Interiors/ameerpet/ameerpet-interior-06.jpg");

const STATS = [
  { value: "14+", label: "IN-DEPTH GUIDES", tone: "amber" },
  { value: "FY 2027", label: "ICD-10-CM UPDATES", tone: "teal" },
  { value: "100%", label: "MENTOR REVIEWED", tone: "dark" },
  { value: "4", label: "CORE SPECIALTIES", tone: "dark" },
];

const PILLARS = ["CPC PREP", "ICD-10 UPDATES", "AI CODING", "CAREER ROADMAPS"];

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,500;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,400..800;1,9..40,400..700&display=swap");

.tf-blog-mint {
  position: relative;
  inline-size: 100%;
  overflow: clip;
  background-color: #eaf9f8;
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  color: #08292b;
  isolation: isolate;
}

.tf-blog-mint *,
.tf-blog-mint *::before,
.tf-blog-mint *::after {
  box-sizing: border-box;
}

.tf-blog-mint__bg-img {
  position: absolute;
  inset: 0;
  z-index: -2;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  object-position: right center;
  display: block;
}

/* Soft mint-aqua directional wash with subtle transparency behind left copy */
.tf-blog-mint__wash {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    linear-gradient(
      95deg,
      rgba(235, 249, 248, 0.8) 0%,
      rgba(238, 251, 250, 0.72) 38%,
      rgba(235, 249, 248, 0.52) 56%,
      rgba(229, 248, 246, 0.28) 76%,
      rgba(215, 245, 243, 0.12) 100%
    ),
    radial-gradient(36rem 24rem at 85% 30%, rgba(20, 184, 166, 0.12), transparent 70%);
}

.tf-blog-mint__inner {
  max-inline-size: 1400px;
  margin-inline: auto;
  padding-block: clamp(2.5rem, 5dvh, 3.75rem) clamp(1.75rem, 3.5dvh, 2.5rem);
  padding-inline: clamp(1.25rem, 3.5vw, 3rem);
}

@media (min-width: 1024px) {
  .tf-blog-mint__inner {
    padding-block-start: clamp(6.75rem, 11dvh, 8.25rem);
  }
}

.tf-blog-mint__copy {
  max-inline-size: 680px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.tf-blog-mint__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 0.36rem;
  padding-inline: 0.9rem;
  border-radius: 999px;
  background: rgba(13, 148, 136, 0.1);
  border: 1px solid rgba(13, 148, 136, 0.24);
  color: #0f766e;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.tf-blog-mint__kicker-dot {
  inline-size: 0.42rem;
  block-size: 0.42rem;
  border-radius: 999px;
  background: #14b8a6;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.22);
}

.tf-blog-mint__title {
  margin-block: 1.15rem 0;
  font-family: "DM Sans", Arial, Helvetica, sans-serif !important;
  font-size: clamp(2.35rem, 1.5rem + 2.6vw, 4.15rem);
  font-weight: 800 !important;
  line-height: 1.04;
  letter-spacing: -0.03em;
  color: #07292b;
  text-wrap: balance;
}

.tf-blog-mint__serif-italic {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif !important;
  font-style: italic !important;
  font-weight: 600 !important;
  color: #0d9488;
  padding-inline-end: 0.08em;
}

.tf-blog-mint__lead {
  max-inline-size: 50ch;
  margin-block: 1.15rem 0;
  font-size: clamp(0.975rem, 0.92rem + 0.28vw, 1.075rem);
  line-height: 1.62;
  color: #3d5a5c;
}

.tf-blog-mint__lead strong {
  color: #07292b;
  font-weight: 700;
}

.tf-blog-mint__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  margin-block-start: 1.75rem;
}

.tf-blog-mint__cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-block-size: 2.85rem;
  padding-block: 0.6rem;
  padding-inline: 1.45rem;
  border-radius: 999px;
  background: #0d6e66;
  color: #ffffff !important;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(13, 110, 102, 0.24);
  transition: transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease;
}

.tf-blog-mint__cta-primary:hover {
  transform: translateY(-2px);
  background: #09544e;
  box-shadow: 0 14px 28px rgba(13, 110, 102, 0.3);
}

.tf-blog-mint__cta-primary:focus-visible,
.tf-blog-mint__cta-secondary:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 3px;
}

.tf-blog-mint__cta-primary svg {
  inline-size: 0.95rem;
  block-size: 0.95rem;
  transition: transform 220ms ease;
}

.tf-blog-mint__cta-primary:hover svg {
  transform: translateX(3px);
}

.tf-blog-mint__cta-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-block-size: 2.85rem;
  padding-block: 0.6rem;
  padding-inline: 1.35rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(7, 41, 43, 0.16);
  color: #07292b !important;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: transform 220ms ease, background-color 220ms ease, border-color 220ms ease;
}

.tf-blog-mint__cta-secondary:hover {
  transform: translateY(-2px);
  background: #ffffff;
  border-color: rgba(13, 148, 136, 0.45);
}

/* 4-column editorial stats row */
.tf-blog-mint__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem clamp(1.75rem, 3.5vw, 3rem);
  margin-block-start: clamp(2rem, 4dvh, 2.75rem);
}

.tf-blog-mint__stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tf-blog-mint__stat-value {
  font-size: clamp(1.35rem, 1.1rem + 0.8vw, 1.75rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.tf-blog-mint__stat-value--amber {
  color: #f59e0b;
}

.tf-blog-mint__stat-value--teal {
  color: #0d9488;
}

.tf-blog-mint__stat-value--dark {
  color: #07292b;
}

.tf-blog-mint__stat-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #547274;
}

/* Bottom pillar strip */
.tf-blog-mint__pillars {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.9rem;
  margin-block-start: clamp(2rem, 4dvh, 2.75rem);
  padding-block-start: 1.1rem;
  border-block-start: 1px solid rgba(7, 41, 43, 0.08);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5a7a7c;
}

.tf-blog-mint__pillar-sep {
  color: rgba(7, 41, 43, 0.22);
}

@media (max-width: 900px) {
  .tf-blog-mint__wash {
    background: linear-gradient(
      180deg,
      rgba(235, 249, 248, 0.95) 0%,
      rgba(238, 251, 250, 0.88) 62%,
      rgba(235, 249, 248, 0.65) 100%
    );
  }
}

@media (prefers-reduced-motion: reduce) {
  .tf-blog-mint__cta-primary,
  .tf-blog-mint__cta-primary svg,
  .tf-blog-mint__cta-secondary {
    transition: none;
  }
}
`;

export default function BlogBanner() {
  const prefersReducedMotion = useReducedMotion();

  const handleScrollToArticles = (e) => {
    e.preventDefault();
    const target = document.getElementById("blog-articles");
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  const motionProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      className="tf-blog-mint"
      aria-label="ThoughtFlows Blog Banner"
    >
      <style>{CSS}</style>

      <img
        src={backdropPhoto}
        alt=""
        aria-hidden="true"
        className="tf-blog-mint__bg-img"
        loading="eager"
        fetchPriority="high"
      />
      <div className="tf-blog-mint__wash" aria-hidden="true" />

      <div className="tf-blog-mint__inner">
        <div className="tf-blog-mint__copy">
          <motion.span
            className="tf-blog-mint__kicker"
            {...motionProps(0.05)}
          >
            <span className="tf-blog-mint__kicker-dot" aria-hidden="true" />
            Knowledge Hub &bull; Journal &bull; Live
          </motion.span>

          <motion.h1
            className="tf-blog-mint__title"
            {...motionProps(0.12)}
          >
            Insights that
            <br />
            <em className="tf-blog-mint__serif-italic">code</em> healthcare&apos;s
            future.
          </motion.h1>

          <motion.p
            className="tf-blog-mint__lead"
            {...motionProps(0.18)}
          >
            <strong>ThoughtFlows Medical Coding Journal.</strong> Expert
            ICD-10-CM updates, AAPC CPC preparation strategies, AI coding
            guides, and career roadmaps — built for clarity from study to
            certification.
          </motion.p>

          <motion.div
            className="tf-blog-mint__actions"
            {...motionProps(0.24)}
          >
            <a
              className="tf-blog-mint__cta-primary"
              href="#blog-articles"
              onClick={handleScrollToArticles}
            >
              <span>Explore Articles</span>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8H13M9.5 4.5L13 8L9.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <Link
              className="tf-blog-mint__cta-secondary"
              to="/blog/fy-2027-icd-10-cm-updates"
            >
              Read FY 2027 ICD-10 Guide
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="tf-blog-mint__stats"
          {...motionProps(0.3)}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="tf-blog-mint__stat">
              <span
                className={`tf-blog-mint__stat-value tf-blog-mint__stat-value--${stat.tone}`}
              >
                {stat.value}
              </span>
              <span className="tf-blog-mint__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="tf-blog-mint__pillars"
          aria-label="Blog topics"
          {...motionProps(0.36)}
        >
          {PILLARS.map((pillar, idx) => (
            <React.Fragment key={pillar}>
              {idx > 0 && (
                <span className="tf-blog-mint__pillar-sep" aria-hidden="true">
                  |
                </span>
              )}
              <span>{pillar}</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
