import React,{useEffect}from 'react'

import EMBanner from './EM folder/EMBanner'
import AboutEM from './EM folder/AboutEM'
import EMObjectives from './EM folder/EMObjectives'
import EMFeatures from './EM folder/EMFeatures'
import WhatIsEvaluation from './EM folder/WhatIsEvaluation'
import EmBook from './EM folder/EmBook'
import WhyChoose from './EM folder/WhyChooseEM'
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
      <Meta title="E/M Training Course | Online & Offline | ThoughtFlows" description="Evaluation and Management (E/M) training with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/em" />

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