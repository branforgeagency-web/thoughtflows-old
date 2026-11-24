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
    title: 'Growing Demand for E/M Coders',
    description: 'Healthcare organizations require skilled Evaluation and Management (E/M) coders to review medical documentation, accurately assign service codes and support appropriate healthcare reimbursement.'
  },
  {
    id: 2,
    image: careeradv,
    title: 'Career Growth Opportunities',
    description: 'CEMC certification can strengthen your professional profile and open career opportunities in E/M coding, medical coding auditing, physician practices and healthcare revenue cycle management.'
  },
  {
    id: 3,
    image: excellenceimg,
    title: 'Expert CEMC-Certified Trainers',
    description: 'Learn from experienced professionals who provide guidance on E/M coding guidelines, medical documentation, code selection and evaluation of healthcare services.'
  },
  {
    id: 4,
    image: careeradv,
    title: 'Comprehensive CEMC Training Curriculum',
    description: 'Develop essential knowledge of Evaluation and Management coding, office and outpatient visits, hospital E/M services, medical decision-making (MDM), time-based coding and documentation requirements.'
  },
  {
    id: 5,
    image: handson,
    title: 'Practical E/M Coding Knowledge',
    description: 'Build practical coding skills through medical record reviews, real-world E/M coding scenarios, case studies and hands-on exercises.'
  },
  {
    id: 6,
    image: excellenceimg,
    title: 'Official AAPC Licensed Academy',
    description: 'Prepare for the Certified Evaluation and Management Coder (CEMC) certification through structured training at an officially licensed AAPC academy.'
  },
  {
    id: 7,
    image: excellenceimg,
    title: 'Professional Recognition',
    description: 'Demonstrate your expertise in Evaluation and Management coding through the AAPC CEMC credential, strengthening your professional credibility in the healthcare industry.'
  }
];

const WhyChooseCEMC = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='px-4'>
        <h2 className="text-center mt-3">Why Choose ThoughtFlows for CEMC Training?</h2>
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

export default WhyChooseCEMC;
