import React from "react";
import { GraduationCap, UserCheck, Briefcase, Search, HeartPulse } from "lucide-react";
import Reveal from "../Theni/Reveal";
import studentsImg from "../../images/Branches/online/Students.jpg";

const audience = [
  { icon: Search, text: "Individuals seeking first employment" },
  { icon: GraduationCap, text: "University Graduates" },
  { icon: Briefcase, text: "Career changers" },
  { icon: HeartPulse, text: "Individuals planning a career in the Healthcare Sector" },
  { icon: UserCheck, text: "Those aspiring to take the Certified Professional Coder (CPC) examination" },
];

const HopesEligibility = () => {
  return (
    <section className="hopes-section">
      <div className="hopes-wrap hopes-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0}>
          <span className="hopes-eyebrow">Eligibility</span>
          <h2>Who Can Join?</h2>
          <p>
            This career pathway is open to individuals from different educational and working backgrounds.
            It is not a prerequisite to have prior medical coding experience to learn the concepts of this trade.
          </p>
          <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: 10 }}>
            This training may be of interest to:
          </p>

          <ul className="hopes-pills">
            {audience.map(({ icon: Icon, text }) => (
              <li key={text}><Icon size={18} /> {text}</li>
            ))}
          </ul>

          <p style={{ marginTop: 16 }}>
            No previous knowledge of medical coding is required to enroll for training. The training methodology
            is to give the student the knowledge and skills in an organized step by step fashion.
          </p>
          <p style={{ marginTop: 12 }}>
            While evaluating a Medical Coding Institute in Hopes, a potential student considers various things
            including the course content, the quality of the training and the additionals offered, including
            practical and employment opportunities.
          </p>
        </Reveal>

        <Reveal x={40} y={0} className="hopes-photo">
          <img src={studentsImg} alt="Students eligible for medical coding in Hopes" />
          <div className="badge">
            <span className="ic"><GraduationCap size={22} /></span>
            <div>
              <strong>No Prior Experience Needed</strong>
              <small>Step-by-step training methodology</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HopesEligibility;
