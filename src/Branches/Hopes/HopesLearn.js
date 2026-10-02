import React from "react";
import { BookOpen, FileText, Stethoscope, Layers, FileCheck, ClipboardCheck, GraduationCap, Award, Activity } from "lucide-react";
import Reveal from "../Theni/Reveal";

const components = [
  { icon: BookOpen, title: "Medical Terminology", text: "An understanding of the basic building blocks of the human body is essential to interpreting medical documentation." },
  { icon: FileText, title: "ICD-10-CM", text: "Understanding the fundamentals of diagnosis coding, including the rationale behind various coding decisions, is essential to this component of the course." },
  { icon: Stethoscope, title: "CPT", text: "This component covers the fundamentals of coding procedures and services, including the rationale behind various coding decisions." },
  { icon: Layers, title: "HCPCS", text: "This component covers the fundamentals of coding supplies and other items, including the rationale for various coding decisions." },
  { icon: FileCheck, title: "Modifiers", text: "Learning the rationale behind various coding decisions, including the use of modifiers, is the focus of this component of the course." },
  { icon: ClipboardCheck, title: "Coding Guidelines", text: "This component of the course focuses on the rationale for differentiating between various elements of the same service or procedure." },
  { icon: Activity, title: "Practical Coding", text: "This component covers various aspects of medical coding, including review of medical record documentation, prior authorizations, and reimbursement requests." },
  { icon: GraduationCap, title: "Assessments and Mock Tests", text: "This component of the course covers various aspects of medical coding and evaluates the participant’s knowledge of those concepts." },
  { icon: Award, title: "CPC Preparation", text: "The CPC Preparation component covers medical necessity and other rules, ICD-10-CM diagnosis coding, and review of specific types of medical record documentation." },
  { icon: BookOpen, title: "Medical Terminology Review", text: "The basics of medical terminology are reviewed to prepare the participant to accurately interpret medical documentation." },
];

const HopesLearn = () => {
  return (
    <section className="hopes-section alt">
      <div className="hopes-wrap">
        <Reveal className="hopes-center">
          <span className="hopes-eyebrow">Curriculum</span>
          <h2>What You Will Learn</h2>
          <p>This course includes the primary components of medical coding.</p>
        </Reveal>

        <div className="hopes-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {components.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={`${title}-${i}`} delay={(i % 3) * 0.08}>
              <div className="hopes-card">
                <div className="hopes-icon"><Icon size={24} /></div>
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

export default HopesLearn;
