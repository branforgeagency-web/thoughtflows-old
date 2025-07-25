import React from "react";
import banner from "../images/AboutImg/abtbanner.jpg";
import { Container, Row, Col } from 'react-bootstrap';

function AboutBanner() {
  return (
    <section>

<Row
  style={{
    position: 'relative',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    height: '650px',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {/* Black Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // dark overlay
      zIndex: 1,
    }}
  />

  {/* Centered Text Content */}
  <div
    style={{
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      padding: '0 20px',
      paddingTop:"100px",
    }}
  >
    <h1 style={{ color: '#fff', fontSize: '48px', marginBottom: '20px' }}>
      About Us
    </h1>
    <h2 style={{ color: '#fff', fontSize: '30px', maxWidth: '900px' }}>
      Thoughtflows Medical Coding Academy is a leading institute specializing in expert medical coding training and certifications to advance healthcare careers.
    </h2>
  </div>
</Row>


      <Container fluid id="#we-are" className="abt-col p-0 justify-content-around align-items-center" style={{ height: '154px', width: "100%" }}>
        <Row className="w-100 h-100 text-center d-flex " style={{ background: "#15aebb", color: "white" }}>
          <Col className=" d-flex flex-column align-items-center col-1 front" style={{ width: '20%', justifyContent: "center" }}>

            <a href="#who-we" style={{ color: "white", textDecoration: 'none', }}><h4>Who We Are</h4></a>
            <hr className="custom-hr" />
          </Col>
          <Col className=" d-flex flex-column align-items-center col-1 front " style={{ width: '20%', justifyContent: "center" }}>

            <a href="#empower" style={{ color: "white", textDecoration: 'none', }}><h4>We Empower</h4></a>
            <hr className="custom-hr" />
          </Col>
          <Col className="  d-flex flex-column align-items-center col-1 front" style={{ width: '20%', justifyContent: "center" }}>

            <a href="#motto" style={{ color: "white", textDecoration: 'none', }}><h4>Our Motto</h4></a>
            <hr className="custom-hr" />
          </Col>
          <Col className=" d-flex flex-column align-items-center col-1 front " style={{ width: '20%', justifyContent: "center" }}>

            <a href="#vis" style={{ color: "white", textDecoration: 'none', }}><h4>Vision-Mission</h4></a>
            <hr className="custom-hr" />
          </Col>
          <Col className="  d-flex flex-column align-items-center col-1 front " style={{ width: '20%', justifyContent: "center" }}>

            <a href="#core" style={{ color: "white", textDecoration: 'none', }} ><h4>Our Core Values</h4></a>

            <hr className="custom-hr" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default AboutBanner;
