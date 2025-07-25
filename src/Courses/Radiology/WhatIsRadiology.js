import React from 'react';
import surgeryImage from '../../images/Courses/cpcBanner.jpg';
import surgerybanner from '../../images/Courses/cpcBanner.jpg'


const moduleData = [
  {
    "id": 1,
    "title": "X-rays",
    "description": "Learn coding and documentation for radiographic imaging and its applications in medical diagnostics.",
    "image": surgerybanner // Replace with the appropriate image if available
  },
  {
    "id": 2,
    "title": "MRIs (Magnetic Resonance Imaging)",
    "description": "Understand the coding protocols and guidelines for MRI procedures in radiology.",
    "image": surgerybanner // Replace with the appropriate image if available
  },
  {
    "id": 3,
    "title": "CT Scans (Computed Tomography)",
    "description": "Master the coding intricacies for CT scans, including diagnostic and procedural applications.",
    "image": surgerybanner // Replace with the appropriate image if available
  },
  {
    "id": 4,
    "title": "Ultrasounds",
    "description": "Develop proficiency in coding and documentation for ultrasound imaging techniques.",
    "image": surgerybanner // Replace with the appropriate image if available
  },
  {
    "id": 5,
    "title": "Interventional Radiology Procedures",
    "description": "Gain expertise in coding for interventional radiology procedures, including diagnostic and therapeutic techniques.",
    "image": surgerybanner // Replace with the appropriate image if available
  }
];


const WhatIsRadiology = () => {
  return (
    <div className="flex-col justify-center items-center px-8 sm:px-16 lg:px-32 py-10">
      <h2 className="text-3xl font-semibold py-6 text-center text-primaryy">What is Radiology Coding?</h2>
      <p className="text-gray-600  text-center">
        Radiology coding is the process of assigning precise CPT, ICD-10-CM, and HCPCS Level II codes to diagnostic imaging services. These services include:
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {moduleData.map(module => (
          <div key={module.id} className="relative group w-96">
            {/* Image and Overlay */}
            <img
              src={module.image}
              alt={module.title}
              className="w-full h-56 object-cover rounded-lg transition-all ease-in-out duration-300 group-hover:opacity-80"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-secondaryy opacity-80 rounded-lg transition-all ease-in-out duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-10 w-full">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {module.title}
              </h3>
              <p className="text-sm mt-2 text-white opacity-90">{module.description}</p>
            </div>

            {/* Card Hover Effect (Shadow and Elevation) */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition-all ease-in-out duration-300" />
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
