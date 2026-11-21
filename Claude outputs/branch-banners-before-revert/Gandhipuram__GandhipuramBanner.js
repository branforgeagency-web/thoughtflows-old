import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import { mediaUrl } from '../../config/media';
const ishaBannerImg = mediaUrl("images/Branches/isha_coimbatore_banner.jpg");
const gandhipuramCampus = mediaUrl("images/Branches/cbe_gandhipuram_campus.jpg");
const coimbatoreValparai = mediaUrl("images/Landmarks/coimbatore_valparai.jpg");

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
