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
          <Meta title="CPB - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

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