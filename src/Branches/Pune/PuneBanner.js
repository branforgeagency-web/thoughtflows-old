import React from "react";
import bannerImage from "../../images/homebannerbg.png";
import pune from "../../images/Branches/pune_frame.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PuneBanner = () => {
  return (
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
          <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", lineHeight: "1.2" }}>
            Medical Coding Course in{" "}
            <span style={{ color: "#097D8A" }}>Pune</span>{" "}
            <span style={{ display: "block", fontSize: "0.6em", marginTop: "10px" }}>
              with CPC Certification Training
            </span>
          </h1>
        </Col>
        <Col>
          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", marginTop: "20px", maxWidth: "600px" }}>
            Build your medical coding career with our medical coding classes in
            Pune. Learn, grow, and step into rewarding healthcare opportunities.
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
        style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", alignSelf: "flex-end", padding: 0 }}
      >
        <img
          src={pune}
          alt="Medical coding course in Pune at Thoughtflows"
          className="bannergif banner-appear"
          style={{ maxHeight: "580px", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain", display: "block" }}
        />
      </Col>
      <Col lg={1} xs={0}></Col>
    </Row>
  );
};

export default PuneBanner;
