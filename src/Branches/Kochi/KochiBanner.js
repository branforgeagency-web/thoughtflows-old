import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// Real kochi interior photos (see common/aiInteriors.js)
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
      { img: card3, label: "Practice Lab", alt: "Kochi branch practice lab" },
      { img: card4, label: "Workstations", alt: "Kochi branch workstations" },
    ]}
    locationLabel="Kochi, Kerala"
    exploreTo="/kerala"
    exploreLabel="Explore Kerala Branches"
  />
);

export default KochiBanner;
