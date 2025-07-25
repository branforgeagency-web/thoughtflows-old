import React from "react";

const RHIAWork = () => {
  const workplaces = [
    {
      title: "Hospitals and Clinics"
    },
    {
      title: "Insurance Companies"
    },
    {
      title: "Government Agencies"
    },
    {
      title: "Health IT Vendors"
    },
    {
      title: "Consulting Firms"
    },
    {
      title: "Educational Institutions"
    },
  ];

  return (
    <section className="work-places">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy">Where Do RHIA Professionals Work?</h2>
        <p className="section-subtitle">
          RHIAs are in demand in various healthcare and related settings, including:
        </p>
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

export default RHIAWork;
