import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxHead } from "../common/LuxSections";

const roadmapSteps = [
  { title: "Medical Coding Training", tag: "Foundation" },
  { title: "CPC Certification Preparation", tag: "Exam Prep" },
  { title: "Medical Coder", tag: "₹2.5–4.5 LPA" },
  { title: "Senior Medical Coder", tag: "₹4–7 LPA" },
  { title: "Quality Analyst", tag: "₹6–10 LPA" },
  { title: "Team Lead", tag: "₹8–15 LPA" },
  { title: "Coding Manager", tag: "₹12–25+ LPA" },
];

function TiruvandrumSticky() {
  return (
    <>
      <LuxSection tone="tint">
        <LuxSplit
          image={mediaUrl("images/Interiors/trivandrum/trivandrum-interior-07.jpg")}
          imageAlt="Director's cabin and mentoring room at ThoughtFlows Trivandrum"
          eyebrow="Certification & Placement"
          title="CPC Guidance &"
          accent="Placement Support"
        >
          <div className="lux-stack">
            <div className="lux-stack-item">
              <h3>CPC Certification Guidance</h3>
              <p>
                The Certified Professional Coder (CPC) credential is one of the most recognized Medical Coding certifications in the healthcare industry. ThoughtFlows provides CPC-focused training covering coding concepts, medical documentation, coding guidelines, and mock assessments so you can prepare with confidence.
              </p>
            </div>
            <div className="lux-stack-item">
              <h3>Placement Support &amp; Career Growth</h3>
              <p>
                With 35,000+ students trained and 25,000+ career placements supported, our dedicated placement team assists with resume building, interview preparation, mock interviews, HR guidance, and job referral support across hospitals, RCM companies, and global healthcare markets.
              </p>
            </div>
          </div>
        </LuxSplit>
      </LuxSection>

      <LuxSection tone="light">
        <LuxHead
          eyebrow="Growth Trajectory"
          title="Medical Coding"
          accent="Career Path Roadmap"
          intro="A structured progression from foundational training to senior leadership roles in healthcare revenue cycle management."
        />
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto",
            display: "grid",
            gap: 12,
          }}
        >
          {roadmapSteps.map((step, index) => (
            <div
              key={step.title}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "14px 20px",
                borderRadius: 14,
                background: "#f6f9fc",
                border: "1px solid #e8eef4",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "#097d8a",
                    color: "#ffffff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13.5,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </span>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#0b2239" }}>
                  {step.title}
                </span>
              </div>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(9, 125, 138, 0.1)",
                  color: "#097d8a",
                  fontSize: 13,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </LuxSection>
    </>
  );
}

export default TiruvandrumSticky;
