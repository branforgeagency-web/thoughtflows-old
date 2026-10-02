import React from "react";
import { Award, CheckCircle2, FileText, ClipboardCheck } from "lucide-react";
import Reveal from "../Theni/Reveal";

const offerings = [
  "Coding simulations",
  "Topic based assessments",
  "Coding exercises",
  "Mock tests",
];

const HopesCPC = () => {
  return (
    <section className="hopes-section alt">
      <div className="hopes-wrap">
        <Reveal className="hopes-center">
          <span className="hopes-eyebrow">Exam Preparedness</span>
          <h2>CPC Preparation and Exam Practice</h2>
          <p>
            Preparing for the CPC exam requires more than learning the theory. Familiarity with the format
            and types of questions asked in the exam is also essential. Practice with coding related problems is very helpful.
          </p>
        </Reveal>

        <Reveal style={{ marginTop: 24 }}>
          <p style={{ textAlign: "center", fontWeight: 600, color: "#0f172a" }}>
            With respect to CPC preparation, ThoughtFlows has a number of offerings including:
          </p>
        </Reveal>

        <div className="hopes-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 20 }}>
          {offerings.map((item, i) => (
            <Reveal key={item} delay={i * 0.1}>
              <div className="hopes-card" style={{ textAlign: "center" }}>
                <div className="hopes-icon" style={{ margin: "0 auto 14px" }}><Award size={26} /></div>
                <h3 style={{ fontSize: 18, color: "#0f172a", margin: 0 }}>{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 36 }}>
          <div className="hopes-address-badge" style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
            <p style={{ margin: 0 }}>
              It provides practice to simulate the CPC exam and offers tips on the areas where the candidate requires improvement.
            </p>
            <p style={{ marginTop: 10, margin: "10px 0 0" }}>
              Frequent assessments help the candidate assess his/her level of understanding of various topics and helps focus on topics requiring more attention.
            </p>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 24 }}>
          <p style={{ textAlign: "center", color: "#475569" }}>
            The Medical Coding Academy in Hopes offers training and preparation for the CPC exam. Aspiring candidates can avail the training and prepare for the CPC exam through ThoughtFlows.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HopesCPC;
