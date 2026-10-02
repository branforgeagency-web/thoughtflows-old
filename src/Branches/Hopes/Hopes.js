import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Meta from '../../Meta';

import './Hopes.css';
import HopesBanner from './HopesBanner';
import HopesIntro from './HopesIntro';
import HopesLearn from './HopesLearn';
import HopesPractical from './HopesPractical';
import HopesCPC from './HopesCPC';
import HopesEligibility from './HopesEligibility';
import HopesModes from './HopesModes';
import HopesPlacement from './HopesPlacement';
import HopesWhy from './HopesWhy';
import HopesBranchInfo from './HopesBranchInfo';
import HopesFAQ from './HopesFAQ';
import hopesFaqs from './hopesFaqs';

const PAGE_URL = 'https://www.thoughtflows.in/medical-coding-academy-in-hopes';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${PAGE_URL}#branch`,
      name: 'ThoughtFlows Medical Coding Academy – Hopes',
      url: PAGE_URL,
      parentOrganization: { '@type': 'Organization', name: 'ThoughtFlows Medical Coding Academy', url: 'https://www.thoughtflows.in/' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Door No.62 E/F, 1st Floor South Wing, Lalitha Towers, Gandhi Street, Avinashi Rd',
        addressLocality: 'Hopes, Peelamedu, Coimbatore',
        addressRegion: 'Tamil Nadu',
        postalCode: '641004',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: hopesFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

function Hopes() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Academy in Hopes | ThoughtFlows"
        description="Join a Medical Coding Course in Hopes and learn with practical training, CPC preparation, flexible online and classroom classes, and placement support."
        canonical={PAGE_URL}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="hopes-page">
        <HopesBanner />
        <HopesIntro />
        <HopesLearn />
        <HopesPractical />
        <HopesCPC />
        <HopesEligibility />
        <HopesModes />
        <HopesPlacement />
        <HopesWhy />
        <HopesBranchInfo />
        <div className="hopes-faq"><HopesFAQ /></div>
      </div>
    </>
  );
}

export default Hopes;
