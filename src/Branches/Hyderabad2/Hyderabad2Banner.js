import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// Real dilsukhnagar interior photos (see common/aiInteriors.js)
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.dilsukhnagar;

const Hyderabad2Banner = () => (
  <BranchLuxBanner
    location="Hyderabad – Dilsukhnagar Branch"
    titleLead="Medical Coding Course"
    accent="Dilsukhnagar, Hyderabad"
    subTitle="CPC & CCS Training"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Dilsukhnagar branch interior"
    badgeTitle="Dilsukhnagar Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="090305 08844"
    phoneHref="tel:+919030508844"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Dilsukhnagar branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Dilsukhnagar branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Dilsukhnagar branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Dilsukhnagar branch learning space" },
    ]}
    locationLabel="Dilsukhnagar, Hyderabad"
    exploreTo="/hyderabad"
    exploreLabel="Explore Hyderabad Branches"
  />
);

export default Hyderabad2Banner;
