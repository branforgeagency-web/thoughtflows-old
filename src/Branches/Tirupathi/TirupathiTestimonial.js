import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import sushmitha from "../../images/Testimonials/Sushmitha ( TIRUPATI ).jpeg"
import gowthami from "../../images/Testimonials/Gowthami ( TIRUPATI ).jpeg"
import ruchitha from "../../images/Testimonials/Gowthami ( TIRUPATI ).jpeg"
import hemala from "../../images/Testimonials/Hemalatha ( TIRUPATI ).jpeg"
import shoba from "../../images/Testimonials/Shoba ( TIRUPATI ).jpeg"

const testimonials = [
  {
    image: `${sushmitha}`,
    name: "SUSHMITHA",
    title: "Student",
    rating: 5,
    review: "I loved attending this institute!! The faculty were talented and inspiring.. and the faculty were top-notch. I gained valuable skills and confidence in my artistic abilities..",
    avatar: `${sushmitha}`
  },
  {
    image: `${gowthami}`,
    name: "GOWTHAMI",
    title: "Student",
    rating: 5,
    review: "Am very grateful to thoughts flow of medical coding in tirupati branch.. Mainly trainer Prasanna mam, and Hrs they encourage us in everything... Thanks to thoughts flow",
    avatar: `${gowthami}`
  },
  {
    image: `${ruchitha}`,
    name: "RUCHITHA VALLAKATI",
    title: "Student",
    rating: 5,
    review: "Amazing institute with excellent infrastructure and great teaching methods. finally a fantastic place to learn.",
    avatar: `${ruchitha}`
  },
  {
    image: `${hemala}`,
    name: "HEMALATHA",
    title: "Student",
    rating: 5,
    review: "Am very grateful to though flow academy in tirupati branch to take cpc course. mainly to trainer prasana mam. clarification of my doubts in every topic. the way mam explanations is to good to us.",
    avatar: `${hemala}`
  },
  {
    image: `${shoba}`,
    name: "SHOBA",
    title: "Student",
    rating: 5,
    review: "Thoughtflows is very best Institute for cracking cpc exam and contains all facilities of medical coding. It is very very good Institute with highly qualified trainers, responsible regional managers and highly supportive hr madams. Choose thought flows for career growth in the field of medical coding.",
    avatar: `${shoba}`
  }
];

// TirupathiTestimonial
const TirupathiTestimonial = () => {
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

export default TirupathiTestimonial;
