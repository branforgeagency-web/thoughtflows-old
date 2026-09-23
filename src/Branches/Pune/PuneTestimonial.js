import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import avatarImg from "../../images/man.png";

const testimonials = [
  {
    name: "AISHWARYA JOSHI",
    title: "Certified Professional Coder (AAPC)",
    rating: 5,
    review: "ThoughtFlows Pune branch provides an unparalleled learning atmosphere. The practical orientation using real clinical charts, combined with individual attention from mentors, allowed me to pass the CPC exam on my first try with a 91% score! I was placed at Omega Healthcare within 2 weeks of completion.",
    avatar: avatarImg
  },
  {
    name: "PRATHAMESH SHINDE",
    title: "Senior Medical Coder",
    rating: 5,
    review: "The trainers in Pune possess exceptional depth in CPT and ICD-10 guidelines. Their structured mock tests and interview preparation sessions were the key factors behind my successful career launch in healthcare informatics.",
    avatar: avatarImg
  },
  {
    name: "POOJA KALE",
    title: "Inpatient Coder (CIC)",
    rating: 5,
    review: "As a Biotechnology postgraduate from Pune University, ThoughtFlows bridged the gap between academic biology and international healthcare billing. The placement support team stood by me through all rounds of interviews. Highly recommended!",
    avatar: avatarImg
  }
];

const PuneTestimonial = () => {
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
              <h5>STUDENT REVIEWS</h5>
              <h2>Real Stories from <br /> Pune Graduates</h2>
              <p className="text-muted">Discover how students and professionals in Pune transformed their career paths through ThoughtFlows' certified coaching and placement assistance.</p>
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

export default PuneTestimonial;
