import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// Real ameerpet interior photos (see common/aiInteriors.js)
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.ameerpet;

const HyderabadBanner = () => (
  <BranchLuxBanner
    location="Hyderabad – Ameerpet Branch"
    titleLead="Medical Coding Institute"
    accent="Ameerpet"
    subTitle="From Beginner to Certified"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Ameerpet branch interior"
    badgeTitle="Ameerpet Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="087907 51742"
    phoneHref="tel:+918790751742"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Ameerpet branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Ameerpet branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Ameerpet branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Ameerpet branch learning space" },
    ]}
    locationLabel="Ameerpet, Hyderabad"
    exploreTo="/hyderabad"
    exploreLabel="Explore Hyderabad Branches"
  />
);

export default HyderabadBanner;
