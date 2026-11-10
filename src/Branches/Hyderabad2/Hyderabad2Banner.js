import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import hyderabadLandmark from "../../images/Landmarks/hyderabad_landmark.jpg";
import dilsukhnagarCampus from "../../images/Hyderabad/dilsukhnagar_campus.jpg";
import hyderabadLandmark2 from "../../images/Landmarks/hyderabad_landmark_2.jpg";

const Hyderabad2Banner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="dilsukhnagar"
      brandAriaLabel="ThoughtFlows Medical Coding Training in Dilsukhnagar"
      productImage={hyderabadLandmark2}
      faceImage={dilsukhnagarCampus}
      cardImage={hyderabadLandmark}
      leftImageAlt="Historic Golconda Fort Citadel Hyderabad"
      rightImageAlt="ThoughtFlows Dilsukhnagar Modern Campus Interior"
      cardImageAlt="Historic Charminar Monument Hyderabad"
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

export default Hyderabad2Banner;
