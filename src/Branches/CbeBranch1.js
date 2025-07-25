import React,{useEffect}from 'react'

import Cbe1Banner from './CBE-1/Cbe1Banner'
import Cbe1About from './CBE-1/Cbe1About'
import Cbe1Core from './CBE-1/Cbe1Core'
import Cbe1Carousel from './CBE-1/Cbe1Carousel'
import Cbe1JoinTf from './CBE-1/Cbe1JoinTf'
import Cbe1Testi from './CBE-1/cbe1Testi'
import Cbe1Contents from './CBE-1/Cbe1Contents'
import Meta from '../Meta';

const CbeBranch1 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                      <Meta title="Saravanampatti - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <Cbe1Banner />
      <Cbe1About />
      <Cbe1Core />
      <Cbe1Contents/>
      <Cbe1JoinTf />
      <Cbe1Carousel />
      <Cbe1Testi />
    </>
  )
}

export default CbeBranch1