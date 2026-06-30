import React, { useEffect } from 'react'

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
  }, [])
  return (
    <>
      <Meta title="Medical Coding Course in Vizag | ThoughtFlows Institute" description="ThoughtFlows Medical Coding Academy offers the best medical coding course in Vizag with practical training and career-focused guidance" canonical="https://www.thoughtflows.in/Innovative-Medical-Coding-Vizag" />

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
