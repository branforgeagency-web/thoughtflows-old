import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import { mediaUrl } from '../../config/media';
const hyderabadLandmark = mediaUrl("images/Landmarks/hyderabad_landmark.jpg");
const ameerpetCampus = mediaUrl("images/Hyderabad/ameerpet_campus.jpg");
const hyderabadLandmark2 = mediaUrl("images/Landmarks/hyderabad_landmark_2.jpg");

const HyderabadBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="ameerpet"
      brandAriaLabel="ThoughtFlows Medical Coding Training in Ameerpet"
      productImage={hyderabadLandmark}
      faceImage={ameerpetCampus}
      cardImage={hyderabadLandmark2}
      leftImageAlt="Historic Charminar Monument Hyderabad"
      rightImageAlt="ThoughtFlows Ameerpet Modern Campus Interior"
      cardImageAlt="Historic Golconda Fort Citadel Hyderabad"
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

export default HyderabadBanner;
