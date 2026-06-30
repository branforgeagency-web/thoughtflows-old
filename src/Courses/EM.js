import React,{useEffect}from 'react'

import EMBanner from './EM folder/EMBanner'
import AboutEM from './EM folder/AboutEM'
import EMObjectives from './EM folder/EMObjectives'
import EMFeatures from './EM folder/EMFeatures'
import WhatIsEvaluation from './EM folder/WhatIsEvaluation'
import EmBook from './EM folder/EmBook'
import WhyChoose from './ED folder/WhyChoose'
import EmEligible from './EM folder/EmEligible'
import EmFAQ from './EM folder/EmFAQ'
import EmDream from './EM folder/EmDream'
import Meta from '../Meta';

function EM() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
      <Meta title="Evaluation and Management (E&M) Coding Course | ThoughtFlows" description="Master E&M coding with ThoughtFlows Academy — expert training, real-case practice, exam guidance, and placement support for a successful medical coding career." canonical="https://www.thoughtflows.in/em" />

      <EMBanner />
      <WhatIsEvaluation />
      <EmBook />
      <AboutEM />
      {/* <EMFeatures /> */}
      <EMObjectives />
      <WhyChoose />
      <EmEligible />
      <EmDream />
      <EmFAQ />
    </>
  )
}

export default EM