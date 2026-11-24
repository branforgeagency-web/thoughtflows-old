import React, { useEffect } from 'react'
import CEMCBanner from './CEMC/CEMCBanner'
import AboutCEMC from './CEMC/AboutCEMC'
import CEMCFeatures from './CEMC/CEMCFeatures'
import CEMCObjective from './CEMC/CEMCObjective'
import CEMCModule from './CEMC/CEMCModule'
import WhatCEMC from './CEMC/WhatCEMC'
import WHYCEMC from './CEMC/WHYCEMC'
import WhyChooseCEMC from './CEMC/WhyChooseCEMC'
import CEMCStudyMaterial from './CEMC/CEMCStudyMaterial'
import CEMCFAQ from './CEMC/CEMCFAQ'
import Meta from '../Meta';

const CEMC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CEMC Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Evaluation and Management Coder (CEMC) with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/cemc" />

      <CEMCBanner />
      <WhatCEMC />
      <WhyChooseCEMC />
      <WHYCEMC />
      <CEMCFeatures />
      <CEMCModule />
      {/* <CEMCStudyMaterial /> */}
      <CEMCFAQ />

    </>
  )
}

export default CEMC