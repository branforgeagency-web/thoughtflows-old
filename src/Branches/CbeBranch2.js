import React,{useEffect}from 'react'

import Cbe2Banner from './CBE-2/Cbe2Banner'
import Cbe2About from './CBE-2/Cbe2About'
import Cbe2Transform from './CBE-2/Cbe2Transform'
import Cbe2Exams from './CBE-2/Cbe2Exams'
import Exams from './CBE-2/Exams'
import Cbe2Core from './CBE-2/Cbe2Core'
import Cbe2Contents from './CBE-2/Cbe2Contents'
import Meta from '../Meta';
import Cbe2Testimonial from './CBE-2/Cbe2Testimonial'

const CbeBranch2 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                      <Meta title="Hopes - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

    <Cbe2Banner/>
    <Cbe2About/>
    <Cbe2Transform/>
    <Exams/>
    {/* <Cbe2Exams/> */}
    <Cbe2Core/>
    <Cbe2Contents/>
    <Cbe2Testimonial/>
    </>
  )
}

export default CbeBranch2