import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import bgrev from '../../images/Group.png';
import saikumar from "../../images/Testimonials/Sai Kumar renukuntla ( Ameerpet HYD ).jpeg"
import sushma from "../../images/Testimonials/Sushma Palle ( Ameerpet HYD ).jpeg"
import ramana from "../../images/Testimonials/Ramana ( Ameerpet HYD ).jpeg"
import abhiram from "../../images/Testimonials/Abhiram Reddy ( Ameerpet HYD ).jpeg"
import nagalaxmi from "../../images/Testimonials/Ayisha nawf (Trivandrum).jpeg"

const testimonials = [
  {
    image: `${saikumar}`,
    name: "SAI KUMAR RENUKUNTLA",
    title: "Student",
    rating: 5,
    review: "Thank you thought flows, I recently completed my certification with good score It's one of the best institute in Hyderabad, To gain knowledge about anatomy and physiology, bala sir, pavitra mam, manoj sir, they are experienced faculty and explaining every douts without any problem, HR's also very friendly, it's a good environment to focus on study, finally my suggestion, join in thought flows medical coding academy.",
    avatar: `${saikumar}`
  },
  {
    image: `${sushma}`,
    name: "SUSHMA PALLE",
    title: "Student",
    rating: 5,
    review: "I am so thankful to thought flow medical coding academy Ameerpet for their outstanding guidance and support in my CPC exam with friendly and experienced trainer. the training was well structured and covered all aspects of medical coding, I have cleared my CPC exam in Frist attempt and I have got placed in optum company and (special thanks to HR shinduja mam she helped me a lot thank you mam) I personally recommend thought flow medical coding academy to those who are willing to choose best medical coding coaching centre.",
    avatar: `${sushma}`
  },
  {
    image: `${ramana}`,
    name: "RAMANA",
    title: "Student",
    rating: 5,
    review: "I had an excellent experience with THOUGHT FLOWS institute. The best medical coding academy in Hyderabad. Some institutes are not teaching the subject and they simply giving important questions to clear exam but that will impact their job definitely. please don't belive false statements and don't waste your money and time. When comes to thought flows the way they teach is awesome. They won't provide any papers but by listening to the classes and by doing their assessments you can easily crack exam. A special thanks to PAVITRA(Multi talented) mam. The way she explains the topic is too good. If you want to gain good knowledge and to get good percentage in CPC or CCS blindly you can join this academy. All the staff are friendly and very polite. Thanks to thought flows for providing quality subject and making students to succeed in their life",
    avatar: `${ramana}`
  },
  {
    image: `${abhiram}`,
    name: "ABHIRAM REDDY",
    title: "Student",
    rating: 5,
    review: "I am Abhiram reddy, Joined AMCT course at Thoughtflows Ameerpet cleared my CPC exam three days ago Training sessions conducted at this academy is top-notch and study materials are ultimate Especially Training Manager Pavithra mam who is expertise in training has provided the best sessions and made me expert in ICD and CPT including doubt clarifications as well Am grateful to HR Vignesh sir for providing continuous support throughout my CPC journey beginning from admission till the exam completion I recommend Thoughtflows for the best coding Training with 10/10 rating",
    avatar: `${abhiram}`
  },
  {
    image: `${nagalaxmi}`,
    name: "NAGALAXMI",
    title: "Student",
    rating: 5,
    review: "I recently completed CPC training and it was an excellent experience. The trainers Manoj Sir and Pavithra Mam are highly knowledgeable and experienced, they explained complex coding concepts in way easy to understand and helped in clearing certification in first attempt. Mounika Mam helped in finding job in COTIVITI. Thank you for all the support.",
    avatar: `${nagalaxmi}`
  }
];

// HyderabadTestimonial
const HyderabadTestimonial = () => {
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

export default HyderabadTestimonial;
