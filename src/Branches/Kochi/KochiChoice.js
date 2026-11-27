import React from "react";
import { GraduationCap, HeartPulse, Stethoscope, Briefcase, Award } from "lucide-react";
import { LuxSection, LuxHead, LuxValues } from "../common/LuxSections";

const KochiChoice = () => {
  const audiences = [
    { icon: GraduationCap, title: "Life Science Graduates", text: "Botany, Zoology, Biotechnology, Biochemistry & Microbiology" },
    { icon: HeartPulse, title: "Nursing Graduates", text: "B.Sc. Nursing, GNM & Post-Basic Nursing professionals" },
    { icon: Stethoscope, title: "Pharmacy Graduates", text: "B.Pharm, M.Pharm & D.Pharm graduates" },
    { icon: Award, title: "Biotech & Microbiology", text: "Undergraduate & postgraduate life-science specialists" },
    { icon: HeartPulse, title: "Allied Health Science", text: "Physiotherapy, MLT & paramedical graduates" },
    { icon: Stethoscope, title: "Healthcare Professionals", text: "Clinical staff moving into non-shift desk roles" },
    { icon: GraduationCap, title: "Fresh Graduates", text: "Final-year & recent graduates starting a career" },
    { icon: Briefcase, title: "Career Switchers", text: "Professionals transitioning into healthcare IT & RCM" },
  ];

  return (
    <LuxSection tone="tint">
      <LuxHead
        eyebrow="Eligibility"
        title="Who Can Join Our"
        accent="Medical Coding Training?"
        intro="Medical Coding is suitable for graduates, professionals, and individuals looking to build a career in the healthcare industry. Our programs are commonly chosen by:"
      />
      <LuxValues items={audiences} />
      <p style={{ textAlign: "center", maxWidth: 780, margin: "36px auto 0", color: "#5b6b7b", fontSize: 15.5, lineHeight: 1.7 }}>
        Students from non-life science backgrounds may also explore Medical Coding opportunities based on their learning ability, career goals, and program requirements.{" "}
        <strong style={{ color: "#097d8a" }}>No prior Medical Coding experience is required to begin learning.</strong>
      </p>
    </LuxSection>
  );
};

export default KochiChoice;
