import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.trichy for real Trichy interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.trichy;

const TrichyBanner = () => (
  <BranchLuxBanner
    location="Tamil Nadu – Trichy Branch"
    titleLead="Medical Coding Institute"
    accent="Trichy"
    subTitle="CPC & CCS Training"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Trichy branch interior"
    badgeTitle="Trichy Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="093845 76852"
    phoneHref="tel:+919384576852"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Trichy branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Trichy branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Trichy branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Trichy branch learning space" },
    ]}
    locationLabel="Trichy, Tamil Nadu"
    exploreTo="#trichy-visit-us"
    exploreLabel="Visit Branch"
  />
);

export default TrichyBanner;
