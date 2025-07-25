import React from 'react';
import surgeryImage from '../../images/Courses/cpcBanner.jpg';
import rhit from "../../images/Course Images/What is RHIT.jpg"
const WhatisRHIT = () => {
  return (
    <div className="px-6 py-5 lg:py-10 lg:px-20 bg-gray-50 flex flex-col space-y-12">
      {/* Heading Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy text-center">
      What is RHIT?
      </h2>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 gap-10 mb-4">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={rhit}
            alt="Surgery Coding"
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base lg:text-md leading-relaxed mb-0 ">
          The Registered Health Information Technician (RHIT) certification is a credential offered by the American Health Information Management Association (AHIMA) that signifies expertise in managing and securing patient health information. RHITs are skilled in organizing, analyzing, and managing health records and data, ensuring that they are accurate, complete, and secure. This certification is highly recognized in the healthcare industry and essential for those pursuing a career in health information management.          </p>
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

export default WhatisRHIT;
