import React, { useEffect } from 'react'
import HCCBanner from './HCC/HCCBanner'
import AboutHCC from './HCC/AboutHCC'
import HCCFeatures from './HCC/HCCFeatures'
import HCCObjective from './HCC/HCCObjective'
import HCCModule from './HCC/HCCModule'
import WhatHCC from './HCC/WhatHCC'
import WHYHCC from './HCC/WHYHCC'
import HCCStudyMaterial from './HCC/HCCStudyMaterial'
import HCCFAQ from './HCC/HCCFAQ'
import Meta from '../Meta';

const HCC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="Hierarchical Condition Category Course | ThoughtFlows" description="Join the Hierarchical Condition Category course at ThoughtFlows with expert training in HCC coding, risk adjustment models, and career support." canonical="https://thoughtflows.in/hcc" />

      <HCCBanner />
      <WhatHCC />
      <WHYHCC />
      <HCCFeatures />
      <HCCModule />
      {/* <HCCStudyMaterial /> */}
      <HCCFAQ />

    </>
  )
}

export default HCC