import React from "react";
import { GraduationCap, UserCheck, Briefcase, Search, HeartPulse, Award } from "lucide-react";
import Reveal from "../Theni/Reveal";
import studentsImg from "../../images/Branches/online/Students.jpg";

const audience = [
  { icon: GraduationCap, text: "Individuals who are recently graduates or fresher’s." },
  { icon: Search, text: "Individuals who are currently unemployed." },
  { icon: Briefcase, text: "Individuals who are currently employed." },
  { icon: UserCheck, text: "Individuals who wish to change their current career." },
  { icon: GraduationCap, text: "Individuals who hold graduation degree in any stream (Science / Arts / Commerce) including Engineering and Life Sciences." },
  { icon: HeartPulse, text: "Individuals who wish to pursue a Career in the Healthcare Sector." },
  { icon: Award, text: "Individuals who wish to attend CPC certification training." },
];

const SaravanampattiEligibility = () => {
  return (
    <section className="saravanampatti-section">
      <div className="saravanampatti-wrap saravanampatti-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0}>
          <span className="saravanampatti-eyebrow">Eligibility</span>
          <h2>Who Can Join Medical Coding Training?</h2>
          <p>
            Medical coding is the translation of the medical language of diagnosis and procedures into numerical
            and alphabetic code. It is a booming profession and offers great flexibility. The recent explosion of
            COVID-19 cases has made it very clear that the healthcare industry is growing and will continue to grow.
          </p>
          <p>
            Students from any educational background are eligible to pursue Medical Coding training and enter this
            industry. Experience in Medical Coding is not a prerequisite for training.
          </p>
          <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: 10 }}>
            This Program can help:
          </p>

          <ul className="saravanampatti-pills">
            {audience.map(({ icon: Icon, text }) => (
              <li key={text}><Icon size={18} /> {text}</li>
            ))}
          </ul>

          <p style={{ marginTop: 14, fontWeight: 600, color: "#097D8A" }}>
            This program is perfect for beginners.
          </p>
        </Reveal>

        <Reveal x={40} y={0} className="saravanampatti-photo">
          <img src={studentsImg} alt="Students eligible for medical coding training in Saravanampatti" />
          <div className="badge">
            <span className="ic"><GraduationCap size={22} /></span>
            <div>
              <strong>Perfect for Beginners</strong>
              <small>All streams eligible (Arts/Sci/Engg)</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SaravanampattiEligibility;
