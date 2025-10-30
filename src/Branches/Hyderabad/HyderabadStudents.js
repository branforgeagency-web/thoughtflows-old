import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { motion } from "framer-motion";
import bgrev from '../../images/Group.png';
import kamale from "../../images/Kamale.G.png"
import SUGANYA from '../../images/SUGANYA.G.png'
import Ramya from '../../images/Ramya senthilkumar.png'
import Vidhya from '../../images/Vidhya .K.png'
import Rino from '../../images/Rino.png'
import muhsina from '../../images/Muhsina Surmi.png'
import nemmadi from '../../images/Nemmadi Udaychinna.png'
import Companies from "../../Home/Companies";

const HyderabadStudents = () => {
  const testimonials = [
    {
      image: `${kamale}`,
      name: "SAI KUMAR RENUKUNTLA (AMEERPET)",
      title: "Student",
      rating: 5,
      review: "Thank you thought flows, I recently completed my certification with good score It's one of the best institute in Hyderabad, To gain knowledge about anatomy and physiology, bala sir, pavitra mam, manoj sir, they are experienced faculty and explaining every doubts without any problem, HR's also very friendly, it's a good environment to focus on study, finally my suggestion, join in thought flows medical coding academy.",
      avatar: `${kamale}`
    },
    {
      image: `${SUGANYA}`,
      name: "SUSHMA PALLE (AMEERPET)",
      title: "Student",
      rating: 5,
      review: "I am so thankful to thought flow medical coding academy Ameerpet for their outstanding guidance and support in my CPC exam with friendly and experienced trainer. the training was well structured and covered all aspects of medical coding, I have cleared my CPC exam in First attempt and I have got placed in optum company and (special thanks to HR shinduja mam she helped me a lot thank you mam) I personally recommend thought flow medical coding academy to those who are willing to choose best medical coding coaching centre.",
      avatar: `${SUGANYA}`
    },
    {
      image: `${Ramya}`,
      name: "RAMANA (AMEERPET)",
      title: "Student",
      rating: 5,
      review: "I had an excellent experience with THOUGHT FLOWS institute. The best medical coding academy in Hyderabad. Some institutes are not teaching the subject and they simply giving important questions to clear exam but that will impact their job definitely. please don't believe false statements and don't waste your money and time. When comes to thought flows the way they teach is awesome. They won't provide any papers but by listening to the classes and by doing their assessments you can easily crack exam. A special thanks to PAVITRA(Multi talented) mam. The way she explains the topic is too good. If you want to gain good knowledge and to get good percentage in CPC or CCS blindly you can join this academy. All the staff are friendly and very polite. Thanks to thought flows for providing quality subject and making students to succeed in their life",
      avatar: `${Ramya}`
    },
    {
      image: `${Vidhya}`,
      name: "ABHIRAM REDDY (AMEERPET)",
      title: "Student",
      rating: 5,
      review: "I am Abhiram reddy, Joined AMCT course at Thoughtflows Ameerpet cleared my CPC exam three days ago. Training sessions conducted at this academy is top-notch and study materials are ultimate Especially Training Manager Pavithra mam who is expertise in training has provided the best sessions and made me expert in ICD and CPT including doubt clarifications as well Am grateful to HR Vignesh sir for providing continuous support throughout my CPC journey beginning from admission till the exam completion I recommend Thoughtflows for the best coding Training with 10/10 rating",
      avatar: `${Vidhya}`
    },
    {
      image: `${muhsina}`,
      name: "NAGALAXMI (AMEERPET)",
      title: "Student",
      rating: 5,
      review: "I recently completed CPC training and it was an excellent experience. The trainers Manoj Sir and Pavithra Mam are highly knowledgeable and experienced, they explained complex coding concepts in way easy to understand and helped in clearing certification in first attempt. Mounika Mam helped in finding job in COTIVITI. Thank you for all the support.",
      avatar: `${muhsina}`
    }
  ];

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
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
              <motion.h5
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  color: '#00BBFA', 
                  fontWeight: '600', 
                  letterSpacing: '2px',
                  fontSize: '14px',
                  textTransform: 'uppercase'
                }}
              >
                OUR TESTIMONIALS
              </motion.h5>
              <motion.h2
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ 
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  marginBottom: '20px'
                }}
              >
                Hear from Our <br /> Successful Candidates
              </motion.h2>
              <motion.p 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted"
                style={{ fontSize: '16px', lineHeight: '1.6' }}
              >
                Don't just take our word for it. Hear from our successful candidates who have gone on to have successful careers in medical coding.
              </motion.p>
            </Col>

            <Col lg={7}>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Carousel indicators={true} controls={true} interval={4000}>
                  {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index} style={{ marginTop: '20px' }}>
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="testimonial-card p-5" 
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "16px",
                          position: "relative",
                          overflow: "hidden",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          border: "1px solid rgba(0,187,250,0.1)",
                          transition: "all 0.3s ease"
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
                        }}
                      >
                        <motion.img
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
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
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                          }}
                        />
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-start mb-3 star-rating"
                        >
                          {[...Array(testimonial.rating)].map((star, i) => (
                            <motion.span 
                              key={i} 
                              className="star text-warning"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                              style={{ fontSize: '18px', marginRight: '2px' }}
                            >
                              &#9733;
                            </motion.span>
                          ))}
                        </motion.div>
                        <motion.p 
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="text-muted text-start mt-5"
                          style={{ fontSize: '15px', lineHeight: '1.6' }}
                        >
                          {testimonial.review}
                        </motion.p>
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="d-flex align-items-center mt-4"
                        >
                          <motion.div 
                            className="rounded-circle" 
                            style={{
                              backgroundColor: "#00BBFA",
                              color: "#fff",
                              width: "60px",
                              height: "60px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "24px",
                              marginRight: "15px",
                              boxShadow: "0 4px 12px rgba(0,187,250,0.3)"
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            &#8220;
                          </motion.div>
                          <div>
                            <h5 className="mb-1 testi-name" style={{ 
                              fontWeight: '600', 
                              color: '#333',
                              fontSize: '16px'
                            }}>
                              {testimonial.name}
                            </h5>
                            <small className="text-muted" style={{ fontSize: '14px' }}>
                              {testimonial.title}
                            </small>
                          </div>
                        </motion.div>
                      </motion.div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default HyderabadStudents;