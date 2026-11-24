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
    title: 'Growing Demand for Inpatient Clinical Documentation Specialists',
    description: 'Hospitals and healthcare organizations require skilled documentation professionals to ensure accurate, complete and compliant inpatient medical records that support appropriate coding, medical necessity and reimbursement.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CDEI certification can strengthen your professional profile and open career opportunities in inpatient clinical documentation improvement, medical record auditing, hospital coding and healthcare compliance.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert CDEI-Certified Trainers',
    description: 'Learn from experienced professionals who provide guidance on inpatient clinical documentation, medical record reviews, diagnosis specificity, coding guidelines and documentation improvement practices.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive CDEI Training Curriculum',
    description: 'Develop essential knowledge of inpatient clinical documentation, documentation improvement principles, ICD-10-CM diagnosis coding, ICD-10-PCS procedure coding, medical necessity and healthcare compliance requirements.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical Clinical Documentation Knowledge',
    description: 'Build practical skills through inpatient medical record reviews, documentation analysis, real-world case studies and hands-on exercises focused on hospital settings.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy',
    description: 'Prepare for the Certified Documentation Expert Inpatient (CDEI) certification through structured training at an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Demonstrate your expertise in inpatient clinical documentation improvement through the AAPC CDEI credential, strengthening your professional credibility in the healthcare industry.'
  }
];

const WhyChooseCDEI = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CDEI Training?</h2>
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

export default WhyChooseCDEI;
