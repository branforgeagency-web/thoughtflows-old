import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.vizag for real Vizag interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.vizag;

const VizagBanner = () => (
  <BranchLuxBanner
    location="Andhra Pradesh – Vizag Branch"
    titleLead="Medical Coding Institute"
    accent="Vizag"
    subTitle="CPC & CCS Training"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Vizag branch interior"
    badgeTitle="Vizag Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="089775 07230"
    phoneHref="tel:+918977507230"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Vizag branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Vizag branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Vizag branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Vizag branch learning space" },
    ]}
    locationLabel="Visakhapatnam, Andhra Pradesh"
    exploreTo="#vizag-visit-us"
    exploreLabel="Visit Branch"
  />
);

export default VizagBanner;
