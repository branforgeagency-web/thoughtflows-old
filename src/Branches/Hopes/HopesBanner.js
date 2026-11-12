import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import { mediaUrl } from '../../config/media';
const ishaBannerImg = mediaUrl("images/Branches/isha_coimbatore_banner.jpg");
const hopesCampus = mediaUrl("images/Branches/cbe_hopes_campus.jpg");
const coimbatoreSiruvani = mediaUrl("images/Landmarks/coimbatore_siruvani.jpg");

const HopesBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="hopes"
      brandAriaLabel="ThoughtFlows Medical Coding Course in Hopes"
      productImage={ishaBannerImg}
      faceImage={hopesCampus}
      cardImage={coimbatoreSiruvani}
      leftImageAlt="Isha Yoga Center Adiyogi Coimbatore"
      rightImageAlt="ThoughtFlows Hopes Modern Campus Interior"
      cardImageAlt="Historic Siruvani Waterfalls Coimbatore"
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

export default HopesBanner;
