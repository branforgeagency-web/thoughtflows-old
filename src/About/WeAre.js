import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import founder2 from "../images/Profile images/blazer pic/bhanu mathi.png";
import founder1 from "../images/Profile images/blazer pic/balamurali.jpg";
import founderBig1 from "../images/AboutImg/A-321.png";
import founderBig2 from "../images/AboutImg/A432.png";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function WeAre() {
  const [showContent, setShowContent] = useState(false);
  const [currentFounder, setCurrentFounder] = useState(null);
  const [founderName, setFounderName] = useState("");


  return (
    <>
        <Row>
        <Col lg={1}></Col>
          <Col lg={5}>
            <h4 style={{color:"#FF544C" , fontSize:"30px" , margin:"0px 0px 25px 0px"}}>NO 1 MEDICAL CODING ACADEMY</h4>
            <h1 style={{fontSize:"40px", margin:"0px 0px 25px 0px", fontWeight: "bold",}}> Who We Are</h1>
            <p style={{fontSize:"15px", margin:"10px 0px 0px 0px", wordSpacing:"1px",textAlign:"left",lineHeight:"30px"}}>
              Founded in 2016 by Mr. Balamurali and Ms. Banumathy, Thought Flows is
              the result of the vision and dedication of two enterprising and
              energetic individuals. Recognizing the growing demand for skilled
              professionals in the medical coding field, we embarked on a
              journey to establish an academy that would provide exceptional
              training to individuals seeking to excel in this industry. 
            </p>
            <p style={{fontSize:"15px", margin:"10px 0px 40px 0px", wordSpacing:"1px",textAlign:"left",lineHeight:"30px"}}>
            From
              humble beginnings with just one branch and a single trainee,
              Thought Flows has witnessed remarkable growth over the years.
              Today, we proudly operate Eleven branches across India, catering to
              the needs of aspiring medical coders nationwide. With a proven
              track record of success, we have trained over 30,000+ individuals,
              empowering them with the knowledge and skills required to thrive
              in this competitive field.
            </p>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5}
            className="founder-block">
            <Col className="found">
              <img
                src={founder1}
                style={{ width: "220px", cursor: "pointer" }}
                // onClick={() => handleImageClick("founder1", "Mr. BalaMurali")}
                alt="Founder 1"
              />
              <h4 style={{ color: "#00BBFA" }}>Founder & MD</h4>
              {/* <hr
                className="custom-hr"
                style={{ borderTop: "3px solid black" }}
              /> */}
              <h3>Mr. BalaMurali</h3>
              {/* <div style={{ marginTop: "15px" }}>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ margin: "0 10px", color: "#DD2A7B" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ margin: "0 10px", color: "#4267B2" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{ margin: "0 10px", color: "#1DA1F2" }}
                  />
                </a>
              </div> */}
            </Col>

            <Col className="found">
              <img
                src={founder2}
                style={{ width: "220px", cursor: "pointer" }}
                // onClick={() => handleImageClick("founder2", "Ms. Bhanu")}
                alt="Founder 2"
              />
              <h4 style={{ color: "#00BBFA" }}>Founder & CEO</h4>
              {/* <hr
                className="custom-hr"
                style={{ borderTop: "3px solid black" }}
              /> */}
              <h3>Ms. Banumathy</h3>
              {/* <div style={{ marginTop: "15px" }}>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ margin: "0 10px", color: "#DD2A7B" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    style={{ margin: "0 10px", color: "#4267B2" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{ margin: "0 10px", color: "#1DA1F2" }}
                  />
                </a>
              </div> */}
            </Col>
          </Col>
        </Row>

        {/* OOFFFFF CANAVAS */}
        {showContent && (
          <div className={`off-canvas-content visible`}>
            <img
              src={currentFounder === "founder1" ? founderBig1 : founderBig2}
              alt="Off-canvas Content"
              className="off-canvas-image"
            />
            <h1>{founderName || ""}</h1>

            <button onClick={() => setShowContent(false)}>Close</button>
          </div>
        )}
    </>
  );
}

export default WeAre;
