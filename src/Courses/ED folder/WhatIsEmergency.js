import React from 'react';
import surgeryImage from '../../images/Courses/cpcBanner.jpg';
import emergency from "../../images/Course Images/What is Emergency Department Coding.jpg"
const WhatIsEmergency = () => {
  return (
    <div className="px-6 py-10 lg:py-16 lg:px-20 bg-gray-50 flex flex-col space-y-12">
      {/* Heading Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy text-center">
        What is Emergency Department Coding?
      </h2>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 gap-10 mb-4">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={emergency}
            alt="Surgery Coding"
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            Emergency Department (ED) coding is the process of assigning accurate <strong>CPT, ICD-10-CM,</strong> and <strong>HCPCS Level II codes </strong>to medical services provided in emergency care settings. ED coders specialize in coding for a wide range of procedures and conditions, such as trauma, fractures, lacerations, burns, and other critical care treatments. These codes are essential for ensuring that medical billing for emergency services is processed accurately for insurance claims, helping providers receive proper reimbursement.
          </p>
        </div>
      </div>

      {/* Bento Box Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primaryy rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Medical Billing</h3>
          <p className="text-white text-base leading-relaxed">
            Ensuring accurate reimbursement from insurance providers.
          </p>
        </div>

        <div className="bg-primaryy rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Compliance</h3>
          <p className="text-white text-base leading-relaxed">
            Meeting federal regulations and payer requirements.
          </p>
        </div>

        <div className="bg-primaryy rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Data Reporting</h3>
          <p className="text-white text-base leading-relaxed">
            Contributing to accurate health data for research and quality improvement.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default WhatIsEmergency;
