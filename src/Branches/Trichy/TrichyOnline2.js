import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import branch from "../../images/Branches/image7 copy.png";

function TrichyOnline2() {
  return (
    <Container fluid className="py-5 my-5">
      <Row className="justify-content-center">
        <Col lg={10} md={12}>
          {/* First Section */}
          <div className="mb-5">
            <div className="bg-white rounded shadow-lg p-4">
              <Row className="align-items-center g-4">
                <Col lg={6} md={12}>
                  <div className="p-4 rounded" style={{ 
                    backgroundColor: '#097D8A',
                    color: 'white'
                  }}>
                    <h2 className="mb-3" style={{ 
                      fontSize: 'clamp(20px, 3vw, 28px)', 
                      fontWeight: '700' 
                    }}>
                      Your Future Secured with Placement Support
                    </h2>
                    <p className="mb-4" style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}>
                      At Thoughtflows Medical Coding Academy, we take immense pride in the success of our graduates, and we are committed to ensuring that they embark on fulfilling and rewarding careers in the healthcare sector.
                    </p>
                    <div className="text-center text-lg-start">
                      <img
                        src={branch}
                        alt="Branch"
                        style={{ width: '80px', height: 'auto' }}
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="p-4">
                    <h3 className="mb-3" style={{ 
                      fontSize: 'clamp(18px, 2.5vw, 22px)', 
                      fontWeight: '600',
                      color: '#097D8A'
                    }}>
                      Securing a rewarding job after completing training is a top priority for students at Thoughtflows Medical Coding Academy.
                    </h3>
                    <p style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#333'
                    }}>
                      To support their career aspirations, we offer comprehensive job placement assistance, extending beyond the training period. Our academy maintains strong connections with leading healthcare providers and coding organizations, enhancing our graduates' prospects in the competitive job market. We organize job fairs, networking events, and resume workshops, connecting our students with potential employers and industry professionals.
                    </p>
                    <p style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#333',
                      marginTop: '1rem'
                    }}>
                      Our job placement support includes career counseling, interview preparation, and job search assistance. We equip our students with the necessary tools and guidance to showcase their skills and knowledge effectively to potential employers.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* Second Section */}
          <div className="mb-5">
            <div className="bg-white rounded shadow-lg p-4">
              <Row className="align-items-center g-4">
                <Col lg={6} md={12}>
                  <div className="p-4 rounded" style={{ 
                    backgroundColor: '#097D8A',
                    color: 'white'
                  }}>
                    <h2 className="mb-3" style={{ 
                      fontSize: 'clamp(20px, 3vw, 28px)', 
                      fontWeight: '700' 
                    }}>
                      Affordable and Flexible Education Ensured
                    </h2>
                    <p className="mb-4" style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}>
                      We are committed to ensuring that financial constraints and busy schedules do not hinder your pursuit of a successful career in medical coding. Our academy strives to provide an inclusive and supportive learning environment for all students.
                    </p>
                    <div className="text-center text-lg-start">
                      <img
                        src={branch}
                        alt="Branch"
                        style={{ width: '80px', height: 'auto' }}
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="p-4">
                    <h3 className="mb-3" style={{ 
                      fontSize: 'clamp(18px, 2.5vw, 22px)', 
                      fontWeight: '600',
                      color: '#097D8A'
                    }}>
                      We believe that quality education should be accessible to all aspiring medical coders.
                    </h3>
                    <p style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#333'
                    }}>
                      Thoughtflows Medical Coding Academy offers affordable course fees and transparent fee structures, allowing students to plan their education without any hidden costs.
                    </p>
                    <p style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#333',
                      marginTop: '1rem'
                    }}>
                      Understanding the diverse needs of our students, we provide flexible batch timings to accommodate different schedules. Whether you are a working professional or a student with other commitments, we have options that fit your lifestyle.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TrichyOnline2;
