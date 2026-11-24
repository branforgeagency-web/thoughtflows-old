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
    title: 'Growing Demand for Medical Billers',
    description: 'Healthcare organizations require skilled medical billers to manage insurance claims, billing operations and reimbursement processes accurately, creating opportunities for qualified CPB professionals.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CPB certification can strengthen your professional profile and open career opportunities in medical billing, insurance claims processing and healthcare revenue cycle management.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert CPB-Certified Trainers',
    description: 'Learn from experienced professionals who provide guidance on medical billing procedures, insurance claims, reimbursement guidelines and healthcare billing practices.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive CPB Training Curriculum',
    description: 'Develop essential knowledge of medical billing, insurance verification, claims submission, payment posting, denial management, accounts receivable and billing compliance.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical Medical Billing Knowledge',
    description: 'Build practical skills through real-world billing scenarios, insurance claim exercises, reimbursement processes and case studies.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy',
    description: 'Prepare for the Certified Professional Biller (CPB) certification through structured training at an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Demonstrate your knowledge of medical billing and healthcare reimbursement through the AAPC CPB credential, strengthening your professional credibility.'
  }
];

const WhyChooseCPB = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CPB Training?</h2>
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

export default WhyChooseCPB;
