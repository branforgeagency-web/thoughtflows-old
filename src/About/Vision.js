import React, { useRef, useState } from "react";

/**
 * Vision / Mission / Facilities — interactive topic selector + insight gallery.
 * Pure React + CSS (no external deps), matching the ThoughtFlows editorial
 * design system already used across the About page (DM Sans, navy/teal
 * gradient, soft off-white surfaces).
 */

const TOPICS = [
  {
    id: "vision",
    label: "Vision",
    heading: "Asia's Leading Medical Coding Academy",
    cards: [
      {
        label: "Purpose",
        title: "Asia's Leading Academy",
        description:
          "We're building the region's most trusted name in medical coding education — judged by outcomes, not promises.",
        meta: "Vision · 01",
      },
      {
        label: "Expertise",
        title: "Skilled, Certified Coders",
        description:
          "Every learner leaves equipped with the knowledge, certifications and confidence the healthcare industry demands.",
        meta: "Vision · 02",
      },
      {
        label: "Innovation",
        title: "Accuracy Meets Innovation",
        description:
          "We pair proven coding fundamentals with evolving healthcare technology to keep training genuinely current.",
        meta: "Vision · 03",
      },
      {
        label: "Impact",
        title: "Better Healthcare, Globally",
        description:
          "Skilled coders mean fewer errors and faster systems — our graduates carry that impact into healthcare worldwide.",
        meta: "Vision · 04",
      },
    ],
  },
  {
    id: "mission",
    label: "Mission",
    heading: "Training That Turns Learners Into Coders",
    cards: [
      {
        label: "Training",
        title: "Expert-Led Curriculum",
        description:
          "Comprehensive, industry-focused programs built around the real skills medical coding careers require.",
        meta: "Mission · 01",
      },
      {
        label: "Careers",
        title: "Education to Employment",
        description:
          "Placement partnerships and internships close the gap between finishing a course and starting a career.",
        meta: "Mission · 02",
      },
      {
        label: "Currency",
        title: "Always Industry-Current",
        description:
          "Our curriculum is reviewed continuously, so what we teach never lags behind how the industry actually works.",
        meta: "Mission · 03",
      },
      {
        label: "Integrity",
        title: "Ethics, Mentorship, Community",
        description:
          "We hold coding standards high and back every learner with mentorship long after the classroom.",
        meta: "Mission · 04",
      },
    ],
  },
  {
    id: "facilities",
    label: "Facilities",
    heading: "Spaces Built for Focused, Practical Learning",
    cards: [
      {
        label: "Classrooms",
        title: "Modern, Air-Conditioned Spaces",
        description:
          "Fully air-conditioned, well-equipped classrooms designed to keep every session comfortable and focused.",
        meta: "Facilities · 01",
      },
      {
        label: "Teaching",
        title: "Interactive, Expert-Led Sessions",
        description:
          "PPT-driven, interactive classes led by expert faculty who make dense coding material easy to retain.",
        meta: "Facilities · 02",
      },
      {
        label: "Practice",
        title: "Live Chart Training",
        description:
          "Hands-on practice with real-style charts, so skills are tested before they're ever needed on the job.",
        meta: "Facilities · 03",
      },
      {
        label: "Value",
        title: "Placement-Backed, Affordable",
        description:
          "100% placement assurance paired with training fees built to stay within reach.",
        meta: "Facilities · 04",
      },
    ],
  },
];

const DEFAULT_ACTIVE_CARD = 1;

const LinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Vision() {
  const [activeTopicId, setActiveTopicId] = useState(TOPICS[0].id);
  const [activeCard, setActiveCard] = useState(DEFAULT_ACTIVE_CARD);
  const tabRefs = useRef([]);

  const activeTopic = TOPICS.find((t) => t.id === activeTopicId) || TOPICS[0];

  const selectTopic = (id) => {
    setActiveTopicId(id);
    setActiveCard(DEFAULT_ACTIVE_CARD);
  };

  const handleTabKeyDown = (e, idx) => {
    let nextIdx = null;
    if (e.key === "ArrowRight") nextIdx = (idx + 1) % TOPICS.length;
    else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + TOPICS.length) % TOPICS.length;
    else if (e.key === "Home") nextIdx = 0;
    else if (e.key === "End") nextIdx = TOPICS.length - 1;

    if (nextIdx !== null) {
      e.preventDefault();
      selectTopic(TOPICS[nextIdx].id);
      const el = tabRefs.current[nextIdx];
      if (el) el.focus();
    }
  };

  return (
    <section className="tf-vmf-section" id="vis" aria-label="Vision, Mission and Facilities">
      <style>{CSS}</style>

      <div className="tf-vmf-inner">
        <span className="tf-vmf-eyebrow tf-fadein">What Drives ThoughtFlows</span>

        <h2 className="tf-vmf-heading tf-fadein" style={{ animationDelay: "80ms" }}>
          <span className="tf-vmf-heading-line1">What We Stand For</span>
          <span className="tf-vmf-heading-line2" aria-live="polite">
            {activeTopic.heading}
          </span>
        </h2>

        <div
          className="tf-vmf-tablist"
          role="tablist"
          aria-label="Vision, Mission and Facilities topics"
        >
          {TOPICS.map((topic, idx) => (
            <button
              key={topic.id}
              ref={(el) => (tabRefs.current[idx] = el)}
              role="tab"
              id={`tf-vmf-tab-${topic.id}`}
              aria-selected={topic.id === activeTopicId}
              aria-controls={`tf-vmf-panel-${topic.id}`}
              tabIndex={topic.id === activeTopicId ? 0 : -1}
              className={`tf-vmf-tab${topic.id === activeTopicId ? " active" : ""}`}
              onClick={() => selectTopic(topic.id)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              {topic.label}
            </button>
          ))}
        </div>

        <div
          className="tf-vmf-cards"
          role="tabpanel"
          id={`tf-vmf-panel-${activeTopic.id}`}
          aria-labelledby={`tf-vmf-tab-${activeTopic.id}`}
        >
          {activeTopic.cards.map((card, i) => (
            <div
              key={`${activeTopic.id}-${i}`}
              className={`tf-vmf-card tf-fadein${i === activeCard ? " active" : ""}`}
              style={{ animationDelay: `${i * 90 + 120}ms` }}
              tabIndex={0}
              role="button"
              aria-pressed={i === activeCard}
              aria-label={`${card.title}. ${card.description}`}
              onMouseEnter={() => setActiveCard(i)}
              onFocus={() => setActiveCard(i)}
              onClick={() => setActiveCard(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveCard(i);
                }
              }}
            >
              <span className="tf-vmf-card-art" aria-hidden="true" />
              <div className="tf-vmf-card-top">
                <span className="tf-vmf-card-label">{card.label}</span>
                <h3 className="tf-vmf-card-title">{card.title}</h3>
                <p className="tf-vmf-card-copy">{card.description}</p>
              </div>
              <div className="tf-vmf-card-bottom">
                <span className="tf-vmf-card-meta">{card.meta}</span>
                <span className="tf-vmf-card-icon">
                  <LinkIcon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tf-vmf-index">
        <span className="tf-index-line" aria-hidden="true" />
        <span>ThoughtFlows Academy / 06</span>
      </div>
    </section>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

.tf-vmf-section, .tf-vmf-section * {
  box-sizing: border-box;
}

.tf-vmf-section {
  position: relative;
  width: 100%;
  background: #FFFFFF;
  color: #101820;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  padding: clamp(40px, 5.5vw, 76px) clamp(24px, 5.5vw, 96px) clamp(48px, 6vw, 84px);
}

.tf-vmf-inner {
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tf-vmf-eyebrow {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0B3A66;
  background: rgba(21, 174, 187, 0.09);
  border: 1px solid rgba(11, 58, 102, 0.14);
  border-radius: 999px;
  padding: 7px 16px;
  margin-bottom: 22px;
}

.tf-vmf-heading {
  margin: 0 0 clamp(26px, 3.4vw, 38px);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.tf-vmf-heading-line1 {
  display: block;
  font-size: clamp(30px, 3.6vw, 50px);
  font-weight: 700;
  color: #102A43;
}

.tf-vmf-heading-line2 {
  display: block;
  font-size: clamp(22px, 2.6vw, 36px);
  font-weight: 500;
  color: #7A8B9A;
  margin-top: 4px;
  transition: opacity 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* ---------- Topic selector ---------- */
.tf-vmf-tablist {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: #F7F9FC;
  border: 1px solid rgba(16, 42, 67, 0.1);
  border-radius: 999px;
  padding: 5px;
  margin-bottom: clamp(32px, 4.5vw, 52px);
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
}

.tf-vmf-tablist::-webkit-scrollbar {
  display: none;
}

.tf-vmf-tab {
  flex: 0 0 auto;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #7B8482;
  background: transparent;
  border: none;
  border-radius: 999px;
  padding: 9px 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
              color 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.tf-vmf-tab:hover {
  color: #0B3A66;
}

.tf-vmf-tab.active {
  color: #ffffff;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
}

.tf-vmf-tab:focus-visible {
  outline: 2px solid #15AEBB;
  outline-offset: 2px;
}

/* ---------- Card gallery ---------- */
.tf-vmf-cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  text-align: left;
}

.tf-vmf-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  background: rgba(247, 249, 252, 0.9);
  border: 1px solid rgba(16, 42, 67, 0.09);
  border-radius: 18px;
  padding: 24px 22px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              background-color 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.tf-vmf-card:focus-visible {
  outline: 2px solid #15AEBB;
  outline-offset: 3px;
}

.tf-vmf-card-art {
  position: absolute;
  inset: -25%;
  z-index: 0;
  opacity: 0;
  background:
    radial-gradient(circle at 20% 15%, rgba(21, 174, 187, 0.55), transparent 55%),
    radial-gradient(circle at 85% 20%, rgba(11, 58, 102, 0.6), transparent 50%),
    radial-gradient(circle at 70% 85%, rgba(214, 178, 128, 0.2), transparent 55%),
    radial-gradient(circle at 15% 80%, rgba(82, 100, 119, 0.5), transparent 50%),
    linear-gradient(160deg, #0B2436 0%, #0B3A66 100%);
  filter: blur(38px) saturate(0.85);
  transform: scale(1.05);
  transition: opacity 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.tf-vmf-card.active {
  transform: translateY(-5px);
  box-shadow: 0 24px 48px rgba(11, 58, 102, 0.28);
  border-color: rgba(11, 58, 102, 0.3);
}

.tf-vmf-card.active .tf-vmf-card-art {
  opacity: 1;
  animation: tfArtDrift 14s ease-in-out infinite alternate;
}

@keyframes tfArtDrift {
  0% { transform: scale(1.05) translate(0, 0); }
  100% { transform: scale(1.14) translate(-2%, 2%); }
}

.tf-vmf-card-top,
.tf-vmf-card-bottom {
  position: relative;
  z-index: 1;
}

.tf-vmf-card-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #15AEBB;
  margin-bottom: 14px;
  transition: color 0.4s ease;
}

.tf-vmf-card-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(18px, 1.5vw, 21px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.18;
  color: #102A43;
  margin: 0 0 12px;
  transition: color 0.4s ease;
}

.tf-vmf-card-copy {
  font-size: 13.5px;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: #526477;
  margin: 0;
  transition: color 0.4s ease;
}

.tf-vmf-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(16, 42, 67, 0.09);
  transition: border-color 0.4s ease;
}

.tf-vmf-card-meta {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #7B8482;
  transition: color 0.4s ease;
}

.tf-vmf-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(16, 42, 67, 0.14);
  color: #0B3A66;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.tf-vmf-card.active .tf-vmf-card-label { color: #9FE3DE; }
.tf-vmf-card.active .tf-vmf-card-title { color: #ffffff; }
.tf-vmf-card.active .tf-vmf-card-copy { color: rgba(255, 255, 255, 0.78); }
.tf-vmf-card.active .tf-vmf-card-bottom { border-top-color: rgba(255, 255, 255, 0.18); }
.tf-vmf-card.active .tf-vmf-card-meta { color: rgba(255, 255, 255, 0.65); }
.tf-vmf-card.active .tf-vmf-card-icon {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.35);
  transform: rotate(45deg);
}

/* ---------- Shared bits ---------- */
.tf-fadein {
  opacity: 0;
  transform: translateY(16px);
  animation: tfFadeUp 750ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes tfFadeUp { to { opacity: 1; transform: translateY(0); } }

.tf-vmf-index {
  display: flex;
  align-items: center;
  gap: 9px;
  justify-content: flex-end;
  max-width: 1360px;
  margin: clamp(32px, 5vw, 56px) auto 0;
  color: rgba(16, 42, 67, 0.43);
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
  .tf-vmf-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .tf-vmf-inner {
    align-items: flex-start;
    text-align: left;
  }

  .tf-vmf-tablist {
    align-self: stretch;
  }

  .tf-vmf-cards {
    display: flex;
    grid-template-columns: unset;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 14px;
    margin: 0 -24px;
    padding: 4px 24px 10px;
    scrollbar-width: none;
  }

  .tf-vmf-cards::-webkit-scrollbar {
    display: none;
  }

  .tf-vmf-card {
    flex: 0 0 82%;
    scroll-snap-align: start;
    min-height: 260px;
  }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .tf-fadein {
    animation-duration: 1ms !important;
  }
  .tf-vmf-card,
  .tf-vmf-card-art,
  .tf-vmf-card-icon,
  .tf-vmf-tab,
  .tf-vmf-heading-line2 {
    transition: none !important;
    animation: none !important;
  }
}
`;

export default Vision;
