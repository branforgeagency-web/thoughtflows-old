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
      <Meta title="CPPM Course Training | ThoughtFlows Medical Coding Academy" description="Enroll in the CPPM course at ThoughtFlows to learn professional practice management with expert training, real-world scenarios, and career support." canonical="https://www.thoughtflows.in/cppm" />

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