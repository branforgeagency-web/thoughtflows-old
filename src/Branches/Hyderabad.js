import React, { useEffect } from 'react'

import HyderabadBanner from './Hyderabad/HyderabadBanner'
import HyderabadAbout from './Hyderabad/HyderabadAbout'
import HyderabadFlex from './Hyderabad/HyderabadFlex'
import HyderabadCore from './Hyderabad/HyderabadCore'
import HyderabadSticky from './Hyderabad/HyderabadSticky'
import HyderabadOnline from './Hyderabad/HyderabadOnline'
import HyderabadOnline2 from './Hyderabad/HyderabadOnline2'
import HyderabadGetinTouch from './Hyderabad/HyderabadGetinTouch'
import HyderabadStudents from './Hyderabad/HyderabadStudents'
import Meta from '../Meta';
import HyderabadTestimonial from './Hyderabad/HyderabadTestimonial'
import HyderabadFAQ from './Hyderabad/HyderabadFAQ'

function Hyderabad() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Medical Coding Training in Ameerpet | ThoughtFlows Institute" description="Advance your career with ThoughtFlows Medical Coding Academy — professional medical coding training Ameerpet with practical learning and placement support." canonical="https://thoughtflows.in/Trusted-Medical-Coding-Ameerpet" />

      <HyderabadBanner />
      <HyderabadAbout />
      <HyderabadFlex />
      <HyderabadCore />
      <HyderabadSticky />
      <HyderabadOnline />
      <HyderabadOnline2 />
      <HyderabadGetinTouch />
      {/* <HyderabadStudents /> */}
      <HyderabadFAQ />
      <HyderabadTestimonial />
    </>
  )
}

export default Hyderabad