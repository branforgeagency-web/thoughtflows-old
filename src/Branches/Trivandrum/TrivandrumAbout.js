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
        <h2 className="tirupathi-title my-5" style={{lineHeight: "1.3"}}>Why Choose ThoughtFlows Medical Coding Academy in Trivandrum?</h2>
        <div className="tirupathi-list">
          <p style={{fontSize: "16px", lineHeight: "28px", textAlign: "justify", marginBottom: "15px"}}>
            ThoughtFlows is committed to helping students build successful careers in the healthcare industry through industry focused training and career development support. With 35,000+ students trained and 25,000+ career placements and transitions supported, the academy has established itself as a trusted name in Medical Coding education.
          </p>
          <p style={{fontSize: "16px", lineHeight: "28px", textAlign: "justify"}}>
            Students benefit from experienced trainers, practical coding sessions, CPC certification guidance, interview preparation, flexible learning options, and placement focused training. Many students looking for Medical Coding Training in Kerala choose ThoughtFlows because of its structured learning approach, career focused support, and commitment to student success. Our training methodology helps learners develop the knowledge and confidence required to pursue opportunities in the healthcare industry.
          </p>
        </div>
      </Col>
      <Col lg={1}></Col>
    </Row>
  );
}

export default TrivandrumAbout;
