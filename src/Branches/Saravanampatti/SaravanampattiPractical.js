import React from "react";
import { FileCheck, School } from "lucide-react";
import Reveal from "../Theni/Reveal";
import practicalImg from "../../images/AboutImg/about-image.jpg";

const SaravanampattiPractical = () => {
  return (
    <section className="saravanampatti-section">
      <div className="saravanampatti-wrap saravanampatti-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <Reveal x={-40} y={0} className="saravanampatti-photo">
          <img src={practicalImg} alt="Practical learning beyond the classroom at Saravanampatti" />
          <div className="badge">
            <span className="ic"><FileCheck size={22} /></span>
            <div>
              <strong>Practice Room Available</strong>
              <small>Coding simulations &amp; sample cases</small>
            </div>
          </div>
        </Reveal>

        <Reveal x={40} y={0}>
          <span className="saravanampatti-eyebrow">Simulations &amp; Practice</span>
          <h2>Practical Learning Beyond the Classroom</h2>
          <p>
            Learn coding frameworks is easy. Knowing how to appropriately utilize those concepts to fix problems
            remains the challenge.
          </p>
          <p>
            ThoughtFlows provides coding simulations and samples. It gives users a means to test their understanding
            and assess their readiness to sit for an assessment or mock test.
          </p>
          <p>
            The Saravanampatti center has a practice room to help users revise coding and frameworks concepts.
          </p>
          <p>
            Users attending Medical Coding classes at Saravanampatti have the opportunity to work through coding simulations.
            They can get their doubts clarified and have the opportunity to practice coding scenarios. Eventually, users will be
            able to decipher what types of questions and assessment to expect.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default SaravanampattiPractical;
