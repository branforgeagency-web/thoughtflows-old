import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { mediaUrl } from '../../config/media';
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

// Custom Arrow Component
const CustomArrow = ({ onClick, direction }) => (
  <div
    className={`custom-arrow custom-arrow-${direction}`}
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      backgroundColor: direction === "left" ? "#9B5DE6" : "#F15BB5",
      color: "white",
      width: "70px",
      height: "70px",
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      zIndex: 10,
      [direction === "left" ? "left" : "right"]: "10px", // Position left or right
      transform: "translateY(-50%)",
      animation: "bounce 2s infinite", // Optional animation
    }}
  >
    <span
      style={{
        fontSize: "18px",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {direction === "left" ? "Prev" : "Next"}
    </span>
  </div>
);

const HyderabadOnline = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image15,
    image14,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "20px", marginTop: "50px", marginLeft: "40px", paddingBottom: "35px" }}>
      <h3 style={{ textAlign: "center", color: "#16ADBB" }}>Test Yourself</h3>
      <h2 style={{ textAlign: "center", marginTop: "20px", marginBottom: "30px" }}>
        Online Exams
      </h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "90%",
                height: "auto",
                objectFit: "cover",
                margin: "0 20px",
                borderRadius: "15px",
                zIndex: 1,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HyderabadOnline;
