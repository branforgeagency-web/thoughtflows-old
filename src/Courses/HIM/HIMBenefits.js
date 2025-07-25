import React from "react";

const RHITBenefits = () => {
  const benefits = [
    {
      "title": "Job Stability",
      "description": "Growing demand in healthcare."
    },
    {
      "title": "Good Earning Potential",
      "description": "Competitive salaries, especially with certifications."
    },
    {
      "title": "Career Growth",
      "description": "Opportunities to advance to managerial roles."
    },
    {
      "title": "Flexible Work",
      "description": "Options for remote or part-time work."
    },
    {
      "title": "Contribution to Healthcare",
      "description": "Ensure accurate data management for patient care."
    },
    {
      "title": "Job Satisfaction",
      "description": "Play an essential role in healthcare efficiency."
    }
  ]
  
  
  return (
    <section className="benefits-section px-3 py-6 ">
      <div className="container">
      <h2 className="text-3xl font-semibold m-4 text-primaryy">Benefits of Being an HIM Coder</h2>
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
