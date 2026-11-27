import React from 'react';
import { mediaUrl } from '../../config/media';
import { LuxSection, LuxSplit } from '../common/LuxSections';

const PuneAbout = () => (
  <LuxSection tone="light">
    <LuxSplit
      image={mediaUrl('images/Interiors/pune/pune-interior-01.jpg')}
      imageAlt="Smart coding classroom at ThoughtFlows Pune"
      eyebrow="Pune Campus"
      title="Pune's Trusted"
      accent="Medical Coding Institute"
    >
      <p>
        Are you interested in studying medical coding in Pune? Thoughtflows Medical Coding Academy has
        industry-centric medical coding courses in Pune geared towards graduates, nursing and life sciences
        students and allied health professionals.
      </p>
      <p>
        Through this training you will learn HCPCS, CPT and ICD-10-CM coding and prepare for the CPC exam.
        Our trainers are practitioners with industry experience, backed by working relationships with hospitals
        and healthcare facilities to equip you for a career in medical coding.
      </p>
    </LuxSplit>
  </LuxSection>
);

export default PuneAbout;
