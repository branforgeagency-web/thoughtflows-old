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
      <Meta title="EM - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

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