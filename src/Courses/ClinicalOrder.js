import React, { useEffect } from 'react'

import COBanner from './Clinical order/COBanner'
import AboutCO from './Clinical order/AboutCO'
import COObjectives from './Clinical order/CObjectives'
import COFeatures from './Clinical order/COFeatures'
import WhatIsEvaluation from './Clinical order/WhatIsEvaluation'
import COBook from './Clinical order/COBook'
import WhyChoose from './Clinical order/WhyChoose'
import COEligible from './Clinical order/COEligible'
import COFAQ from './Clinical order/COFAQ'
import CODream from './Clinical order/CODream'
import COPurse from './Clinical order/COPursue'
import COBenefits from './Clinical order/COBenefits'
import COcert from './Clinical order/COcert'
import COtypes from './Clinical order/COtypes'
import COTypes from './Clinical order/COtypes'
import COWho from './Clinical order/COWho'
import COeli from './Clinical order/COeli'
import Meta from '../Meta';

function CO() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Certified Cardiology Coder Training Course" description="Enroll in the Certified Cardiology Coder training course at ThoughtFlows with expert instruction, cardiology coding practice, and career support." canonical="https://thoughtflows.in/ccc" />

      <COBanner />
      <WhatIsEvaluation />
      <AboutCO />
      <COEligible />
      <COTypes />
      <COBenefits />
      <COeli />
      <COPurse />
      <COBook />
      <COcert />
      {/* <COFeatures /> */}
      <WhyChoose />
      <COObjectives />
      <CODream />
      <COWho />
      <COcert />
      <COFAQ />
    </>
  )
}

export default CO