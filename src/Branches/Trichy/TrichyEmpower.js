import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TrichyEmpower() {
  return (
    <Container fluid className="py-5 my-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-center">
        <Col lg={10} md={12}>
          <div className="text-center">
            <h2 className="mb-4" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontWeight: '700', 
              color: '#097D8A' 
            }}>
              Empowering Your Career
            </h2>
            <div className="bg-white rounded shadow-lg p-5">
              <p style={{ 
                fontSize: 'clamp(16px, 2.5vw, 18px)', 
                lineHeight: '1.8',
                color: '#333',
                textAlign: 'justify'
              }}>
                At Thoughtflows Medical Coding Academy, we are not just educators; we are mentors dedicated to empowering our students to unlock their potential and pursue successful careers in medical coding. Our holistic approach to education aims to nurture both technical skills and professional development.
              </p>
              <p style={{ 
                fontSize: 'clamp(16px, 2.5vw, 18px)', 
                lineHeight: '1.8',
                color: '#333',
                textAlign: 'justify',
                marginTop: '1.5rem'
              }}>
                We foster a supportive and inclusive learning environment that encourages students to excel and grow. We believe in instilling confidence in our students, motivating them to overcome challenges and achieve their goals.
              </p>
              <p style={{ 
                fontSize: 'clamp(16px, 2.5vw, 18px)', 
                lineHeight: '1.8',
                color: '#333',
                textAlign: 'justify',
                marginTop: '1.5rem'
              }}>
                Our students graduate with not only technical competence but also essential soft skills, such as communication, problem-solving, and critical thinking. These qualities enable them to become valuable assets to healthcare organizations and contribute effectively to the healthcare industry.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TrichyEmpower;
