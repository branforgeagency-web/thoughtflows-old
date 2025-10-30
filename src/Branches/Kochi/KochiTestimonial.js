import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import cristeena from '../../images/Testimonials/Cristeena rose (kochi).jpeg'
import sajeena from '../../images/Testimonials/Sajeena (kochi).jpeg'
import aleena from '../../images/Testimonials/Aleena (kochi).jpeg'
import anitta from '../../images/Testimonials/Anitta (kochi).jpeg'
import robiya from '../../images/Testimonials/Robiya (Kochi).jpeg'


const testimonials = [
  {
    image: `${cristeena}`,
    name: "CRISTEENA ROSE",
    title: "Student",
    rating: 5,
    review: "I am recently completed home health coding program with thought flows and Im happy to share that I have cleared HCS-D exam with 91.25%. I'm happy with whole experience at thought flows and it was very pleasant and the classes were crystal clear and the exam preparations and mock tests provided were very helpful for the examination .All thanks to Thought flows academy, especially to Aswani ma'am for her guidance and the effort for the preparations. I would recommend this institute to anyone who would like to pursue a career in Home health coding. Thankyou to the whole Thought flows team.❤️",
    avatar: `${cristeena}`
  },
  {
    image: `${sajeena}`,
    name: "SAJEENA",
    title: "Student",
    rating: 5,
    review: "I recently completed Hcsd coding course at Thought Flows Academy kochi and I passed my HCSD exam with 87.5.Thanks to Aswani mam for supporting and encouraging me throughout this journey.Thankyou so much mam.and I also want to highlight the excellent support from the HR team at Thought Flows Academy. I highly recommend Thought Flows to anyone who looking for a career in medical coding.Thanks to the entire team of thought flows ❤️",
    avatar: `${sajeena}`
  },
  {
    image: `${aleena}`,
    name: "ALEENA",
    title: "Student",
    rating: 5,
    review: "Iam very happy to share this feedback on thoughtflows kochi. I have completed my home health coding program from thoughtflows academy and passed HCS -D exam with 91.25%. Iam really grateful to the entire thoughtflows team especially our trainer Ashwini Mam. They make me self confident by providing detailed knowledge in all areas of the syallabus. The exam prepration classes invaluable to grab exams successfully. Iam really appreciate of all support they provide me through out the course.....",
    avatar: `${aleena}`
  },
  {
    image: `${anitta}`,
    name: "ANITTA",
    title: "Student",
    rating: 5,
    review: "I'm very happy to share that I recently passed the CPC exam on my first attempt with 82%. I want to express my heartfelt gratitude to Thoughtflows medical coding academy for their structured training, supportive tutor's & HR's. The course not only helped me understand coding concepts thoroughly but also gave me the confidence to approach the exam with clarity and focus.Special thanks to my instructors vaishna mam,ashwani mam,pinki miss,sreelakshmi who were always available to guide and motivate us throughout the journey and also thank you HR's especially Anamika and Sreelekha for always inspiring me.I would highly recommend Thoughtflows academy to anyone aspiring to build a career in medical coding.",
    avatar: `${anitta}`
  },
  {
    image: `${robiya}`,
    name: "ROBIYA",
    title: "Student",
    rating: 5,
    review: "I recently completed the Medical Coding course at ThoughtFlows, Kochi, and successfully scored 88 marks in the CPC exam. I'm extremely grateful to the dedicated faculty—Vaishna Ma'am, Aswani Ma'am, Pinky Miss, and Sreelekshmi Ma'am—for their expert guidance and unwavering support. A special thanks as well to HR Sreelekha for her constant assistance throughout the course. The training was thorough, well-structured, and focused on both conceptual understanding and practical application. Regular mock tests, doubt-clearing sessions, and personalized attention played a big role in my success. I highly recommend ThoughtFlows to anyone aspiring to build a career in medical coding.",
    avatar: `${robiya}`
  }
];

// KochiTestimonial
const KochiTestimonial = () => {
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

export default KochiTestimonial;
