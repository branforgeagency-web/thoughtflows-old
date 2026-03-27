import React, { useEffect } from 'react'

import CSSBanner from './CCSP/CSSBanner'
import AboutCSS from './CCSP/AboutCSS'
import CSSObjectives from './CCSP/CSSbjectives'
import CSSFeatures from './CCSP/CSSFeatures'
import WhatIsEvaluation from './CCSP/WhatIsEvaluation'
import CSSBook from './CCSP/CSSBook'
import WhyChoose from './CCSP/WhyChoose'
import CSSEligible from './CCSP/CSSEligible'
import CSSFAQ from './CCSP/CSSFAQ'
import CSSDream from './CCSP/CSSDream'
import CSSPurse from './CCSP/CSSPursue'
import CSSBenefits from './CCSP/CSSBenefits'
import CSScert from './CCSP/CSScert'
import CSStypes from './CCSP/CSStypes'
import CSSTypes from './CCSP/CSStypes'
import CSSWho from './CCSP/CSSWho'
import CSSeli from './CCSP/CSSeli'
import Meta from '../Meta';

function CSS() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Certified Coding Specialist Physician Course | ThoughtFlows" description="Join the Certified Coding Specialist Physician course at ThoughtFlows with expert training, practical coding practice, and certification guidance." canonical="https://thoughtflows.in/ccs-p" />

      <CSSBanner />
      <WhatIsEvaluation />
      <CSScert />
      <CSSEligible />
      <CSSBenefits />
      {/* <CSSeli/> */}
      <AboutCSS />
      {/* <CSSPurse /> */}
      <CSSBook />
      <CSSTypes />
      {/* <CSSFeatures /> */}
      {/* <WhyChoose /> */}
      <CSSObjectives />
      {/* <CSSDream /> */}
      <CSSWho />
      {/* <CSScert />  */}
      <CSSFAQ />
    </>
  )
}

export default CSS