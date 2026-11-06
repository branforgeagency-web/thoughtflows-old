import React, { useState } from "react";
import study1 from "../images/AboutImg/course-02.jpg";
import study2 from "../images/AboutImg/course-05.jpg";
import study3 from "../images/AboutImg/Our Motto-Support.png";
import join from "../images/AboutImg/join.jpg";

const TABS = [
  { key: "Quality", label: "Quality" },
  { key: "Connections", label: "Connections" },
  { key: "Support", label: "Support" },
  { key: "JoinUs", label: "Join Us" },
];

const contentData = {
  Quality: {
    title: "Top Quality Training",
    text: "We are committed to delivering top-quality training that combines theoretical knowledge with practical hands-on experience. Our curriculum is meticulously designed by industry experts, ensuring that our trainees are equipped with the latest industry practices and coding techniques. With modern facilities and a team of highly qualified instructors, we offer a dynamic learning environment designed to nurture growth, expertise, and success in the medical coding field.",
    image: study1,
  },
  Connections: {
    title: "Build Strong Industry Connections",
    text: "As a trainee at Thoughtflows Medical Coding Academy, you'll gain access to our extensive network of industry connections. We've forged strong partnerships with leading healthcare organizations, providing ample opportunities for job placements. We understand the importance of bridging the gap between education and employment, and we actively work towards helping our trainees secure rewarding positions in esteemed healthcare institutions.",
    image: study2,
  },
  Support: {
    title: "Continuous Support",
    text: "Your journey with Thoughtflows Medical Coding Academy doesn't end at graduation. We offer lifelong mentorship, personalized career guidance, and exclusive access to our vibrant alumni community—empowering you with networking, professional growth, and continuous learning every step of the way.",
    image: study3,
  },
  JoinUs: {
    title: "Join Our Community",
    text: "At Thought Flows, we are driven by our passion for empowering individuals and making a positive impact in the medical coding field. Join us on this transformative educational journey and unlock the doors to a rewarding and fulfilling career.",
    image: join,
  },
};

function Motto() {
  const [selected, setSelected] = useState("Quality");
  const active = contentData[selected];

  return (
    <section className="tf-motto-section" id="motto" aria-label="Our Motto">
      <style>{CSS}</style>

      <div className="tf-motto-head">
        <span className="tf-mask">
          <span className="tf-motto-title tf-maskup">Our Motto</span>
        </span>

        <div className="tf-motto-tabs" role="tablist" aria-label="Our Motto categories">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={selected === tab.key}
              className={`tf-motto-tab${selected === tab.key ? " tf-motto-tab-active" : ""}`}
              onClick={() => setSelected(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tf-motto-panel">
        <div className="tf-motto-image-wrap" key={selected}>
          <img src={active.image} alt={active.title} className="tf-motto-image" loading="lazy" />
        </div>
        <div className="tf-motto-text" key={`${selected}-text`}>
          <h3 className="tf-motto-subtitle">{active.title}</h3>
          <p className="tf-motto-copy">{active.text}</p>
        </div>
      </div>

      <div className="tf-motto-index">
        <span className="tf-index-line" aria-hidden="true" />
        <span>ThoughtFlows Academy / 04</span>
      </div>
    </section>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');

.tf-motto-section, .tf-motto-section * {
  box-sizing: border-box;
}

.tf-motto-section {
  position: relative;
  width: 100%;
  background: #FFFFFF;
  color: #101820;
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  padding: clamp(40px, 5.5vw, 76px) clamp(24px, 5.5vw, 96px) clamp(48px, 6vw, 84px);
}

.tf-motto-head {
  max-width: 1360px;
  margin: 0 auto clamp(36px, 5vw, 56px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.tf-mask { display: block; overflow: hidden; }

.tf-motto-title {
  display: block;
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(32px, 3.8vw, 54px);
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

.tf-motto-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tf-motto-tab {
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #526477;
  background: #F7F9FC;
  border: none;
  border-radius: 999px;
  padding: 11px 22px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.tf-motto-tab:hover {
  color: #102A43;
  background: #EAF3FB;
}

.tf-motto-tab-active,
.tf-motto-tab-active:hover {
  color: #FFFFFF;
  background: linear-gradient(132deg, #0B3A66 0%, #15AEBB 100%);
}

.tf-motto-panel {
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
}

.tf-motto-image-wrap {
  position: relative;
  width: 100%;
  height: clamp(240px, 28vw, 360px);
  border-radius: clamp(24px, 3vw, 40px);
  overflow: hidden;
  background: #E5EDF5;
  clip-path: inset(0 100% 0 0 round clamp(24px, 3vw, 40px));
  animation: tfRevealLTR 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}

.tf-motto-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes tfRevealLTR {
  to { clip-path: inset(0 0 0 0 round clamp(24px, 3vw, 40px)); }
}

.tf-motto-text {
  opacity: 0;
  transform: translateY(14px);
  animation: tfFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 140ms;
}

.tf-motto-subtitle {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: clamp(21px, 2vw, 28px);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #102A43;
  margin: 0 0 16px;
}

.tf-motto-copy {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: -0.01em;
  color: #526477;
  margin: 0;
}

@keyframes tfMaskUp { to { transform: translateY(0); } }
@keyframes tfFadeUp { to { opacity: 1; transform: translateY(0); } }

.tf-motto-index {
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
  .tf-motto-panel {
    grid-template-columns: 1fr;
  }
}
`;

export default Motto;
