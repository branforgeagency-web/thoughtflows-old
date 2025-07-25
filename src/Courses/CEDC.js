import React, { useEffect } from 'react'
import CEDCBanner from './CEDC/CEDCBanner'
import AboutCEDC from './CEDC/AboutCEDC'
import CEDCFeatures from './CEDC/CEDCFeatures'
import CEDCObjective from './CEDC/CEDCObjective'
import CEDCModule from './CEDC/CEDCModule'
import WhatCEDC from './CEDC/WhatCEDC'
import WHYCEDC from './CEDC/WHYCEDC'
import CEDCStudyMaterial from './CEDC/CEDCStudyMaterial'
import CEDCFAQ from './CEDC/CEDCFAQ'
import Meta from '../Meta';

const CEDC = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, [])
  return (
    <>
          <Meta title="CEDC - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <CEDCBanner />
      <WhatCEDC />
      <WHYCEDC />
      <CEDCFeatures />
      <CEDCModule />
      {/* <CEDCStudyMaterial /> */}
      <CEDCFAQ />

    </>
  )
}

export default CEDC