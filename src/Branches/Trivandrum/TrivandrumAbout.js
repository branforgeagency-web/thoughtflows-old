import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit } from "../common/LuxSections";

function TrivandrumAbout() {
  return (
    <LuxSection tone="light">
      <LuxSplit
        image={mediaUrl("images/Interiors/trivandrum/trivandrum-interior-05.jpg")}
        imageAlt="Admissions and counseling desk at ThoughtFlows Trivandrum"
        eyebrow="Trivandrum Campus"
        title="Why Choose ThoughtFlows Medical Coding Academy in"
        accent="Trivandrum?"
      >
        <p>
          ThoughtFlows is committed to helping students build successful careers in the healthcare industry through industry-focused training and career development support. With 35,000+ students trained and 25,000+ career placements and transitions supported, the academy has established itself as a trusted name in Medical Coding education.
        </p>
        <p>
          Students benefit from experienced trainers, practical coding sessions, CPC certification guidance, interview preparation, flexible learning options, and placement-focused training. Many students looking for Medical Coding Training in Kerala choose ThoughtFlows because of its structured learning approach, career-focused support, and commitment to student success.
        </p>
      </LuxSplit>
    </LuxSection>
  );
}

export default TrivandrumAbout;
