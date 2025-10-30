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
    name: "NAVAMI (TRIVANDRUM)",
    title: "Student",
    rating: 5,
    review: "I'm Navami. I completed medical coding from Thoughtflows medical coding academy and I recently cleared CPC with 90% mark in first attempt and was successfully placed in Cotiviti. I am extremely thankful to all the trainers and HR team especially Vaishna mam, Aleena mam, Anakha mam for their great support throughout my academic journey. Special thanks to placement team for their support. It was a great experience Thank you",
    avatar: `${kamale}`
  },
  {
    image: `${SUGANYA}`,
    name: "ANFIYA NAVAS (TRIVANDRUM)",
    title: "Student",
    rating: 5,
    review: "I completed my BDS and recently pursued Medical Coding training at ThoughtFlows, Trivandrum. I'm happy to share that I have successfully cleared the CPC exam, and I owe a big part of this achievement to the excellent training and support I received here. A heartfelt thank you to Vaishna ma'am and Shilpa ma'am for their exceptional guidance and dedication throughout the course. Their teaching methods and encouragement truly made a difference. The entire experience with ThoughtFlows has been top-notch, and I sincerely appreciate the professionalism and care shown by the entire team.",
    avatar: `${SUGANYA}`
  },
  {
    image: `${Ramya}`,
    name: "AYISHA NAWF (TRIVANDRUM)",
    title: "Student",
    rating: 5,
    review: "I completed my medical coding course at Thought Flows, Trivandrum and had an exceptional experience! The training quality was top-notch, and our trainer was exceptionally good - kind, and friendly, cleared all our doubts clearly and thoroughly, making the learning process smooth and enjoyable. Highly recommended! Thought Flows is the best medical coding academy ever.",
    avatar: `${Ramya}`
  },
  {
    image: `${Vidhya}`,
    name: "DATHAN (TRIVANDRUM)",
    title: "Student",
    rating: 5,
    review: "Got job placement in Pacific BPO (Access Healthcare Company) Tvm branch within 1 week after course completion. It's not just an institution they're like family. The HR Ms. Anakha is so welcoming and kind. The trainers are so knowledgeable and cooperative, thanks to Ms. Vaishna & Ms. Aleena. The TAHR Mr. Gokul and Mrs. Aiswarya is well cooperative. I would recommend thought flows for a successive medical coding career..",
    avatar: `${Vidhya}`
  },
  {
    image: `${muhsina}`,
    name: "GOPIKA (TRIVANDRUM)",
    title: "Student",
    rating: 5,
    review: "I've had a wonderful experience at thought flow tvm. The faculty are knowledgeable and supportive. I have particularly enjoyed my 3 month course which has helped me to achieve a job in my native place immediately after the completion of course. I recently passed the CPC exam with 91%. I would like to thank Vaishna maam and Aleena maam for their great support. The atmosphere is conducive to learning with a diverse and vibrant community of students and faculties. Thank you HR team for your encouragement and support.",
    avatar: `${muhsina}`
  }
];

// TrivandrumStudent
const TrivandrumStudent = () => {
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

export default TrivandrumStudent;
