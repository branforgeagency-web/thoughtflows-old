import React from "react";
import { Layers, CheckCircle2, BookOpen } from "lucide-react";
import Reveal from "../Theni/Reveal";
import { mediaUrl } from '../../config/media';
const coderImg2 = mediaUrl("images/Interiors/svm/svm-batch-classroom-students.jpg");
const coderImg = mediaUrl("images/Interiors/svm/svm-clinical-anatomy-session.jpg");

const SaravanampattiIntro = () => {
  return (
    <>
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
            Looking for a Medical Coding Course in Saravanampatti that combines structured learning with practical
            training and career support? ThoughtFlows Medical Coding Academy provides medical coding training for graduates,
            freshers, job seekers, working professionals and candidates exploring a career change.
          </p>
          <p>
            The course covers medical terminology, anatomy and physiology, ICD-10-CM, CPT, HCPCS, modifiers and coding
            guidelines, along with practical exercises, assessments and CPC preparation. Learners can choose classroom
            or online training based on their schedule and learning preferences.
          </p>
          <p>
            Medical coders assess patient records and documents and allocate diagnostic, procedure and other
            pertinent codes. This work requires knowledge of various terminologies and coding guidelines. Knowledge
            of coding structures may be reinforced through practice but cannot be learnt through practice without
            knowledge of the structures.
          </p>
        </Reveal>
      </div>
    </section>
    <section className="saravanampatti-section" style={{ paddingTop: 0 }}>
      <div className="saravanampatti-wrap saravanampatti-split rev">
        <Reveal x={40} y={0} className="saravanampatti-photo">
          <img src={coderImg2} alt="Medical coding batch learning at the Saravanampatti branch" />
          <div className="badge">
            <span className="ic"><BookOpen size={22} /></span>
            <div>
              <strong>Concept-First Training</strong>
              <small>Rationale before memorization</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={-40} y={0}>
          <span className="saravanampatti-eyebrow">Why Foundations Matter</span>
          <h2>Understand the Reason Behind Every Code</h2>
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
    </>
  );
};

export default SaravanampattiIntro;
