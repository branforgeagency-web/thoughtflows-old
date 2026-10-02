import React from "react";
import { FileText, Users, Search, TrendingUp, Bell, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";
import trainerImg from "../../images/Course Images/CEMC1.jpg";

const placementServices = [
  { icon: FileText, title: "Resume Assistance", text: "Learning how to incorporate your coding training and other related skills on your resume." },
  { icon: Users, title: "Interview Training", text: "Preparing for interview questions and learning how to discuss your coding knowledge." },
  { icon: CheckCircle2, title: "Interview Rehearsal", text: "Learning and practicing techniques that will help you answer interview questions." },
  { icon: TrendingUp, title: "Career Training", text: "Learning about different career options available after the training, and how to locate them." },
  { icon: Search, title: "Job Option Referral", text: "Learning about and locating different available Medical Coding jobs." },
  { icon: Bell, title: "Recruitment Help", text: "Learning about different parts of the recruitment process and how to navigate it." },
];

const HopesPlacement = () => {
  return (
    <section className="hopes-section">
      <div className="hopes-wrap theni-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0}>
          <span className="hopes-eyebrow">100% Placement Assistance</span>
          <h2>Training with Placement Assistance</h2>
          <p>
            Medical coding is a skill that must be learned, and careerseekers may need additional help
            in different parts of the process.
          </p>
          <p>
            We at Hope's in collaboration with ThoughtFlows, understand this and provide 100% placement assistance.
            This means that persons interested in Hope’s Medical Coding program can receive help in other areas as well.
          </p>
          <p>
            For learners looking specifically for Medical Coding training with placement in Hopes, the program
            combines medical coding education with support for the job-search and recruitment process.
          </p>
        </Reveal>

        <Reveal x={40} y={0} className="hopes-photo">
          <img src={trainerImg} alt="Placement assistance at ThoughtFlows Hopes" loading="lazy" />
        </Reveal>
      </div>

      <div className="hopes-wrap" style={{ marginTop: 50 }}>
        <Reveal className="hopes-center">
          <h3 style={{ fontSize: 22 }}>The Placement Assistance program covers the following:</h3>
        </Reveal>

        <div className="hopes-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {placementServices.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="hopes-card">
                <div className="hopes-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 30 }}>
          <div className="hopes-note" style={{ maxWidth: 900, margin: "0 auto" }}>
            <strong>Note:</strong> The program focuses on the Medical Coding Training and helps participants build
            their career Preparation skills. The Placement Assistance Program is meant to support participants with their
            job search and recruitment process. Finding employment is based on several factors including participant’s
            skills, abilities, and other factors beyond our control.
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HopesPlacement;
