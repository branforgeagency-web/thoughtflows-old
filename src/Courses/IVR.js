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
          <Meta title="IVR - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

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