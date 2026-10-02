import React from "react";
import { CheckCircle2, Info } from "lucide-react";
import Reveal from "../Theni/Reveal";

const checklist = [
  "Fees for the current course",
  "Dates and timings of the batch",
  "Duration of the course",
  "Mode of course delivery (classroom/online)",
  "Materials provided for course",
  "Practical sessions",
  "Mock tests",
  "Preparation for CPC",
  "Cost of certification",
  "Placement service",
];

const GandhipuramFees = () => {
  return (
    <section className="gandhipuram-section alt">
      <div className="gandhipuram-wrap">
        <Reveal className="gandhipuram-center">
          <span className="gandhipuram-eyebrow">Admission Guide</span>
          <h2>Course Fees and Batch Details</h2>
          <p>
            The fees for medical coding courses are subject to change based on different learning formats and programs.
            For the most recent fees for medical coding courses offered by ThoughtFlows, you can contact them directly.
          </p>
        </Reveal>

        <Reveal style={{ marginTop: 24 }}>
          <p style={{ textAlign: "center", fontWeight: 600, color: "#0f172a" }}>
            Prior to taking admission, you may review the following:
          </p>
        </Reveal>

        <div className="gandhipuram-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 20 }}>
          {checklist.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 0.06}>
              <div className="gandhipuram-card" style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 12 }}>
                <CheckCircle2 size={20} style={{ color: "#097D8A", flexShrink: 0 }} />
                <span style={{ color: "#0f172a", fontWeight: 500 }}>{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 30 }}>
          <p style={{ textAlign: "center", color: "#475569", fontSize: 15 }}>
            <Info size={16} style={{ display: "inline", marginRight: 6, color: "#097D8A" }} />
            You may consider this information as a guide for the services offered by the entity for the fees charged by them.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default GandhipuramFees;
