import React from 'react';
import { mediaUrl } from '../../config/media';
import { LuxSection, LuxHead, LuxPhotoCards } from '../common/LuxSections';

const PuneContents = () => (
  <LuxSection tone="tint">
    <LuxHead
      eyebrow="Inside the Curriculum"
      title="Hands-On Training &"
      accent="Certification Prep"
      intro="Stay current with annual code revisions, master global certifications, and practice on real clinical cases."
    />
    <LuxPhotoCards
      items={[
        {
          title: 'Stay Ahead as the Industry Evolves',
          text: 'Every year brings new ICD-10-CM and CPT codes, updated guidelines, and revised payer policies. Our Pune workshops give you a head start on documentation gaps, reimbursement impact, and interview readiness.',
          image: mediaUrl('images/Interiors/pune/pune-interior-03.jpg'),
          imageAlt: 'Window-side coding workstations at ThoughtFlows Pune',
          badge: 'Annual Updates',
        },
        {
          title: 'Prepare for Globally Recognized Certifications',
          text: 'Master the latest revisions across ICD-10-CM, CPT, and HCPCS alongside policy changes that affect daily medical coding, preparing you for certification exams and technical interviews.',
          image: mediaUrl('images/Interiors/pune/pune-interior-04.jpg'),
          imageAlt: 'Executive conference and boardroom at ThoughtFlows Pune',
          badge: 'CPC & CCS',
        },
        {
          title: 'Learn by Coding Real Cases',
          text: 'Expert-led medical coding training in Pune focused on how annual code amendments affect day-to-day coding workflows—building practical confidence for interviews and the workplace.',
          image: mediaUrl('images/Interiors/pune/pune-interior-06.jpg'),
          imageAlt: 'Collaborative study booth at ThoughtFlows Pune',
          badge: 'Live Charts',
        },
      ]}
    />
  </LuxSection>
);

export default PuneContents;
