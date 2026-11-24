import React, { useEffect } from 'react'
import HCCBanner from './HCC/HCCBanner'
import AboutHCC from './HCC/AboutHCC'
import HCCFeatures from './HCC/HCCFeatures'
import HCCObjective from './HCC/HCCObjective'
import HCCModule from './HCC/HCCModule'
import WhatHCC from './HCC/WhatHCC'
import WHYHCC from './HCC/WHYHCC'
import WhyChooseHCC from './HCC/WhyChooseHCC'
import HCCStudyMaterial from './HCC/HCCStudyMaterial'
import HCCFAQ from './HCC/HCCFAQ'
import Meta from '../Meta';

const HCC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="HCC Coding Course | Online & Offline | ThoughtFlows" description="Hierarchical Condition Category (HCC) training with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/hcc" />

      <HCCBanner />
      <WhatHCC />
      <WhyChooseHCC />
      <WHYHCC />
      <HCCFeatures />
      <HCCModule />
      {/* <HCCStudyMaterial /> */}
      <HCCFAQ />

    </>
  )
}

export default HCC