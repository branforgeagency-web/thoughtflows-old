import React, { useEffect } from 'react'
import IVRBanner from './IVR/IVRBanner'
import AboutIVR from './IVR/AboutIVR'
import IVRFeatures from './IVR/IVRFeatures'
import IVRObjective from './IVR/IVRObjective'
import IVRModule from './IVR/IVRModule'
import WhatIVR from './IVR/WhatIVR'
import WHYIVR from './IVR/WHYIVR'
import IVRStudyMaterial from './IVR/IVRStudyMaterial'
import IVRFAQ from './IVR/IVRFAQ'
import Meta from '../Meta';

const IVR = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="Interventional Radiology Course | ThoughtFlows" description="Enroll in the Interventional Radiology course at ThoughtFlows with expert training, procedure-based coding practice, and career support." canonical="https://thoughtflows.in/ivr" />

      <IVRBanner />
      <WhatIVR />
      <WHYIVR />
      <IVRFeatures />
      <IVRModule />
      {/* <IVRStudyMaterial /> */}
      <IVRFAQ />

    </>
  )
}

export default IVR