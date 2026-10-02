import React from "react";
import { FileText, Users, Search, TrendingUp, Bell } from "lucide-react";
import Reveal from "../Theni/Reveal";
import trainerImg from "../../images/Course Images/CEMC1.jpg";

const placementServices = [
  { icon: FileText, title: "Resume Writing", text: "Writing a resume that captures your training and other qualifications in an eye-catching format." },
  { icon: Users, title: "Interview Training", text: "Preparing for the type of questions that are likely to be asked during medical coding interviews and learning ways to present your coding knowledge in an interview setting." },
  { icon: Search, title: "Mocks Interviews", text: "Practice interview exercises and learn how to respond to interview questions." },
  { icon: TrendingUp, title: "Career Counseling", text: "Learn possible opportunities available in the medical coding field." },
  { icon: Bell, title: "Job Fairs", text: "Learn ways to identify available medical coding jobs." },
];

const SaravanampattiPlacement = () => {
  return (
    <section className="saravanampatti-section">
      <div className="saravanampatti-wrap saravanampatti-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0}>
          <span className="saravanampatti-eyebrow">Career Services</span>
          <h2>Medical Coding Training with Placement Assistance</h2>
          <p>
            As part of preparing for a career in medical coding, a number of related activities such as writing a resume
            and cover letter and attending interviews are vital. Many learners often require hand-holding through these
            processes and ThoughtFlows recognizes this need by providing complete placement assistance to learners free of charge.
            As a result, candidates interested in pursuing medical coding training in Saravanampatti have the added advantage
            of receiving comprehensive career related services in addition to their training.
          </p>
          <p>
            The ThoughtFlows Medical Coding Training program, with placement in Saravanampatti, is designed to give prospective
            learners first-hand coding knowledge and skills in addition to other related services that increases their job readiness.
          </p>
        </Reveal>

        <Reveal x={40} y={0} className="saravanampatti-photo">
          <img src={trainerImg} alt="Placement assistance at ThoughtFlows Saravanampatti" loading="lazy" />
        </Reveal>
      </div>

      <div className="saravanampatti-wrap" style={{ marginTop: 50 }}>
        <Reveal className="saravanampatti-center">
          <h3 style={{ fontSize: 22 }}>Some of the services provided to learners include:</h3>
        </Reveal>

        <div className="saravanampatti-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {placementServices.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="saravanampatti-card">
                <div className="saravanampatti-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 30 }}>
          <div className="saravanampatti-note" style={{ maxWidth: 900, margin: "0 auto" }}>
            <strong>Note:</strong> It is worth noting that the placement services do not guarantee that the learners
            will be employed. Employers make hiring decisions depending on the appropriateness of the candidate for a given
            job opportunity.
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SaravanampattiPlacement;
