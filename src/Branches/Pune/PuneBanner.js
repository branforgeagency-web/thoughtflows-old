import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.pune for real Pune interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.pune;

const PuneBanner = () => (
  <BranchLuxBanner
    location="Maharashtra – Pune Branch"
    titleLead="Medical Coding Course"
    accent="Pune"
    subTitle="with CPC Certification Training"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Pune branch interior"
    badgeTitle="Pune Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="072195 57734"
    phoneHref="tel:+917219557734"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Pune branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Pune branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Pune branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Pune branch learning space" },
    ]}
    locationLabel="Pune, Maharashtra"
    exploreTo="/maharashtra"
    exploreLabel="Explore Maharashtra Branches"
  />
);

export default PuneBanner;
