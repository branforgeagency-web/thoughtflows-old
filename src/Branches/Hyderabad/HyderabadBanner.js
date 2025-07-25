import React from "react";
import bannerImage from "../../images/homebannerbg.png";
import cbe1banner from "../../images/Branches/cbe1banner (2).png";
import banner2 from "../../images/Branches/lapgirl.png";
import { Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ameerpet from '../../images/Branches/8.png'

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
          padding: "40px 0",
        }}
      >
        <Col lg={1} xs={0}></Col>
        <Col lg={5} xs={12} className="cbe1-banner-lft px-4">
          <Col className="cbe1-banner-heading">
            <h2 style={{ 
              fontSize: "clamp(24px, 5vw, 40px)",
              lineHeight: "1.2",
              marginBottom: "15px"
            }}>
              Medical Coding Training
            </h2>
            <h2 style={{ 
              fontSize: "clamp(24px, 5vw, 40px)",
              lineHeight: "1.2"
            }}>
              Institute in <span style={{ color: "#097D8A" }}>Ameerpet</span>
            </h2>
          </Col>
          <Col>
            <p style={{ 
              fontSize: "clamp(14px, 3vw, 16px)", 
              marginTop: "20px",
              marginBottom: "25px"
            }}>
              Experience world-class education at our leading training institute
              in Ameerpet, specializing in medical coding.
            </p>
          </Col>
          <Col className="cbe1-btn mb-4 mb-lg-0 m-20" >
            <Link to="/contact" className="button-animation">
              Register Now
            </Link>
          </Col>
        </Col>

        <Col lg={5} xs={12} className="cbe1-banner-rht pt-4 pt-lg-28 px-4">
          <img 
            src={ameerpet} 
            alt='ameerpet' 
            className='cbe1About' 
            style={{
              width: '100%', 
              height: 'auto',
              maxWidth: '600px',
              margin: '0 auto',
              display: 'block'
            }} 
          />
        </Col>
        <Col lg={1} xs={0}></Col>
      </Row>
      <Container
        className="cbe1-counter"
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.13)",
          margin: "-40px auto 0",
          padding: "20px",
          zIndex: 2,
          position: "relative",
          width: "calc(100% - 30px)",
          maxWidth: "1200px"
        }}
      >
        <Row className="align-items-center">
          <Col lg={12}>
            <Row className="gy-4">
              <Col xs={6} md={3} className="text-center">
                <p
                  style={{
                    color: "#FFC100",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={30000} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(16px, 3vw, 20px)", 
                    marginTop: 0 
                  }}
                >
                  Training
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <p
                  style={{
                    color: "#F15BB5",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={18000} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(16px, 3vw, 20px)", 
                    marginTop: 0 
                  }}
                >
                  Placement
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <p
                  style={{
                    color: "#00BBFA",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={20} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(16px, 3vw, 20px)", 
                    marginTop: 0 
                  }}
                >
                  Courses
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <p
                  style={{
                    color: "#01F6D5",
                    fontWeight: "700",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    margin: 0,
                  }}
                >
                  <CountUp start={0} end={11} separator="," />+
                </p>
                <p
                  style={{ 
                    fontWeight: "500", 
                    fontSize: "clamp(16px, 3vw, 20px)", 
                    marginTop: 0 
                  }}
                >
                  Branches
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HyderabadBanner;
