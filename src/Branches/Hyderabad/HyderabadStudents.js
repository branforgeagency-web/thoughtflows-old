import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
 import test1 from"../../images/Branches/online/ambika.jpg"
 import test2 from"../../images/Branches/online/gayathri.jpg"
 import test3 from"../../images/Branches/online/praveena.jpg"
 import test4 from "../../images/Branches/online/suganthi.png"
 import client1 from "../../images/Branches/online/client.png"
 import client2 from "../../images/Branches/online/client1.png"
 import client3 from "../../images/Branches/online/client2.png"
 import client4 from "../../images/Branches/online/client3.png"
 import client5 from "../../images/Branches/online/client4.png"
import Marquee from "react-fast-marquee";
import kamale from "../../images/Kamale.G.png"
import SUGANYA from '../../images/SUGANYA.G.png'
import Ramya from '../../images/Ramya senthilkumar.png'
import Vidhya from '../../images/Vidhya .K.png'
import Rino from '../../images/Rino.png'
import muhsina from '../../images/Muhsina Surmi.png'
import nemmadi from '../../images/Nemmadi Udaychinna.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Companies from "../../Home/Companies";

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
      width: "50px",
      height: "50px",
      cursor: "pointer",
      position: "absolute",
      top: "40%",
      zIndex: 10,
      [direction === "left" ? "left" : "right"]: "10px",
      transform: "translateY(-50%)",
    }}
  >
    <span
      style={{
        fontSize: "18px",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
    {direction === "left" ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
    </span>
  </div>
);

const HyderabadStudents = () => {
  const testimonials =  [
    {
      name: "Kamale.G",
      image: `${kamale}`,
      text: "Thoughtflows is one of the best places to grab a huge knowledge about medical coding. I've had a great guidance by my HR Reshma mam and special thanks to Radika mam and Keerthi mam. I'm really thankful for all the staffs who made me get into a reputed company. Other activities conducted by the academy helped to engage ourselves and gain confidence. Thank you for the entire team. Best academy to kick-start your career. Thank you…"
    },
    {
      name: "SUGANYA.G",
      image: `${SUGANYA}`,
      text: "Thoughtflow institute is best to learn medical coding, and the trainer teaching the class is very well. Best platform to learn medical coding. All the trainers are friendly. Thoughtflow provides daily practice questions in its own app, which is very useful. The platform also contains daily syllabus, etc."
    },
    {
      name: "Ramya Senthilkumar",
      image: `${Ramya}`,
      text: "I recently completed my CPC certificate with 95% with the help of Thought Medical Coding Academy, and I highly recommend it to anyone pursuing a career in medical coding. They provide detailed study materials, conduct regular mock tests, and offer thorough exam preparation, which greatly helped me feel confident about the CPC exam. My trainer Keerthi mam, Keerthana, Pooja mam, and my HR Sindhu were very approachable and created a friendly atmosphere, making learning both effective and enjoyable. Thank you."
    },
    {
      name: "Vidhya.K",
      image: `${Vidhya}`,
      text: "It was a good decision that I made by joining THOUGHTFLOWS as a student. The course content is very well explained, even a beginner like me could understand it easily. A special mention to HR Reshma mam and trainers Pooja and Ezhil mam for clearing my doubts and helping me whenever I was stuck. I cleared CPC with 92%. Thank you! Overall, a good experience."
    },
    {
      name: "Muhsina Surmi",
      image: `${muhsina}`,
      text: "My name is Muhsina, I completed the Medical Coding course at Thought Flows Institute and was thoroughly impressed with the quality of instruction and course materials. Thanks to the solid foundation I gained, I was able to crack CPC exam shortly after finishing the course. I highly recommend this program to anyone looking to start a career in the field! Thank you Thought Flows."
    },
    {
      name: "Rino",
      image: `${Rino}`,
      text: "I'm Rino R, I completed the medical coding course in Thought Flows Academy in Trivandrum. I completed my Bachelor's degree in BSc Chemistry. I passed CPC with 89%. Thank you Thought Flows for the guidance and special thanks to my trainers, Aleena mam and Vaishna mam, for the valuable support to crack CPC exam. Thank you to Anakha mam and Aiswarya mam for daily motivation. Special thanks to Gokul sir for the great support. Thank you Thought Flows."
    },
    {
      name: "Nemmadi Udaychinna",
      image: `${nemmadi}`,
      text: "I had an excellent experience at Thought Flows Medical Coding Academy where the dedicated faculty provided comprehensive instruction and a supportive learning environment. The curriculum was well-structured, incorporating both theoretical knowledge and practical applications, which significantly enhanced my skills. I particularly appreciated the personalized attention from the teachers, who were always available to answer questions and guide me through challenges. Overall, I highly recommend Thought Flows to anyone seeking quality education in medical coding."
    }
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
    <>
    <div style={{ marginLeft: "100px",marginRight:"30px", padding:'50px' }} className="brand-tri">
      <h3 style={{ textAlign: "center" }}>Testimonial</h3>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "30px" }}>
        What Students Saying
      </h1>
      <Swiper pagination={true} modules={[EffectFade, Pagination, Autoplay]} className="mySwiper ">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <figure className="text-center">
                <blockquote className="text-lg/6 font-light text-gray-900 sm:text-xl/7">
                  <p>{testimonial.text}</p>
                </blockquote>
                <figcaption className="mt-6 flex flex-col items-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                  />
                  <div className="m-4  text-base font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    {/* <Companies/> */}
    </>
  );
};

export default HyderabadStudents;