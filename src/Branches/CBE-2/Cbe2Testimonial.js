import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import kamale from "../../images/Kamale.G.png"
import SUGANYA from '../../images/SUGANYA.G.png'
import Ramya from '../../images/Ramya senthilkumar.png'
import Vidhya from '../../images/Vidhya .K.png'
import Rino from '../../images/Rino.png'
import muhsina from '../../images/Muhsina Surmi.png'
import nemmadi from '../../images/Nemmadi Udaychinna.png'
// import mohan from "../../images/Testimonials/Mohan (Hopes).jpeg"
import geethasri from "../../images/Testimonials/Geethasri (Hopes).jpeg"
import vijayakumar from "../../images/Testimonials/Vijayakumar (Hopes).jpeg"
import gopika from "../../images/Testimonials/Gopika (Hopes).jpeg"
import shanmugapriyan from "../../images/Testimonials/Shanmugappriyan (Hopes).jpeg"

const testimonials = [
  {
    image: `${kamale}`,
    name: "MOHAN",
    title: "Student",
    rating: 5,
    review: "I had a great experience in thought flows accademy.They gave me a wonderful knowledge in medical Coding system and also helps to clear cpc exam with a wonderful guidance. They help candidates like how to perform in the interview and how to Crack the interview.so, finally thanks thought flows accademy and their staff.",
    avatar: `${kamale}`
  },
  {
    image: `${geethasri}`,
    name: "GEETHASRI",
    title: "Student",
    rating: 5,
    review: "The Best Coding Institution for Medical Coding. Trainers really supported us to get clear knowledge about the coding concepts which is now very much helpful in our training period in the company. Really thanks to Thoughtflows for guiding us throughout the journey.",
    avatar: `${geethasri}`
  },
  {
    image: `${vijayakumar}`,
    name: "VIJAYAKUMAR",
    title: "Student",
    rating: 5,
    review: "Thought flows medical academy gave me a strong medical coding foundation. The instructors were knowledgeable and supportive. The curriculum was comprehensive, and I passed my certification exam. I landed my first coding job quickly thanks to their training. Highly recommend this academy!",
    avatar: `${vijayakumar}`
  },
  {
    image: `${gopika}`,
    name: "GOPIKA (HOPES)",
    title: "Student",
    rating: 5,
    review: "I have completed my advance medical coding training at thought flow medical coding Academy in hopes.And I got job from logix health services.This institute gives excellent teaching methods, knowledgeable and supportive faculty, and a conducive learning environment.They explain complex topics clearly and are always patient with questions, ensuring everyone understands.Thank you to though flows☺️",
    avatar: `${gopika}`
  },
  {
    image: `${shanmugapriyan}`,
    name: "SHANMUGAPPRIYAN (HOPES)",
    title: "Student",
    rating: 5,
    review: "Thoughtflow is one of the best medical coding institute. Privileged and highly skilled faculty and administions. A good organization highly recommend and supported me well by cracking my CPC exam... Especially their training,study materials, practice exam and mocks are really worth....I would like highly recommend... classes are really worth... It has been delightful. Thanks to trainer pavithra mam and HR sruthi.",
    avatar: `${shanmugapriyan}`
  }
];

// Cbe2Testimonial
const Cbe2Testimonial = () => {
  return (
    <>
      <div
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
              <h5>OUR TESTIMONIALS</h5>
              <h2>Hear from Our <br /> Successful Candidates</h2>
              <p className="text-muted">Don't just take our word for it. Hear from our successful candidates who have gone on to have successful careers in medical coding.</p>
            </Col>

            <Col lg={7}>
              <Carousel indicators={true} controls={true} interval={3000}>
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index} style={{ marginTop: '20px' }}>
                    <div className="testimonial-card p-5" style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          position: "absolute",
                          top: "10px",
                          right: "20px",
                          border: "3px solid #fff",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                        }}
                      />
                      <div className="text-start mb-3 star-rating">
                        {[...Array(testimonial.rating)].map((star, i) => (
                          <span key={i} className="star text-warning">&#9733;</span>
                        ))}
                      </div>
                      <p className="text-muted text-start mt-5">{testimonial.review}</p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="rounded-circle" style={{
                          backgroundColor: "#003366",
                          color: "#fff",
                          width: "60px",
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "80px",
                          marginRight: "15px"
                        }}>
                          &#8220; {/* Quote icon */}
                        </div>
                        <div>
                          <h5 className=" mb-1 testi-name">{testimonial.name}</h5>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cbe2Testimonial;
