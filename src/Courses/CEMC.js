import React, { useEffect } from 'react'
import CEMCBanner from './CEMC/CEMCBanner'
import AboutCEMC from './CEMC/AboutCEMC'
import CEMCFeatures from './CEMC/CEMCFeatures'
import CEMCObjective from './CEMC/CEMCObjective'
import CEMCModule from './CEMC/CEMCModule'
import WhatCEMC from './CEMC/WhatCEMC'
import WHYCEMC from './CEMC/WHYCEMC'
import CEMCStudyMaterial from './CEMC/CEMCStudyMaterial'
import CEMCFAQ from './CEMC/CEMCFAQ'
import Meta from '../Meta';

const CEMC = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, [])
  return (
    <>
      <Meta title="CEMC - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <CEMCBanner />
      <WhatCEMC />
      <WHYCEMC />
      <CEMCFeatures />
      <CEMCModule />
      {/* <CEMCStudyMaterial /> */}
      <CEMCFAQ />

    </>
  )
}

export default CEMC