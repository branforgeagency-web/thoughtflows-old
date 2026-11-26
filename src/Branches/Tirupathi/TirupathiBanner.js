import React from "react";
import BranchLuxBanner from "../common/BranchLuxBanner";
import AI_INTERIORS from "../common/aiInteriors";

// TODO: swap AI_INTERIORS.tirupati for real Tirupati interior photos when available
const [heroImg, card1, card2, card3, card4] = AI_INTERIORS.tirupati;

const TirupathiBanner = () => (
  <BranchLuxBanner
    location="Andhra Pradesh – Tirupati Branch"
    titleLead="Medical Coding Institute"
    accent="Tirupati"
    subTitle="CPC & CCS Training"
    heroImage={heroImg}
    heroAlt="ThoughtFlows Medical Coding Academy Tirupati branch interior"
    badgeTitle="Tirupati Branch"
    badgeText="ThoughtFlows Medical Coding Academy"
    phone="087904 24835"
    phoneHref="tel:+918790424835"
    campus={[
      { img: card1, label: "Modern Classrooms", alt: "Tirupati branch classroom" },
      { img: card2, label: "Reception & Lobby", alt: "Tirupati branch reception" },
      { img: card3, label: "Practical Training Lab", alt: "Tirupati branch practical training" },
      { img: card4, label: "Learning Spaces", alt: "Tirupati branch learning space" },
    ]}
    locationLabel="Tirupati, Andhra Pradesh"
    exploreTo="#tirupati-visit-us"
    exploreLabel="Visit Branch"
  />
);

export default TirupathiBanner;
