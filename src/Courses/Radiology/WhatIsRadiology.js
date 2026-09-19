import React from 'react';
import radiologyImg from "../../images/courseimage/Radiology.webp";


const moduleData = [
  {
    "id": 1,
    "title": "X-rays",
    "description": "Learn coding and documentation for radiographic imaging and its applications in medical diagnostics."
  },
  {
    "id": 2,
    "title": "MRIs (Magnetic Resonance Imaging)",
    "description": "Understand the coding protocols and guidelines for MRI procedures in radiology."
  },
  {
    "id": 3,
    "title": "CT Scans (Computed Tomography)",
    "description": "Master the coding intricacies for CT scans, including diagnostic and procedural applications."
  },
  {
    "id": 4,
    "title": "Ultrasounds",
    "description": "Develop proficiency in coding and documentation for ultrasound imaging techniques."
  },
  {
    "id": 5,
    "title": "Interventional Radiology Procedures",
    "description": "Gain expertise in coding for interventional radiology procedures, including diagnostic and therapeutic techniques."
  }
];


const WhatIsRadiology = () => {
  return (
    <div className='container mx-auto mt-5 px-4'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center mb-12">
        <div className=" col-span-1 md:col-span-6  ">
          <h2 className="text-3xl font-semibold mb-6 text-primaryy">What is Radiology Coding?</h2>
          <p className="text-gray-600 mb-6 ">
            Radiology coding is the process of assigning precise CPT, ICD-10-CM, and HCPCS Level II codes to diagnostic imaging services. These services include:
          </p>
        </div>
        <div className=' col-span-1 md:col-span-6 w-full flex justify-center'>
          <img
            src={radiologyImg}
            alt='Radiology Coding'
            className='w-full h-[360px] md:h-[400px] object-contain'
          />
        </div>
      </div>

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
        <p className="text-gray-600 mt-12 text-center">
          This specialized form of coding ensures that healthcare providers are properly reimbursed for these services while adhering to regulatory standards set by Medicare, private payers, and healthcare authorities. Radiology coders play a key role in ensuring the accuracy of codes, which affects reimbursement rates and reduces the likelihood of claim denials.
        </p>

        <p className="text-gray-600 text-center">
          By assigning the correct codes, radiology coders contribute significantly to the revenue cycle management of healthcare organizations and ensure compliance with both payer-specific guidelines and federal regulations.
        </p>
      </div>
    </div>
  );
};

export default WhatIsRadiology;
