import React from "react";
import { Award, FileText, Users, TrendingUp, Bell, Search, ClipboardCheck } from "lucide-react";
import Reveal from "./Reveal";
import trainerImg from "../../images/Course Images/CEMC1.jpg";

const support = [
  { icon: FileText, text: "Guidance for creating a resume" },
  { icon: Users, text: "Simulation of interviews" },
  { icon: TrendingUp, text: "Career development" },
  { icon: Bell, text: "Receiving updated information regarding job openings" },
  { icon: Search, text: "Assistance in locating and applying for openings" },
];

const TheniCareer = () => {
  return (
    <>
      <section className="theni-section">
        <div className="theni-wrap">
          <Reveal className="theni-center">
            <span className="theni-eyebrow">Certification</span>
            <h2>Medical Coding Certification Preparation</h2>
            <p>Certification is a major step in many career plans.</p>
          </Reveal>
          <div className="theni-grid">
            {[
              { icon: ClipboardCheck, title: "Reinforce Knowledge", text: "To help with your certification goals, ThoughtFlows offers training to reinforce your knowledge." },
              { icon: Award, title: "Practice & Assessments", text: "Get opportunities to practice coding and take assessments that build exam readiness." },
              { icon: Search, title: "Know the Requirements", text: "When looking to achieve a certain certification, research the organization to determine the latest requirements. Once you have them, you can decide if you want to pursue the certification." },
            ].map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.12}>
                <div className="theni-card">
                  <div className="theni-icon"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="theni-section alt">
        <div className="theni-wrap theni-split">
          <Reveal x={-40} y={0}>
            <span className="theni-eyebrow">Career Support</span>
            <h2>Medical Coding Course with Placement Assistance in Theni</h2>
            <p>
              A medical coding course in Theni with placement assistance provides extra assistance
              during employment preparation. Placement assistance and career counseling may include
              some or all of the following:
            </p>
            <ul className="theni-list">
              {support.map(({ icon: Icon, text }) => (
                <li key={text}><Icon size={18} /> {text}</li>
              ))}
            </ul>
            <div className="theni-note">
              Placement assistance does not mean placement in a job. Factors such as competitors'
              interview skills and the available job openings may impact employment.
            </div>
          </Reveal>
          <Reveal x={40} y={0} className="theni-photo">
            <img src={trainerImg} alt="Trainer guiding medical coding students at ThoughtFlows Theni" loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default TheniCareer;
