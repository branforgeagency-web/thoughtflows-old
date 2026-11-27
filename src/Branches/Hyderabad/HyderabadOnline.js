import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mediaUrl } from "../../config/media";
import { LuxHead } from "../common/LuxSections";

const image1 = mediaUrl("images/Branches/online/Group 1.jpg");
const image2 = mediaUrl("images/Branches/online/Group 2.jpg");
const image3 = mediaUrl("images/Branches/online/Group 3.jpg");
const image4 = mediaUrl("images/Branches/online/Group 4.jpg");
const image5 = mediaUrl("images/Branches/online/Group 5.jpg");
const image6 = mediaUrl("images/Branches/online/Group 6.jpg");
const image7 = mediaUrl("images/Branches/online/Group 7.jpg");
const image8 = mediaUrl("images/Branches/online/Group 8.jpg");
const image9 = mediaUrl("images/Branches/online/Group 9.jpg");
const image10 = mediaUrl("images/Branches/online/Group 10.jpg");
const image11 = mediaUrl("images/Branches/online/Group 11.jpg");
const image12 = mediaUrl("images/Branches/online/Group 12.jpg");
const image13 = mediaUrl("images/Branches/online/Group 13.jpg");
const image14 = mediaUrl("images/Branches/online/Group 14.jpg");
const image15 = mediaUrl("images/Branches/online/Group 15.jpg");

const Arrow = ({ onClick, direction }) => (
  <button
    type="button"
    className={`lux-arrow is-${direction}`}
    onClick={onClick}
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    {direction === "left" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
  </button>
);

const HyderabadOnline = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image15, image14];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="lux-exams">
      <div className="lux-container" style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <LuxHead eyebrow="Test Yourself" title="Online Exams" />
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{ width: "92%", height: "auto", objectFit: "cover", margin: "0 auto", borderRadius: "16px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HyderabadOnline;
