import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.theni for real Theni interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.theni;

const TheniBanner = () => (
  <BranchLuxBanner
    location="Tamil Nadu – Theni Branch"
    titleLead="Medical Coding Course"
    accent="Theni"
    subTitle="Learn, Get Certified & Build Your Career"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Theni branch interior"
    badgeTitle="Theni Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="075388 43236"
    phoneHref="tel:+917538843236"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Theni branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Theni branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Theni branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Theni branch learning space" },
    ]}
    locationLabel="Theni, Tamil Nadu"
    exploreTo="#theni-branch"
    exploreLabel="Visit Branch"
  />
);

export default TheniBanner;
