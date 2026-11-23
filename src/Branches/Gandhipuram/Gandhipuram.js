import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Meta from '../../Meta';

import './Gandhipuram.css';
import GandhipuramBanner from './GandhipuramBanner';
import GandhipuramIntro from './GandhipuramIntro';
import GandhipuramPractical from './GandhipuramPractical';
import GandhipuramEligibility from './GandhipuramEligibility';
import GandhipuramModes from './GandhipuramModes';
import GandhipuramCPCPlacement from './GandhipuramCPCPlacement';
import GandhipuramWhy from './GandhipuramWhy';
import GandhipuramGallery from './GandhipuramGallery';
import GandhipuramFees from './GandhipuramFees';
import GandhipuramBranchInfo from './GandhipuramBranchInfo';
import GandhipuramFAQ from './GandhipuramFAQ';
import gandhipuramFaqs from './gandhipuramFaqs';

const PAGE_URL = 'https://www.thoughtflows.in/medical-coding-course-gandhipuram-coimbatore';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${PAGE_URL}#branch`,
      name: 'ThoughtFlows Medical Coding Academy – Gandhipuram',
      url: PAGE_URL,
      parentOrganization: { '@type': 'Organization', name: 'ThoughtFlows Medical Coding Academy', url: 'https://www.thoughtflows.in/' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jay Enclave, No.1084, 3rd Street, Cross Cut Road',
        addressLocality: 'Gandhipuram, Coimbatore',
        addressRegion: 'Tamil Nadu',
        postalCode: '641012',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: gandhipuramFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

function Gandhipuram() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Course in Coimbatore – Gandhipuram Branch"
        description="Join medical coding classes in Gandhipuram, Coimbatore. AAPC CPC training with placement support at ThoughtFlows. Visit the branch or enquire today."
        canonical={PAGE_URL}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="gandhipuram-page">
        <GandhipuramBanner />
        <GandhipuramIntro />
        <GandhipuramPractical />
        <GandhipuramEligibility />
        <GandhipuramModes />
        <GandhipuramCPCPlacement />
        <GandhipuramWhy />
        <GandhipuramGallery />
        <GandhipuramFees />
        <GandhipuramBranchInfo />
        <div className="gandhipuram-faq"><GandhipuramFAQ /></div>
      </div>
    </>
  );
}

export default Gandhipuram;
