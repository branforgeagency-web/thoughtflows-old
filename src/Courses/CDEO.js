import React, { useEffect } from 'react'
import CDEOBanner from './CDEO/CDEOBanner'
import AboutCDEO from './CDEO/AboutCDEO'
import CDEOFeatures from './CDEO/CDEOFeatures'
import CDEOObjective from './CDEO/CDEOObjective'
import CDEOModule from './CDEO/CDEOModule'
import WhatCDEO from './CDEO/WhatCDEO'
import WHYCDEO from './CDEO/WHYCDEO'
import CDEOStudyMaterial from './CDEO/CDEOStudyMaterial'
import CDEOFAQ from './CDEO/CDEOFAQ'
import Meta from '../Meta';

const CDEO = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CDEO Course Training | ThoughtFlows Medical Coding Academy" description="Enroll in the CDEO course at ThoughtFlows with expert trainers, practical coding training, exam guidance, and career support." canonical="https://www.thoughtflows.in/cdeo" />
      <CDEOBanner />
      <WhatCDEO />
      <WHYCDEO />
      <CDEOFeatures />
      <CDEOModule />
      {/* <CDEOStudyMaterial /> */}
      <CDEOFAQ />

    </>
  )
}

export default CDEO