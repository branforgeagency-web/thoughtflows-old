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
          <Meta title="CDEI - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

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