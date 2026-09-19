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
        title: ' High Demand in Healthcare',
        description: 'The rise of value-based care models and Medicare Advantage plans has increased the need for skilled risk adjustment coders. Healthcare organizations seek professionals who can ensure accurate reporting of chronic conditions and risk scores.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 2,
        image: careeradv,
        title: 'Career Growth Opportunities',
        description: 'CRC certification opens doors to specialized roles such as risk adjustment coder, compliance auditor, and HCC coder, offering pathways for promotions and higher salary potential.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    {
        id: 3,
        image: handson,
        title: 'Contribute to Accurate Reimbursement',
        description: 'CRC-certified coders help healthcare providers receive appropriate reimbursements by ensuring that patient risk profiles are documented correctly. This directly impacts revenue integrity for healthcare organizations.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },


    {
        id: 4,
        image: handson,
        title: 'Professional Credibility',
        description: ' Holding a CRC credential from AAPC, a leading medical coding certification body, demonstrates your expertise and commitment to excellence in risk adjustment coding.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },



    {
        id: 5,
        image: careeradv,
        title: 'Comprehensive Skill Set',
        description: 'CRC training equips you with in-depth knowledge of ICD-10-CM coding, risk adjustment models (HCC, RxHCC, ACA), and medical documentation requirements. These skills are essential for accurate coding in various healthcare settings.',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },


    {
        id: 6,
        image: excellenceimg,
        title: ' Stability and Job Security',
        description: 'As healthcare continues to adopt risk-based payment models, the demand for skilled risk adjustment coders remains steady, ensuring long-term job security.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },






    {
        id: 7,
        image: excellenceimg,
        title: '  Industry Recognition',
        description: 'Employers across hospitals, insurance providers, and health plans recognize and value CRC certification, making it a highly respected credential in the industry',
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },
    {
        id: 8,
        image: careeradv,
        title: 'Flexibility in Work Settings',
        description: 'CRC-certified professionals can work in diverse settings, including healthcare facilities, insurance companies, and remote coding positions, offering flexibility in your career.',
        className: 'col-lg-3 col-sm-12 active',
        descriptionClass: 'text-light',
        headingClass: 'text-white'
    },
    {
        id: 9,
        image: handson,
        title: 'Stay Current with Regulation',
        description: "sprofiles are documented correctly. This directly impacts revenue integrity for healthcare organizations.",
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },

    {
        id: 10,
        image: excellenceimg,
        title: 'Enhance Your Coding Knowledge',
        description: "Expand your expertise beyond basic medical coding by mastering risk adjustment methodologies, improving your overall coding proficiency and value in the workplace.",
        className: 'col-lg-3 col-sm-12',
        headingClass: 'text-black'
    },

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
