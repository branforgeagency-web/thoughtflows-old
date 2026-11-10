import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import tirupathiLandmark from "../../images/Landmarks/tirupathi_landmark.jpg";
import campusInterior from "../../images/Branches/cbe_saravanampatti_campus.jpg";
import tirupathiChandragiri from "../../images/Landmarks/tirupathi_chandragiri.jpg";

const TirupathiBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="tirupathi"
      brandAriaLabel="ThoughtFlows Medical Coding Course in Tirupathi"
      productImage={tirupathiLandmark}
      faceImage={campusInterior}
      cardImage={tirupathiChandragiri}
      leftImageAlt="Majestic Tirumala Temple Hills Tirupati"
      rightImageAlt="ThoughtFlows Medical Coding Academy Modern Campus Interior"
      cardImageAlt="Historic Chandragiri Fort Raja Mahal Tirupati"
      exploreText="Free Demo"
      exploreHref="/contact"
      onExploreClick={() => {
        window.location.href = "/contact";
      }}
      showTitles={false}
      showNavLinks={false}
      showSideControl={false}
      showBottomRight={false}
      showBottomLeft={false}
    />
  );
};

export default TirupathiBanner;
