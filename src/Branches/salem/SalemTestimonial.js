import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import raja from "../../images/Testimonials/Rajasekhar (Salem).jpeg"
import keerthana from "../../images/Testimonials/Keerthana (Salem).png"
import priyanka from "../../images/Testimonials/Priyanka Suresh (Salem).jpeg"
import dhivya from "../../images/Testimonials/Dhivya (Salem).jpeg"
import sineka from "../../images/Testimonials/Sineka (Salem).jpeg"

const testimonials = [
  {
    image: `${raja}`,
    name: "RAJA SEKAR",
    title: "Student",
    rating: 5,
    review: "I'm Rajasekar, My Medical coding Journey. I'm thrilled to share my experience with the medical coding course! This course helped me to achieve my dream job and changed my life. The staffs were extremely friendly and supportive throughout the course. As an Engineering student I was impressed by structure approach to learning, which included weekly tests. What impressed me most was, They will conduct Fun games and activities helped us relax and enjoyable. I'm grateful for this course. It's a wonderful opportunity to fulfill a career. If anyone wants to do medical coding and related courses Thought flows institute will be the best option. Thought flows is the best medical coding training institute with 100% job assurance. Special thanks General Manager logeshwaran sir, HR Punitha madam and Ajay sir Placement team. Finally I have placed in Teleperformance company in Specialty Emergency Department at Chennai. Thank you for overall support....",
    avatar: `${raja}`
  },
  {
    image: `${keerthana}`,
    name: "KEERTHANA",
    title: "Student",
    rating: 5,
    review: "I am completed my AMCT course in Thoughts flow, Salem. Trainers and HR are very helpful to my career and full supportive. Now I am selected in vee healthtek in Salem. Thanks for giving this wonderful opportunity ☺️",
    avatar: `${keerthana}`
  },
  {
    image: `${priyanka}`,
    name: "PRIYANKA SURESH",
    title: "Student",
    rating: 5,
    review: "I highly recommend Thoughtflows salem branch for its exceptional instructors, supportive environment, and effective learning resources, making it an ideal choice for students seeking quality education.",
    avatar: `${priyanka}`
  },
  {
    image: `${dhivya}`,
    name: "DHIVYA",
    title: "Student",
    rating: 5,
    review: "Hii!!!😊 I'm Ms. Dhivya. I completed my CPC course(online) in Thoughtflows academy. I'm very glad to THANK🙏🏻 the entire team of Thoughtflows medical coding academy. My Special Heartfelt♥️ Thanks to HR Ms. DHARSHINI, my TRAINER Mrs. SINDHU mam💯 & Mr. BALA sir (Revision clz Trainer), Mr. Ajay sir from Talent Acquisition team. Trainers are highly knowledgeable, positive motivator, Friendly & Best supporter. With my trainer support & guidance i crack my exam easily with 94%😍. Online class was so smooth and enjoyable. I gain more valuable knowledge which is more useful to grow my career. They provide all the materials & Practice papers which is very useful to clear my exam so easily. Academy is providing High💯💯💯Quality Education to all the students. Very good academy to do Coding course & build your career too❣️❣️ higher. I suggest everyone to join & get a Good career advantage!!!!",
    avatar: `${dhivya}`
  },
  {
    image: `${sineka}`,
    name: "SINEKA",
    title: "Student",
    rating: 5,
    review: "Hi, I joined the AMCT course at ThoughtFlow medical academy, Salem. Their training and way of teaching are good. It's a great place for those who are willing to write the CPC exam. They also provide an app with tests for students as part of the training, and it's very helpful. The trainers and HR are friendly, and they trained us well. The atmosphere is good for studying, and they provide books during the course. I also got placed in my dream company with the help of their placement team. They also trained us for interviews. Thanks to ThoughtFlow for helping me through this training",
    avatar: `${sineka}`
  }
];

// SalemTestimonial
const SalemTestimonial = () => {
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

export default SalemTestimonial;
