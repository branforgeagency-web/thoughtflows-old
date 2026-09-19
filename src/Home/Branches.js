import React from "react";
import cbeImg from "../images/Branches/updated/HOPES.png";
import kochiImg from "../images/Branches/updated/Kochi.png";
import thiruImg from "../images/Branches/updated/Tirupati.png";
import hydImg from "../images/Branches/updated/Ameerpet.png";
import tiruvanImg from "../images/Branches/updated/Trivandrum.png";
import trichyImg from "../images/Branches/updated/Trichy.png";
import salemImg from "../images/Branches/updated/Salem.png";
import hopes from "../images/Branches/updated/HOPES.png";
import vizag from "../images/Branches/updated/Vizag.png";
import gandhi from "../images/Branches/updated/Gandhipuram.png";
import prozone from "../images/Branches/updated/Saravanampatti.png";
import hy1 from "../images/Branches/updated/Dilsukhnagar.png";
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
         <Link to="/Trusted-Medical-Coding-Ameerpet" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Professional-Medical-Coding-Dilsukhnagar" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Premier-Medical-Coding-Institute-Gandhipuram" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Medical-Coding-Excellence-at-Hopes" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Medical-Coding-Academy-Kochi" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Future-Ready-Medical-Coding-Salem" style={{ textDecoration: "none", color: "inherit" }}>
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
        <Col xs={6} sm={6} lg={2} className="mb-4">
         <Link to="/Top-Medical-Coding-Training-Saravanampatti" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Expert-Medical-Coding-Tirupathi" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Career-Focused-Medical-Coding-Trichy" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Advanced-Medical-Coding-Tiruvandrum" style={{ textDecoration: "none", color: "inherit" }}>
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
         <Link to="/Innovative-Medical-Coding-Vizag" style={{ textDecoration: "none", color: "inherit" }}>
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
            <img src={vizag} alt="Vizag" className="img-fluid mb-2" />
            <p>Vizag</p>
          </div>
          </Link>
        </Col>
      </Row>

      {/* </Container> */}
    </div>
  );
};

export default Branches;
