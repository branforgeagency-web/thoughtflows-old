import React from "react";
import { BookOpen, ClipboardCheck, Award, FileCheck, Users, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";

const whyFeatures = [
  "At this institute, training is provided in different coding systems and its application in the medical field.",
  "Classroom training is interspersed with coding exercises, tests and other assessments.",
  "A practice room at the centre in Saravanampatti is available for coding practice. This centre also provides a preparation for Certified Professional Coder (CPC) examination.",
  "Various coding practice tests are available to the candidates. In addition, a mock CPC examination is conducted.",
  "Consultation for updating resumes and preparing for interviews is available. Mocks interviews and other employment assistance are available.",
];

const SaravanampattiWhy = () => {
  return (
    <section className="saravanampatti-section alt">
      <div className="saravanampatti-wrap">
        <Reveal className="saravanampatti-center">
          <span className="saravanampatti-eyebrow">Why Choose Us</span>
          <h2>Why Choose ThoughtFlows?</h2>
          <p>
            When selecting a Medical Coding Institute in Saravanampatti, the training ambience and the support provided
            during training are important considerations.
          </p>
        </Reveal>

        <div className="saravanampatti-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", marginTop: 24 }}>
          {whyFeatures.map((text, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="saravanampatti-card" style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <CheckCircle2 size={22} style={{ color: "#097D8A", flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: "#0f172a", margin: 0, lineHeight: 1.6 }}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 30 }}>
          <p style={{ textAlign: "center", color: "#475569", fontWeight: 500 }}>
            These features provide a combination of learning, preparation and support for starting a career in medical coding.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default SaravanampattiWhy;
