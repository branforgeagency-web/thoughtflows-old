import React from 'react';
// import whychooseImg from '../../images/Branches/school-4-thumb-1.png.webp'
import whychooseImg from '../../images/Branches/tf1.png'
import { Col, Row } from 'react-bootstrap';

const TirupathiContent = () => {
    return (
        <Row className="tirupathi-content-container">
            <Col lg={1}></Col>
            <Col lg={5} className="tirupathi-text-content">
                <h2 className="tirupathi-title">Why Choose Thoughtflows Academy in Tirupati?</h2>
                <div className="tirupathi-list">
                    <p>Choosing Thoughtflows Academy in Tirupati for your medical coding training is a decision that can shape your future career in the healthcare industry. Thoughtflows stands out as the premier training institute due to its unwavering commitment to excellence and empowering students with the skills they need to succeed in the dynamic world of medical coding. Our comprehensive curriculum is designed to provide students with a thorough understanding of medical coding principles and practices, ensuring they are well-prepared for real-world coding challenges. Moreover, our expert faculty, comprising experienced educators and industry professionals, provides personalized guidance and mentorship, empowering students to become confident and proficient coding professionals.</p>
                </div>
            </Col>
            <Col lg={1}></Col>
            <Col lg={4} className="tirupathi-image-content">
                <img src={whychooseImg} alt="Student" className="tirupathi-image" />
            </Col>
            <Col lg={1}></Col>
        </Row>
    );
}

export default TirupathiContent;
