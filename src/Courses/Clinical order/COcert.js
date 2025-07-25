import React from "react";

const RHITBenefits = () => {
  const benefits = [
    {
      "title": "CPC (Certified Professional Coder) by AAPC"
    },
    {
      "title": "CCA (Certified Coding Associate) by AHIMA"
    },
    {
      "title": "CCS (Certified Coding Specialist) by AHIMA"
    },
    {
      "title": "CIC (Certified Inpatient Coder) by AAPC"
    }
  ]
  
  
  return (
    <section className="benefits-section px-3 py-10 ">
      <div className="container">
      <h2 className="text-3xl font-semibold m-4 mt-5 text-primaryy">Certifications for  CCC</h2>
      <p>Certifications demonstrate competence and knowledge in medical coding. Popular certifications include:
      </p>
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
