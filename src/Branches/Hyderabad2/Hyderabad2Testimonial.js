import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';

import yamini from "../../images/Testimonials/Yamini ( DILSUKHNAGAR HYD ).jpeg"
import manisha from "../../images/Testimonials/MANISHA ( DILSUKHNAGAR HYD ).jpeg"
import nemmadi1 from "../../images/Testimonials/Nemmadi Udaychinna ( DILSUKHNAGAR HYD ).jpeg"
import madura from "../../images/Testimonials/MADHURA ( DILSUKHNAGAR HYD ).jpeg"
import shivakrishna from "../../images/man.png"
import nagalaxmi from "../../images/man.png"

const testimonials = [
  {
    image: `${yamini}`,
    name: "YAMINI",
    title: "Student",
    rating: 5,
    review: "Today I completed my Medical Coding Certification CPC with [86%] from Thought Flows, Dilsukhnagar, and I'm extremely satisfied with the quality of training and support I received throughout the course. The institute offers a well-structured curriculum that combines both theory and practical training, making it ideal for anyone aiming to build a successful career in medical coding. A special mention to our trainer, Pooja ma'am, whose teaching style made a huge difference. She is not only highly knowledgeable but also incredibly patient and approachable. Her ability to break down complex coding concepts into simple, easy-to- understand lessons helped us grasp the material with confidence. Pooja ma'am was always available to clarify doubts and went the extra mile to ensure every student kept up with the lessons. The faculty at Thought Flows is equally supportive and professional. From regular assessments to mock exams and one-on-one guidance, the learning experience was comprehensive and career-focused. The institute also provides excellent support for exam preparation and job placement assistance. I wholeheartedly recommend Thought Flows, Dilsukhnagar to anyone looking to get certified in medical coding. With expert trainers like Pooja ma'am, Mounika ma'am and a committed faculty team, you're in great hands for a strong start in your medical coding journey.",
    avatar: `${yamini}`
  },
  {
    image: `${manisha}`,
    name: "MANISHA",
    title: "Student",
    rating: 5,
    review: "I have recently completed my CPC training in thought flows. The trainers Manoj sir & Pavitra mam are knowledgeable & supportive. The way they teaches us the complex one can also easily understand.Tqsm throught flows",
    avatar: `${manisha}`
  },
  {
    image: `${nemmadi1}`,
    name: "NEMMADI UDAYCHINNA",
    title: "Student",
    rating: 5,
    review: "I had an excellent experience at Thought flows medical coding academy where the dedicated faculty provided comprehensive instruction and a supportive learning environment. The curriculum was well-structured, incorporating both theoretical knowledge and practical applications, which significantly enhanced my skills. I particularly appreciated the personalized attention from the teachers, who were always available to answer questions and guide me through challenges. Overall, I highly recommend Thought flows to anyone seeking quality education in thought flows medical coding academy At Dilsukhnagar …",
    avatar: `${nemmadi1}`
  },
  {
    image: `${madura}`,
    name: "MADHURA",
    title: "Student",
    rating: 5,
    review: "Thoughtflows Medical Coding Academy In Dilsukhnagar Branch Better institution for coding Better trainers and good faculty, supporting the students and motivate. ( HR Gayathri mam was friendly and helpful doubts so thank you so much mam) Good teaching and explain very well. Thank you so much My Trainer Pooja Mam",
    avatar: `${madura}`
  },
  {
    image: `${shivakrishna}`,
    name: "V.SHIVA KRISHNA",
    title: "Student",
    rating: 5,
    review: "Best medical coding academy in Dilsukhnagar With friendly and experienced trainer. I personally recommend this to those who are willing to choose best coaching centre Thank you...!",
    avatar: `${shivakrishna}`
  }
];

// Hyderabad2Testimonial
const Hyderabad2Testimonial = () => {
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

export default Hyderabad2Testimonial;
