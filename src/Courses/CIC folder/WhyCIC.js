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
    title: 'Official AAPC Licensed Academy',
    description: 'Learn through an officially licensed AAPC academy with structured Certified Inpatient Coder (CIC) training, expert guidance and professional learning support.'
  },
  {
    id: 2,
    image: excellenceimg,
    title: 'Expert CIC-Certified Trainers',
    description: 'Learn from experienced trainers who guide you through inpatient medical coding concepts, guidelines and practical coding applications.'
  },
  {
    id: 3,
    image: careeradv,
    title: 'Comprehensive CIC Training Curriculum',
    description: 'Develop knowledge of inpatient coding, ICD-10-CM diagnosis coding, ICD-10-PCS procedure coding, medical terminology, anatomy and inpatient coding guidelines.'
  },
  {
    id: 4,
    image: handson,
    title: 'Practical Inpatient Medical Coding Training',
    description: 'Build practical coding skills through real-world medical records, inpatient coding scenarios, case studies and hands-on exercises.'
  },
  {
    id: 5,
    image: careeradv,
    title: 'CIC Exam Preparation and Mock Tests',
    description: 'Prepare for the AAPC CIC certification examination through chapter-wise assessments, practice questions, mock exams and performance feedback.'
  },
  {
    id: 6,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CIC certification can strengthen your professional profile and open opportunities in inpatient medical coding, hospital coding and healthcare revenue cycle management.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Medical Coding Placement Assistance',
    description: 'Get career support through resume building, mock interviews and placement assistance to prepare for inpatient medical coding opportunities.'
  }
];

const WhyCIC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CIC Training?</h2>
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

export default WhyCIC;
