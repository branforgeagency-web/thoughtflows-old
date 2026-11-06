import React, { useState } from "react";
import passionPhoto from "../images/CoreValues/passion.jpg";
import loyaltyPhoto from "../images/CoreValues/loyalty.jpg";
import commitmentPhoto from "../images/CoreValues/commitment.jpg";
import responsibilityPhoto from "../images/CoreValues/responsibility.jpg";
import consistencyPhoto from "../images/CoreValues/consistency.jpg";
import creativityPhoto from "../images/CoreValues/creativity.jpg";

/**
 * Our Core Values — fluid image-accordion.
 * One panel expanded at a time; collapsed panels show a vertical label.
 * Each panel shows the photo in its true colors — only a light bottom
 * gradient is used for text legibility, no dark/navy tint over the image.
 */

const VALUES = [
  {
    id: "passion",
    title: "Passion",
    image: passionPhoto,
    position: "center 28%",
    description:
      "Driven by our passion for healthcare education, we strive to provide top-tier training, making Thoughtflows Medical Coding Academy the leading choice for aspiring medical coders.",
  },
  {
    id: "loyalty",
    title: "Loyalty",
    image: loyaltyPhoto,
    position: "center 68%",
    description:
      "We build lasting relationships with our trainees, fostering loyalty through our commitment to their professional growth and success in the medical coding field.",
  },
  {
    id: "commitment",
    title: "Commitment",
    image: commitmentPhoto,
    position: "center 35%",
    description:
      "We are fully committed to excellence in innovation, technology, and training, ensuring our trainees receive the highest standard of education and career development.",
  },
  {
    id: "responsibility",
    title: "Responsibility",
    image: responsibilityPhoto,
    position: "center 30%",
    description:
      "We take full responsibility for our trainees' learning journey, continuously offering support, mentorship, and opportunities for career advancement in medical coding.",
  },
  {
    id: "consistency",
    title: "Consistency",
    image: consistencyPhoto,
    position: "center 35%",
    description:
      "Our commitment to quality and continuous improvement ensures we maintain the trust of our students and industry partners, year after year.",
  },
  {
    id: "creativity",
    title: "Creativity",
    image: creativityPhoto,
    position: "center 22%",
    description:
      "Through creative teaching methods and dynamic learning modules, we simplify complex coding concepts, helping our trainees grasp and retain knowledge effectively.",
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function OurCore() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % VALUES.length);
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(i);
    }
  };

  return (
    <section className="tf-coreacc-section" id="core" aria-label="Our Core Values">
      <style>{CSS}</style>

      <span className="tf-coreacc-eyebrow tf-fadein">What Defines Us</span>

      <span className="tf-mask">
        <span className="tf-coreacc-title tf-maskup">Our Core Values</span>
      </span>

      <div className="tf-coreacc-track" role="tablist" aria-label="Core values">
        {VALUES.map((v, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={v.id}
              className={`tf-coreacc-panel${isActive ? " active" : ""}`}
              role="tab"
              tabIndex={0}
              aria-selected={isActive}
              aria-label={`${v.title}${isActive ? ", expanded" : ", show this value"}`}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            >
              <img
                src={v.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="tf-coreacc-bg"
                style={{ objectPosition: v.position }}
              />
              <span className="tf-coreacc-overlay" aria-hidden="true" />

              <span className="tf-coreacc-collapsed-label" aria-hidden={isActive}>
                {v.title}
              </span>

              <div className="tf-coreacc-content" aria-hidden={!isActive}>
                <span className="tf-coreacc-index">
                  0{i + 1} / 0{VALUES.length}
                </span>
                <h3 className="tf-coreacc-content-title">{v.title}</h3>
                <p className="tf-coreacc-content-copy">{v.description}</p>
              </div>

              {isActive && (
                <button
                  type="button"
                  className="tf-coreacc-arrow"
                  onClick={goToNext}
                  aria-label="Show next core value"
                >
                  <ArrowIcon />
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="tf-coreacc-indexfooter">
        <span className="tf-index-line" aria-hidden="true" />
        <span>ThoughtFlows Academy / 07</span>
      </div>
    </section>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

.tf-coreacc-section, .tf-coreacc-section * {
  box-sizing: border-box;
}

.tf-coreacc-section {
  position: relative;
  width: 100%;
  background: #F7F9FC;
  color: #101820;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  padding: clamp(40px, 5.5vw, 76px) clamp(24px, 5.5vw, 96px) clamp(48px, 6vw, 84px);
}

.tf-coreacc-eyebrow {
  display: table;
  align-items: center;
  max-width: 1360px;
  margin: 0 auto 20px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0B3A66;
  background: rgba(21, 174, 187, 0.09);
  border: 1px solid rgba(11, 58, 102, 0.14);
  border-radius: 999px;
  padding: 7px 16px;
}

.tf-mask { display: block; overflow: hidden; }

.tf-coreacc-title {
  display: block;
  max-width: 1360px;
  margin: 0 auto clamp(32px, 4.6vw, 52px);
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(30px, 3.6vw, 50px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #102A43;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateY(110%);
  animation: tfMaskUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 80ms;
}

/* ---------- Accordion track ---------- */
.tf-coreacc-track {
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  gap: 12px;
  height: clamp(360px, 36vw, 480px);
}

.tf-coreacc-panel {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  cursor: pointer;
  border-radius: clamp(22px, 2.6vw, 34px);
  flex: 0 0 clamp(80px, 6.6vw, 112px);
  background: #0B2436;
  transition: flex-basis 760ms cubic-bezier(0.22, 1, 0.36, 1),
              flex-grow 760ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tf-coreacc-panel.active {
  flex: 1 1 auto;
}

.tf-coreacc-panel:focus-visible {
  outline: 3px solid #15AEBB;
  outline-offset: 3px;
}

.tf-coreacc-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.045);
  transition: transform 950ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tf-coreacc-panel.active .tf-coreacc-bg {
  transform: scale(1);
}

.tf-coreacc-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(0deg, rgba(8, 16, 24, 0.8) 0%, rgba(8, 16, 24, 0.35) 22%, rgba(8, 16, 24, 0) 42%);
  pointer-events: none;
}

/* ---------- Collapsed label ---------- */
.tf-coreacc-collapsed-label {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(13px, 1.1vw, 16px);
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.85), 0 2px 14px rgba(0, 0, 0, 0.55);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  opacity: 1;
  transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tf-coreacc-panel.active .tf-coreacc-collapsed-label {
  opacity: 0;
  transform: rotate(180deg) scale(0.92);
  pointer-events: none;
}

/* ---------- Expanded content ---------- */
.tf-coreacc-content {
  position: absolute;
  z-index: 3;
  left: clamp(22px, 2.6vw, 38px);
  right: clamp(22px, 2.6vw, 38px);
  bottom: clamp(24px, 3vw, 40px);
  max-width: 48%;
  opacity: 0;
  transform: translateX(-18px);
  transition: opacity 480ms cubic-bezier(0.22, 1, 0.36, 1) 230ms,
              transform 480ms cubic-bezier(0.22, 1, 0.36, 1) 230ms;
}

.tf-coreacc-panel.active .tf-coreacc-content {
  opacity: 1;
  transform: translateX(0);
}

.tf-coreacc-index {
  display: block;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
}

.tf-coreacc-content-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(22px, 2.3vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8), 0 2px 16px rgba(0, 0, 0, 0.45);
  margin: 0 0 10px;
}

.tf-coreacc-content-copy {
  font-size: clamp(12.5px, 0.95vw, 14px);
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75), 0 2px 12px rgba(0, 0, 0, 0.4);
  margin: 0;
}

/* ---------- Arrow ---------- */
.tf-coreacc-arrow {
  position: absolute;
  z-index: 4;
  right: clamp(18px, 2.2vw, 32px);
  bottom: clamp(18px, 2.2vw, 32px);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #0B1E30;
  border: none;
  cursor: pointer;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tf-coreacc-arrow svg {
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tf-coreacc-arrow:hover svg {
  transform: translateX(3px) scale(1.035);
}

.tf-coreacc-arrow:focus-visible {
  outline: 3px solid #15AEBB;
  outline-offset: 3px;
}

.tf-fadein {
  opacity: 0;
  transform: translateY(16px);
  animation: tfFadeUp 750ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes tfMaskUp { to { transform: translateY(0); } }
@keyframes tfFadeUp { to { opacity: 1; transform: translateY(0); } }

.tf-coreacc-indexfooter {
  display: flex;
  align-items: center;
  gap: 9px;
  justify-content: flex-end;
  max-width: 1360px;
  margin: clamp(32px, 5vw, 56px) auto 0;
  color: rgba(16,42,67,0.43);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.tf-index-line {
  width: 28px;
  height: 1px;
  background: currentColor;
  display: inline-block;
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .tf-coreacc-panel {
    flex-basis: clamp(56px, 8vw, 84px);
  }
  .tf-coreacc-content {
    max-width: 64%;
  }
}

@media (max-width: 680px) {
  .tf-coreacc-track {
    flex-direction: column;
    height: auto;
  }

  .tf-coreacc-panel {
    flex: 0 0 64px;
    width: 100%;
    height: 64px;
    transition: flex-basis 760ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .tf-coreacc-panel.active {
    flex-basis: 380px;
    height: 380px;
  }

  .tf-coreacc-collapsed-label {
    writing-mode: horizontal-tb;
    transform: none;
  }

  .tf-coreacc-panel.active .tf-coreacc-collapsed-label {
    transform: scale(0.92);
  }

  .tf-coreacc-content {
    max-width: none;
    right: 66px;
  }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .tf-coreacc-panel,
  .tf-coreacc-bg,
  .tf-coreacc-collapsed-label,
  .tf-coreacc-content,
  .tf-coreacc-arrow,
  .tf-coreacc-arrow svg,
  .tf-fadein {
    transition: none !important;
    animation-duration: 1ms !important;
  }
}
`;

export default OurCore;
