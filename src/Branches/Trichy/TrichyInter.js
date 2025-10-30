import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TrichyInter() {
  return (
    <>
      <Container fluid className="py-5 my-5">
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="text-center">
              <h2 className="mb-4" style={{ 
                fontSize: 'clamp(24px, 4vw, 36px)', 
                fontWeight: '700', 
                color: '#097D8A' 
              }}>
                Why Thoughtflows is Your Best Choice
              </h2>
              <p className="lead" style={{ 
                fontSize: 'clamp(16px, 2.5vw, 18px)', 
                lineHeight: '1.6',
                color: '#333',
                maxWidth: '900px',
                margin: '0 auto'
              }}>
                Thoughtflows is the perfect place to kickstart or advance your medical coding career. Our academy provides a high-quality education through professional professors, a well-rounded curriculum, and modern facilities. We are dedicated to your success and provide job placement aid, reasonable pricing, and flexible learning alternatives. Our hands-on training will provide you with the industry skills you need, and our recognized certifications will help you advance in your profession. Choose Thoughtflows for a revolutionary educational experience that will enable you to excel in the dynamic world of medical coding.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TrichyInter;
