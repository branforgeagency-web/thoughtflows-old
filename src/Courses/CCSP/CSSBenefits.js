import React from "react";

const RHITBenefits = () => {
  const benefits = [
    {
      "title": "Expertise in Coding Systems",
      "description": "A deep knowledge of CPT®, ICD-10-CM, and HCPCS Level II codes is essential. CCS-P coders must be able to navigate and apply these codes efficiently, ensuring accuracy in all medical records."
    },
    {
      "title": "Attention to Detail",
      "description": "CCS-P coders must possess exceptional attention to detail to ensure the accuracy of the codes they assign. Even a small error in coding could lead to claim denials, reimbursement delays, or compliance issues."
    },
    {
      "title": "Understanding of Medical Terminology",
      "description": "A strong grasp of medical terminology and human anatomy is essential for interpreting medical records accurately. CCS-P coders must understand the terms used by physicians to ensure that the correct codes are assigned to each procedure and diagnosis."
    },
    {
      "title": "Critical Thinking and Problem Solving",
      "description": "Coders must be able to analyze and interpret complex medical records. Critical thinking is required to understand the context of diagnoses and treatments and determine the appropriate codes to assign."
    },
    {
      "title": "Familiarity with Healthcare Laws and Ethics",
      "description": "CCS-P coders must be familiar with healthcare laws, regulations, and ethical standards. This includes understanding compliance guidelines such as HIPAA and knowing how to handle sensitive patient information."
    }
  ]
  
  
  return (
    <section className="benefits-section px-3 py-6 ">
      <div className="container">
      <h2 className="text-3xl font-semibold m-4 pt-5 text-primaryy">Skills and Knowledge Required for CCS-P Coders</h2>
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
