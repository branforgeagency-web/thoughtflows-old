import React, { useEffect } from 'react'
import CPPMBanner from './CPPM/CPPMBanner'
import AboutCPPM from './CPPM/AboutCPPM'
import CPPMFeatures from './CPPM/CPPMFeatures'
import CPPMObjective from './CPPM/CPPMObjective'
import CPPMModule from './CPPM/CPPMModule'
import WhatCPPM from './CPPM/WhatCPPM'
import WHYCPPM from './CPPM/WHYCPPM'
import WhyChooseCPPM from './CPPM/WhyChooseCPPM'
import CPPMStudyMaterial from './CPPM/CPPMStudyMaterial'
import CPPMFAQ from './CPPM/CPPMFAQ'
import Meta from '../Meta';


const CPPM = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CPPM Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Physician Practice Manager (CPPM) with an AI-integrated practice management curriculum. Online & offline at ThoughtFlows." canonical="https://www.thoughtflows.in/cppm" />

      <CPPMBanner />
      <WhatCPPM />
      <WhyChooseCPPM />
      <WHYCPPM />
      <CPPMFeatures />
      <CPPMModule />
      {/* <CPPMStudyMaterial /> */}
      <CPPMFAQ />

    </>
  )
}

export default CPPM