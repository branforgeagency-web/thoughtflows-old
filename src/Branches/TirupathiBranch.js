import React,{useEffect}from 'react'
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
 },[])
  return (
    <>
                          <Meta title="Tirupathi - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <TirupathiBanner />
      <TirupathiContent />
      <TirupathiCore/>
      <TirupathiExams />
      <TirupathiSolidLayout/>
      <TirupathiModern/>
      <TirupathiGuiding/>
      <TirupathiTestimonial/>
    </>
  )
}

export default TirupathiBranch