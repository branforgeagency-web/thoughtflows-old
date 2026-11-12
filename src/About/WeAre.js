import React from "react";
import { mediaUrl } from '../config/media';
const founder2 = mediaUrl("images/Profile images/blazer pic/bhanu mathi.png");
const founder1 = mediaUrl("images/Profile images/blazer pic/balamurali.jpg");

function WeAre() {
  return (
    <section className="tf-weare-section" id="we-are" aria-label="Who We Are">
      <style>{CSS}</style>

      <div className="tf-weare-inner">
        <div className="tf-weare-left">
          <span className="tf-mask">
            <span className="tf-weare-kicker tf-fadein">No. 1 Medical Coding Academy</span>
          </span>
          <span className="tf-mask">
            <span className="tf-weare-title tf-maskup">Who We Are</span>
          </span>

          <p className="tf-weare-copy tf-fadein" style={{ animationDelay: "280ms" }}>
            Founded in 2016 by Mr. Balamurali and Ms. Banumathy, Thought Flows is
            the result of the vision and dedication of two enterprising and
            energetic individuals. Recognizing the growing demand for skilled
            professionals in the medical coding field, we embarked on a
            journey to establish an academy that would provide exceptional
            training to individuals seeking to excel in this industry.
          </p>
          <p className="tf-weare-copy tf-fadein" style={{ animationDelay: "380ms" }}>
            From humble beginnings with just one branch and a single trainee,
            Thought Flows has witnessed remarkable growth over the years.
            Today, we proudly operate Twelve branches across India, catering to
            the needs of aspiring medical coders nationwide. With a proven
            track record of success, we have trained over 35,000+ individuals,
            empowering them with the knowledge and skills required to thrive
            in this competitive field.
          </p>
        </div>

        <div className="tf-weare-right">
          <div className="tf-director-card tf-fadein" style={{ animationDelay: "220ms" }}>
            <span className="tf-director-bgtext" aria-hidden="true">Founders</span>
            <div className="tf-director-photo-wrap">
              <img src={founder1} alt="Mr. BalaMurali, Founder and MD" className="tf-director-photo" loading="lazy" />
              <div className="tf-director-caption">
                <h3 className="tf-director-name">Mr. BalaMurali</h3>
                <span className="tf-director-role">Founder &amp; MD</span>
              </div>
            </div>
          </div>

          <div className="tf-director-card tf-fadein" style={{ animationDelay: "340ms" }}>
            <span className="tf-director-bgtext" aria-hidden="true">Founders</span>
            <div className="tf-director-photo-wrap">
              <img src={founder2} alt="Ms. Banumathy, Founder and CEO" className="tf-director-photo" loading="lazy" />
              <div className="tf-director-caption">
                <h3 className="tf-director-name">Ms. Banumathy</h3>
                <span className="tf-director-role">Founder &amp; CEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-weare-index">
        <span className="tf-index-line" aria-hidden="true" />
        <span>ThoughtFlows Academy / 02</span>
      </div>
    </section>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');

.tf-weare-section, .tf-weare-section * {
  box-sizing: border-box;
}

.tf-weare-section {
  position: relative;
  width: 100%;
  background: #FFFFFF;
  color: #101820;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  padding: clamp(40px, 5.5vw, 76px) clamp(24px, 5.5vw, 96px) clamp(48px, 6vw, 84px);
}

.tf-weare-inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(40px, 6vw, 96px);
  align-items: start;
  max-width: 1360px;
  margin: 0 auto;
}

.tf-mask { display: block; overflow: hidden; }

.tf-weare-kicker {
  display: block;
  font-size: clamp(12px, 0.95vw, 15px);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #15AEBB;
  margin-bottom: 18px;
}

.tf-weare-title {
  display: block;
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(38px, 4.6vw, 64px);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.015em;
  color: #102A43;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: clamp(24px, 3.2vw, 36px);
}

.tf-weare-copy {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: -0.01em;
  color: #526477;
  margin-top: 0;
  margin-bottom: 20px;
}

.tf-weare-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  align-self: start;
}

/* ---------- Director-style founder cards ---------- */
.tf-director-card {
  position: relative;
  isolation: isolate;
  border-radius: 28px 28px 16px 16px;
  overflow: hidden;
  background: linear-gradient(160deg, #0B3A66 0%, #15AEBB 100%);
  aspect-ratio: 3 / 4.3;
  box-shadow: 0 18px 40px rgba(11, 58, 102, 0.18);
}

.tf-director-bgtext {
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%, 0) rotate(-90deg);
  transform-origin: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: clamp(22px, 2.3vw, 32px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.18);
  white-space: nowrap;
  z-index: 0;
  pointer-events: none;
}

.tf-director-photo-wrap {
  position: absolute;
  inset: 17% 0 0 0;
  border-radius: 20px 20px 16px 16px;
  overflow: hidden;
  z-index: 1;
}

.tf-director-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.tf-director-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 44px 18px 18px;
  background: linear-gradient(to top, rgba(8, 36, 58, 0.92) 0%, rgba(8, 36, 58, 0.55) 48%, rgba(8, 36, 58, 0) 100%);
}

.tf-director-name {
  margin: 0 0 3px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(16px, 1.25vw, 19px);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #ffffff;
}

.tf-director-role {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
}

.tf-maskup {
  transform: translateY(110%);
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

.tf-weare-index {
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
  .tf-weare-inner {
    grid-template-columns: 1fr;
  }
  .tf-weare-right {
    grid-template-columns: 1fr 1fr;
    max-width: 480px;
  }
}

@media (max-width: 560px) {
  .tf-weare-right {
    grid-template-columns: 1fr;
    max-width: 280px;
    margin: 0 auto;
  }
  .tf-director-card {
    aspect-ratio: 3 / 3.6;
  }
}
`;

export default WeAre;
