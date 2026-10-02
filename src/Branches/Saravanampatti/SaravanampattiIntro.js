import React from "react";
import { Layers, CheckCircle2 } from "lucide-react";
import Reveal from "../Theni/Reveal";
import coderImg from "../../images/Branches/online/on12.jpg";

const SaravanampattiIntro = () => {
  return (
    <section className="saravanampatti-section">
      <div className="saravanampatti-wrap saravanampatti-split">
        <Reveal x={-40} y={0} className="saravanampatti-photo">
          <img src={coderImg} alt="Building a strong foundation in medical coding at Saravanampatti" />
          <div className="badge">
            <span className="ic"><Layers size={22} /></span>
            <div>
              <strong>Foundational Approach</strong>
              <small>No rote memorization required</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={40} y={0}>
          <span className="saravanampatti-eyebrow">Underlying Rationale</span>
          <h2>Build a Strong Foundation in Medical Coding</h2>
          <p>
            Medical coders assess patient records and documents and allocate diagnostic, procedure and other
            pertinent codes. This work requires knowledge of various terminologies and coding guidelines. Knowledge
            of coding structures may be reinforced through practice but cannot be learnt through practice without
            knowledge of the structures.
          </p>
          <p>
            ThoughtFlows, Medical Coding Training in Saravanampatti, focuses on learning the underlying foundations
            of medical coding. Subsequently, the training covers the various coding systems and practice. Thus, candidates
            have the opportunity to understand the rationale and the reason for coding in a particular way. This may be
            contrasted with other trainings where candidates may be required to learn various structures by heart.
          </p>
          <p>
            The training is appropriate for individuals wishing to pursue a career in medical coding. Candidates without
            any medical coding background are preferred.
          </p>
          <p>
            When prospective candidates evaluate other Medical Coding Academies in Saravanampatti, they may find the
            overall preparation for a career in this field, including foundational training and practice, is integrated
            in the training offerings.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default SaravanampattiIntro;
