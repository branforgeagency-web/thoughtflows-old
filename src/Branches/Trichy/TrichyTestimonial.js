import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import dharshini from "../../images/Testimonials/Dharshini (Trichy).jpeg"
// import vijay from "../../images/Testimonials/Abhiram Reddy ( Ameerpet HYD ).jpeg"
// import rithika from "../../images/Testimonials/Abhiram Reddy ( Ameerpet HYD ).jpeg"
// import praveen from "../../images/Testimonials/Priyanka Suresh (Salem).jpeg"
// import ramya from "../../images/Testimonials/Ramana ( Ameerpet HYD ).jpeg"
// import krishnaveni from "../../images/Testimonials/Keerthana (Salem).png"


const testimonials = [
  {
    image: `${dharshini}`,
    name: "DHARSHINI",
    title: "Student",
    rating: 5,
    review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
    avatar: `${dharshini}`
    },
  // {
  //   image: `${vijay}`,
  //   name: "VIJAY",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${vijay}`
  // },
  // {
  //   image: `${rithika}`,
  //   name: "RITHIKA",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${rithika}`
  // },
  // {
  //   image: `${praveen}`,
  //   name: "PRAVEEN",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${praveen}`
  // },
  // {
  //   image: `${ramya}`,
  //   name: "RAMYA",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${ramya}`
  // },
  // {
  //   image: `${krishnaveni}`,
  //   name: "KRISHNAVENI",
  //   title: "Student",
  //   rating: 5,
  //   review: "Best medical coding academy in Trichy.....I learned lot of knowledge from this academy. Well teaching trainers..they are very polite and calm. If any problems....they immediately respond and solve it",
  //   avatar: `${krishnaveni}`
  // },
];

// TrichyTestimonial
const TrichyTestimonial = () => {
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

export default TrichyTestimonial;