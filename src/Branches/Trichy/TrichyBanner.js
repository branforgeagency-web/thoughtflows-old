import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import trichyLandmark from "../../images/Landmarks/trichy_landmark.jpg";
import trichyCampus from "../../images/Branches/gallery/trichy.jpg";
import trichySrirangam from "../../images/Landmarks/trichy_srirangam.jpg";

const TrichyBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="trichy"
      brandAriaLabel="ThoughtFlows Medical Coding Course in Trichy"
      productImage={trichyLandmark}
      faceImage={trichyCampus}
      cardImage={trichySrirangam}
      leftImageAlt="Historic Rockfort Temple Tiruchirappalli Trichy"
      rightImageAlt="ThoughtFlows Trichy Modern Campus Interior"
      cardImageAlt="Aerial View of Sri Ranganathaswamy Temple Srirangam Trichy"
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

export default TrichyBanner;
