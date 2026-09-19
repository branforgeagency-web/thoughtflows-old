import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AffordableLearning = () => {
    const features = [
        {
            title: "Transparent Medical Coding Course Fees",
            description: "Our course fees are clear and transparent, ensuring there are no hidden costs, giving you complete clarity.",
            icon: "💰"
        },
        {
            title: "Flexible Batch Timings",
            description: "We offer flexible batch timings that cater to both working professionals and students, ensuring convenience for all.",
            icon: "⏰"
        },
        {
            title: "Medical Coding Online Courses",
            description: "Our online courses make learning convenient and accessible for remote learners across the globe.",
            icon: "💻"
        }
    ];

    return (
        <Container fluid className="py-5 my-5" style={{ 
            background: 'linear-gradient(135deg, #097D8A 0%, #21A7D0 100%)',
            color: 'white'
        }}>
            <Row className="justify-content-center">
                <Col lg={10} md={12}>
                    <div className="text-center mb-5">
                        <h2 style={{ 
                            fontSize: 'clamp(28px, 4vw, 42px)', 
                            fontWeight: '700',
                            marginBottom: '1.5rem'
                        }}>
                            Affordable Medical Coding Fees and Flexible Learning
                        </h2>
                        <p style={{ 
                            fontSize: 'clamp(16px, 2.5vw, 18px)', 
                            lineHeight: '1.6',
                            opacity: '0.9'
                        }}>
                            We believe quality medical coding training should be accessible to all. At Thoughtflows Medical Coding Coaching Centre, we offer:
                        </p>
                    </div>

                    <Row className="g-4 mb-5">
                        {features.map((item, index) => (
                            <Col lg={4} md={6} key={index}>
                                <div className="d-flex align-items-start gap-3 p-4" style={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <div style={{ 
                                        fontSize: '2rem',
                                        flexShrink: 0
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ 
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ 
                                            fontSize: '14px',
                                            lineHeight: '1.5',
                                            opacity: '0.9',
                                            margin: 0
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center">
                        <p style={{ 
                            fontSize: '16px',
                            lineHeight: '1.6',
                            opacity: '0.9',
                            margin: 0
                        }}>
                            With a focus on inclusivity and support, we aim to make medical coding education available to everyone, regardless of their schedule or financial constraints.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AffordableLearning;
