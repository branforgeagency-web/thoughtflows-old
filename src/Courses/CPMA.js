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
      <Meta title="CPMA Course Training | ThoughtFlows Medical Coding Academy" description="Join CPMA course at ThoughtFlows for certified professional medical auditor training with expert guidance, audit practice, and career support." canonical="https://www.thoughtflows.in/cpma" />

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