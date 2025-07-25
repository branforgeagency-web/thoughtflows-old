import React from "react";
import lab from "../../images/Branches/online/lab.jpg";
import { Col, Row } from 'react-bootstrap';


function TrivandrumAbout() {
  return (
    <Row className="tirupathi-content-container my-5 mx-3">
      <Col lg={1}></Col>
      <Col lg={4} className="tirupathi-image-content">
        <img src={lab} alt="Student" className="tirupathi-image rounded-xl" />
      </Col>

      <Col lg={1}></Col>
      <Col lg={5} className="tirupathi-text-content">
        <h2 className="tirupathi-title my-5">About Us</h2>
        <div className="tirupathi-list">
          <p> Thoughtflows Medical Coding Academy, situated in the vibrant city of Trivandrum, stands as a beacon of excellence in medical coding education. Our academy is dedicated to nurturing the next generation of skilled and knowledgeable medical coding professionals. With a unique blend of cutting-edge training methodologies, experienced faculty, and state-of-the-art facilities, we are committed to providing an exceptional learning experience to our students.</p>
        </div>
      </Col>
      <Col lg={1}></Col>
    </Row>
  );
}

export default TrivandrumAbout;
