import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import theniLandmark from "../../images/Landmarks/theni_landmark.jpg";
import campusInterior from "../../images/Branches/cbe_saravanampatti_campus.jpg";
import theniVaigai from "../../images/Landmarks/theni_vaigai.jpg";

const TheniBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="theni"
      brandAriaLabel="ThoughtFlows Medical Coding Course in Theni"
      productImage={theniLandmark}
      faceImage={campusInterior}
      cardImage={theniVaigai}
      leftImageAlt="Breathtaking Megamalai Western Ghats Valleys Theni"
      rightImageAlt="ThoughtFlows Medical Coding Academy Modern Campus Interior"
      cardImageAlt="Expansive Vaigai Dam Reservoir Theni Tamil Nadu"
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

export default TheniBanner;
