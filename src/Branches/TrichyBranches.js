import React,{useEffect}from 'react'
import Meta from '../Meta';

import TrichyBanner from './Trichy/TrichyBanner'
import TrichyAbout from './Trichy/TrichyAbout'
import TrichyCore from './Trichy/TrichyCore'
import TrichyChoice from './Trichy/TrichyChoice'
import TrichyInter from './Trichy/TrichyInter'
import TrichyOnline from './Trichy/TrichyOnline'
import TrichyOnline2 from './Trichy/TrichyOnline2'
import TrichyEmpower from './Trichy/TrichyEmpower'
import TrichyEnroll from './Trichy/TrichyEnroll'
import TrichyTestimonial from './Trichy/TrichyTestimonial'
import TrichyExams from './Trichy/TrichyExams'
import TrichyCompanies from './Trichy/TrichyCompanies'
import TrichyDiscover from './Trichy/TrichyDiscover'
import TrichyExperts from './Trichy/TrichyExperts'
import TrichyPlacement from './Trichy/TrichyPlacement'
import TrichyAffordableLearning from './Trichy/TrichyAffordableLearning'
import TrichyMedicalCodingContent from './Trichy/TrichyMedicalCodingContent'


function TrichyBranches() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
     <Meta title="Trichy - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <TrichyBanner />
      <TrichyAbout />
      {/* <TrichyCore /> */}
      <TrichyInter />
      {/* <TrichyChoice /> */}
      <TrichyDiscover />
      <TrichyExperts />
      {/* <TrichyPlacement /> */}
      <TrichyAffordableLearning />
      {/* <TrichyMedicalCodingContent /> */}
      <TrichyOnline2 />
      <TrichyEmpower />
      <TrichyExams />
      {/* <TrichyEnroll /> */}
      <TrichyTestimonial />
      {/* <TrichyCompanies /> */}

    </>
  )
}

export default TrichyBranches