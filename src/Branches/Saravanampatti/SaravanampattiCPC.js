import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";

const cpcOfferings = [
  "Practical coding exercises",
  "Assessments",
  "Hundreds of practice exam and prep questions",
  "Mocks exams",
  "Guidance to help learners improve specific coding skills, including identification of blind spots",
];

const SaravanampattiCPC = () => {
  return (
    <section className="saravanampatti-section alt">
      <div className="saravanampatti-wrap">
        <Reveal className="saravanampatti-center">
          <span className="saravanampatti-eyebrow">AAPC Credential Prep</span>
          <h2>CPC Preparation and Exam Practice</h2>
          <p>
            Preparation for the CPC exam consists of learning coding rules, codes and conventions as well as learning
            to think like a coder. Although traditional prep courses offer little to no value for those seeking to take
            the CPC exam, Medical Coding Academy, through partnership with ThoughtFlows, has developed extensive online
            CPC prep resources. Medical Coding Academy has partnered with ThoughtFlows to offer:
          </p>
        </Reveal>

        <div className="saravanampatti-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 20 }}>
          {cpcOfferings.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 0.08}>
              <div className="saravanampatti-card" style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={20} style={{ color: "#097D8A", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontWeight: 500, color: "#0f172a" }}>{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 36 }}>
          <div className="saravanampatti-address-badge" style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
            <p style={{ margin: 0 }}>
              Meaningful, hands-on practice is the best way for learners to improve their skills. The above mentioned prep
              resources enable learning and provide practice opportunities for specific medical coding skills.
            </p>
            <p style={{ marginTop: 10, margin: "10px 0 0" }}>
              The Medical Coding Academy in Saravanampatti offers the above mentioned CPC prep and training as part of its
              diploma programs. The American Academy of Professional Coders (AAPC) grants the CPC credential.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SaravanampattiCPC;
