import React from "react";
import { BookOpen, Activity, FileText, Stethoscope, Layers, FileCheck, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";

const topicsList = [
  "Medical Terminology",
  "Anatomical and Physiological Concepts",
  "ICD-10-CM",
  "CPT",
  "HCPCS",
  "Modifiers",
  "Coding Guidelines",
  "Practical Coding",
  "Coding and Related Activities",
  "Assessments",
  "Tests",
  "Preparation for the CPC Exam",
];

const detailedCards = [
  { icon: BookOpen, title: "Medical Terminology", text: "Gain knowledge of elements of the terminology of medicine, including symptoms, clinical findings, organ systems, procedures and other components of health care." },
  { icon: Activity, title: "Anatomy and Physiology", text: "Learn the components of the various organ systems of the human body." },
  { icon: FileText, title: "ICD-10-CM", text: "Learn the elements of coding different types of medical diagnoses, condition and symptoms, as well as the rationale and guidelines involved in coding." },
  { icon: Stethoscope, title: "CPT", text: "Learn about the components of various invasive and non-invasive medical procedures and the rationale involved in coding such procedures." },
  { icon: Layers, title: "HCPCS", text: "Learn the components of coding various health care related supplies and other related services." },
  { icon: FileCheck, title: "Modifiers and Coding Guidelines", text: "Learn the rationale for the use of various modifiers in coding and interpreting procedures." },
];

const SaravanampattiLearn = () => {
  return (
    <section className="saravanampatti-section alt">
      <div className="saravanampatti-wrap">
        <Reveal className="saravanampatti-center">
          <span className="saravanampatti-eyebrow">Curriculum</span>
          <h2>What Will You Learn?</h2>
          <p>
            The Medical Coding Course in Saravanampatti provides valuable insights into the field of medical coding,
            covering concepts like:
          </p>
        </Reveal>

        <div className="saravanampatti-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 20 }}>
          {topicsList.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 0.05}>
              <div className="saravanampatti-card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                <CheckCircle2 size={18} style={{ color: "#097D8A", flexShrink: 0 }} />
                <span style={{ fontWeight: 500, color: "#0f172a" }}>{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="saravanampatti-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", marginTop: 40 }}>
          {detailedCards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="saravanampatti-card">
                <div className="saravanampatti-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaravanampattiLearn;
