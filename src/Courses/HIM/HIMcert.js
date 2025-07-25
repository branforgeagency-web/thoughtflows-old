import React from "react";

const RHITBenefits = () => {
  const benefits = [
    {
      "title": "Medical Terminology and Anatomy"
    },
    {
      "title": "ICD-10, CPT, HCPCS coding systems"
    },
    {
      "title": "Attention to Detail"
    },
    {
      "title": "Analytical Skills"
    },
    {
      "title": "Regulatory Compliance Knowledge (HIPAA)"
    },
    {
      "title": "Computer Proficiency"
    },
    {
      "title": "Communication Skills"
    }
  ]
  
  
  
  return (
    <section className="benefits-section px-3 py-10 ">
      <div className="container">
      <h2 className="text-3xl font-semibold m-4 text-primaryy">Skills and Knowledge Required</h2>
      {/* <p>Certifications demonstrate competence and knowledge in medical coding. Popular certifications include:
      </p> */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <h5>{benefit.title}</h5>
              {/* <p>{benefit.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RHITBenefits;
