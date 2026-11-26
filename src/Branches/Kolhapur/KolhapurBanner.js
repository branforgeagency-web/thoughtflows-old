import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.kolhapur for real Kolhapur interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.kolhapur;

const KolhapurBanner = () => (
  <BranchLuxBanner
    location="Maharashtra – Kolhapur Branch"
    titleLead="Medical Coding Institute"
    accent="Kolhapur"
    subTitle="CPC & CCS Training"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Kolhapur branch interior"
    badgeTitle="Kolhapur Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="083904 52121"
    phoneHref="tel:+918390452121"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Kolhapur branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Kolhapur branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Kolhapur branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Kolhapur branch learning space" },
    ]}
    locationLabel="Kolhapur, Maharashtra"
    exploreTo="/maharashtra"
    exploreLabel="Explore Maharashtra Branches"
  />
);

export default KolhapurBanner;
