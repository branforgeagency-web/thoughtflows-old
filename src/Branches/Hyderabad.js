import React,{useEffect}from 'react'

import HyderabadBanner from './Hyderabad/HyderabadBanner'
import HyderabadAbout from './Hyderabad/HyderabadAbout'
import HyderabadFlex from './Hyderabad/HyderabadFlex'
import HyderabadCore from './Hyderabad/HyderabadCore'
import HyderabadSticky from './Hyderabad/HyderabadSticky'
import HyderabadOnline from './Hyderabad/HyderabadOnline'
import HyderabadOnline2 from './Hyderabad/HyderabadOnline2'
import HyderabadGetinTouch from './Hyderabad/HyderabadGetinTouch'
import HyderabadStudents from './Hyderabad/HyderabadStudents'
import Meta from '../Meta';
import HyderabadTestimonial from './Hyderabad/HyderabadTestimonial'

function Hyderabad() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                      <Meta title="Ameerpet - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

    <HyderabadBanner />
    <HyderabadAbout />
    <HyderabadFlex />
    <HyderabadCore />
    <HyderabadSticky />
    <HyderabadOnline />
    <HyderabadOnline2 />
    <HyderabadGetinTouch />
    {/* <HyderabadStudents /> */}
    <HyderabadTestimonial />
    </>
  )
}

export default Hyderabad