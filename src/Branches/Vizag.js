import React,{useEffect}from 'react'

import VizagBanner from './Vizag/VizagBanner'
import VizagAbout from './Vizag/VizagAbout'
import VizagFlex from './Vizag/VizagFlex'
import VizagCore from './Vizag/VizagCore'
import VizagSticky from './Vizag/VizagSticky'
import VizagOnline from './Vizag/VizagOnline'
import VizagOnline2 from './Vizag/VizagOnline2'
import VizagGetinTouch from './Vizag/VizagGetinTouch'
import VizagStudents from './Vizag/VizagStudents'
import Meta from '../Meta';

function Vizag() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                      <Meta title="Vizag Medical Coding Training Institute - Thoughtflows Academy" description="Join the premier medical coding training institute in Vizag. Expert faculty, hands-on training, 95% placement rate, and flexible batch timings. Start your healthcare career today!" />

    <VizagBanner />
    <VizagAbout />
    <VizagFlex />
    <VizagCore />
    <VizagSticky />
    <VizagOnline />
    <VizagOnline2 />
    <VizagGetinTouch />
   
    <VizagStudents />
    </>
  )
}

export default Vizag
