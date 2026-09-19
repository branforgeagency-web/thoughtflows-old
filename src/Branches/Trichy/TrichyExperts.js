import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';

const TrichyExperts = () => {
    return (
        <Container fluid className="py-5 my-5" style={{ backgroundColor: '#e8f4f8' }}>
            <Row className="justify-content-center">
                <Col lg={10} md={12}>
                    <Row className="align-items-center g-4">
                        {/* Left Column: Heading */}
                        <Col lg={6} md={12}>
                            <h2 className="text-center text-lg-start" style={{ 
                                fontSize: 'clamp(28px, 4vw, 42px)', 
                                fontWeight: '700', 
                                color: '#097D8A',
                                lineHeight: '1.2'
                            }}>
                                Meet the Experts Behind Your Success
                            </h2>
                        </Col>

                        {/* Right Column: Content */}
                        <Col lg={6} md={12}>
                            <div className="d-flex flex-column gap-4">
                                <div className="d-flex align-items-start gap-3">
                                    <FaCircle style={{ 
                                        color: '#097D8A', 
                                        fontSize: '1.2rem',
                                        marginTop: '0.3rem',
                                        flexShrink: 0
                                    }} />
                                    <p style={{ 
                                        fontSize: '16px', 
                                        lineHeight: '1.6',
                                        color: '#333',
                                        margin: 0
                                    }}>
                                        At Thoughtflows Medical Coding Training Institute, our experienced trainers are dedicated mentors who bring real-world expertise to the classroom. Our faculty consists of industry professionals with deep insights into medical coding jobs and the unique demands of the profession.
                                    </p>
                                </div>

                                <div className="d-flex align-items-start gap-3">
                                    <FaCircle style={{ 
                                        color: '#097D8A', 
                                        fontSize: '1.2rem',
                                        marginTop: '0.3rem',
                                        flexShrink: 0
                                    }} />
                                    <p style={{ 
                                        fontSize: '16px', 
                                        lineHeight: '1.6',
                                        color: '#333',
                                        margin: 0
                                    }}>
                                        They provide interactive sessions, personalized mentoring, and real-world examples to bridge the gap between theory and practice. Our trainers ensure every student receives individual attention and the support needed to excel in medical coding courses.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default TrichyExperts;
