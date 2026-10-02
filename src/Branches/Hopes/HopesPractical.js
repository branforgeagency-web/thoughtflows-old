import React from "react";
import { CheckCircle2, FileCheck, School } from "lucide-react";
import Reveal from "../Theni/Reveal";
import practicalImg from "../../images/AboutImg/about-image.jpg";

const HopesPractical = () => {
  return (
    <section className="hopes-section">
      <div className="hopes-wrap hopes-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0} className="hopes-photo">
          <img src={practicalImg} alt="Practical training and regular practice at Hopes" />
          <div className="badge">
            <span className="ic"><FileCheck size={22} /></span>
            <div>
              <strong>Dedicated Practice Room</strong>
              <small>Space to reinforce learned concepts</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={40} y={0}>
          <span className="hopes-eyebrow">Hands-On Practice</span>
          <h2>Practical Training and Regular Practice</h2>
          <p>
            Learning coding concepts is only part of the journey to feeling comfortable with medical coding.
            Hands-on experience in the form of practice cases helps future coders familiarize themselves
            with various aspects of the coding process.
          </p>
          <p>
            The Medical Coding Training in Hopes at ThoughtFlows provides ample opportunity for learners
            to practice what they have learned through coding activities, tests and assessments.
          </p>
          <p>
            The Hopes Center for Training and Research provides a practice room to give learners the space
            to practice coding activities and reinforce learned concepts.
          </p>
          <p>
            In-person sessions of the Hopes Medical Coding Class in Hopes help learners interact with an
            instructor to discuss and clarify their doubts. Participants get to go over coding examples
            and situations that help them further their understanding of the concepts.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HopesPractical;
