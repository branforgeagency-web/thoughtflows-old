import React, { useEffect } from "react";

import TrivandrumBanner from "./Trivandrum/TrivandrumBanner";
import TrivandrumAbout from "./Trivandrum/TrivandrumAbout";
import TrivandrumAcademy from "./Trivandrum/TrivandrumAcademy";
import TiruvandrumChoice from "./Trivandrum/TrivandrumChoice";
import TiruvandrumSticky from "./Trivandrum/TiruvandrumSticky";
import TrivandrumCertifications from "./Trivandrum/TrivandrumCertifications";
import TiruvandrumStat from "./Trivandrum/TiruvandrumStat";
import TrivandrumOnline from "./Trivandrum/TrivandrumOnline";
import TrivandrumOnline2 from "./Trivandrum/TiruvandrumOnline2";
import Meta from "../Meta";
import BranchVisitUs from "./common/BranchVisitUs";
import { LuxScope } from "./common/LuxSections";
import TrivandrumTestimonial from "./Trivandrum/TrivandrumTestimonial";
import TrivandrumFAQ from "./Trivandrum/TrivandrumFAQ";

function Trivandrum() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Meta
        title="Medical Coding Course in Trivandrum | ThoughtFlows Institute"
        description="Build your career at ThoughtFlows Medical Coding Academy — best medical coding course in Trivandrum with practical sessions and placement guidance."
        canonical="https://www.thoughtflows.in/Advanced-Medical-Coding-Tiruvandrum"
      />

      <TrivandrumBanner />
      <LuxScope>
        <TrivandrumAbout />
        <TrivandrumAcademy />
        <TiruvandrumChoice />
        <TiruvandrumSticky />
        <TrivandrumCertifications />
        <TiruvandrumStat />
        <TrivandrumOnline />
        <TrivandrumOnline2 />
        <BranchVisitUs branchKey="trivandrum" />
        <TrivandrumFAQ />
        <TrivandrumTestimonial />
      </LuxScope>
    </>
  );
}

export default Trivandrum;
