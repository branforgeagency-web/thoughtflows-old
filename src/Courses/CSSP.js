import React,{useEffect}from 'react'

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
 },[])
  return (
    <>
              <Meta title="CCS-P  | Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

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