import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { mediaUrl } from '../../config/media';
const excellenceimg = mediaUrl('images/Courses/excellence.png');
const careeradv = mediaUrl('images/Courses/career-advancement.png');
const handson = mediaUrl('images/Courses/hands-on-experience.png');

const cardData = [
  {
    id: 1,
    image: excellenceimg,
    title: 'Official AAPC-Licensed Education Provider',
    description: 'Learn through ThoughtFlows, an officially listed AAPC-Licensed Education Provider in India, with structured health information management training and professional guidance.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Growing Demand for Health Information Technicians',
    description: 'Hospitals, healthcare organizations, and medical facilities require skilled professionals to manage patient health records, maintain data accuracy, and support healthcare information systems.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'RHIT certification can strengthen your professional qualifications and help you explore opportunities in medical records management, health information technology, medical coding, and healthcare data administration.'
  },
  {
    id: 4,
    image: handson,
    title: 'Specialized Health Information Management Knowledge',
    description: 'Develop expertise in health data management, medical terminology, clinical documentation, electronic health records (EHR), and healthcare information systems.'
  },
  {
    id: 5,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'The RHIT credential demonstrates your competency in health information technology and strengthens your professional credibility within the healthcare industry.'
  },
  {
    id: 6,
    image: handson,
    title: 'Healthcare Data Accuracy & Compliance Skills',
    description: 'Build practical knowledge of medical record maintenance, data quality, privacy regulations, information security, and healthcare documentation standards.'
  }
];

const WhyChooseRHIT = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for RHIT Training?</h2>
      </div>
      <Row className="why-cpc px-4 flex flex-wrap justify-center" xs={1} md={3}>
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

export default WhyChooseRHIT;
