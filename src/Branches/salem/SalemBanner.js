import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import salemLandmark from "../../images/Landmarks/salem_landmark.jpg";
import campusInterior from "../../images/Branches/cbe_hopes_campus.jpg";
import salemMettur from "../../images/Landmarks/salem_mettur.jpg";

const SalemBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="salem"
      brandAriaLabel="ThoughtFlows Medical Coding Training in Salem"
      productImage={salemLandmark}
      faceImage={campusInterior}
      cardImage={salemMettur}
      leftImageAlt="Scenic Yercaud Hills Salem Tamil Nadu"
      rightImageAlt="ThoughtFlows Medical Coding Academy Modern Campus Interior"
      cardImageAlt="Historic Mettur Dam Reservoir Salem"
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

export default SalemBanner;
