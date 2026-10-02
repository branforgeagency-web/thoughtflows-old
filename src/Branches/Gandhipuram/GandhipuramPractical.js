import React from "react";
import { CheckCircle2, FileCheck, Award, Layers } from "lucide-react";
import Reveal from "../Theni/Reveal";
import practicalImg from "../../images/AboutImg/about-image.jpg";

const practicalPoints = [
  "Interpret and extract diagnoses and procedures from different kinds of documentation",
  "Apply and interpret coding rules and guidelines",
  "Determine appropriate code assignments",
  "Determine when modifiers are appropriate and interpret their meaning",
  "Answer coding related questions",
];

const GandhipuramPractical = () => {
  return (
    <section className="gandhipuram-section alt">
      <div className="gandhipuram-wrap theni-split rev" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={40} y={0} className="gandhipuram-photo">
          <img src={practicalImg} alt="Practical medical coding training at Gandhipuram" />
          <div className="badge">
            <span className="ic"><FileCheck size={22} /></span>
            <div>
              <strong>Case Studies &amp; Exercises</strong>
              <small>Hands-on practice &amp; reviews</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={-40} y={0}>
          <span className="gandhipuram-eyebrow">Hands-on Application</span>
          <h2>Practical Training That Helps You Apply What You Learn</h2>
          <p>
            While learning coding concepts is important, understanding documentation and extracting
            pertinent information to apply appropriate coding is as essential and requires repetitive practice.
          </p>
          <p>
            The course has multiple elements such as examples, exercises, practice tests and assessments
            that facilitate opportunity to apply the concepts learned in the course.
          </p>
          <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: 12 }}>
            These elements provide the opportunity for you to:
          </p>

          <ul className="gandhipuram-list">
            {practicalPoints.map((text) => (
              <li key={text}><CheckCircle2 size={18} /> {text}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="gandhipuram-wrap" style={{ marginTop: 40 }}>
        <div className="gandhipuram-address-badge" style={{ textAlign: "center", maxWidth: 880, margin: "0 auto" }}>
          <strong>Practice Assessments:</strong> Prospective students of Medical Coding courses offered by
          Alliance School of Health Sciences, Gandhipuram, have the opportunity to practice the concepts through
          lessons, case studies and assessments. Classes are offered both online and in person.
        </div>
      </Reveal>
    </section>
  );
};

export default GandhipuramPractical;
