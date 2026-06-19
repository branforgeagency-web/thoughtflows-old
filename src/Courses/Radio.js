import React, { useEffect } from 'react'

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
  }, [])
  return (
    <>
      <Meta title="Certified Radiology Coder Course | ThoughtFlows Academy" description="Enroll in the Certified Radiology Coder course at ThoughtFlows with expert training, radiology coding practice, and career-focused support." canonical="https://www.thoughtflows.in/radiology" />

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