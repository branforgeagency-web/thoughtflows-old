import React, { useEffect } from 'react'
import CDEIBanner from './CDEI/CDEIBanner'
import AboutCDEI from './CDEI/AboutCDEI'
import CDEIFeatures from './CDEI/CDEIFeatures'
import CDEIObjective from './CDEI/CDEIObjective'
import CDEIModule from './CDEI/CDEIModule'
import WhatCDEI from './CDEI/WhatCDEI'
import WHYCDEI from './CDEI/WHYCDEI'
import WhyChooseCDEI from './CDEI/WhyChooseCDEI'
import CDEIStudyMaterial from './CDEI/CDEIStudyMaterial'
import CDEIFAQ from './CDEI/CDEIFAQ'
import Meta from '../Meta';

const CDEI = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CDEI Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Documentation Expert Inpatient (CDEI) with an AI-integrated clinical documentation curriculum. Online & offline at ThoughtFlows." canonical="https://www.thoughtflows.in/cdei" />

      <CDEIBanner />
      <WhatCDEI />
      <WhyChooseCDEI />
      <WHYCDEI />
      <CDEIFeatures />
      <CDEIModule />
      {/* <CDEIStudyMaterial /> */}
      <CDEIFAQ />

    </>
  )
}

export default CDEI