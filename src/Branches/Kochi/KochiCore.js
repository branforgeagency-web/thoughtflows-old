import React from "react";
import { CheckCircle2 } from "lucide-react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxHead } from "../common/LuxSections";

function KochiCore() {
  const journeySteps = [
    "Attend Free Career Guidance Session",
    "Enroll in the Training Program",
    "Learn Medical Coding Fundamentals",
    "Practice Real Coding Scenarios",
    "Prepare for CPC Certification",
    "Attend Interview Preparation Sessions",
    "Access Placement Support",
  ];

  const curriculumHighlights = [
    "Medical Terminology",
    "Human Anatomy and Physiology",
    "Disease Processes",
    "Healthcare Documentation",
    "ICD Coding Concepts",
    "CPT Coding Concepts",
    "Coding Guidelines",
    "Reimbursement Concepts",
    "Certification Preparation",
    "Practical Coding Exercises",
  ];

  return (
    <>
      <LuxSection tone="light">
        <LuxSplit
          image={mediaUrl("images/Interiors/kochi/kochi-interior-05.jpg")}
          imageAlt="Practice lab at ThoughtFlows Kochi"
          eyebrow="Step by Step"
          title="Your Medical Coding"
          accent="Learning Journey"
        >
          <p>
            We have streamlined our training to ensure you take the most direct path to professional certification and your first job in the healthcare industry.
          </p>
          <ol style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "grid", gap: 12 }}>
            {journeySteps.map((step, index) => (
              <li
                key={step}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 16px",
                  borderRadius: 14,
                  background: "#f6f9fc",
                  border: "1px solid #e8eef4",
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: "#0b2239",
                }}
              >
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
                {step}
              </li>
            ))}
          </ol>
        </LuxSplit>
      </LuxSection>

      <LuxSection tone="tint">
        <LuxHead
          eyebrow="Curriculum"
          title="Industry-Oriented Training Designed Around"
          accent="Real Healthcare Processes"
          intro="At ThoughtFlows, training goes beyond theoretical concepts. Our programs are designed to help learners understand how Medical Coding functions within real healthcare workflows. The objective is to help learners build strong foundational knowledge while understanding the practical expectations of the healthcare industry."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {curriculumHighlights.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                borderRadius: 16,
                background: "#ffffff",
                border: "1px solid #e8eef4",
                boxShadow: "0 12px 26px -22px rgba(11, 34, 57, 0.35)",
                color: "#0b2239",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              <CheckCircle2 size={20} color="#097d8a" style={{ flexShrink: 0 }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </LuxSection>
    </>
  );
}

export default KochiCore;
