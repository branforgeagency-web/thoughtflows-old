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
        "title": "Expert Trainers",
        "description": "Learn from AAPC-certified instructors with hands-on Anesesthesia coding experience.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 2,
        "image": careeradv,
        "title": "Interactive Learning",
        "description": "Live sessions enriched with case studies, PowerPoint presentations, and video tutorials.",
        "className": "col-lg-3 col-sm-12 active",
        "descriptionClass": "text-light",
        "headingClass": "text-white"
    },
    {
        "id": 3,
        "image": handson,
        "title": "Comprehensive Study Materials",
        "description": "Access to detailed study guides and coding manuals.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 4,
        "image": handson,
        "title": "Exclusive Content",
        "description": "Specialized training on Anesesthesia time calculation and modifier usage.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 5,
        "image": handson,
        "title": "Real-World Practice",
        "description": "Hands-on coding practice with live Anesesthesia charts and case scenarios.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 6,
        "image": handson,
        "title": "Mock Exams",
        "description": "Chapter-wise assessments and full-length mock exams to ensure exam readiness.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 7,
        "image": handson,
        "title": "Placement Support",
        "description": "Resume building, mock interviews, and job placement assistance with top healthcare organizations.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    },
    {
        "id": 8,
        "image": handson,
        "title": "Flexible Scheduling",
        "description": "Classes available on weekdays and weekends for working professionals.",
        "className": "col-lg-3 col-sm-12",
        "headingClass": "text-black"
    }
];


const WhyCPC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Take CAC Training from Thoughtflows?</h2>
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
