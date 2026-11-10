import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import ishaBannerImg from "../../images/Branches/isha_coimbatore_banner.jpg";
import gandhipuramCampus from "../../images/Branches/cbe_gandhipuram_campus.jpg";
import coimbatoreValparai from "../../images/Landmarks/coimbatore_valparai.jpg";

const GandhipuramBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="gandhipuram"
      brandAriaLabel="ThoughtFlows Medical Coding Academy in Gandhipuram"
      productImage={ishaBannerImg}
      faceImage={gandhipuramCampus}
      cardImage={coimbatoreValparai}
      leftImageAlt="Isha Yoga Center Adiyogi Coimbatore"
      rightImageAlt="ThoughtFlows Gandhipuram Modern Campus Interior"
      cardImageAlt="Scenic Valparai Tea Estates Coimbatore"
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

export default GandhipuramBanner;
