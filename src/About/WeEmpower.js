import React from "react";
import image1 from "../images/AboutImg/1 (1).png";
import img2 from "../images/AboutImg/2 (1).png";
import img3 from "../images/AboutImg/3 (1).png";
import img4 from "../images/AboutImg/4 (1).png";
import lecturePhoto from "../images/welcome/welcome-student-lecture-v2.jpg";

const FEATURES = [
  {
    img: image1,
    label: "Quality in Training",
    description:
      "Structured curriculum and hands-on practice built to hold up under real certification pressure.",
  },
  {
    img: img2,
    label: "Innovation in Methodologies",
    description:
      "Training methods that evolve alongside coding standards and healthcare technology.",
  },
  {
    img: img3,
    label: "Building Trust in Our Trainees",
    description:
      "Mentorship and consistent support that builds confidence, not just knowledge.",
  },
  {
    img: img4,
    label: "Giving 100% Result",
    description:
      "A placement-backed program built around outcomes, not just course completion.",
  },
];

function WeEmpower() {
  return (
    <section className="tf-empower-section" id="empower" aria-label="We Empower">
      <style>{CSS}</style>

      <div className="tf-empower-inner">
        <div className="tf-empower-top">
          <div className="tf-empower-text-col">
            <span className="tf-empower-eyebrow tf-fadein">Why ThoughtFlows</span>

            <span className="tf-mask">
              <span className="tf-empower-title tf-maskup">
                Empowering Novice and Seasoned Coders
              </span>
            </span>

            <p className="tf-empower-copy tf-fadein" style={{ animationDelay: "220ms" }}>
              <strong className="tf-highlight">Thought Flows</strong> Medical Coding Academy is
              dedicated to empowering individuals at all stages of their coding careers. Whether
              you are a novice looking to start a career in medical coding or a seasoned
              professional aiming to enhance your skills, we provide tailored programs to suit
              your specific needs.
              <br /><br />
              Our comprehensive programs and job placement services equip both novice and
              seasoned coders with the skills and opportunities to succeed — with the resources,
              guidance, and support to take the next step in a coding career.
            </p>
          </div>

          <div className="tf-empower-image-col tf-fadein" style={{ animationDelay: "160ms" }}>
            <div className="tf-empower-image-wrap">
              <img
                src={lecturePhoto}
                alt="ThoughtFlows students attentively following a classroom training session"
                className="tf-empower-image"
                loading="lazy"
              />
              <span className="tf-empower-image-overlay" aria-hidden="true" />
              <span className="tf-empower-image-badge">Inside a ThoughtFlows Classroom</span>
            </div>
          </div>
        </div>

        <div className="tf-empower-features">
          {FEATURES.map((f, i) => (
            <div
              className="tf-feature-card tf-fadein"
              key={f.label}
              style={{ animationDelay: `${320 + i * 100}ms` }}
            >
              <div className="tf-feature-icon-wrap">
                <img src={f.img} alt="" className="tf-feature-icon" loading="lazy" />
              </div>
              <h3 className="tf-feature-label">{f.label}</h3>
              <p className="tf-feature-copy">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tf-empower-index">
        <span className="tf-index-line" aria-hidden="true" />
        <span>ThoughtFlows Academy / 03</span>
      </div>
    </section>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

.tf-empower-section, .tf-empower-section * {
  box-sizing: border-box;
}

.tf-empower-section {
  position: relative;
  width: 100%;
  background: #F7F9FC;
  color: #101820;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  padding: clamp(40px, 5.5vw, 76px) clamp(24px, 5.5vw, 96px) clamp(48px, 6vw, 84px);
}

.tf-empower-inner {
  max-width: 1360px;
  margin: 0 auto;
}

.tf-empower-top {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
  margin-bottom: clamp(44px, 6vw, 72px);
}

.tf-empower-eyebrow {
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
  margin-bottom: 20px;
}

.tf-mask { display: block; overflow: hidden; }

.tf-empower-title {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(30px, 3.2vw, 48px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #102A43;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: clamp(20px, 2.8vw, 28px);
  transform: translateY(110%);
}

.tf-empower-copy {
  max-width: 560px;
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: -0.01em;
  color: #526477;
  margin: 0;
}

.tf-highlight {
  color: #15AEBB;
  font-weight: 700;
}

/* ---------- Image column ---------- */
.tf-empower-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 4.6;
  border-radius: 28px;
  overflow: hidden;
  background: #E5EDF5;
  box-shadow: 0 24px 56px rgba(11, 58, 102, 0.16);
}

.tf-empower-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.tf-empower-image-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(185deg, rgba(11,58,102,0) 55%, rgba(8,30,48,0.72) 100%),
              linear-gradient(115deg, rgba(255,255,255,0.1), transparent 40%);
}

.tf-empower-image-badge {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(13px, 1.1vw, 15px);
  font-weight: 700;
  letter-spacing: -0.015em;
}

/* ---------- Feature cards ---------- */
.tf-empower-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.tf-feature-card {
  background: #FFFFFF;
  border: 1px solid rgba(16, 42, 67, 0.09);
  border-radius: 18px;
  padding: 26px 22px;
  text-align: left;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
              box-shadow 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.35s ease;
}

.tf-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(11, 58, 102, 0.1);
  border-color: rgba(11, 58, 102, 0.18);
}

.tf-feature-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 13px;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  padding: 9px;
}

.tf-feature-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.tf-feature-label {
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(14.5px, 1.05vw, 16.5px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.015em;
  color: #102A43;
  margin: 0 0 8px;
}

.tf-feature-copy {
  font-size: 13px;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: #7B8482;
  margin: 0;
}

.tf-maskup {
  animation: tfMaskUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 80ms;
}

.tf-fadein {
  opacity: 0;
  transform: translateY(16px);
  animation: tfFadeUp 750ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes tfMaskUp { to { transform: translateY(0); } }
@keyframes tfFadeUp { to { opacity: 1; transform: translateY(0); } }

.tf-empower-index {
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

@media (max-width: 900px) {
  .tf-empower-top {
    grid-template-columns: 1fr;
  }
  .tf-empower-image-col {
    order: -1;
  }
  .tf-empower-image-wrap {
    aspect-ratio: 16 / 9;
  }
  .tf-empower-copy {
    max-width: none;
  }
  .tf-empower-features {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .tf-empower-features {
    grid-template-columns: 1fr;
  }
}
`;

export default WeEmpower;
