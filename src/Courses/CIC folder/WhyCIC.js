import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import excellenceimg from '../../images/Courses/excellence.png';
import careeradv from '../../images/Courses/career-advancement.png';
import handson from '../../images/Courses/hands-on-experience.png';
import { color } from 'framer-motion';

const cardData = [
    {
        id: 1,
        image: excellenceimg,
        title: 'High Demand:',
        description: '  Hospitals and inpatient facilities are actively seeking CIC-certified coders to manage accurate billing and ensure regulatory compliance, making it a highly sought-after skill.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 2,
        image: careeradv,
        title: 'Career Growth:',
        description: 'Achieving CIC certification boosts your career, providing opportunities for promotions, higher salaries, and job advancement within the healthcare sector.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    {
        id: 3,
        image: handson,
        title: 'Job Security:',
        description: '  Inpatient coding plays a crucial role in hospital revenue cycles, ensuring job stability as demand for skilled coders continues to rise',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },


    {
        id: 4,
        image: excellenceimg,
        title: 'Professional Credibility',
        description: 'CIC certification demonstrates your expertise and commitment to high standards in inpatient coding, increasing your professional credibility and trust with employers.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },


    {
        id: 5,
        image: handson,
        title: 'Industry Recognition',
        description: 'The AAPC-awarded CIC certification is nationally recognized, enhancing your professional reputation across the healthcare industry.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },


    // {
    //     id: 6,
    //     image: excellenceimg,
    //     title: 'Placement Support',
    //     description: 'Resume building, mock interviews, and job placement assistance.',
    //     className: 'col-lg-3 col-sm-12',
    //     headingClass: 'text-black'
    // },
];

const WhyCPC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Take CIC Training from Thoughtflows?</h2>
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
