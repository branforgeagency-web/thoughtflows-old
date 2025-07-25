import React from "react";
import Slider from "react-slick";
import image1 from "../../images/Branches/online/Group 1.jpg";
import image2 from "../../images/Branches/online/Group 2.jpg";
import image3 from "../../images/Branches/online/Group 3.jpg";
import image4 from "../../images/Branches/online/Group 4.jpg";
import image5 from "../../images/Branches/online/Group 5.jpg";
import image6 from "../../images/Branches/online/Group 6.jpg";
import image7 from "../../images/Branches/online/Group 7.jpg";
import image8 from "../../images/Branches/online/Group 8.jpg";
import image9 from "../../images/Branches/online/Group 9.jpg";
import image10 from "../../images/Branches/online/Group 10.jpg";
import image11 from "../../images/Branches/online/Group 11.jpg";
import image12 from "../../images/Branches/online/Group 12.jpg";
import image13 from "../../images/Branches/online/Group 13.jpg";
import image14 from "../../images/Branches/online/Group 14.jpg";
import image15 from "../../images/Branches/online/Group 15.jpg";

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
      [direction === "left" ? "left" : "right"]: "10px",
      transform: "translateY(-50%)",
      animation: "bounce 2s infinite",
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

const TrichyOnline = () => {
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
    <div style={{ margin: "20px", marginLeft: "40px", padding: "50px 0px" }}>
      <h3 style={{ textAlign: "center" }}>Test Yourself</h3>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "30px" }}>
        Online Exams
      </h1>
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

export default TrichyOnline;
