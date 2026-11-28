import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit } from "../common/LuxSections";

const TrivandrumChoice = () => {
  return (
    <LuxSection tone="light">
      <LuxSplit
        reverse
        image={mediaUrl("images/Interiors/trivandrum/trivandrum-interior-06.jpg")}
        imageAlt="Academic coordinator desk at ThoughtFlows Trivandrum"
        eyebrow="Career-Ready Training"
        title="Medical Coding Training in"
        accent="Trivandrum"
      >
        <p>
          Medical Coding has become one of the most sought-after healthcare careers for Life Science, Pharmacy, Nursing, and Allied Health graduates. As healthcare services continue to expand across Kerala and India, the demand for trained Medical Coding professionals continues to grow.
        </p>
        <p>
          Our training program covers medical terminology, anatomy, physiology, ICD-10-CM, CPT, HCPCS, and CPC exam preparation to help learners develop industry-relevant skills for hospitals, healthcare BPOs, revenue cycle management companies, and global healthcare markets.
        </p>
      </LuxSplit>
    </LuxSection>
  );
};

export default TrivandrumChoice;
