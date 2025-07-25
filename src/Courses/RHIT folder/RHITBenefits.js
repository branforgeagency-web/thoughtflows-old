import React from "react";

const RHITBenefits = () => {
  const benefits = [
    {
      title: "Career Advancement",
      description:
        "The RHIT certification opens doors to various roles, such as Medical Coder, Health Information Manager, Data Analyst, and Compliance Officer.",
    },
    {
      title: "Industry Recognition",
      description:
        "The RHIT credential is recognized as a mark of excellence by healthcare employers and regulatory bodies.",
    },
    {
      title: "Job Security",
      description:
        "With the increasing demand for certified health information professionals, RHIT-certified individuals are in high demand.",
    },
    {
      title: "Salary Boost",
      description:
        " RHIT certification can lead to higher earning potential and salary growth.",
    },
    {
      title: "Professional Development",
      description:
        " As a certified RHIT, you’ll have access to professional development opportunities and networks within the health information management industry.",
    },
  ];

  return (
    <section className="benefits-section px-3 ">
      <div className="container">
      <h2 className="text-3xl font-semibold mb-4 text-primaryy">Why Should You Pursue RHIT Certification?</h2>
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
