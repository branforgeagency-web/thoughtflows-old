import React from "react";

const RHITWork = () => {
  const workplaces = [
    {
      title: "Understand and apply coding systems like ICD-10-CM, CPT®, and HCPCS."
    },
    {
      title: "Manage and protect patient information in compliance with regulations."
    },
    {
      title: "Perform data analytics and use healthcare information systems effectively."
    },
    {
      title: "Prepare for the RHIT exam with confidence."
    },
  ];

  return (
    <section className="work-places">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy">Course Objectives</h2>
        <p className="section-subtitle">
        The RHIT Certification Training aims to equip students with the necessary skills and knowledge to:        </p>
        <div className="row">
          {workplaces.map((workplace, index) => (
            <div key={index} className="col-md-4">
              <div className="work-item">
                <h6>{workplace.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RHITWork;
