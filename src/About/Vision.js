import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Vision = () => {
  const [activePanel, setActivePanel] = useState(null);

  const handleShowPanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };
  const cardData = [
    {
      id: 'vision',
      title: 'Vision',
      description: 'To be Asia’s top institution in medical coding, empowering individuals to excel and enhance healthcare through accuracy and innovation.',
      buttonText: 'Read More'
    },
    {
      id: 'mission',
      title: 'Mission',
      description: 'To deliver top-tier medical coding education that equips individuals with the skills to succeed in healthcare.',
      buttonText: 'Read More'
    },
    {
      id: 'facilities',
      title: 'Our Facilities',
      description: 'We provide modern classrooms, online learning tools, and hands-on training, along with mentorship and career support to ensure student success.',
      buttonText: 'Read More'
    }
  ];
  

  return (
    <div
      id="vis"
      style={{ padding: '30px' }}
    >
      {/* <div className="vision-mission" > */}
      <h1 style={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>Vision - Mission - Facilities</h1>
      <Row
      style={{
        justifyContent: 'space-around',
        alignItems: 'stretch',
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
        paddingInline:"30px"
      }}
    >
      {cardData.map((card) => (
        <Col
          key={card.id}
          lg={3}
          xs={12}
          md={12}
          className="vis-card"
          style={{
            marginTop: '30px',
            background: '#15aebb',
            padding: '50px',
            borderRadius: '10px',
            color: '#fff',
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '350px',
            flex: '1',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(21, 174, 187, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 25px rgba(21, 174, 187, 0.3)';
            e.target.style.background = '#097D8A';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(21, 174, 187, 0.2)';
            e.target.style.background = '#15aebb';
          }}
        >
          <h3 style={{ marginTop: '20px', textAlign: 'left', fontWeight: '600' }}>
            {card.title}
          </h3>
          <p style={{ marginTop: '20px', textAlign: 'left' }}>{card.description}</p>
          <button
            onClick={() => handleShowPanel(card.id)}
            style={{
              marginTop: 'auto',
              color: '#2FC4B2',
              background: '#F1F0FE',
              fontWeight: '500',
              fontSize: '16px',
              fontFamily: 'Poppins',
              borderRadius: "20px",
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#2FC4B2';
              e.target.style.color = '#F1F0FE';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 15px rgba(47, 196, 178, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#F1F0FE';
              e.target.style.color = '#2FC4B2';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            {card.buttonText}
          </button>
        </Col>
      ))}
    </Row>

      {/* </div> */}

      {activePanel && (
        <div
          className="toggle-content"
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#E6E5FF",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          {activePanel === "vision" && (
            <>
              <h1
                className="highlightss"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                Our Vision
              </h1>
              <p className="mission-c" style={{ margin: "20px 20px", fontSize: "17px", wordSpacing: "10px" }}>
              To be Asia's leading institution in medical coding education, transforming the future of healthcare by empowering individuals with the knowledge, skills, and certifications needed to excel. We aim to cultivate a community of highly skilled, sought-after medical coders who play a pivotal role in ensuring the accuracy, efficiency, and innovation of healthcare systems, ultimately contributing to improved patient care and streamlined processes across the globe.
              </p>
            </>
          )}

          {activePanel === "mission" && (
            <>
              <h1
                className="highlightss"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                Our Mission
              </h1>
              <ol style={{ margin: "20px 20px", }}>
                <li>
                  <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                    <b>Provide Expert Medical Coding Training:</b> We deliver comprehensive, industry-focused training programs designed to equip individuals with the critical skills and knowledge needed for success in medical coding.
                  </p>
                </li>
                <li>
                  <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                    <b>Promote Career Development:</b> We foster a learning environment that nurtures both personal and professional growth, empowering students to advance their careers in the healthcare industry.
                  </p>
                </li>
                <li>
                  <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                    <b>Bridge Education and Employment:</b> Through strategic collaborations with healthcare organizations, we provide job placement opportunities and internships, ensuring seamless transitions from education to employment.
                  </p>
                </li>
                <li>
                  <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                    <b>Incorporate Innovation and Industry Best Practices:</b> We continuously update our curriculum to reflect the latest coding techniques, technological advancements, and best practices, keeping our students ahead in the rapidly evolving medical coding field.
                  </p>
                </li>
                <li>
                  <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                    <b>Uphold Ethical Medical Coding Standards:</b> We emphasize the importance of ethical coding, accuracy, and compliance, ensuring our graduates are equipped to maintain integrity in their coding practices.
                  </p>
                </li>
                <li>
                  <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                    <b>Foster a Collaborative Community:</b> We create a supportive community through mentorship, networking, and continuous professional development, helping our students build valuable connections and resources.
                  </p>
                </li>
                <li>
                  <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                    <b>Enhance Healthcare Outcomes:</b> We are committed to improving healthcare efficiency and quality by producing highly skilled medical coders who play a vital role in the healthcare system’s accuracy and effectiveness.
                  </p>
                </li>
              </ol>
            </>
          )}

          {activePanel === "facilities" && (
            <>
              <h1
                className="highlightss"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                Our Facilities
              </h1>
              <div className="d-flex justify-content-evenly">
                <ul style={{ margin: "20px 20px" }}>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>Best training methodology and curriculum.</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>Expert Faculty.</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "10px" }}>
                      {" "}
                      <b>100% Placement assurance</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b> Fully air conditioned institute</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>Well equipped classrooms</b>
                    </p>
                  </li>
                </ul>
                <ul style={{ margin: "20px 20px" }}>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>Modern Infrastructure</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>PPT oriented classes</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>Interactive sessions</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>Live chart training</b>
                    </p>
                  </li>
                  <li>
                    <p className="mission-c" style={{ fontSize: "17px", wordSpacing: "1px" }}>
                      {" "}
                      <b>Affordable training fee</b>
                    </p>
                  </li>
                </ul>
              </div>
              <h3
                style={{
                  marginTop: "25px",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                {" "}
                Welcome to Thought Flows Medical Academy, where your aspirations
                become a reality!
              </h3>
            </>
          )}
          <button
            onClick={() => setActivePanel(null)}
            style={{
              margin: "20px 50%",
              fontSize: "20px",
              background: "red",
              padding: "5px 35px",
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(255, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#dc3545';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 15px rgba(220, 53, 69, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'red';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(255, 0, 0, 0.2)';
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Vision;
