import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import gowtham from "../../images/Testimonials/Gowtham (SVM).jpeg"
import sourav from "../../images/Testimonials/Sourav Malik (SVM).jpeg"
import madhumita from "../../images/Testimonials/Madhumita (SVM).jpeg"
import sarana from "../../images/Testimonials/Saran Balu (SVM).jpeg"
import tamilarasi from "../../images/Testimonials/Tamilarasi (SVM).jpeg"

const testimonials = [
  {
    image: `${gowtham}`,
    name: "GOWTHAM",
    title: "Student",
    rating: 5,
    review: "I just finished my CPC exam with 90%. As a non-life science graduate, I was a bit nervous at first, but I honestly had a good time throughout. The trainers did a great job explaining things simply, and the HR team was super helpful with everything. It was really good that the institute was available 7 days a week, and they offered personal help to schedule exams and follow up.I'm very satisfied with the overall experience indeed.",
    avatar: `${gowtham}`
  },
  {
    image: `${sourav}`,
    name: "SOURAV MALIK",
    title: "Student",
    rating: 5,
    review: "THOUGHT FLOWS this is the place where we can gain alot of knowledge. I feel thought flows as my family. Everyone supported me and guided me to crack CPC. My trainers are Pavitra mam and Mounika mam they tought us in a simple and easy manner. They helped me in my preparation.My HR Gayathri mam also helped me well. Here in this institution there is a practice room where we can practice and clarify our doubts with friends and trainers. Trainers are available from morning to evening. At last I heartly thankful to thought flows. A special thanks to Bala sir for revision classes.",
    avatar: `${sourav}`
  },
  {
    image: `${madhumita}`,
    name: "MADHUMITA",
    title: "Student",
    rating: 5,
    review: "I am really grateful to choose thought flows accademy. Trainers and HR delivered 100% of efforts to clearing our doubts with detail explanation as friendly. The trainers way of teaching really awesome to ensure our knowledge , they explained every topics with real time examples which helps to understand with concept. They provide extreme practice questions and mock that really helps to improve our corrections and HR encourage us to make confident. Really I recommend this institution to clear our certification at first attempt itself. Thank you thought flows team for your excellent training and support, especially thanks❤️ for your encourage and support HR Swetha mam.",
    avatar: `${madhumita}`
  },
  {
    image: `${sarana}`,
    name: "SARAN BALU",
    title: "Student",
    rating: 5,
    review: "My experience with the Advanced Medical Coding training at Thought Flows Medical Coding Training Centre in Saravanampatti was largely positive. The course provided a solid foundation in medical coding. The Trainers and all working staffs were generally effective, particularly in explaining all of our doubts both in portions and placement. The learning environment was very good and friendly manner.And a Placement team gives a continuous instructions and guides me. The overall training provided significant value and has equipped me with the necessary skills for advanced medical coding.",
    avatar: `${sarana}`
  },
  {
    image: `${tamilarasi}`,
    name: "TAMILARASI",
    title: "Student",
    rating: 5,
    review: "Thought flows is Excellent medical coding training academy and good platform to who want great career as a medical coder. I recently completed my Amct course in thought flows, And i was completed my cpc certification with the help of great trainers, They kindly teach every chapters and clear all my doubts at any time. Thanks to thought flows Medical coding academy.",
    avatar: `${tamilarasi}`
  }
];

// Cbe1Testi
const Cbe1Testi = () => {
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

export default Cbe1Testi;
