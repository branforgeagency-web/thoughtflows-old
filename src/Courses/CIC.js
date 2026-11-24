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
      <Meta title="CIC Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Inpatient Coder (CIC) with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/cic" />

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