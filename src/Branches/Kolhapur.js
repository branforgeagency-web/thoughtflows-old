import React, { useEffect } from 'react';
import Meta from '../Meta';

import KolhapurBanner from './Kolhapur/KolhapurBanner';
import KolhapurAbout from './Kolhapur/KolhapurAbout';
import KolhapurFlex from './Kolhapur/KolhapurFlex';
import KolhapurCore from './Kolhapur/KolhapurCore';
import KolhapurSticky from './Kolhapur/KolhapurSticky';
import KolhapurOnline from './Kolhapur/KolhapurOnline';
import KolhapurOnline2 from './Kolhapur/KolhapurOnline2';
import KolhapurGetinTouch from './Kolhapur/KolhapurGetinTouch';
import KolhapurFAQ from './Kolhapur/KolhapurFAQ';
import KolhapurTestimonial from './Kolhapur/KolhapurTestimonial';

function Kolhapur() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Course in Kolhapur | ThoughtFlows Academy"
        description="Advance your healthcare career with ThoughtFlows Medical Coding Academy in Kolhapur — expert-led CPC training, practical clinical charts, and 100% placement support."
        canonical="https://www.thoughtflows.in/Medical-Coding-Training-Kolhapur"
      />

      <KolhapurBanner />
      <KolhapurAbout />
      <KolhapurFlex />
      <KolhapurCore />
      <KolhapurSticky />
      <KolhapurOnline />
      <KolhapurOnline2 />
      <KolhapurGetinTouch />
      <KolhapurFAQ />
      <KolhapurTestimonial />
    </>
  );
}

export default Kolhapur;
