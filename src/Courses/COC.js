import React, { useEffect } from 'react'
import COCBanner from './COC folder/COCBanner'
import WhatisCOC from './COC folder/WhatisCOC'
import COCFeatures from './COC folder/COCFeatures'
import COCModules from './COC folder/COCModules'
import COCCourseDet from './COC folder/COCCourseDet'
import WhyCOC from './COC folder/WhyCOC'
import COCTrainning from './COC folder/COCTrainning'
import COCStudymaterial from './COC folder/COCStudymaterial'
import COCFaq from './COC folder/COCFaq'
import Meta from '../Meta';

const COC = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  return (
    <>
      <Meta title="COC Training | ThoughtFlows Medical Coding Academy" description="Enroll in COC training at ThoughtFlows with expert trainers, outpatient coding practice, exam guidance, and placement support." canonical="https://thoughtflows.in/coc" />

      <COCBanner />
      <WhatisCOC />
      <WhyCOC />
      <COCTrainning />
      {/* <COCFeatures /> */}
      <COCModules />
      <COCStudymaterial />
      <COCFaq />
      {/* <COCCourseDet /> */}
    </>
  )
}

export default COC