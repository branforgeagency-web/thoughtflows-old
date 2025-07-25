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
          <Meta title="CPMA - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

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