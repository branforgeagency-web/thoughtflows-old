import React, { useEffect } from 'react';
import Meta from '../Meta';

import PuneBanner from './Pune/PuneBanner';
import PuneAbout from './Pune/PuneAbout';
import PuneTransform from './Pune/PuneTransform';
import PuneCore from './Pune/PuneCore';
import PuneContents from './Pune/PuneContents';
import PuneFAQ from './Pune/PuneFAQ';

function Pune() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Course in Pune | CPC Training | Thoughtflows"
        description="Join medical coding classes in Pune at Thoughtflows. Learn ICD-10-CM, CPT & HCPCS from certified coders with CPC prep, real charts & flexible batches."
        canonical="https://www.thoughtflows.in/medical-coding-course-pune/"
      />

      <PuneBanner />
      <PuneAbout />
      <PuneTransform />
      <PuneCore />
      <PuneContents />
      <PuneFAQ />
    </>
  );
}

export default Pune;
