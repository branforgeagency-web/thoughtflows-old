import React from "react";

const RHIABenefits = () => {
  const benefits = [
    {
      title: "Career Advancement",
      description:
        "Demonstrates leadership in health information management.",
    },
    {
      title: "High Demand",
      description:
        "Increased job opportunities in a growing healthcare field.",
    },
    {
      title: "Competitive Salary",
      description:
        "Recognized credential for higher-level roles.",
    },
    {
      title: "Versatility",
      description:
        "Applicable to various roles, including data analysis, compliance, and administration.",
    },
  ];

  return (
    <section className="benefits-section px-3 ">
      <div className="container">
      <h2 className="text-3xl font-semibold mb-4 text-primaryy">Benefits of RHIA Certification</h2>
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

export default RHIABenefits;
