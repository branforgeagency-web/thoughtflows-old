import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Meta from '../../Meta';

import './Saravanampatti.css';
import SaravanampattiBanner from './SaravanampattiBanner';
import SaravanampattiIntro from './SaravanampattiIntro';
import SaravanampattiLearn from './SaravanampattiLearn';
import SaravanampattiPractical from './SaravanampattiPractical';
import SaravanampattiCPC from './SaravanampattiCPC';
import SaravanampattiEligibility from './SaravanampattiEligibility';
import SaravanampattiModes from './SaravanampattiModes';
import SaravanampattiPlacement from './SaravanampattiPlacement';
import SaravanampattiWhy from './SaravanampattiWhy';
import SaravanampattiBranchInfo from './SaravanampattiBranchInfo';
import SaravanampattiFAQ from './SaravanampattiFAQ';
import saravanampattiFaqs from './saravanampattiFaqs';

const PAGE_URL = 'https://www.thoughtflows.in/medical-coding-course-in-saravanampatti';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${PAGE_URL}#branch`,
      name: 'ThoughtFlows Medical Coding Academy – Saravanampatti',
      url: PAGE_URL,
      parentOrganization: { '@type': 'Organization', name: 'ThoughtFlows Medical Coding Academy', url: 'https://www.thoughtflows.in/' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Door No-171/2A, 1st Floor, Sathy Rd',
        addressLocality: 'Saravanampatti, Coimbatore',
        addressRegion: 'Tamil Nadu',
        postalCode: '641035',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: saravanampattiFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

function Saravanampatti() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Course in Saravanampatti | ThoughtFlows"
        description="Join a Medical Coding Academy in Saravanampatti with practical training, CPC preparation, classroom and online learning, and placement assistance."
        canonical={PAGE_URL}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="saravanampatti-page">
        <SaravanampattiBanner />
        <SaravanampattiIntro />
        <SaravanampattiLearn />
        <SaravanampattiPractical />
        <SaravanampattiCPC />
        <SaravanampattiEligibility />
        <SaravanampattiModes />
        <SaravanampattiPlacement />
        <SaravanampattiWhy />
        <SaravanampattiBranchInfo />
        <div className="saravanampatti-faq"><SaravanampattiFAQ /></div>
      </div>
    </>
  );
}

export default Saravanampatti;
