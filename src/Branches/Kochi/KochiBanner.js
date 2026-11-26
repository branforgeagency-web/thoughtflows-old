import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.kochi for real Kochi interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.kochi;

const KochiBanner = () => (
  <BranchLuxBanner
    location="Kerala – Kochi Branch"
    titleLead="Medical Coding Course"
    accent="Kochi"
    subTitle="with Placement Support"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Kochi branch interior"
    badgeTitle="Kochi Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="090480 23242"
    phoneHref="tel:+919048023242"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Kochi branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Kochi branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Kochi branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Kochi branch learning space" },
    ]}
    locationLabel="Kochi, Kerala"
    exploreTo="/kerala"
    exploreLabel="Explore Kerala Branches"
  />
);

export default KochiBanner;
