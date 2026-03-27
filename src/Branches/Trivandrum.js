import React, { useEffect } from 'react'

import TrivandrumBanner from './Trivandrum/TrivandrumBanner'
import TrivandrumAbout from './Trivandrum/TrivandrumAbout'
import TiruvandrumChoice from './Trivandrum/TrivandrumChoice'
import TiruvandrumSticky from './Trivandrum/TiruvandrumSticky'
import TiruvandrumStat from './Trivandrum/TiruvandrumStat'
import TrivandrumOnline from './Trivandrum/TrivandrumOnline'
import TrivandrumOnline2 from './Trivandrum/TiruvandrumOnline2'
import TrivandrumStudent from './Trivandrum/TrivandrumStudent'
import TrivandrumAcademy from './Trivandrum/TrivandrumAcademy'
import TrivandrumCard from './Trivandrum/TrivandrumCard'
import TrivandrumCertifications from './Trivandrum/TrivandrumCertifications'
import TrivandrumCompanies from './Trivandrum/TrivandrumCompanies'
import Meta from '../Meta';
import TrivandrumTestimonial from './Trivandrum/TrivandrumTestimonial'

function Trivandrum() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Meta title="Medical Coding Course in Trivandrum | ThoughtFlows Institute" description="Build your career at ThoughtFlows Medical Coding Academy — best medical coding course in Trivandrum with practical sessions and placement guidance." canonical="https://thoughtflows.in/Advanced-Medical-Coding-Tiruvandrum" />

      <TrivandrumBanner />
      <TrivandrumAbout />
      <TrivandrumAcademy />
      <TrivandrumCard />
      <TiruvandrumChoice />
      <TiruvandrumSticky />
      <TrivandrumCertifications />
      <TiruvandrumStat />
      <TrivandrumOnline />
      <TrivandrumOnline2 />
      <TrivandrumTestimonial />
      {/* <TrivandrumStudent /> */}
      {/* <TrivandrumCompanies /> */}
    </>
  )
}

export default Trivandrum