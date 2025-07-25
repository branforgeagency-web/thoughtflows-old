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
          <Meta title="CDEO - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />
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