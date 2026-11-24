import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { mediaUrl } from '../../config/media';
const excellenceimg = mediaUrl('images/Courses/excellence.png');
const careeradv = mediaUrl('images/Courses/career-advancement.png');
const handson = mediaUrl('images/Courses/hands-on-experience.png');

const cardData = [
  {
    id: 1,
    image: careeradv,
    title: 'Growing Demand for Healthcare Information Professionals',
    description: 'Hospitals, healthcare organizations, and medical institutions require skilled professionals to manage health records, maintain data accuracy, and support efficient healthcare information systems.'
  },
  {
    id: 2,
    image: handson,
    title: 'Comprehensive Health Information Management Knowledge',
    description: 'Develop expertise in medical records management, health data analytics, clinical documentation, electronic health records (EHR), and healthcare information systems.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Official AAPC-Licensed Academy – ThoughtFlows',
    description: 'ThoughtFlows is an officially listed AAPC-Licensed Education Provider in India, offering structured healthcare education with professional guidance and industry-focused learning.'
  },
  {
    id: 4,
    image: handson,
    title: 'Healthcare Data Management & Compliance',
    description: 'Learn about patient information privacy, data security, medical record standards, regulatory compliance, and healthcare information governance.'
  },
  {
    id: 5,
    image: careeradv,
    title: 'Career Opportunities Across Healthcare Organizations',
    description: 'Explore career paths in health information management, medical records administration, healthcare data management, documentation management, and hospital administration.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Professional Skills Development',
    description: 'Build practical knowledge of healthcare documentation, information accuracy, data quality management, and medical record administration to strengthen your professional profile.'
  }
];

const WhyChooseHIM = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for HIM Training?</h2>
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

export default WhyChooseHIM;
