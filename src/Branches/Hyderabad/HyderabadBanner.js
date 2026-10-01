import React from "react";
import bannerImage from "../../images/homebannerbg.png";
import cbe1banner from "../../images/Branches/Pic 2.webp";
import banner2 from "../../images/Branches/lapgirl.png";
import { Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ameerpet from '../../images/Branches/Pic 6.webp'

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
          minHeight: "80vh",
          height: "auto",
          alignItems: "center",
          padding: "60px 0 40px 0",
          margin: 0
        }}
      >
        <Col lg={1} xl={1} xs={0}></Col>
        <Col lg={5} xl={5} md={6} xs={12} className='cbe1-banner-lft px-3 px-md-4 mb-4 mb-lg-0 d-flex flex-column justify-content-center align-items-lg-start align-items-center text-lg-start text-center'>
          <div className='cbe1-banner-heading w-100'>
            <h1 style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              fontWeight: '700',
              lineHeight: '1.25',
              color: '#0f172a'
            }}>
              Medical Coding Institute in <span style={{ color: '#097D8A' }}>Ameerpet</span>
              <span style={{ display: 'block', fontSize: 'clamp(18px, 2.4vw, 24px)', fontWeight: '600', color: '#334155', marginTop: '10px' }}>
                From Beginner to Certified
              </span>
            </h1>
          </div>
          <div>
            <p style={{
              fontSize: 'clamp(14px, 2vw, 16px)',
              marginTop: '16px',
              maxWidth: '560px',
              lineHeight: '1.6',
              color: '#475569'
            }}>
              Expert CPC faculty, real exam prep, and placement assistance — everything you need to launch your medical coding career in Ameerpet.
            </p>
          </div>
          <div className='cbe1-btn mt-3'>
            <Link to="/contact" className="button-animation d">
              Book a Free Demo Class
            </Link>
          </div>
        </Col>

        <Col lg={5} xl={5} md={6} xs={12} className='cbe1-banner-rht' style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}>
          <img
            src={ameerpet}
            alt='ThoughtFlows Medical Coding Institute in Ameerpet'
            className='bannergif banner-appear'
            style={{
              maxWidth: '100%',
              width: 'auto',
              maxHeight: '480px',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </Col>
        <Col lg={1} xl={1} xs={0}></Col>
      </Row>
      <Container className='cbe1-counter px-3'
        style={{
          background: '#fff',
          borderRadius: 'clamp(16px, 3vw, 40px)',
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
          marginTop: '-30px',
          padding: 'clamp(15px, 2.5vw, 25px) clamp(15px, 3vw, 30px)',
          zIndex: 10,
          position: 'relative',
          maxWidth: '1140px',
          margin: '-30px auto 0 auto'
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
                    <CountUp start={0} end={30000} separator="," />+
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
                    <CountUp start={0} end={14} separator="," />+
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
