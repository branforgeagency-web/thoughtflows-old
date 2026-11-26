import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.salem for real Salem interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.salem;

const SalemBanner = () => (
  <BranchLuxBanner
    location="Tamil Nadu – Salem Branch"
    titleLead="Medical Coding Institute"
    accent="Salem"
    subTitle="CPC & CCS Training"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Salem branch interior"
    badgeTitle="Salem Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="081487 32017"
    phoneHref="tel:+918148732017"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Salem branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Salem branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Salem branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Salem branch learning space" },
    ]}
    locationLabel="Salem, Tamil Nadu"
    exploreTo="#salem-visit-us"
    exploreLabel="Visit Branch"
  />
);

export default SalemBanner;
