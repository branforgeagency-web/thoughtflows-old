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

const PAGE_URL = 'https://www.thoughtflows.in/Top-Medical-Coding-Training-Saravanampatti';

const schema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${PAGE_URL}#branch`,
  name: 'ThoughtFlows Medical Coding Academy',
  url: PAGE_URL,
  description:
    'Medical coding training academy in Saravanampatti, Coimbatore offering CPC certification preparation, online and offline classes, and placement assistance.',
  telephone: '+91-9384576852',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No-171/2A, 1st Promenade, Tower, Sathy Rd, Saravanampatti',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641035',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.078158,
    longitude: 77.003236,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  areaServed: { '@type': 'City', name: 'Coimbatore' },
  parentOrganization: { '@id': 'https://www.thoughtflows.in/#organization' },
};

function Saravanampatti() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Training in Saravanampatti | ThoughtFlows"
        description="Medical coding training in Saravanampatti, Coimbatore — CPC & CCS certification with AAPC-certified trainers, live chart practice and placement support."
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
