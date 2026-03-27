import React from "react";
import bannerImage from "../../images/homebannerbg.png";
// import cbe1banner from '../../images/Branches/cbe1bannerRight.png'
import { Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import bannerVid from "../../images/Branches/online/Comp.mp4"
import dilsukhnagar from '../../images/Branches/Pic 7.webp'

const HyderabadBanner = () => {
  return (
    <>
      <Row
        className="cbe1-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          backgroundRepeat: "no-repeat",
          minHeight: "95vh",
          height: "auto",
          alignItems: "center",
          padding: "80px 0 40px 0",
          marginTop: "20px",
          margin: 0
        }}
      >
        <Col lg={1} xs={0}></Col>
        <Col lg={3} md={4} xs={12} className='cbe1-banner-lft px-4 pt-5 mb-4 mb-lg-0 d-flex flex-column justify-content-lg-start justify-content-center align-items-lg-start align-items-center'>
          <Col className='cbe1-banner-heading'>
            <h1 style={{
              fontSize: 'clamp(28px, 5vw, 40px)',
              lineHeight: '1.2'
            }}>Medical Coding <br /> Training Institute in <span style={{ color: '#097D8A' }}>Dilsukhnagar</span></h1>
          </Col>
          <Col>
            <p style={{
              fontSize: 'clamp(14px, 3vw, 16px)',
              marginTop: '20px',
              maxWidth: '600px'
            }}>Experience world-class education at our leading training institute in Dilsukhnagar, specializing in medical coding.</p>
          </Col>
          <Col className='cbe1-btn '>
            <Link to="/contact" className=" button-animation d">
              Register Now
            </Link>
          </Col>
        </Col>

        <Col lg={7} md={8} xs={12} className='cbe1-banner-rht' style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '0'
        }}>
          <img
            src={dilsukhnagar}
            alt='bannergif'
            className='bannergif banner-appear'
            style={{
              maxWidth: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              marginBottom: '-40px'
            }}
          />
        </Col>
        <Col lg={1} xs={0}></Col>
      </Row>
      <Container fluid className='cbe1-counter px-3'
        style={{
          background: '#fff',
          borderRadius: 'clamp(15px, 3vw, 80px)',
          boxShadow: '0 3px 15px 0 rgba(0, 0, 0, 0.13)',
          marginTop: '-40px',
          padding: 'clamp(15px, 3vw, 30px)',
          zIndex: 2,
          position: 'relative',
          maxWidth: '95%',
          margin: 'clamp(-30px, -4vw, -40px) auto 0'
        }}>
        <Row className="align-items-center">
          <Col lg={12}>
            <Row className="gy-4 gx-3">
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{
                    color: '#FFC100',
                    fontWeight: '700',
                    fontSize: 'clamp(18px, 3.5vw, 30px)',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={35000} separator="," />+
                  </p>
                  <p style={{
                    fontWeight: '500',
                    fontSize: 'clamp(12px, 2.5vw, 18px)',
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Training</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{
                    color: '#F15BB5',
                    fontWeight: '700',
                    fontSize: 'clamp(18px, 3.5vw, 30px)',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={25000} separator="," />+
                  </p>
                  <p style={{
                    fontWeight: '500',
                    fontSize: 'clamp(12px, 2.5vw, 18px)',
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Placement</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{
                    color: '#00BBFA',
                    fontWeight: '700',
                    fontSize: 'clamp(18px, 3.5vw, 30px)',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={49} separator="," />+
                  </p>
                  <p style={{
                    fontWeight: '500',
                    fontSize: 'clamp(12px, 2.5vw, 18px)',
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Courses</p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div className="counter-item" style={{ padding: 'clamp(8px, 2vw, 15px)' }}>
                  <p style={{
                    color: '#01F6D5',
                    fontWeight: '700',
                    fontSize: 'clamp(18px, 3.5vw, 30px)',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    <CountUp start={0} end={12} separator="," />+
                  </p>
                  <p style={{
                    fontWeight: '500',
                    fontSize: 'clamp(12px, 2.5vw, 18px)',
                    marginTop: '5px',
                    lineHeight: '1.2'
                  }}>Branches</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HyderabadBanner;
