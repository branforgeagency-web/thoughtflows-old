import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import kochiLandmark from "../../images/Landmarks/kochi_landmark.jpg";
import kochiCampus from "../../images/Branches/kerala_kochi_campus.jpg";
import keralaBackwaters from "../../images/Landmarks/kerala_backwaters.jpg";

const KochiBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="kochi"
      brandAriaLabel="ThoughtFlows Medical Coding Course in Kochi"
      productImage={kochiLandmark}
      faceImage={kochiCampus}
      cardImage={keralaBackwaters}
      leftImageAlt="Iconic Chinese Fishing Nets Fort Kochi Kerala"
      rightImageAlt="ThoughtFlows Kochi Academy Modern Campus Interior"
      cardImageAlt="Tranquil Kerala Backwaters and Houseboat"
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

export default KochiBanner;
