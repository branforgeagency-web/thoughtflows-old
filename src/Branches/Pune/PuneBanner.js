import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import { mediaUrl } from '../../config/media';
const puneLandmark = mediaUrl("images/Landmarks/pune_landmark.jpg");
const puneCampus = mediaUrl("images/Branches/maha_pune_campus.jpg");
const puneLandmark2 = mediaUrl("images/Landmarks/pune_landmark_2.jpg");

const PuneBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="pune"
      brandAriaLabel="ThoughtFlows Medical Coding Course in Pune"
      productImage={puneLandmark}
      faceImage={puneCampus}
      cardImage={puneLandmark2}
      leftImageAlt="Historic Shaniwar Wada Fort Pune Maharashtra"
      rightImageAlt="ThoughtFlows Pune Academy Modern Campus Interior"
      cardImageAlt="Historic Aga Khan Palace Pune Maharashtra"
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

export default PuneBanner;
