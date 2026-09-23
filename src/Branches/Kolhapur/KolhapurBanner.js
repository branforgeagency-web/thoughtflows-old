import React from "react";
import bannerImage from "../../images/homebannerbg.png";
import kolhapur from "../../images/Branches/kolhapur_frame.png";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const KolhapurBanner = () => {
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
          minHeight: "75vh",
          height: "auto",
          alignItems: "flex-end",
          padding: "40px 0 0 0",
          marginTop: "0px",
        }}
      >
        <Col lg={1} xs={0}></Col>
        <Col
          lg={4}
          md={5}
          xs={12}
          className="cbe1-banner-lft px-4 mb-4 mb-lg-0 d-flex flex-column justify-content-center align-items-lg-start align-items-center"
          style={{ paddingTop: "20px", paddingBottom: "60px" }}
        >
          <Col className="cbe1-banner-heading">
            <h1
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                lineHeight: "1.2",
              }}
            >
              Medical Coding <br /> Institute in{" "}
              <span style={{ color: "#097D8A" }}>Kolhapur</span>
            </h1>
          </Col>
          <Col>
            <p
              style={{
                fontSize: "clamp(14px, 3vw, 16px)",
                marginTop: "20px",
                maxWidth: "600px",
              }}
            >
              Step into Western Maharashtra’s top medical coding academy in
              Kolhapur. Get certified training from AAPC experts, intensive exam
              prep, and dedicated 100% placement support in healthcare MNCs.
            </p>
          </Col>
          <Col className="cbe1-btn">
            <Link to="/contact" className="button-animation d">
              Register Now
            </Link>
          </Col>
        </Col>

        <Col
          lg={6}
          md={7}
          xs={12}
          className="cbe1-banner-rht"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            alignSelf: "flex-end",
            paddingTop: "0",
            paddingBottom: "0",
            marginBottom: "0",
          }}
        >
          <img
            src={kolhapur}
            alt="ThoughtFlows Kolhapur Leadership"
            className="bannergif banner-appear"
            style={{
              maxHeight: "580px",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              display: "block",
              marginBottom: "0",
            }}
          />
        </Col>
        <Col lg={1} xs={0}></Col>
      </Row>
      <Container
        fluid
        className="cbe1-counter px-3"
        style={{
          background: "#fff",
          borderRadius: "clamp(15px, 3vw, 80px)",
          boxShadow: "0 3px 15px 0 rgba(0, 0, 0, 0.13)",
          padding: "clamp(15px, 3vw, 30px)",
          zIndex: 3,
          position: "relative",
          maxWidth: "95%",
          margin: "clamp(-45px, -5vw, -65px) auto 0",
        }}
      >
        <Row className="align-items-center">
          <Col lg={12}>
            <Row className="gy-4 gx-3">
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div
                  className="counter-item"
                  style={{ padding: "clamp(8px, 2vw, 15px)" }}
                >
                  <p
                    style={{
                      color: "#FFC100",
                      fontWeight: "700",
                      fontSize: "clamp(18px, 3.5vw, 30px)",
                      margin: 0,
                      lineHeight: "1.2",
                    }}
                  >
                    <CountUp start={0} end={35000} separator="," />+
                  </p>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "clamp(12px, 2vw, 16px)",
                      marginTop: "5px",
                    }}
                  >
                    Students Trained
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div
                  className="counter-item"
                  style={{ padding: "clamp(8px, 2vw, 15px)" }}
                >
                  <p
                    style={{
                      color: "#00B4D8",
                      fontWeight: "700",
                      fontSize: "clamp(18px, 3.5vw, 30px)",
                      margin: 0,
                      lineHeight: "1.2",
                    }}
                  >
                    <CountUp start={0} end={100} />%
                  </p>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "clamp(12px, 2vw, 16px)",
                      marginTop: "5px",
                    }}
                  >
                    CPC Pass Track
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div
                  className="counter-item"
                  style={{ padding: "clamp(8px, 2vw, 15px)" }}
                >
                  <p
                    style={{
                      color: "#FF5722",
                      fontWeight: "700",
                      fontSize: "clamp(18px, 3.5vw, 30px)",
                      margin: 0,
                      lineHeight: "1.2",
                    }}
                  >
                    <CountUp start={0} end={98} />%
                  </p>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "clamp(12px, 2vw, 16px)",
                      marginTop: "5px",
                    }}
                  >
                    Placement Rate
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3} className="text-center">
                <div
                  className="counter-item"
                  style={{ padding: "clamp(8px, 2vw, 15px)" }}
                >
                  <p
                    style={{
                      color: "#4CAF50",
                      fontWeight: "700",
                      fontSize: "clamp(18px, 3.5vw, 30px)",
                      margin: 0,
                      lineHeight: "1.2",
                    }}
                  >
                    <CountUp start={0} end={150} />+
                  </p>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "clamp(12px, 2vw, 16px)",
                      marginTop: "5px",
                    }}
                  >
                    Hiring Partners
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KolhapurBanner;
