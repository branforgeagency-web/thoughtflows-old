import React, { useEffect } from 'react'

import AnesesthesiaBanner from './Anesesthesia Folder/AnesesthesiaBanner'
import AboutanAesthesia from './Anesesthesia Folder/AboutanAesthesia'
import AnaestheiaFeatures from './Anesesthesia Folder/AnaestheiaFeatures'
import AnaesthesiaObjectives from './Anesesthesia Folder/AnaesthesiaObjectives'
import AnaesthesiaEligible from './Anesesthesia Folder/AnaesthesiaEligible'
import WhatIsAnesthesia from './Anesesthesia Folder/WhatIsAnesthesia'
import AnaesthesiaBook from './Anesesthesia Folder/AnaesthesiaBook'
import WhyChoose from './Anesesthesia Folder/WhyChoose'
import AnaesthesiaDream from './Anesesthesia Folder/AnaesthesiaDream'
import AnaesthesiaFAQ from './Anesesthesia Folder/AnaesthesiaFAQ'
import Meta from '../Meta';

function Anesesthesia() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Certified Anesthesia Coder Course | ThoughtFlows Academy" description="Join the Certified Anesthesia Coder course at ThoughtFlows with expert-led training, anesthesia coding practice, and career support." canonical="https://thoughtflows.in/Anesesthesia" />

      <AnesesthesiaBanner />
      <WhatIsAnesthesia />
      <AnaesthesiaBook />
      <AboutanAesthesia />
      <AnaesthesiaObjectives />
      <AnaesthesiaEligible />
      <WhyChoose />
      <AnaesthesiaDream />
      <AnaesthesiaFAQ />
    </>
  )
}

export default Anesesthesia