import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBookMedical, FaCogs, FaRegClock } from 'react-icons/fa';

const TrichyDiscover = () => {
    return (
        <Container fluid className="py-5 my-5" style={{ backgroundColor: '#f8f9fa' }}>
            <Row className="justify-content-center">
                <Col lg={10} md={12}>
                    <h2 className="text-center mb-5" style={{ 
                        fontSize: 'clamp(28px, 4vw, 42px)', 
                        fontWeight: '700', 
                        color: '#097D8A' 
                    }}>
                        Discover Our Comprehensive Medical Coding Program
                    </h2>
                    <Row className="g-4">
                        {/* First Card */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="h-100 p-4 border-bottom border-4 border-primary rounded shadow-sm" 
                                 style={{ 
                                     borderColor: '#097D8A !important',
                                     backgroundColor: 'white',
                                     borderRadius: '8px'
                                 }}>
                                <div className="text-center">
                                    <FaBookMedical className="mb-4" style={{ 
                                        color: '#097D8A', 
                                        fontSize: '3rem' 
                                    }} />
                                    <p className="mb-0" style={{ 
                                        fontSize: '16px', 
                                        lineHeight: '1.6',
                                        color: '#333'
                                    }}>
                                        At Thoughtflows Medical Coding Academy, we offer a well-rounded medical coding training program designed to prepare students for success in the healthcare industry. Our curriculum covers essential topics, including medical terminology, anatomy, and physiology, providing a robust foundation for understanding complex healthcare terminologies and procedures.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        {/* Second Card */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="h-100 p-4 border-bottom border-4 border-primary rounded shadow-sm" 
                                 style={{ 
                                     borderColor: '#097D8A !important',
                                     backgroundColor: 'white',
                                     borderRadius: '8px'
                                 }}>
                                <div className="text-center">
                                    <FaCogs className="mb-4" style={{ 
                                        color: '#097D8A', 
                                        fontSize: '3rem' 
                                    }} />
                                    <p className="mb-0" style={{ 
                                        fontSize: '16px', 
                                        lineHeight: '1.6',
                                        color: '#333'
                                    }}>
                                        We focus on mastering medical coding systems like ICD-10 and CPT, enabling students to translate medical records into standardized codes accurately. Through practical coding exercises, case studies, and coding simulations, students gain hands-on experience to handle real-world coding scenarios confidently.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        {/* Third Card */}
                        <Col lg={4} md={12} className="mb-4">
                            <div className="h-100 p-4 border-bottom border-4 border-primary rounded shadow-sm" 
                                 style={{ 
                                     borderColor: '#097D8A !important',
                                     backgroundColor: 'white',
                                     borderRadius: '8px'
                                 }}>
                                <div className="text-center">
                                    <FaRegClock className="mb-4" style={{ 
                                        color: '#097D8A', 
                                        fontSize: '3rem' 
                                    }} />
                                    <p className="mb-0" style={{ 
                                        fontSize: '16px', 
                                        lineHeight: '1.6',
                                        color: '#333'
                                    }}>
                                        Our curriculum is regularly updated to reflect the latest industry standards, ensuring that our students stay ahead in the ever-evolving world of medical coding education.
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

export default TrichyDiscover;
