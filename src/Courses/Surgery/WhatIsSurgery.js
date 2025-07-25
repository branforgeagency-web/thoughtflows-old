import React from 'react';
import surgeryImage from '../../images/Courses/cpcBanner.jpg';
import surgery from "../../images/Course Images/Surgery Coding.jpg"
const WhatIsSurgery = () => {
  return (
    <div className="px-6 py-10 lg:py-16 lg:px-20 bg-gray-50 flex flex-col space-y-12">
      {/* Heading Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy text-center">
        What is Surgery Coding?
      </h2>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 gap-10 mb-4">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={surgery}
            alt="Surgery Coding"
            className="w-full h-60 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            Surgery coding is the process of assigning standardized medical codes to surgical procedures using classification systems like CPT (Current Procedural Terminology), ICD-10-CM (International Classification of Diseases, 10th Revision, Clinical Modification), and HCPCS Level II (Healthcare Common Procedure Coding System). These codes are essential for:
          </p>
        </div>
      </div>

      {/* Bento Box Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#2e9ea9] rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Medical Billing</h3>
          <p className="text-white text-base leading-relaxed">
            Ensuring accurate reimbursement from insurance providers.
          </p>
        </div>

        <div className="bg-[#2e9ea9] rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Compliance</h3>
          <p className="text-white text-base leading-relaxed">
            Meeting federal regulations and payer requirements.
          </p>
        </div>

        <div className="bg-[#2e9ea9] rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Data Reporting</h3>
          <p className="text-white text-base leading-relaxed">
            Contributing to accurate health data for research and quality improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsSurgery;
