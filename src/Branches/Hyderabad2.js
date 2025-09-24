import React,{useEffect}from 'react'

import HyderabadBanner from './Hyderabad2/Hyderabad2Banner'
import HyderabadAbout from './Hyderabad2/Hyderabad2About'  
import HyderabadFlex from './Hyderabad2/Hyderaba2dFlex'
import HyderabadCore from './Hyderabad2/Hyderabad2Core'
import HyderabadSticky from './Hyderabad2/Hyderabad2Sticky'
import HyderabadOnline from './Hyderabad2/Hyderabad2Online'
import HyderabadOnline2 from './Hyderabad2/Hyderabad2Online2'
import HyderabadGetinTouch from './Hyderabad2/Hyderabad2GetinTouch'
import HyderabadStudents from './Hyderabad2/Hyderabad2Students'
import Meta from '../Meta';
import Hyderabad2Testimonial from './Hyderabad2/Hyderabad2Testimonial'

function Hyderabad() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                      <Meta title="Dilsukhnagar - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

    <HyderabadBanner />
    <HyderabadAbout />
    <HyderabadFlex />
    <HyderabadCore />
    <HyderabadSticky />
    <HyderabadOnline />
    <HyderabadOnline2 />
    <HyderabadGetinTouch />
    {/* <HyderabadStudents /> */}
    <Hyderabad2Testimonial />
    </>
  )
}

export default Hyderabad