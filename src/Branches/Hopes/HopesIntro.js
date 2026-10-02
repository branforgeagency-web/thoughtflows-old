import React from "react";
import { Layers, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";
import coderImg from "../../images/Branches/online/on12.jpg";

const HopesIntro = () => {
  return (
    <section className="hopes-section">
      <div className="hopes-wrap hopes-split">
        <Reveal x={-40} y={0} className="hopes-photo">
          <img src={coderImg} alt="Learning medical coding step by step at Hopes" />
          <div className="badge">
            <span className="ic"><Layers size={22} /></span>
            <div>
              <strong>Step-by-Step Approach</strong>
              <small>From basics to advanced codes</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={40} y={0}>
          <span className="hopes-eyebrow">Structured Pathway</span>
          <h2>Learn Medical Coding Step by Step</h2>
          <p>
            Medical coding is the art of translating the services and procedures performed by a patient into
            a Universal Code. This code is then sent to insurance companies to process payment. The terminology
            used to describe these procedures is often confusing for someone new to the field. The same medical
            procedure can often be described in multiple ways. Candidates enrolled in this course at Thought Flows
            will develop a strong command of medical terminology and be able to implement various medical coding systems.
          </p>
          <p>
            The course progresses from the basics of medical terminology to ICD-10, CPT, HCPCS II, Modifiers,
            and Special Codes. The focus remains on understanding different medical specialties, anatomy and terminology
            pertinent to each. The course is designed to prepare students to write legibly and accurately code
            different types of medical documentation.
          </p>
          <p>
            The course is intended for people making a mid-career change or recent graduates considering a profession
            in medical coding. The course gives participants the skills needed to perform entry-level medical coding
            tasks. This Medical Coding Training in Hopes follows a step-by-step approach so learners can build their
            understanding progressively.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HopesIntro;
