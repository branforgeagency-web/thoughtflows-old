import React, { useEffect } from 'react'

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
  }, [])
  return (
    <>
      <Meta title="Medical Coding Course in Coimbatore | ThoughtFlows" description="Enroll in the best medical coding course in Coimbatore at ThoughtFlows — expert trainers, real projects, and placement support for certified career success." canonical="https://thoughtflows.in/Top-Medical-Coding-Training-Saravanampatti" />

      <Cbe1Banner />
      <Cbe1About />
      <Cbe1Core />
      <Cbe1Contents />
      <Cbe1JoinTf />
      <Cbe1Carousel />
      <Cbe1Testi />
    </>
  )
}

export default CbeBranch1