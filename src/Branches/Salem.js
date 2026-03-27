import React, { useEffect } from 'react'
import Meta from '../Meta';

import SalemBanner from './salem/SalemBanner'
import SalemExams from './salem/SalemExams'
import SalemContent from './salem/SalemContent'
import SalemCore from './salem/SalemCore'
import SalemSolidLayout from './salem/SalemSolidLayout'
import SalemGuiding from './salem/SalemGuiding'
import SalemModern from './salem/SalemModern'
import SalemTestimonial from './salem/SalemTestimonial';

const SalemBranch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Medical Coding Course in Salem | ThoughtFlows Academy" description="Learn at ThoughtFlows Medical Coding Academy in Salem — expert trainers, hands-on medical coding course, and placement assistance." canonical="https://thoughtflows.in/Future-Ready-Medical-Coding-Salem" />

      <SalemBanner />
      <SalemContent />
      <SalemCore />
      <SalemExams />
      <SalemSolidLayout />
      <SalemModern />
      <SalemGuiding />
      <SalemTestimonial />
    </>
  )
}

export default SalemBranch