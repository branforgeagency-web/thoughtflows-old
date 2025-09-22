import React from "react";
import cbeImg from "../images/Group636.png";
import kochiImg from "../images/Group637.png";
import thiruImg from "../images/Group638.png";
import hydImg from "../images/Group639.png";
import tiruvanImg from "../images/Group640.png";
import trichyImg from "../images/Group641.png";
import salemImg from "../images/salem.png";
import hopes from "../images/hopes.png";
import gandhi from "../images/gandhi.png";
import prozone from "../images/prozone.png";
import hy1 from "../images/hy1.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";  
const Branches = () => {
  return (
    <div
      className="our-branches"
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
    >
      {/* <Container> */}
      <Row className="text-center mb-4">
        <Col>
          <h5>OUR BRANCHES</h5>
          <h2>All Over South India Zone</h2>
        </Col>
      </Row>
      <Row className="branches-list text-center justify-content-center">
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/gandhipuram" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={gandhi} alt="Coimbatore" className="img-fluid mb-2" />
            <p>Gandhipuram</p>
          </div>
          </Link>
        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/saravanampatti" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={prozone} alt="Coimbatore" className="img-fluid mb-2" />
            <p>Saravanampatti</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/hopes" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={hopes} alt="Coimbatore" className="img-fluid mb-2" />
            <p>Hopes</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/kochi" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={kochiImg} alt="Kochi" className="img-fluid mb-2" />
            <p>Kochi</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/tirupati" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={thiruImg} alt="Tirupati" className="img-fluid mb-2" />
            <p>Tirupati</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/ameerpet" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={hydImg} alt="Hyderabad" className="img-fluid mb-2" />
            <p>Ameerpet</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/dilsukhnagar" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={hy1} alt="Hyderabad" className="img-fluid mb-2" />
            <p>Dilsukhnagar</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/trivandrum" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={tiruvanImg} alt="Trivandrum" className="img-fluid mb-2" />
            <p>Trivandrum</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/trichy" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={trichyImg} alt="Trichy" className="img-fluid mb-2" />
            <p>Trichy</p>
          </div>
          </Link>

        </Col>
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/salem" style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <img src={salemImg} alt="Salem" className="img-fluid mb-2" />
            <p>Salem</p>
          </div>
          </Link>

        </Col>
      </Row>

      {/* </Container> */}
    </div>
  );
};

export default Branches;
