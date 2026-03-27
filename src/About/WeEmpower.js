import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import image1 from "../images/AboutImg/1 (1).png";
import img2 from "../images/AboutImg/2 (1).png";
import img3 from "../images/AboutImg/3 (1).png";
import img4 from "../images/AboutImg/4 (1).png";
import img5 from "../images/AboutImg/contact-dec-01.png";
// import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function WeEmpower() {
  return (
    <>
      <Container
        fluid
        id="empower"
        className="emp  "
        style={{
          height: "auto",
          width: "90%",
          backgroundColor: "#15aebb",
          borderTopRightRadius: "500px",
          borderBottomRightRadius: "500px",
          marginLeft: '0px',
          marginTop: '30px',
          padding: '20px'
        }}
      >
        <Row className="py-12">
          <Col lg={3} xs={12} className="mt-3" style={{ textAlign: 'left' }}>
            <img src={image1} style={{ width: "100px" }} alt="image1" />
            <h3 style={{ marginTop: "35px", color: "white", fontSize: '24px' }}>
              Quality in Training
            </h3>
          </Col>
          <Col lg={3} xs={12} className="mt-3" style={{ textAlign: 'left' }}>
            <img src={img2} style={{ width: "100px" }} alt="img2" />
            <h3 style={{ marginTop: "35px", color: "white", fontSize: '24px' }}>
              Innovation in Methodologies
            </h3>
          </Col>
          <Col lg={3} xs={12} className="mt-3" style={{ textAlign: 'left' }}>
            <img src={img3} style={{ width: "100px" }} alt="img3" />
            <h3 style={{ marginTop: "35px", color: "white", fontSize: '24px' }}>
              Building Trust in Our Trainees
            </h3>
          </Col>
          <Col lg={3} xs={12} className="mt-3" style={{ textAlign: 'left' }}>
            <img src={img4} style={{ width: "100px" }} alt="img4" />
            <h3 style={{ marginTop: "35px", color: "white", fontSize: '24px' }}>
              Giving 100% Result
            </h3>
          </Col>
        </Row>
      </Container>

      <Row className="abt-para ">
        <Col lg={1}></Col>
        <Col lg={10}>
          <h2 style={{ fontSize: "40px", margin: "0px 0px 25px 0px", fontWeight: "bold", paddingTop: "30px" }}>
            Empowering Novice and Seasoned Coders
          </h2>

          <p
            style={{
              fontSize: "16px",
              margin: "30px 0px 0px 0px",
              wordSpacing: "6px",
              textAlign: "left",
              lineHeight: "34px",
            }}
          >
            <span className="highlight">Thought  Flows</span> Medical Coding Academy is dedicated to empowering
            individuals at all stages of their coding careers. Whether you are
            a novice looking to start a career in medical coding or a seasoned
            professional aiming to enhance your skills, we provide tailored
            programs to suit your specific needs. Our academy serves as a
            platform for personal and professional growth, helping coders
            excel in their chosen field. With a strong commitment to
            excellence, we uphold the highest standards in medical coding
            education.<br />
            Our comprehensive programs and job placement services are designed
            to equip both novice and seasoned medical coders with the
            necessary skills and opportunities to succeed. Whether you're
            taking your first steps into the field or seeking to advance your
            existing career, we are here to provide the necessary resources,
            guidance, and support to help you achieve your professional goals.
            Join Thought Flows Medical Coding Academy and embark on a
            rewarding journey towards a successful and fulfilling coding
            career.
          </p>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </>
  );
}

export default WeEmpower;
