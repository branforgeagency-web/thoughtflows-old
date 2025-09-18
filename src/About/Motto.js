import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import study1 from "../images/AboutImg/course-02.jpg";
import study2 from "../images/AboutImg/course-05.jpg";
import study3 from "../images/AboutImg/Our Motto-Support.jpg";
import join from "../images/AboutImg/join.jpg";
// import { faBullseye } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Motto() {
  const [selectedContent, setSelectedContent] = useState("Quality");

  const contentData = {
    Quality: {
      title: "Top Quality Training" ,
      text: "We are committed to delivering top-quality training that combines theoretical knowledge with practical hands-on experience. Our curriculum is meticulously designed by industry experts, ensuring that our trainees are equipped with the latest industry practices and coding techniques. With modern facilities and a team of highly qualified instructors, we offer a dynamic learning environment designed to nurture growth, expertise, and success in the medical coding field.",
      image: study1,
    },
    Connections: {
      title: "Build Strong Industry Connections",
      text: "As a trainee at Thoughtflows Medical Coding Academy, you'll gain access to our extensive network of industry connections. We've forged strong partnerships with leading healthcare organizations, providing ample opportunities for job placements. We understand the importance of bridging the gap between education and employment, and we actively work towards helping our trainees secure rewarding positions in esteemed healthcare institutions.",
      image: study2,
    },
    Support: {
      title: "Continuous Support",
      text: "Your journey with Thoughtflows Medical Coding Academy doesn't end at graduation. We offer lifelong mentorship, personalized career guidance, and exclusive access to our vibrant alumni community—empowering you with networking, professional growth, and continuous learning every step of the way.",
      image: study3,
    },
    JoinUs: {
      title: "Join Our Community",
      text: "At Thought Flows, we are driven by our passion for empowering individuals and making a positive impact in the medical coding field. Join us on this transformative educational journey and unlock the doors to a rewarding and fulfilling career.",
      image: join,
    },
  };

  return (
    <>
      <Container
      id="motto"
        fluid
        className="who mb-[180px] sm:mb-0 d-flex  justify-content-around align-items-start"
        style={{ height: "250px", width: "100%", background: "white"}}
      >
        <Row className="justify-content-center"> 
          <Col xs={12} >
            <h1 className="motto" style={{ textAlign: "center", fontSize: "40px",fontWeight: "bold" }}>Our Motto</h1>
            <button
              className="btn-1"
              onClick={() => setSelectedContent("Quality")}
            >
              Quality
            </button>
            
            <button
              className="btn-3"
              onClick={() => setSelectedContent("Connections")}
            >
              Connections
            </button>
            <button
              className="btn-3"
              onClick={() => setSelectedContent("Support")}
            >
              Support
            </button>
            <button
              className="btn-2"
              onClick={() => setSelectedContent("JoinUs")}
            >
              Join us
            </button>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="who d-flex justify-content-center align-items-start"
        style={{
          // height: "750px",
          width: "100%",
          background: "white",
          gap: "25px",
          padding: "0px 50px 80px 50px"
          // marginBottom:"-80px"
        }}
      >
        <Row style={{ width: "100%" }}>
          <Col
          xs={12} sm={12} md={4}
            style={{
              borderRadius: "50px",
              padding: "0",
              marginRight: "30px",
              zIndex: "100",
            }}
          >
            <img
            className="mb-16 mx-4  md:mb-0 abt-img"
              src={contentData[selectedContent].image}
              style={{
                width: "80%",
                maxWidth: selectedContent === "Support" ? "420px" : undefined,
                height: "250px",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
              alt="medical coding class"
            />
          </Col>
          <Col
          xs={12}
            md={7} className="tab-motto"
            style={{
              padding: " 50px 50px 20px 120px",
              background: "#F1F0FE",
              margin: "150px 150px 0px -220px",
              zIndex: "-150px",
              color: "black",
              fontSize: "22px",
            }}
          >
            <h2 className="highlights" style={{ margin: "15px 0px 15px 10px" }}>
              {contentData[selectedContent].title}
            </h2>
            <p style={{fontSize:"15px",wordSpacing:"6px", marginTop:'15px', lineHeight:'30px', color:'#1e1c1b',paddingInline:"15px"}}>{contentData[selectedContent].text}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Motto;
