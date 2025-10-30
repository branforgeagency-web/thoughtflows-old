import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import logeswari from "../../images/Testimonials/Logeswari Boopathi (Gandhipuram).jpeg"
import swathi from "../../images/Testimonials/Swathi Hari (Gandhipuram).jpeg"    

const testimonials = [
  {
    image: `${logeswari}`,
    name: "LOGESWARI BOOPATHI",
    title: "Student",
    rating: 5,
    review: "My experience on (AMCT) course at Thought flows medical Coding centre Gandhipuram Branch was really a good experience. Being with a non life science background I thought it would be difficult for me to catch up with anatomy and coding guidelines at very first day. With the support of trainers and their guidance make me to fit strong and I'm now much better in dealing with it. Day by day moulding our knowledge with the tests given in thoughtflows app, a detailed and clear explanations were given on topics or mistakes( in test ) whenever we needed. A complete support system are given from trainers and HR side. Best place to gain knowledge on subject and are highly recommend. Thanks for your support.",
    avatar: `${logeswari}`
  },
  {
    image: `${swathi}`,
    name: "SWATHI HARI",
    title: "Student",
    rating: 5,
    review: "I have joined online class in thoughtflows thru HR prabhu he gave great support for onboarding till setting up account on app also the institute provides job placement my trainer is sindhuja online trainer from hyderabad she taught me very well explaining every topics clearly and took time to make everyone understand .after class if we ask for any doubt she clears the doubt immediately without take days and hours to reply the students she is very calm and knowledgeable trainer My classes are completed looking forward for a post course support same as like so far.",
    avatar: `${swathi}`
  }
];

// Cbe3Testimonial
const Cbe3Testimonial = () => {
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

export default Cbe3Testimonial;
