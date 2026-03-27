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
      <Meta title="CRC Classes | Certified Risk Adjustment Coder Training" description="Join CRC classes at ThoughtFlows for certified risk adjustment coder training with expert instruction, hands-on practice, and job support." canonical="https://thoughtflows.in/crc" />

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