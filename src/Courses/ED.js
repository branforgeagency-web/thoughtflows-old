import EdBanner from './ED folder/EdBanner'
import AboutED from './ED folder/AboutED'
import EDFeatures from './ED folder/EDFeautres'
import EDObjectives from './ED folder/EDObjectives'
import WhatIsEmergency from './ED folder/WhatIsEmergency'
import EdModules from './ED folder/EdModules'
import EdFAQ from './ED folder/EdFAQ'
import WhyChoose from './ED folder/WhyChoose'
import EdEligible from './ED folder/EdEligible'
import EdBook from './ED folder/EdBook'
import EdDream from './ED folder/EdDream'
import React, { useEffect } from 'react'
import Meta from '../Meta';

function ED() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Emergency Department Course | Online & Offline | ThoughtFlows" description="Emergency Department (ED) training with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/ed" />

      <EdBanner />
      <WhatIsEmergency />
      <AboutED />
      <EdEligible />
      <WhyChoose />
      <EdBook />
      <EdModules />
      <EDObjectives />
      <EdDream />
      <EdFAQ />
    </>
  )
}

export default ED