import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap';
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import kamale from "../../images/Kamale.G.png"
import SUGANYA from '../../images/SUGANYA.G.png'
import Ramya from '../../images/Ramya senthilkumar.png'
import Vidhya from '../../images/Vidhya .K.png'
import Rino from '../../images/Rino.png'
import muhsina from '../../images/Muhsina Surmi.png'
import nemmadi from '../../images/Nemmadi Udaychinna.png'
import bgrev from '../../images/Group.png';
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
      name: "Yamini (DILSUKHNAGAR)",
      image: `${kamale}`,
      text: "Today I completed my Medical Coding Certification CPC with 86% from Thought Flows, Dilsukhnagar, and I'm extremely satisfied with the quality of training and support I received throughout the course. The institute offers a well-structured curriculum that combines both theory and practical training, making it ideal for anyone aiming to build a successful career in medical coding. A special mention to our trainer, Pooja ma'am, whose teaching style made a huge difference. She is not only highly knowledgeable but also incredibly patient and approachable. I wholeheartedly recommend Thought Flows, Dilsukhnagar to anyone looking to get certified in medical coding."
    },
    {
      name: "Manisha (DILSUKHNAGAR)",
      image: `${SUGANYA}`,
      text: "I have recently completed my CPC training in thought flows. The trainers Manoj sir & Pavitra mam are knowledgeable & supportive. The way they teaches us the complex one can also easily understand. Thank you so much thought flows."
    },
    {
      name: "Nemmadi Udaychinna (DILSUKHNAGAR)",
      image: `${nemmadi}`,
      text: "I had an excellent experience at Thought flows medical coding academy where the dedicated faculty provided comprehensive instruction and a supportive learning environment. The curriculum was well-structured, incorporating both theoretical knowledge and practical applications, which significantly enhanced my skills. I particularly appreciated the personalized attention from the teachers, who were always available to answer questions and guide me through challenges. Overall, I highly recommend Thought flows to anyone seeking quality education in thought flows medical coding academy At Dilsukhnagar."
    },
    {
      name: "Madhura (DILSUKHNAGAR)",
      image: `${Vidhya}`,
      text: "Thoughtflows Medical Coding Academy In Dilsukhnagar Branch Better institution for coding Better trainers and good faculty, supporting the students and motivate. HR Gayathri mam was friendly and helpful doubts so thank you so much mam. Good teaching and explain very well. Thank you so much My Trainer Pooja Mam."
    },
    {
      name: "V.Shiva Krishna (DILSUKHNAGAR HYD)",
      image: `${muhsina}`,
      text: "Best medical coding academy in Dilsuknagar. With friendly and experienced trainer. I personally recommend this to those who are willing to choose best coaching centre. Thank you!"
    },
    {
      name: "Kamale.G",
      image: `${kamale}`,
      text: "Thoughtflows is one of the best places to grab a huge knowledge about medical coding. I've had a great guidance by my HR Reshma mam and special thanks to Radika mam and Keerthi mam. I'm really thankful for all the staffs who made me get into a reputed company. Other activities conducted by the academy helped to engage ourselves and gain confidence. Thank you for the entire team. Best academy to kick-start your career. Thank you…"
    },
    {
      name: "SUGANYA.G",
      image: `${SUGANYA}`,
      text: "Thoughtflow institute is best to learn medical coding, and the trainer teaching the class is very well. Best platform to learn medical coding. All the trainers are friendly. Thoughtflow provides daily practice questions in its own app, which is very useful. The platform also contains daily syllabus, etc."
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
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="google-rev text-center text-lg-start"
        style={{
          backgroundImage: `url(${bgrev})`,
          backgroundSize: '6% 30%',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#E5F8F9',
          padding: '60px 0px 180px 0px'
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4">
              <motion.h5
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  color: '#00BBFA', 
                  fontWeight: '600', 
                  letterSpacing: '2px',
                  fontSize: '14px',
                  textTransform: 'uppercase'
                }}
              >
                DILSUKHNAGAR TESTIMONIALS
              </motion.h5>
              <motion.h2
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ 
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  marginBottom: '20px'
                }}
              >
                What Our Dilsukhnagar <br /> Students Are Saying
              </motion.h2>
              <motion.p 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted"
                style={{ fontSize: '16px', lineHeight: '1.6' }}
              >
                Hear from our successful students at our Dilsukhnagar branch who have achieved great success in their medical coding careers.
              </motion.p>
            </Col>

            <Col lg={7}>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Swiper 
                  pagination={true} 
                  modules={[EffectFade, Pagination, Autoplay]} 
                  className="mySwiper"
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="testimonial-card p-5" 
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "16px",
                          position: "relative",
                          overflow: "hidden",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          border: "1px solid rgba(0,187,250,0.1)",
                          transition: "all 0.3s ease",
                          margin: "20px 0"
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
                        }}
                      >
                        <motion.img
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          alt={testimonial.name}
                          src={testimonial.image}
                          className="rounded-circle"
                          style={{
                            width: "100px",
                            height: "100px",
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            border: "3px solid #fff",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                          }}
                        />
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-start mb-3"
                        >
                          <div style={{ display: 'flex', gap: '2px' }}>
                            {[...Array(5)].map((star, i) => (
                              <motion.span 
                                key={i} 
                                className="text-warning"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                                style={{ fontSize: '18px' }}
                              >
                                &#9733;
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                        <motion.blockquote 
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="text-start"
                          style={{ 
                            fontSize: '15px', 
                            lineHeight: '1.6',
                            color: '#555',
                            marginTop: '20px',
                            marginBottom: '20px'
                          }}
                        >
                          <p style={{ margin: 0, fontStyle: 'italic' }}>
                            "{testimonial.text}"
                          </p>
                        </motion.blockquote>
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="d-flex align-items-center mt-4"
                        >
                          <motion.div 
                            className="rounded-circle" 
                            style={{
                              backgroundColor: "#00BBFA",
                              color: "#fff",
                              width: "60px",
                              height: "60px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "24px",
                              marginRight: "15px",
                              boxShadow: "0 4px 12px rgba(0,187,250,0.3)"
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            &#8220;
                          </motion.div>
                          <div>
                            <h5 className="mb-1" style={{ 
                              fontWeight: '600', 
                              color: '#333',
                              fontSize: '16px'
                            }}>
                              {testimonial.name}
                            </h5>
                            <small className="text-muted" style={{ fontSize: '14px' }}>
                              Dilsukhnagar Student
                            </small>
                          </div>
                        </motion.div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default HyderabadStudents;