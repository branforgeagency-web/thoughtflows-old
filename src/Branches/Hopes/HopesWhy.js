import React from "react";
import { BookOpen, School, TrendingUp, Award, Laptop, Briefcase } from "lucide-react";
import Reveal from "../Theni/Reveal";

const whyPoints = [
  { icon: BookOpen, title: "Practical Training", text: "Courses are designed to include examples, exercises and assessments to foster practical learning." },
  { icon: School, title: "Dedicated Practice Rooms", text: "Hopes Center learners have a practice room to strengthen their coding skills." },
  { icon: TrendingUp, title: "Progress Tests", text: "Regular assessments help learners evaluate their progress and identify weak areas." },
  { icon: Award, title: "Preparation for CPC Examination", text: "Example codes, coding exercises and practice tests help learners prepare for the CPC examination." },
  { icon: Laptop, title: "Flexibility", text: "Training can be taken online or in a classroom setting to accommodate different learners." },
  { icon: Briefcase, title: "Career Services", text: "Assistance with job search, including resume writing and interview preparation, mock interviews and placement in jobs are offered to learners." },
];

const HopesWhy = () => {
  return (
    <section className="hopes-section alt">
      <div className="hopes-wrap">
        <Reveal className="hopes-center">
          <span className="hopes-eyebrow">Why Choose Us</span>
          <h2>Why Choose ThoughtFlows?</h2>
          <p>
            When choosing a Medical Coding Institute in Hopes, one must look beyond the course curriculum
            to evaluate the institute as a whole. Other crucial factors include the learning environment,
            practical training, assessment and therapy procedures.
          </p>
          <p style={{ marginTop: 10, fontWeight: 500, color: "#0f172a" }}>
            Regarding these elements, ThoughtFlows stands out, and, in addition to well-designed courses, offers:
          </p>
        </Reveal>

        <div className="hopes-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {whyPoints.map(({ icon: Icon, title, text }, i) => (
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
          <p style={{ textAlign: "center", color: "#475569" }}>
            ThoughtFlows incorporates all these services for learners wishing to take Medical Coding Training in Hopes.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HopesWhy;
