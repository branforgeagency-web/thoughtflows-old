import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import core1 from "../images/AboutImg/value.png";
import core2 from "../images/AboutImg/team.jpg";
import core3 from "../images/AboutImg/responsibility.jpg";
import core4 from "../images/AboutImg/open.jpg";
import core5 from "../images/AboutImg/creativity.jpg";
import core6 from "../images/AboutImg/loyality.png";

const styles = {
  imageAnimation: {
    borderRadius: "50%",
    width: "150px",
    height: "140px",
  },
  imageAnimation1: {
    borderRadius: "50%",
    width: "150px",
    height: "140px",
  },
  imageAnimation2: {
    borderRadius: "50%",
    width: "150px",
    height: "140px",
    // marginLeft: "25px",
  },
  imageAnimation3: {
    borderRadius: "50%",
    width: "150px",
    height: "140px",
    // marginLeft: "100px",
  },
  imageAnimation4: {
    borderRadius: "50%",
    width: "150px",
    height: "140px",
    // marginLeft: "-130px",
  },
  imageAnimation5: {
    borderRadius: "50%",
    width: "150px",
    height: "140px",
    // marginLeft: "40px",
  },
};

function OurCore() {
  return (
    <Container className="core-value py-5" id="core" style={{ height: "auto", padding: "30px" }}>
      <h1 style={{ textAlign: "center", fontSize: "40px",fontWeight: "bold" }}>
        Our Core Values
      </h1>
      <Row className="mt-3">
        <Col lg={2}>
          <img src={core1} style={styles.imageAnimation} alt="core1" />
        </Col>
        <Col lg={10}>
          <h2
            // className="s-highlight"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "35px",
              textAlign:"left"
            }}
          >
            Passion
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Driven by our passion for healthcare education, we strive to provide top-tier training, making Thoughtflows Medical Coding Academy the leading choice for aspiring medical coders.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}>
          <img src={core6} style={styles.imageAnimation} alt="core6" />
        </Col>
        <Col lg={10}>
          <h2
            // className="s-highlight"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "35px",
              textAlign:"left"
            }}
          >
            Loyalty
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            We build lasting relationships with our trainees, fostering loyalty through our commitment to their professional growth and success in the medical coding field.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}>
          <img src={core2} style={styles.imageAnimation} alt="core2" />
        </Col>
        <Col lg={10}>
          <h2
            // className="s-highlight"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "35px",
              textAlign:"left"
            }}
          >
            Commitment
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            We are fully committed to excellence in innovation, technology, and training, ensuring our trainees receive the highest standard of education and career development.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}>
          <img src={core3} style={styles.imageAnimation} alt="core3" />
        </Col>
        <Col lg={10}>
          <h2
            // className="s-highlight"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "35px",
              textAlign:"left"
            }}
          >
            Responsibility
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            We take full responsibility for our trainees' learning journey, continuously offering support, mentorship, and opportunities for career advancement in medical coding.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}>
          <img src={core4} style={styles.imageAnimation} alt="core4" />
        </Col>
        <Col lg={10}>
          <h2
            // className="s-highlight"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "35px",
              textAlign:"left"
            }}
          >
            Consistency
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
           Our commitment to quality and continuous improvement ensures we maintain the trust of our students and industry partners, year after year.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}>
          <img src={core5} style={styles.imageAnimation} alt="core5" />
        </Col>
        <Col lg={10}>
          <h2
            // className="s-highlight"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "35px",
              textAlign:"left"
            }}
          >
            Creativity
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Through creative teaching methods and dynamic learning modules, we simplify complex coding concepts, helping our trainees grasp and retain knowledge effectively.
          </p>
        </Col>
      </Row>

    </Container>
  );
}

export default OurCore;