import React, { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";
import VelouraSkincareHero from "../VelouraSkincareHero";
import { mediaUrl } from '../../config/media';
const kolhapurLandmark = mediaUrl("images/Landmarks/kolhapur_landmark.jpg");
const kolhapurCampus = mediaUrl("images/Branches/maha_kolhapur_campus.jpg");
const kolhapurMahalaxmi = mediaUrl("images/Landmarks/kolhapur_mahalaxmi.jpg");

const KolhapurBanner = () => {
  const { setIsOpen } = useContext(PopupContext) || {};
  return (
    <VelouraSkincareHero
      brandName="thoughtflows"
      brandSubtitle="kolhapur"
      brandAriaLabel="ThoughtFlows Medical Coding Training in Kolhapur"
      productImage={kolhapurLandmark}
      faceImage={kolhapurCampus}
      cardImage={kolhapurMahalaxmi}
      leftImageAlt="Historic New Palace Kolhapur Maharashtra"
      rightImageAlt="ThoughtFlows Kolhapur Academy Modern Campus Interior"
      cardImageAlt="Historic Mahalaxmi Ambabai Temple Kolhapur Maharashtra"
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

export default KolhapurBanner;
