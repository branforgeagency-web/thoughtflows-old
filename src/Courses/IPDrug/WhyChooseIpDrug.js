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
    title: 'Growing Demand for IPDRG Coding Professionals',
    description: 'Hospitals and healthcare organizations require skilled IPDRG professionals to classify inpatient cases accurately, support appropriate reimbursement and improve hospital revenue cycle management.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'IPDRG training can strengthen your professional skills and help you explore career opportunities in inpatient coding, DRG coding, hospital billing and healthcare reimbursement.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert Medical Coding Trainers',
    description: 'Learn from experienced medical coding professionals who provide guidance on inpatient coding concepts, DRG classification, medical documentation and reimbursement methodologies.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive IPDRG Training Curriculum',
    description: 'Develop essential knowledge of inpatient diagnosis coding, ICD-10-CM, ICD-10-PCS, DRG assignment, Major Diagnostic Categories (MDCs), Medicare Severity DRGs (MS-DRGs) and inpatient reimbursement principles.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical IPDRG Coding Knowledge',
    description: 'Build practical skills through inpatient medical records, DRG classification exercises, real-world case studies and hands-on coding scenarios.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy – ThoughtFlows',
    description: 'Learn IPDRG concepts through structured medical coding training at ThoughtFlows, an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Develop specialized inpatient DRG knowledge and strengthen your professional profile for opportunities in hospital coding, DRG analysis and healthcare revenue cycle management.'
  }
];

const WhyChooseIpDrug = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for IPDRG Training?</h2>
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

export default WhyChooseIpDrug;
