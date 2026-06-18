import React, { useEffect } from 'react'

import HyderabadBanner from './Hyderabad2/Hyderabad2Banner'
import HyderabadAbout from './Hyderabad2/Hyderabad2About'
import HyderabadFlex from './Hyderabad2/Hyderaba2dFlex'
import HyderabadCore from './Hyderabad2/Hyderabad2Core'
import HyderabadSticky from './Hyderabad2/Hyderabad2Sticky'
import HyderabadOnline from './Hyderabad2/Hyderabad2Online'
import HyderabadOnline2 from './Hyderabad2/Hyderabad2Online2'
import HyderabadGetinTouch from './Hyderabad2/Hyderabad2GetinTouch'
import HyderabadStudents from './Hyderabad2/Hyderabad2Students'
import Meta from '../Meta';
import Hyderabad2Testimonial from './Hyderabad2/Hyderabad2Testimonial'
import Hyderabad2FAQ from './Hyderabad2/Hyderabad2FAQ'

function Hyderabad() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Medical Coding Institute in Hyderabad | ThoughtFlows Academy" description="Get certified at ThoughtFlows Medical Coding Academy in Hyderabad — top medical coding institute with real practice, expert training, and career support." canonical="https://thoughtflows.in/Professional-Medical-Coding-Dilsukhnagar" />

      <HyderabadBanner />
      <HyderabadAbout />
      <HyderabadFlex />
      <HyderabadCore />
      <HyderabadSticky />
      <HyderabadOnline />
      <HyderabadOnline2 />
      <HyderabadGetinTouch />
      {/* <HyderabadStudents /> */}
      <Hyderabad2FAQ />
      <Hyderabad2Testimonial />
    </>
  )
}

export default Hyderabad