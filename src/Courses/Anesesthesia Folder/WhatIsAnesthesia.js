import React from 'react';


const moduleData = [
  {
    "id": 1,
    "title": "General Anesesthesia",
    "description": "Understand the principles and coding requirements for general anesthesia in various medical procedures."
  },
  {
    "id": 2,
    "title": "Regional Anesesthesia (e.g., epidurals)",
    "description": "Learn the coding guidelines for regional anesthesia techniques, including epidurals and nerve blocks."
  },
  {
    "id": 3,
    "title": "Monitored Anesesthesia Care (MAC)",
    "description": "Gain proficiency in documenting and coding for Monitored Anesthesia Care (MAC) services in diverse medical settings."
  }
];


const WhatIsAnesthesia = () => {
  return (
    <div className="flex-col justify-center items-center px-8 sm:px-16 lg:px-32 py-10">
      <h2 className="text-3xl font-semibold py-6 text-center text-primaryy">What is Anesesthesia Coding?</h2>
      <p className="text-gray-600 mb-12 text-center">
      Anesesthesia coding involves the precise assignment of CPT, ICD-10-CM, and HCPCS Level II codes to anesthesia services provided during surgical procedures, pain management, and other medical interventions. Accurate anesthesia coding is crucial for ensuring appropriate reimbursement, reducing denials, and maintaining compliance with healthcare regulations.
      </p>
      <p className="text-gray-600 mb-12 text-center">
      Anesesthesia coders are responsible for documenting various types of anesthesia, including:
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {moduleData.map(module => (
          <div key={module.id} className="relative group w-96">
            <div className="w-full h-56 rounded-lg transition-colors ease-in-out duration-300 bg-[#15AEBB] group-hover:bg-[#097D8A]" />
            <div className="absolute top-0 left-0 w-full h-full bg-secondaryy opacity-40 rounded-lg transition-all ease-in-out duration-300 group-hover:opacity-60 pointer-events-none" />

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-10 w-full z-10">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {module.title}
              </h3>
              <p className="text-sm mt-2 text-white opacity-90">{module.description}</p>
            </div>

            {/* Card Hover Effect (Shadow and Elevation) */}
            <div className="absolute inset-0 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow ease-in-out duration-300 pointer-events-none" />
          </div>
        ))}
        <p className="text-gray-600 mt-6 text-center">
          This specialization requires attention to detail, understanding anesthesia time calculations, and applying modifiers accurately.
        </p>
      </div>
    </div>
  );
};

export default WhatIsAnesthesia;
