import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import excellenceimg from '../../images/Courses/excellence.png';
import careeradv from '../../images/Courses/career-advancement.png';
import handson from '../../images/Courses/hands-on-experience.png';
import { color } from 'framer-motion';

const cardData = [
    {
        "id": 1,
        "image": excellenceimg,
        "title": "Industry-Relevant Training",
        "description": "Our HIM course is designed to meet the needs of the healthcare industry, ensuring that you are job-ready.",
            "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 2,
        "image": careeradv,
"title": "Expert Trainers",
    "description": "Learn from experienced instructors with extensive backgrounds in healthcare coding and management.",
            "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
    {
        "id": 3,
        "image": handson,
        "title": "Flexible Learning Options",
        "description": "Online and offline classes for maximum convenience.",
                "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 5,
        "image": careeradv,
        "title": "Comprehensive Curriculum",
        "description": "Our course covers all the essential modules, including coding systems, healthcare regulations, and data management.",        "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
    {
        "id": 4,
        "image": handson,
        "title": "Job Assistance",
        "description": "Receive guidance and support in securing your dream job in HIM.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 5,
        "image": careeradv,
        "title": "Accredited Course",
        "description": " Study a program recognized by industry professionals, ensuring your qualifications hold value in the job market.",        "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
];

const WhyCPC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Take CPC Training from Thoughtflows?</h2>
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
