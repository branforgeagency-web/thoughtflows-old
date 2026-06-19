import React, { useEffect } from 'react'

import KochiBanner from "./Kochi/KochiBanner";
import KochiAbout from "./Kochi/KochiAbout";
import KochiChoice from "./Kochi/KochiChoice";
import KochiCore from "./Kochi/KochiCore";
import KochiFlex from "./Kochi/KochiFlex";
import KochiStick from "./Kochi/KochiStick";
import KochiStudents from "./Kochi/KochiStudents";
import KochiOnline from "./Kochi/KochiOnline";
import KochiOnline2 from "./Kochi/KochiOnline2";
import Meta from '../Meta';
import KochiTestimonial from './Kochi/KochiTestimonial';
import KochiFAQ from './Kochi/KochiFAQ';

function Kochi() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Medical Coding Course in Kochi | ThoughtFlows Academy" description="ThoughtFlows Medical Coding Academy in Kochi — expert-led medical coding course in Kochi with practical training and placement assistance." canonical="https://www.thoughtflows.in/Medical-Coding-Academy-Kochi" />

      <KochiBanner />
      <KochiAbout />
      <KochiChoice />
      <KochiCore />
      <KochiFlex />
      <KochiStick />
      <KochiOnline2 />
      <KochiOnline />
      {/* <KochiStudents /> */}
      <KochiFAQ />
      <KochiTestimonial />
    </>
  );
}

export default Kochi;
