import React from "react";
import { GraduationCap, UserCheck, Briefcase, Search, HeartPulse } from "lucide-react";
import Reveal from "../Theni/Reveal";
import studentsImg from "../../images/Branches/online/Students.jpg";

const audience = [
  { icon: GraduationCap, text: "A recent graduate" },
  { icon: UserCheck, text: "A college freshman" },
  { icon: Search, text: "Someone currently job-less" },
  { icon: Briefcase, text: "Planning your next career move as a student" },
  { icon: HeartPulse, text: "A person with a non-life science background" },
];

const GandhipuramEligibility = () => {
  return (
    <section className="gandhipuram-section">
      <div className="gandhipuram-wrap theni-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0}>
          <span className="gandhipuram-eyebrow">Eligibility</span>
          <h2>Who Can Join the Course?</h2>
          <p>
            No prior coding experience is necessary to learn medical coding. This program is open
            to the public regardless of their educational and professional situation.
          </p>
          <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: 10 }}>
            You are eligible to join if you are:
          </p>

          <ul className="gandhipuram-pills">
            {audience.map(({ icon: Icon, text }) => (
              <li key={text}><Icon size={18} /> {text}</li>
            ))}
          </ul>

          <p style={{ marginTop: 16 }}>
            You do not need a medical degree to take this course, and it will teach you the essential
            medical terminology and coding.
          </p>
          <p style={{ marginTop: 12 }}>
            If you are interested in medical coding and are located in Gandhipuram, a reliable medical
            coding institute can help you enhance your career by means of employment-oriented training.
          </p>
        </Reveal>

        <Reveal x={40} y={0} className="gandhipuram-photo">
          <img src={studentsImg} alt="Students eligible for medical coding in Gandhipuram" />
          <div className="badge">
            <span className="ic"><GraduationCap size={22} /></span>
            <div>
              <strong>Open to All Degrees</strong>
              <small>Life science &amp; Non-life science</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GandhipuramEligibility;
