import React from "react";

const RHITBenefits = () => {
  const benefits = [
    {
      "title": "Medical Knowledge",
      "description": "Understanding of medical terminology, anatomy, physiology, and disease processes."
    },
    {
      "title": "Coding Systems Proficiency",
      "description": "Familiarity with various coding systems (ICD-10, ICD-11, CPT, HCPCS, DRGs)."
    },
    {
      "title": "Attention to Detail",
      "description": "Ability to identify key details in medical records and accurately assign codes."
    },
    {
      "title": "Analytical and Critical Thinking",
      "description": "The skill to analyze complex medical information and apply appropriate coding guidelines."
    },
    {
      "title": "Regulatory Knowledge",
      "description": "Awareness of healthcare regulations, compliance standards, and ethical guidelines."
    },
    {
      "title": "Computer Proficiency",
      "description": "Experience with Electronic Health Records (EHR) and coding software."
    },
    {
      "title": "Communication Skills",
      "description": "Effective communication with healthcare providers to clarify documentation."
    }
  ]
  
  return (
    <section className="benefits-section px-3 py-6 ">
      <div className="container">
      <h2 className="text-3xl font-semibold m-4 text-primaryy">Skills and Qualifications of a CCC</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <h5>{benefit.title}</h5>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RHITBenefits;
