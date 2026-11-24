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
    title: 'Growing Demand for Medical Auditors',
    description: 'As healthcare regulations and auditing requirements become more complex, skilled medical auditors play an important role in ensuring coding accuracy and healthcare compliance.'
  },
  {
    id: 2,
    image: excellenceimg,
    title: 'Expert CPMA-Certified Trainers',
    description: 'Learn from experienced professionals who provide guidance on medical auditing concepts, coding accuracy, documentation requirements and compliance practices.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Comprehensive CPMA Training Curriculum',
    description: 'Develop essential knowledge of medical record auditing, Evaluation and Management (E/M) auditing, medical documentation, coding compliance and audit methodologies.'
  },
  {
    id: 4,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy',
    description: 'Train through an officially licensed AAPC academy with structured CPMA certification preparation and professional learning support.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical Medical Auditing Experience',
    description: 'Build practical knowledge through medical record reviews, auditing exercises, coding scenarios and real-world case studies.'
  },
  {
    id: 6,
    image: careeradv,
    title: 'CPMA Exam Preparation and Mock Tests',
    description: 'Prepare for the AAPC CPMA certification examination through chapter-wise assessments, practice questions, mock exams and performance feedback.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Career Growth and Placement Assistance',
    description: 'Explore opportunities in medical auditing, healthcare compliance and coding quality assurance with resume guidance, mock interviews and placement assistance.'
  }
];

const WhyCPMA = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CPMA Training?</h2>
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

export default WhyCPMA;
