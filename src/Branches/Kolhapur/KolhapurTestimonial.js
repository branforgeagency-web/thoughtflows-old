import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import avatarImg from "../../images/man.png";

const testimonials = [
  {
    name: "PRANAV KULKARNI",
    title: "CPC Certified Medical Coder",
    rating: 5,
    review: "ThoughtFlows Academy has provided the highest standard of training. The faculty thoroughly explained human anatomy, ICD-10 guidelines, and CPT modifiers with immense patience. I passed my CPC examination on my first attempt with 86% and received an offer letter through their campus placements.",
    avatar: avatarImg
  },
  {
    name: "SNEHAL PATIL",
    title: "Medical Coder at AGS Health",
    rating: 5,
    review: "As a pharmacy graduate from Kolhapur, I was looking for a high-growth career in healthcare IT. ThoughtFlows trainers gave me complete clarity and confidence through mock exams and chart auditing practice. Today I'm successfully working in a top healthcare MNC.",
    avatar: avatarImg
  },
  {
    name: "ROHIT DESHMUKH",
    title: "Certified Professional Coder (CPC)",
    rating: 5,
    review: "The structured curriculum and supportive trainers at ThoughtFlows Kolhapur made all the difference. Special thanks to the placement department for coordinating interview drives and helping me clear the technical rounds without any anxiety.",
    avatar: avatarImg
  }
];

const KolhapurTestimonial = () => {
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
              <h5>STUDENT EXPERIENCES</h5>
              <h2>Hear from Our <br /> Certified Alumni</h2>
              <p className="text-muted">Discover how our students transformed their careers through practical medical coding training and industry placement assistance.</p>
            </Col>

            <Col lg={7}>
              <Carousel indicators={true} controls={true} interval={3500}>
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
                          width: "80px",
                          height: "80px",
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          border: "3px solid #f1f5f9",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                        }}
                      />
                      <div className="text-start mb-3 star-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="star text-warning">&#9733;</span>
                        ))}
                      </div>
                      <p className="text-muted text-start mt-4">{testimonial.review}</p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="rounded-circle" style={{
                          backgroundColor: "#003366",
                          color: "#fff",
                          width: "50px",
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "50px",
                          marginRight: "15px"
                        }}>
                          &#8220;
                        </div>
                        <div>
                          <h5 className="mb-1 testi-name">{testimonial.name}</h5>
                          <span style={{ fontSize: "13px", color: "#64748b" }}>{testimonial.title}</span>
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

export default KolhapurTestimonial;
