import React, { useEffect } from 'react'
import Meta from '../Meta';
import TirupathiBanner from './Tirupathi/TirupathiBanner'
import TirupathiExams from './Tirupathi/TirupathiExams'
import TirupathiContent from './Tirupathi/TirupathiContent'
import TirupathiCore from './Tirupathi/TirupathiCore'
import TirupathiSolidLayout from './Tirupathi/TirupathiSolidLayout'
import TirupathiGuiding from './Tirupathi/TirupathiGuiding'
import TirupathiModern from './Tirupathi/TirupathiModern'
import TirupathiTestimonial from './Tirupathi/TirupathiTestimonial';

const TirupathiBranch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Medical Coding Training in Tirupathi | ThoughtFlows Academy" description="Upgrade your skills at ThoughtFlows Medical Coding Academy in Tirupathi — leading medical coding training with hands-on practice and placement guidance." canonical="https://thoughtflows.in/Expert-Medical-Coding-Tirupathi" />

      <TirupathiBanner />
      <TirupathiContent />
      <TirupathiCore />
      <TirupathiExams />
      <TirupathiSolidLayout />
      <TirupathiModern />
      <TirupathiGuiding />
      <TirupathiTestimonial />
    </>
  )
}

export default TirupathiBranch