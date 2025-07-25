import React from "react";
import bannerImage from "../../images/homebannerbg.png";
import cbe1banner from "../../images/Branches/cbe1banner (2).png";
import banner2 from "../../images/Branches/lapgirl.png";
// import cbe1banner from '../../images/Branches/cbe1bannerRight.png'
import { Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import bannerVid from "../../images/Branches/online/Comp.mp4"
import dilsukhnagar from '../../images/Branches/7.png'

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
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <Col lg={1}></Col>
        <Col lg={5} className="cbe1-banner-lft ">
          <Col className="cbe1-banner-heading  lg:pt-20 ">
            <h2 className="banner-title" style={{ 
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: "1.2",
              marginBottom: "0.5rem"
            }}>
              Medical Coding Training
            </h2>
            <h2 className="banner-subtitle" style={{ 
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: "1.2"
            }}>
              Institute in <span style={{ color: "#097D8A" }}>Dilsukhnagar</span>
            </h2>
          </Col>
          <Col>
            <p style={{ 
              fontSize: "clamp(14px, 3vw, 16px)", 
              marginTop: "20px",
              maxWidth: "600px" 
            }}>
              Experience world-class education at our leading training institute
              in Dilsukhnagar, specializing in medical coding.
            </p>
          </Col>
          <Col className="cbe1-btn m-20">
            <Link to="/contact" className="button-animation">
              Register Now
            </Link>
          </Col>
        </Col>

        <Col lg={5} className="cbe1-banner-rht" style={{
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "center"
        }}>
          <img 
            src={dilsukhnagar} 
            alt='cbe1About' 
            className='cbe1About'
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Container
        className="cbe1-counter"
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.13)",
          margin: "-80px auto 0",
          padding: "1.5rem",
          zIndex: 2,
          position: "relative",
          width: "90%",
          maxWidth: "1200px"
        }}
      >
        <Row className="align-items-center">
          <Col lg={12}>
            <Row className="gy-4">
              <Col xs={6} md={3} className="text-center counter-item" style={{ marginBottom: "1rem" }}>
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
                    marginTop: "0.5rem" 
                  }}
                >
                  Training
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center counter-item" style={{ marginBottom: "1rem" }}>
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
                    marginTop: "0.5rem" 
                  }}
                >
                  Placement
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center counter-item" style={{ marginBottom: "1rem" }}>
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
                    marginTop: "0.5rem" 
                  }}
                >
                  Courses
                </p>
              </Col>
              <Col xs={6} md={3} className="text-center counter-item" style={{ marginBottom: "1rem" }}>
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
                    marginTop: "0.5rem" 
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
