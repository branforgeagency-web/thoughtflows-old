import React,{useEffect}from 'react'
import Cbe2Banner from './CBE-3/Cbe3Banner'
import Cbe2About from './CBE-3/Cbe3About'
import Cbe2Transform from './CBE-3/Cbe3Transform'
import Cbe2Exams from './CBE-3/Cbe3Exams'
import Cbe2Core from './CBE-3/Cbe3Core'
import Cbe2Contents from './CBE-3/Cbe3Contents'
import Meta from '../Meta';
import Cbe1Testi from './CBE-1/cbe1Testi'

const CbeBranch2 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                      <Meta title="Gandhipuram - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

    <Cbe2Banner/>
    <Cbe2About/>
    <Cbe2Transform/>
    <Cbe2Exams/>
    <Cbe2Core/>
    <Cbe2Contents/>
    <Cbe1Testi/>
    </>
  )
}

export default CbeBranch2