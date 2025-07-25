import React from 'react';
import { Col, Row } from 'react-bootstrap';
import imgabt from "../../images/Branches/online/Students.jpg";


const TrichyAbout = () => {
  return (
    <Row className="tirupathi-content-container my-5">
      <Col lg={1}></Col>
      <Col lg={4} className="tirupathi-image-content">
        <img src={imgabt} alt="Student" className="tirupathi-image rounded-xl" />
      </Col>

      <Col lg={1}></Col>
      <Col lg={5} className="tirupathi-text-content">
        <h2 className="tirupathi-title my-5">NO.1 MEDICAL CODING INSTITUTE</h2>
        <div className="tirupathi-list">
          <p> Welcome to Thoughtflows Medical Coding Academy, the leading training
            institute in Trichy, committed to providing world-class education
            and empowering aspiring medical coders with the skills and knowledge
            needed to excel in the healthcare industry. With a track record of
            excellence and a dedication to nurturing talent, we stand out as the
            preferred choice for those seeking quality medical coding training.</p>
        </div>
      </Col>
      <Col lg={1}></Col>
    </Row>
  );
}

export default TrichyAbout;
