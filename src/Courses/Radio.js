import React,{useEffect}from 'react'

import RadioBanner from './Radiology/RadioBanner'
import AboutRadiology from './Radiology/AboutRadiology'
import RadiologyFeatures from './Radiology/RadioogyFeatures'
import RadioObjectives from './Radiology/RadioObjectives'
import RadiologyFAQ from './Radiology/RadiologyFAQ'
import RadioEligible from './Radiology/RadioEligible'
import WhyChoose from './Radiology/WhyChoose'
import RadioBook from './Radiology/RadioBook'
import WhatIsRadiology from './Radiology/WhatIsRadiology'
import Meta from '../Meta';

function Radio() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
          <Meta title="Radiology - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <RadioBanner />
      <WhatIsRadiology />
      <RadioEligible />
      <AboutRadiology />
      <RadioObjectives />
      <RadioBook />
      <WhyChoose />
      <RadiologyFAQ />
    </>
  )
}

export default Radio