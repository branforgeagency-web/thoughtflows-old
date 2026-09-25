import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Meta from '../Meta';

import './Theni/Theni.css';
import TheniBanner from './Theni/TheniBanner';
import TheniIntro from './Theni/TheniIntro';
import TheniLearn from './Theni/TheniLearn';
import TheniModes from './Theni/TheniModes';
import TheniCareer from './Theni/TheniCareer';
import TheniWhy from './Theni/TheniWhy';
import TheniBranchInfo from './Theni/TheniBranchInfo';
import TheniFAQ from './Theni/TheniFAQ';
import theniFaqs from './Theni/theniFaqs';

const PAGE_URL = 'https://www.thoughtflows.in/medical-coding-course-theni';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${PAGE_URL}#branch`,
      name: 'ThoughtFlows Medical Coding Academy – Theni',
      url: PAGE_URL,
      parentOrganization: { '@type': 'Organization', name: 'ThoughtFlows Medical Coding Academy', url: 'https://www.thoughtflows.in/' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5A/22, Forest Road, Shivaji Nagar, NRT Nagar',
        addressLocality: 'Theni',
        addressRegion: 'Tamil Nadu',
        postalCode: '625531',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: theniFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

function Theni() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Course in Theni | ThoughtFlows"
        description="Build practical medical coding skills with structured training, flexible classroom and online learning, certification preparation, and placement assistance."
        canonical={PAGE_URL}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="theni-page">
      <TheniBanner />
      <TheniIntro />
      <TheniLearn />
      <TheniModes />
      <TheniCareer />
      <TheniWhy />
      <TheniBranchInfo />
      <div className="theni-faq"><TheniFAQ /></div>
      </div>
    </>
  );
}

export default Theni;
