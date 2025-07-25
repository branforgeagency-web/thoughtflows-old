import React, { useEffect } from 'react'
import Meta from '../Meta';

import CICBanner from './CIC folder/CICBanner'
import WhatisCIC from './CIC folder/WhatisCIC'
import WhyCIC from './CIC folder/WhyCIC'
import CICModule from './CIC folder/CICModule'
import CICFaq from "./CIC folder/CICFaq"
import CICFeatures from './CIC folder/CICFeatures'
import CICStudyMaterials from './CIC folder/CICStudyMateruial'
function CIC() {


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title=" CIC - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <CICBanner />
      <WhatisCIC />
      <WhyCIC />
      <CICFeatures />
      <CICStudyMaterials />
      <CICModule />

      <CICFaq />
    </>
  )
}

export default CIC