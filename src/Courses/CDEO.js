import React, { useEffect } from 'react'
import CDEOBanner from './CDEO/CDEOBanner'
import AboutCDEO from './CDEO/AboutCDEO'
import CDEOFeatures from './CDEO/CDEOFeatures'
import CDEOObjective from './CDEO/CDEOObjective'
import CDEOModule from './CDEO/CDEOModule'
import WhatCDEO from './CDEO/WhatCDEO'
import WHYCDEO from './CDEO/WHYCDEO'
import WhyChooseCDEO from './CDEO/WhyChooseCDEO'
import CDEOStudyMaterial from './CDEO/CDEOStudyMaterial'
import CDEOFAQ from './CDEO/CDEOFAQ'
import Meta from '../Meta';

const CDEO = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CDEO Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Documentation Expert Outpatient (CDEO) with an AI-integrated clinical documentation curriculum. Online & offline at ThoughtFlows." canonical="https://www.thoughtflows.in/cdeo" />
      <CDEOBanner />
      <WhatCDEO />
      <WhyChooseCDEO />
      <WHYCDEO />
      <CDEOFeatures />
      <CDEOModule />
      {/* <CDEOStudyMaterial /> */}
      <CDEOFAQ />

    </>
  )
}

export default CDEO