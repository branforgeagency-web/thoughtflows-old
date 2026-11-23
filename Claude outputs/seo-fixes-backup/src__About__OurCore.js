import React, { useState } from "react";
import { mediaUrl } from '../config/media';
const passionPhoto = mediaUrl("images/CoreValues/core-passion.jpg");
const loyaltyPhoto = mediaUrl("images/CoreValues/core-loyalty.jpg");
const commitmentPhoto = mediaUrl("images/CoreValues/core-commitment.jpg");
const responsibilityPhoto = mediaUrl("images/CoreValues/core-responsibility.jpg");
const consistencyPhoto = mediaUrl("images/CoreValues/core-consistency.jpg");
const creativityPhoto = mediaUrl("images/CoreValues/core-creativity.jpg");

/**
 * Our Core Values — fluid image-accordion.
 * One panel expanded at a time; collapsed panels show a vertical label.
 * Each panel displays the real photo in full brightness with light frosted
 * glass labels so no dark overlay dims the images.
 */

const VALUES = [
  {
    id: "passion",
    title: "Passion",
    image: passionPhoto,
    position: "center center",
    description:
      "Driven by our passion for healthcare education, we strive to provide top-tier training, making Thoughtflows Medical Coding Academy the leading choice for aspiring medical coders.",
  },
  {
    id: "loyalty",
    title: "Loyalty",
    image: loyaltyPhoto,
    position: "center center",
    description:
      "We build lasting relationships with our trainees, fostering loyalty through our commitment to their professional growth and success in the medical coding field.",
  },
  {
    id: "commitment",
    title: "Commitment",
    image: commitmentPhoto,
    position: "center center",
    description:
      "We are fully committed to excellence in innovation, technology, and training, ensuring our trainees receive the highest standard of education and career development.",
  },
  {
    id: "responsibility",
    title: "Responsibility",
    image: responsibilityPhoto,
    position: "center center",
    description:
      "We take full responsibility for our trainees' learning journey, continuously offering support, mentorship, and opportunities for career advancement in medical coding.",
  },
  {
    id: "consistency",
    title: "Consistency",
    image: consistencyPhoto,
    position: "center center",
    description:
      "Our commitment to quality and continuous improvement ensures we maintain the trust of our students and industry partners, year after year.",
  },
  {
    id: "creativity",
    title: "Creativity",
    image: creativityPhoto,
    position: "center center",
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');

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
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(30px, 3.6vw, 50px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.015em;
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
  background: #EAF0F6;
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

/* ---------- Collapsed label ---------- */
.tf-coreacc-collapsed-label {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 14px rgba(11, 58, 102, 0.14);
  color: #0B3A66;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(12.5px, 1.05vw, 15px);
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
  writing-mode: vertical-rl;
  transform: translate(-50%, -50%) rotate(180deg);
  opacity: 1;
  transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.tf-coreacc-panel.active .tf-coreacc-collapsed-label {
  opacity: 0;
  transform: translate(-50%, -50%) rotate(180deg) scale(0.92);
  pointer-events: none;
}

/* ---------- Expanded content ---------- */
.tf-coreacc-content {
  position: absolute;
  z-index: 3;
  left: clamp(18px, 2.2vw, 30px);
  bottom: clamp(18px, 2.2vw, 30px);
  max-width: min(440px, calc(100% - 96px));
  padding: clamp(14px, 1.8vw, 22px) clamp(16px, 2vw, 26px);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 12px 30px rgba(11, 58, 102, 0.14);
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
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #15AEBB;
  margin-bottom: 6px;
}

.tf-coreacc-content-title {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(22px, 2.3vw, 32px);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0B3A66;
  margin: 0 0 8px;
}

.tf-coreacc-content-copy {
  font-size: clamp(12.5px, 0.95vw, 14px);
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: #334E68;
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
  color: #0B3A66;
  box-shadow: 0 8px 20px rgba(11, 58, 102, 0.18);
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
    padding: 8px 18px;
    transform: translate(-50%, -50%);
  }

  .tf-coreacc-panel.active .tf-coreacc-collapsed-label {
    transform: translate(-50%, -50%) scale(0.92);
  }

  .tf-coreacc-content {
    max-width: calc(100% - 88px);
    left: 16px;
    bottom: 16px;
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
