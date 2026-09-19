import React, { useEffect } from 'react'
import Meta from '../Meta';

import TrichyBanner from './Trichy/TrichyBanner'
import TrichyAbout from './Trichy/TrichyAbout'
import TrichyFlex from './Trichy/TrichyFlex'
import TrichyCore from './Trichy/TrichyCore'
import TrichySticky from './Trichy/TrichySticky'
import TrichyOnline from './Trichy/TrichyOnline'
import TrichyOnline2 from './Trichy/TrichyOnline2'
import TrichyGetinTouch from './Trichy/TrichyGetinTouch'
import TrichyTestimonial from './Trichy/TrichyTestimonial'
import TrichyExams from './Trichy/TrichyExams'
import TrichyDiscover from './Trichy/TrichyDiscover'
import TrichyExperts from './Trichy/TrichyExperts'
import TrichyAffordableLearning from './Trichy/TrichyAffordableLearning'
import TrichySolidLayout from './Trichy/TrichySolidLayout'
import TrichyEmpower from './Trichy/TrichyEmpower'


function TrichyBranches() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Medical Coding Course in Trichy | ThoughtFlows Institute" description="Advance your career with ThoughtFlows Medical Coding Academy in Trichy — leading medical coding course, practical learning, and placement assistance." canonical="https://www.thoughtflows.in/Career-Focused-Medical-Coding-Trichy" />

      <TrichyBanner />
      <TrichyAbout />
      <TrichyFlex />
      <TrichyCore />
      <TrichySticky />
      <TrichyOnline />
      <TrichyOnline2 />
      <TrichyGetinTouch />
      <TrichyTestimonial />
      {/* <TrichyExams />
      <TrichyDiscover />
      <TrichyExperts />
      <TrichyAffordableLearning />
      <TrichySolidLayout />
      <TrichyEmpower /> */}

    </>
  )
}

export default TrichyBranches