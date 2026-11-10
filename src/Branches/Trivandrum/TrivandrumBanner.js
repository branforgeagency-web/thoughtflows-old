import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import trivandrumLandmark from "../../images/Landmarks/trivandrum_landmark.jpg";
import trivandrumCampus from "../../images/Branches/kerala_trivandrum_campus.jpg";
import kovalamLandmark from "../../images/Landmarks/kovalam_landmark.jpg";

const TrivandrumBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="trivandrum"
      brandAriaLabel="ThoughtFlows Advanced Medical Coding in Trivandrum"
      productImage={trivandrumLandmark}
      faceImage={trivandrumCampus}
      cardImage={kovalamLandmark}
      leftImageAlt="Historic Padmanabhaswamy Temple Trivandrum Kerala"
      rightImageAlt="ThoughtFlows Trivandrum Academy Modern Campus Interior"
      cardImageAlt="Scenic Kovalam Beach and Lighthouse Trivandrum Kerala"
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

export default TrivandrumBanner;
