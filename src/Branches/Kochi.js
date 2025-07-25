import React,{useEffect}from 'react'

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
import Cbe1Testi from './CBE-1/cbe1Testi';

function Kochi() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });   
 },[])
  return (
    <>
                      <Meta title="Kochi - Thoughtflows Medical Coding Training  Academy" description="Thoughtflows Medical Coding Academy offers the highest quality education to help you succeed in your career, visit us today to learn more." />

      <KochiBanner />
      <KochiAbout />
      <KochiChoice />
      <KochiCore />
      <KochiFlex />
      <KochiStick />
      <KochiOnline2 />
      <KochiOnline />
      {/* <KochiStudents /> */}
      <Cbe1Testi/>
    </>
  );
}

export default Kochi;
