import React, { useEffect } from 'react'
import IVRBanner from './IVR/IVRBanner'
import AboutIVR from './IVR/AboutIVR'
import IVRFeatures from './IVR/IVRFeatures'
import IVRObjective from './IVR/IVRObjective'
import IVRModule from './IVR/IVRModule'
import WhatIVR from './IVR/WhatIVR'
import WHYIVR from './IVR/WHYIVR'
import WhyChooseIVR from './IVR/WhyChooseIVR'
import IVRStudyMaterial from './IVR/IVRStudyMaterial'
import IVRFAQ from './IVR/IVRFAQ'
import Meta from '../Meta';

const IVR = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="Interventional Radiology Coding Course | ThoughtFlows" description="Interventional Radiology (IVR) coding training with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/ivr" />

      <IVRBanner />
      <WhatIVR />
      <WhyChooseIVR />
      <WHYIVR />
      <IVRFeatures />
      <IVRModule />
      {/* <IVRStudyMaterial /> */}
      <IVRFAQ />

    </>
  )
}

export default IVR