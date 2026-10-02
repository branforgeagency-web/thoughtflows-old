import React from "react";
import {
  BookOpen,
  Activity,
  FileText,
  ClipboardCheck,
  Award,
  Layers,
  CheckCircle2,
  Stethoscope,
  FileCheck,
  GraduationCap
} from "lucide-react";
import Reveal from "../Theni/Reveal";
import campusImg from "../../images/Branches/Pic 3.webp";

const areasCovered = [
  { icon: BookOpen, title: "Comprehension of Medical Terminology" },
  { icon: Activity, title: "Anatomy and Physiology" },
  { icon: FileText, title: "Classification of Diagnosis (ICD-10-CM)" },
  { icon: Stethoscope, title: "Classification of Procedures (CPT) and Procedure Coding" },
  { icon: Layers, title: "HCPCS Level II Coding" },
  { icon: FileCheck, title: "Modifiers and Coding Guidelines" },
  { icon: ClipboardCheck, title: "Medical Record Documentation" },
  { icon: CheckCircle2, title: "Practice and Advanced Coding" },
  { icon: GraduationCap, title: "Assessment and Practice Tests" },
  { icon: Award, title: "Preparation for the CPC Exam" },
];

const GandhipuramIntro = () => {
  return (
    <section className="gandhipuram-section">
      <div className="gandhipuram-wrap theni-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0} className="gandhipuram-photo">
          <img src={campusImg} alt="Medical coding training in Gandhipuram" />
          <div className="badge">
            <span className="ic"><Layers size={22} /></span>
            <div>
              <strong>No Medical Background Required</strong>
              <small>Easy step-by-step foundation</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={40} y={0}>
          <span className="gandhipuram-eyebrow">Foundation to Advanced</span>
          <h2>Build Medical Coding Skills From Foundation to Advanced Concepts</h2>
          <p>
            No medical background or experience with medical coding is required to join the program.
            We will cover the basics of interpreting medical documents so that you will feel comfortable
            learning the aspects of coding such as understanding diagnosis and procedure classification.
          </p>
          <p>
            Each concept is broken down into easy to learn pieces. You will have the opportunity to
            practice and be tested on each concept as it is presented.
          </p>
        </Reveal>
      </div>

      <div className="gandhipuram-wrap" style={{ marginTop: 60 }}>
        <Reveal className="gandhipuram-center">
          <span className="gandhipuram-eyebrow">Curriculum Highlights</span>
          <h2>Areas Covered</h2>
        </Reveal>

        <div className="gandhipuram-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {areasCovered.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="gandhipuram-card" style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px 22px" }}>
                <div className="gandhipuram-icon" style={{ margin: 0, flexShrink: 0 }}><Icon size={24} /></div>
                <h3 style={{ fontSize: 16, margin: 0, color: "#0f172a", fontWeight: 600 }}>{title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GandhipuramIntro;
