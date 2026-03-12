import React from 'react';
import CountUp from 'react-countup';
import counterBg from '../images/Rectangle16.png';
import counter1img from '../images/Vector.png';
import counter2img from '../images/counter2.png';
import counter3img from '../images/counter3.png';
import counter4img from '../images/counter4.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
const Counters = () => {
    const { ref: trainingRef, inView: trainingInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      const { ref: placementRef, inView: placementInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      const { ref: coursesRef, inView: coursesInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      const { ref: branchesRef, inView: branchesInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
    return (
        <div
            className="counter-section text-center text-lg-start"
            style={{
                backgroundImage: `url(${counterBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                padding: '4rem 0',
            }}
        >
            <Container className='py-3'>
                <Row className="align-items-center">
                    <Col lg={5} className="mb-4">
                        <h5 className=''>THOUGHTFLOWS ACADEMY</h5>
                        <h2>Your Path to<br /> Success in<br /> Medical Coding</h2>
                    </Col>

                    <Col lg={7}>
                        <Row className="gy-4">
                        <Col xs={6} md={6} className="text-center" ref={trainingRef}>
                {trainingInView && (
                  <>
                    <p style={{ color: '#FFC100', fontWeight: '700', fontSize: '50px', margin: 0 }}>
                      <CountUp start={0} end={35000} separator="," duration={3} />+
                    </p>
                    <img src={counter1img} alt="Training Icon" className="mx-auto mb-3" />
                    <p style={{ fontWeight: '700', fontSize: '20px', marginTop: 0 }}>Training</p>
                  </>
                )}
              </Col>

              <Col xs={6} md={6} className="text-center" ref={placementRef}>
                {placementInView && (
                  <>
                    <p style={{ color: '#F15BB5', fontWeight: '700', fontSize: '50px', margin: 0 }}>
                      <CountUp start={0} end={35000} separator="," duration={3} />+
                    </p>
                    <img src={counter2img} alt="Placement Icon" className="mx-auto mb-3" />
                    <p style={{ fontWeight: '700', fontSize: '20px', marginTop: 0 }}>Placement</p>
                  </>
                )}
              </Col>

              <Col xs={6} md={6} className="text-center" ref={coursesRef}>
                {coursesInView && (
                  <>
                    <p style={{ color: '#00BBFA', fontWeight: '700', fontSize: '50px', margin: 0 }}>
                      <CountUp start={0} end={49} separator="," duration={3} />+
                    </p>
                    <img src={counter3img} alt="Courses Icon" className="mx-auto mb-3" />
                    <p style={{ fontWeight: '700', fontSize: '20px', marginTop: 0 }}>Courses</p>
                  </>
                )}
              </Col>

              <Col xs={6} md={6} className="text-center" ref={branchesRef}>
                {branchesInView && (
                  <>
                    <p style={{ color: '#01F6D5', fontWeight: '700', fontSize: '50px', margin: 0 }}>
                      <CountUp start={0} end={12} separator="," duration={3} />+
                    </p>
                    <img src={counter4img} alt="Branch Icon" className="mx-auto mb-3" />
                    <p style={{ fontWeight: '700', fontSize: '20px', marginTop: 0 }}>Branches</p>
                  </>
                )}
              </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Counters;