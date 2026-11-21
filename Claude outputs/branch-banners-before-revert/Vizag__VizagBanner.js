import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import { mediaUrl } from '../../config/media';
const vizagLandmark = mediaUrl("images/Landmarks/vizag_landmark.jpg");
const campusInterior = mediaUrl("images/Branches/cbe_saravanampatti_campus.jpg");
const vizagKailasagiri = mediaUrl("images/Landmarks/vizag_kailasagiri.jpg");

const VizagBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="vizag"
      brandAriaLabel="ThoughtFlows Medical Coding Course in Vizag"
      productImage={vizagLandmark}
      faceImage={campusInterior}
      cardImage={vizagKailasagiri}
      leftImageAlt="Dolphins Nose Coastline Visakhapatnam Vizag"
      rightImageAlt="ThoughtFlows Medical Coding Academy Modern Campus Interior"
      cardImageAlt="Scenic Kailasagiri Hilltop Park Visakhapatnam Vizag"
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

export default VizagBanner;
