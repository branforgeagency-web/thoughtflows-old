import React, { useEffect } from 'react'
import CPPMBanner from './CPPM/CPPMBanner'
import AboutCPPM from './CPPM/AboutCPPM'
import CPPMFeatures from './CPPM/CPPMFeatures'
import CPPMObjective from './CPPM/CPPMObjective'
import CPPMModule from './CPPM/CPPMModule'
import WhatCPPM from './CPPM/WhatCPPM'
import WHYCPPM from './CPPM/WHYCPPM'
import CPPMStudyMaterial from './CPPM/CPPMStudyMaterial'
import CPPMFAQ from './CPPM/CPPMFAQ'
import Meta from '../Meta';


const CPPM = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, [])
  return (
    <>
          <Meta title="CPPM - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <CPPMBanner />
      <WhatCPPM />
      <WHYCPPM />
      <CPPMFeatures />
      <CPPMModule />
      {/* <CPPMStudyMaterial /> */}
      <CPPMFAQ />

    </>
  )
}

export default CPPM