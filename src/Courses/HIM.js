import React, { useEffect } from 'react'

import HIMBanner from './HIM/HIMBanner'
import AboutHIM from './HIM/AboutHIM'
import HIMObjectives from './HIM/HIMbjectives'
import HIMFeatures from './HIM/HIMFeatures'
import WhatIsEvaluation from './HIM/WhatIsEvaluation'
import HIMBook from './HIM/HIMBook'
import WhyChoose from './HIM/WhyChoose'
import HIMEligible from './HIM/HIMEligible'
import HIMFAQ from './HIM/HIMFAQ'
import HIMDream from './HIM/HIMDream'
import HIMPurse from './HIM/HIMPursue'
import HIMBenefits from './HIM/HIMBenefits'
import HIMcert from './HIM/HIMcert'
import HIMtypes from './HIM/HIMtypes'
import HIMWho from './HIM/HIMWho'
import Meta from '../Meta';

function HIM() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Healthcare Information Management Course Training" description="Join the Healthcare Information Management course at ThoughtFlows with expert instruction, HIM system practice, and career-focused support." canonical="https://thoughtflows.in/him" />

      <HIMBanner />
      <WhatIsEvaluation />
      <AboutHIM />
      <HIMEligible />
      <HIMcert />
      <HIMtypes />
      <HIMBenefits />
      <HIMPurse />
      <HIMBook />
      {/* <HIMFeatures /> */}
      <WhyChoose />
      <HIMObjectives />
      {/* <HIMDream /> */}
      <HIMWho />
      <HIMFAQ />
    </>
  )
}

export default HIM