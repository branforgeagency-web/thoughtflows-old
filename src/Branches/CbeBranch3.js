import React, { useEffect } from 'react'
import Cbe2Banner from './CBE-3/Cbe3Banner'
import Cbe2About from './CBE-3/Cbe3About'
import Cbe2Transform from './CBE-3/Cbe3Transform'
import Cbe2Exams from './CBE-3/Cbe3Exams'
import Cbe2Core from './CBE-3/Cbe3Core'
import Cbe2Contents from './CBE-3/Cbe3Contents'
import Meta from '../Meta';
import Cbe3Testimonial from './CBE-3/Cbe3Testimonial'

const CbeBranch2 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Top Medical Coding Institute in Coimbatore | ThoughtFlows" description="Join the leading medical coding institute in Coimbatore at ThoughtFlows — expert training, practical projects, and 100% placement assistance." canonical="https://www.thoughtflows.in/Premier-Medical-Coding-Institute-Gandhipuram" />

      <Cbe2Banner />
      <Cbe2About />
      <Cbe2Transform />
      <Cbe2Exams />
      <Cbe2Core />
      <Cbe2Contents />
      <Cbe3Testimonial />
    </>
  )
}

export default CbeBranch2