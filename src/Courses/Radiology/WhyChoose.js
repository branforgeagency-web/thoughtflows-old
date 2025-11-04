import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import excellenceimg from '../../images/Courses/excellence.png';
import careeradv from '../../images/Courses/career-advancement.png';
import handson from '../../images/Courses/hands-on-experience.png';
import { color } from 'framer-motion';

const cardData = [
    {
        "id": 1,
        "image": excellenceimg, // Replace with the actual image if available
        "title": "Expert Trainers",
        "description": "Learn from AAPC-certified instructors with hands-on experience in radiology coding and current industry practices.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 2,
        "image": careeradv, // Replace with the actual image if available
        "title": "Interactive Learning",
        "description": "Engage in live classes featuring real-world case studies, PowerPoint presentations, and video tutorials for comprehensive understanding.",
        "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
    {
        "id": 3,
        "image": handson, // Replace with the actual image if available
        "title": "Exclusive Content",
        "description": "Benefit from comprehensive study materials tailored to radiology coding, including live chart training and detailed guides.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 4,
        "image": handson, // Replace with the actual image if available
        "title": "Mock Exams & Assessments",
        "description": "Prepare thoroughly with chapter-wise assessments, full-length practice exams, and feedback to boost your confidence.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 5,
        "image": handson, // Replace with the actual image if available
        "title": "Placement Support",
        "description": "Get career-ready with our job placement assistance, including resume building, mock interviews, and connections to top healthcare organizations.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    }
];

const WhyCPC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Take CRC Training from Thoughtflows?</h2>
      </div>
      <Row className="why-cpc px-4" xs={1} md={3}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card col-lg-3 col-sm-12 ${hoveredId === card.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              transition: 'all 0.3s ease',
              padding: '20px',
              borderRadius: '10px',
              margin: '10px',
              cursor: 'pointer',
              minHeight: '200px'
            }}
          >
            <div className="icon" style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
              {/* <img src={card.image} alt={card.title} width={40} /> */}
              <h3 style={{ color: hoveredId === card.id ? 'white' : 'black' }}>{card.title}</h3>
            </div>
            <p style={{ color: hoveredId === card.id ? 'white' : 'black' }}>{card.description}</p>
          </div>
        ))}
      </Row>
    </>
  );
};

export default WhyCPC;
