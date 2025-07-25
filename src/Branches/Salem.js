import React,{useEffect}from 'react'
import Meta from '../Meta';

import SalemBanner from './salem/SalemBanner'
import SalemExams from './salem/SalemExams'
import SalemContent from './salem/SalemContent'
import SalemCore from './salem/SalemCore'
import SalemSolidLayout from './salem/SalemSolidLayout'
import SalemGuiding from './salem/SalemGuiding'
import SalemModern from './salem/SalemModern'
import Cbe1Testi from './CBE-1/cbe1Testi';

const SalemBranch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                          <Meta title="Salem - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <SalemBanner />
      <SalemContent />
      <SalemCore/>
      <SalemExams />
      <SalemSolidLayout/>
      <SalemModern/>
      <SalemGuiding/>
      <Cbe1Testi/>
    </>
  )
}

export default SalemBranch