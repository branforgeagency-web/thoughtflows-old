import React, { useEffect } from 'react'
import CRCBanner from './CRC/CRCBanner'
import AboutCRC from './CRC/AboutCRC'
import CRCFeatures from './CRC/CRCFeatures'
import CRCObjective from './CRC/CRCObjective'
import CRCModule from './CRC/CRCModule'
import WhatCRC from './CRC/WhatCRC'
import WHYCRC from './CRC/WHYCRC'
import CRCStudyMaterial from './CRC/CRCStudyMaterial'
import CRCFAQ from './CRC/CRCFAQ'
import Meta from '../Meta';

const CRC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="CRC Certification Course | Online & Offline | ThoughtFlows" description="Become a Certified Risk Adjustment Coder (CRC) with an AI-integrated medical coding curriculum. Online & offline at ThoughtFlows. Enroll today." canonical="https://www.thoughtflows.in/crc" />

      <CRCBanner />
      <WhatCRC />
      <WHYCRC />
      <CRCFeatures />
      <CRCModule />
      <CRCStudyMaterial />
      <CRCFAQ />

    </>
  )
}

export default CRC