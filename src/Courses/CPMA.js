import React, { useEffect } from 'react'
import CPMABanner from './CPMA folder/CPMABanner'
import CPMACurseDet from './CPMA folder/CPMACurseDet'
import CPMAAbout from './CPMA folder/CPMAAbout'
import CPMAModule from './CPMA folder/CPMAModule'
import WhatCPMA from './CPMA folder/WhatCPMA'
import WHYCPMA from './CPMA folder/WHYCPMA'
import FeaturesCPMA from './CPMA folder/FeaturesCPMA'
import CPMAStudeyMAterial from './CPMA folder/CPMAStudeyMAterial'
import CPMATrainning from './CPMA folder/CPMATrainning'
import CPMAFAQ from './CPMA folder/CPMAFAQ'
import Meta from '../Meta';

const CPMA = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CPMA Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Professional Medical Auditor (CPMA) with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/cpma" />

      <CPMABanner />
      <WhatCPMA />
      <WHYCPMA />
      <FeaturesCPMA />



      {/* <CPMACurseDet />
      <CPMAAbout /> */}
      <CPMAModule />
      <CPMATrainning />
      <CPMAStudeyMAterial />
      <CPMAFAQ />

    </>
  )
}

export default CPMA