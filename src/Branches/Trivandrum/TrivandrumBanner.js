import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.trivandrum for real Trivandrum interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.trivandrum;

const TrivandrumBanner = () => (
  <BranchLuxBanner
    location="Kerala – Trivandrum Branch"
    titleLead="Medical Coding Course"
    accent="Trivandrum"
    subTitle="with Placement Support"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Trivandrum branch interior"
    badgeTitle="Trivandrum Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="090480 23242"
    phoneHref="tel:+919048023242"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Trivandrum branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Trivandrum branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Trivandrum branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Trivandrum branch learning space" },
    ]}
    locationLabel="Trivandrum, Kerala"
    exploreTo="/kerala"
    exploreLabel="Explore Kerala Branches"
  />
);

export default TrivandrumBanner;
