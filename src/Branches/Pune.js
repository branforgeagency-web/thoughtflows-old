import React, { useEffect } from 'react';
import Meta from '../Meta';

import PuneBanner from './Pune/PuneBanner';
import PuneAbout from './Pune/PuneAbout';
import PuneFlex from './Pune/PuneFlex';
import PuneCore from './Pune/PuneCore';
import PuneSticky from './Pune/PuneSticky';
import PuneOnline from './Pune/PuneOnline';
import PuneOnline2 from './Pune/PuneOnline2';
import PuneGetinTouch from './Pune/PuneGetinTouch';
import PuneFAQ from './Pune/PuneFAQ';
import PuneTestimonial from './Pune/PuneTestimonial';

function Pune() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Course in Pune | ThoughtFlows Academy"
        description="Advance your healthcare career with ThoughtFlows Medical Coding Academy in Pune — expert AAPC certified trainers, practical case studies, and 100% placement support."
        canonical="https://www.thoughtflows.in/Advanced-Medical-Coding-Pune"
      />

      <PuneBanner />
      <PuneAbout />
      <PuneFlex />
      <PuneCore />
      <PuneSticky />
      <PuneOnline />
      <PuneOnline2 />
      <PuneGetinTouch />
      <PuneFAQ />
      <PuneTestimonial />
    </>
  );
}

export default Pune;
