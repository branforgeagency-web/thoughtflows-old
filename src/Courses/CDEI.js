import React, { useEffect } from 'react'
import CDEIBanner from './CDEI/CDEIBanner'
import AboutCDEI from './CDEI/AboutCDEI'
import CDEIFeatures from './CDEI/CDEIFeatures'
import CDEIObjective from './CDEI/CDEIObjective'
import CDEIModule from './CDEI/CDEIModule'
import WhatCDEI from './CDEI/WhatCDEI'
import WHYCDEI from './CDEI/WHYCDEI'
import CDEIStudyMaterial from './CDEI/CDEIStudyMaterial'
import CDEIFAQ from './CDEI/CDEIFAQ'
import Meta from '../Meta';

const CDEI = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CDEI Course Training | ThoughtFlows Medical Coding Academy" description="Join the CDEI course at ThoughtFlows to master inpatient documentation with expert guidance, practical learning, and career support." canonical="https://www.thoughtflows.in/cdei" />

      <CDEIBanner />
      <WhatCDEI />
      <WHYCDEI />
      <CDEIFeatures />
      <CDEIModule />
      {/* <CDEIStudyMaterial /> */}
      <CDEIFAQ />

    </>
  )
}

export default CDEI