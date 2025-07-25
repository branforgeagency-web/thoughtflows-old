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
          <Meta title="HCC - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

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