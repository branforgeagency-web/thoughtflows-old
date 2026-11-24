import React, { useEffect } from 'react'
import CPBBanner from './CPB/CPBBanner'
import AboutCPB from './CPB/AboutCPB'
import CPBFeatures from './CPB/CPBFeatures'
import CPBObjective from './CPB/CPBObjective'
import CPBModule from './CPB/CPBModule'
import WhatCPB from './CPB/WhatCPB'
import WHYCPB from './CPB/WHYCPB'
import CPBStudyMaterial from './CPB/CPBStudyMaterial'
import CPBFAQ from './CPB/CPBFAQ'
import Meta from '../Meta';

const CPB = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CPB Training | Certified Medical Biller Course – ThoughtFlows" description="Join CPB training at ThoughtFlows for certified medical biller training with expert instruction, real practice, and career support for billing excellence." canonical="https://www.thoughtflows.in/cpb" />

      <CPBBanner />
      <WhatCPB />
      <WHYCPB />
      <CPBFeatures />
      <CPBModule />
      {/* <CPBStudyMaterial /> */}
      <CPBFAQ />

    </>
  )
}

export default CPB