import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Cbe1Contents = () => {
  return (
    <Row className="cbe1-container">
        <Col lg={1}></Col>
      {/* Left Section */}
      <Col lg={4} className="cbe1-left-section">
        <div className="overlay">
          {/* <div className="icon">
            <i className="fas fa-lightbulb"></i>
          </div> */}
          <h3>Stay Updated with the Latest Trends</h3>
          <p>Thoughtflows Medical Coding Academy in Coimbatore is committed to keeping you abreast of the latest trends and advancements in the field of medical coding. We regularly organize workshops, seminars, and industry interactions to ensure that you stay updated with the evolving healthcare landscape. By choosing our academy, you will have access to valuable resources and insights that keep you ahead of the curve. Join us and stay informed about the latest developments in medical coding.</p>
        </div>
      </Col>
      <Col lg={1}></Col>
      {/* Right Section */}
      <Col lg={5} className="cbe1-right-section">
        <h2>Industry-Recognized Certifications</h2>
        <p>Earning industry-recognized certifications is a great way to validate your skills and enhance your employability. Our Coimbatore Academy offers training programs that prepare you for various certifications, such as the Certified Professional Coder (CPC) or Certified Coding Specialist (CCS) exams. Our curriculum is designed to align with the certification requirements, and our instructors provide targeted guidance to help you succeed in your certification journey.</p>
        <h2>Real-World Case Studies</h2>
        <p>Practical application is an essential component of effective medical coding training. Our Coimbatore Academy integrates real-world case studies and practical exercises into our curriculum to provide you with hands-on experience in coding scenarios. By working through actual patient records, coding challenges, and documentation, you'll develop critical thinking skills, improve your coding accuracy, and gain confidence in your abilities.</p>
        </Col>
      <Col lg={1}></Col>
    </Row>
  );
}

export default Cbe1Contents;
