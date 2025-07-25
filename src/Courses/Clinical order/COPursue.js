import React from "react";

const RhitPursue = () => {
  const benefits = [
    {
      "title": "Hospitals (inpatient and outpatient departments)"
    },
    {
      "title": "Clinics and Physician Practices"
    },
    {
      "title": "Insurance Companies (health insurers, third-party payers)"
    },
    {
      "title": "Government Health Departments"
    },
    {
      "title": "Medical Coding and Billing Companies"
    },
    {
      "title": "Research Institutions (health data analysis)"
    },
    {
      "title": "Telehealth Companies (remote coding roles)"
    }
  ];
  

  return (
    <div className="bg-gray-100 px-3 py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold mb-4 text-primaryy text-center">
        Work Settings for CCC      </h2>
<p className="text-lg  text-center">CCC work in various healthcare environments, including:</p>
        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              {/* Icon */}
              {/* <div className="text-4xl mb-4" style={{color:' #0e3d69'}}>
                <i className={benefit.icon}></i>
              </div> */}
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              {/* Subtitle */}
              {/* <p className="text-gray-600">{benefit.subtitle}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RhitPursue;
