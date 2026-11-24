import React, { useEffect } from 'react'
import CPBBanner from './CPB/CPBBanner'
import AboutCPB from './CPB/AboutCPB'
import CPBFeatures from './CPB/CPBFeatures'
import CPBObjective from './CPB/CPBObjective'
import CPBModule from './CPB/CPBModule'
import WhatCPB from './CPB/WhatCPB'
import WHYCPB from './CPB/WHYCPB'
import WhyChooseCPB from './CPB/WhyChooseCPB'
import CPBStudyMaterial from './CPB/CPBStudyMaterial'
import CPBFAQ from './CPB/CPBFAQ'
import Meta from '../Meta';

const CPB = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CPB Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Professional Biller (CPB) with an AI-integrated medical billing curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/cpb" />

      <CPBBanner />
      <WhatCPB />
      <WhyChooseCPB />
      <WHYCPB />
      <CPBFeatures />
      <CPBModule />
      {/* <CPBStudyMaterial /> */}
      <CPBFAQ />

    </>
  )
}

export default CPB