import React from "react";
import Reveal from "./Reveal";
import imgTerm from "../../images/Branches/online/on1.jpg";
import imgAnatomy from "../../images/Branches/online/on11.jpg";
import imgIcd from "../../images/Branches/online/on7.jpg";
import imgCpt from "../../images/Branches/online/on2.jpg";
import imgHcpcs from "../../images/Branches/online/on13.jpg";
import imgPractical from "../../images/AboutImg/about-image.jpg";

const topics = [
  { img: imgTerm, tag: "Foundation", title: "Medical Terminology", text: "Familiarize yourself with the terminology and abbreviations used in the fields of medicine and healthcare." },
  { img: imgAnatomy, tag: "Foundation", title: "Anatomy", text: "Familiarize yourself with the main systems, organs and structures of the body and basic anatomy." },
  { img: imgIcd, tag: "Diagnosis Coding", title: "ICD-10-CM", text: "Learn the basics of coding various medical conditions and symptoms using the ICD-10-CM coding system." },
  { img: imgCpt, tag: "Procedure Coding", title: "CPT", text: "Familiarize yourself with the basics of coding various procedures using the CPT coding system." },
  { img: imgHcpcs, tag: "Supplies & Services", title: "HCPCS", text: "Learn the basics of coding various products and services using the HCPCS coding system." },
  { img: imgPractical, tag: "Hands-on", title: "Practical Coding", text: "Learn to code through case studies and coding workouts. The focus is on understanding the rationale and the case documentation as to why a particular code was assigned." },
];

const TheniLearn = () => {
  return (
    <section className="theni-section">
      <div className="theni-wrap">
        <Reveal className="theni-center">
          <span className="theni-eyebrow">Curriculum</span>
          <h2>What Will You Learn?</h2>
          <p>
            A medical coding program has to teach medical coding concepts and provide the necessary
            contextual knowledge of the human anatomy and medical terminology and lingo.
          </p>
        </Reveal>
        <div className="theni-grid">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.12}>
              <div className="theni-imgcard">
                <div className="thumb">
                  <img src={t.img} alt={`${t.title} – medical coding course in Theni`} loading="lazy" />
                  <span className="tag">{t.tag}</span>
                </div>
                <div className="body">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheniLearn;
