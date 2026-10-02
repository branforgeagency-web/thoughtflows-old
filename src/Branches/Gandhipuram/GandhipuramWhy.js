import React from "react";
import { BookOpen, ClipboardCheck, Award, FileCheck, Laptop, Briefcase, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";

const gains = [
  { icon: BookOpen, text: "Well-designed courses in medical coding" },
  { icon: ClipboardCheck, text: "Hands-on coding practice" },
  { icon: Award, text: "Preparation for the CPC exam" },
  { icon: FileCheck, text: "Numerous other practice tests and assessments" },
  { icon: Laptop, text: "Online and in-person training" },
  { icon: Briefcase, text: "Help with placement" },
];

const GandhipuramWhy = () => {
  return (
    <section className="gandhipuram-section">
      <div className="gandhipuram-wrap">
        <Reveal className="gandhipuram-center">
          <span className="gandhipuram-eyebrow">Why Choose Us</span>
          <h2>Why ThoughtFlows?</h2>
          <p>
            ThoughtFlows has consolidated training and practical sessions for medical coding, preparation for the
            CPC exam, and other activities related to career advancement in a single, continuous pathway.
          </p>
          <p style={{ marginTop: 10, fontWeight: 500, color: "#0f172a" }}>
            With over nine years of experience in training medical coders, the ThoughtFlows team has trained
            more than 35,000 students and placed more than 30,000 students in jobs.
          </p>
        </Reveal>

        <Reveal style={{ marginTop: 30 }}>
          <h3 style={{ textAlign: "center", marginBottom: 20, fontSize: 20 }}>Students can gain:</h3>
        </Reveal>

        <div className="gandhipuram-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {gains.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={(i % 3) * 0.1}>
              <div className="gandhipuram-card" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div className="gandhipuram-icon" style={{ margin: 0, flexShrink: 0 }}><Icon size={24} /></div>
                <p style={{ color: "#0f172a", fontWeight: 500, margin: 0 }}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 30 }}>
          <p style={{ textAlign: "center", color: "#475569" }}>
            The ThoughtFlows team is also available to explain more about available programs and other services.
            Visit ThoughtFlows Medical Coding Gandhipuram for more info.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default GandhipuramWhy;
