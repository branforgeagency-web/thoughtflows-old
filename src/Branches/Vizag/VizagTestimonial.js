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

const testimonials = [
  {
    image: `${kamale}`,
    name: "RAVI (VIZAG)",
    title: "Student",
    rating: 5,
    review: "Thoughtflows Vizag branch provides excellent medical coding training with experienced faculty. The course structure is well-designed and the practical approach to learning helped me understand complex coding concepts easily. The placement support is outstanding.",
    avatar: `${kamale}`
  },
  {
    image: `${SUGANYA}`,
    name: "PADMA (VIZAG)",
    title: "Student",
    rating: 5,
    review: "I completed my CPC course at Thoughtflows Vizag and it was a life-changing experience. The trainers are highly qualified and provide individual attention to each student. The study materials and practice tests are very helpful for exam preparation.",
    avatar: `${SUGANYA}`
  },
  {
    image: `${Ramya}`,
    name: "SITA (VIZAG)",
    title: "Student",
    rating: 5,
    review: "The faculty at Thoughtflows Vizag is exceptional. They make complex medical coding concepts easy to understand. The institute provides excellent career guidance and placement support. I highly recommend this institute to anyone interested in medical coding.",
    avatar: `${Ramya}`
  },
  {
    image: `${Vidhya}`,
    name: "GAYATRI (VIZAG)",
    title: "Student",
    rating: 5,
    review: "Thoughtflows Vizag offers the best medical coding training in the city. The course curriculum is comprehensive and industry-relevant. The trainers are very supportive and the learning environment is excellent. I got placed in a top healthcare company after completing the course.",
    avatar: `${Vidhya}`
  },
  {
    image: `${muhsina}`,
    name: "KAVITHA (VIZAG)",
    title: "Student",
    rating: 5,
    review: "I joined the AMCT course at Thoughtflows Vizag and it was the best decision of my career. The trainers are experienced and the course structure is well-designed. The placement team helped me secure a job in a reputed healthcare company.",
    avatar: `${muhsina}`
  }
];

// VizagTestimonial
const VizagTestimonial = () => {
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

export default VizagTestimonial;
