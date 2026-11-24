import React, { useEffect } from 'react'
import CEDCBanner from './CEDC/CEDCBanner'
import AboutCEDC from './CEDC/AboutCEDC'
import CEDCFeatures from './CEDC/CEDCFeatures'
import CEDCObjective from './CEDC/CEDCObjective'
import CEDCModule from './CEDC/CEDCModule'
import WhatCEDC from './CEDC/WhatCEDC'
import WHYCEDC from './CEDC/WHYCEDC'
import WhyChooseCEDC from './CEDC/WhyChooseCEDC'
import CEDCStudyMaterial from './CEDC/CEDCStudyMaterial'
import CEDCFAQ from './CEDC/CEDCFAQ'
import Meta from '../Meta';

const CEDC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CEDC Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Emergency Department Coder (CEDC) with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/cedc" />

      <CEDCBanner />
      <WhatCEDC />
      <WhyChooseCEDC />
      <WHYCEDC />
      <CEDCFeatures />
      <CEDCModule />
      {/* <CEDCStudyMaterial /> */}
      <CEDCFAQ />

    </>
  )
}

export default CEDC