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
    title: 'Growing Demand for Physician Practice Managers',
    description: 'Healthcare organizations and physician practices require skilled practice managers to oversee daily operations, improve administrative efficiency and ensure smooth healthcare service delivery.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CPPM certification can strengthen your professional profile and open career opportunities in physician practice management, healthcare administration, medical office management and revenue cycle management.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert CPPM-Certified Trainers',
    description: 'Learn from experienced professionals who provide guidance on physician practice operations, healthcare administration, financial management, staff coordination and compliance practices.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive CPPM Training Curriculum',
    description: 'Develop essential knowledge of medical practice operations, healthcare regulations, revenue cycle management, financial administration, human resource management, patient relations and practice performance improvement.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical Healthcare Management Knowledge',
    description: 'Build practical skills through real-world physician practice scenarios, administrative case studies, operational exercises and healthcare management applications.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy',
    description: 'Prepare for the Certified Physician Practice Manager (CPPM) certification through structured training at an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Demonstrate your knowledge of physician practice management through the AAPC CPPM credential, strengthening your professional credibility in healthcare administration.'
  }
];

const WhyChooseCPPM = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CPPM Training?</h2>
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

export default WhyChooseCPPM;
