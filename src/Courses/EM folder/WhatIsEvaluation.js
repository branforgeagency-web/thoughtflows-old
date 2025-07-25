import React from 'react';
import surgeryImage from '../../images/Courses/cpcBanner.jpg';
import em from "../../images/Course Images/What is Evaluation and Management.jpg"
const WhatIsEvaluation = () => {
  return (
    <div className="px-6 py-10 lg:py-16 lg:px-20 bg-gray-50 flex flex-col space-y-12">
      {/* Heading Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy text-center">
        What is Evaluation and Management (E/M) Training?
      </h2>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 gap-10 mb-4">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={em}
            alt="Surgery Coding"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            Evaluation and Management (E/M) coding is an essential process in the medical billing and coding field. It involves accurately assigning CPT (Current Procedural Terminology), ICD-10-CM (International Classification of Diseases, 10th edition, Clinical Modification), and HCPCS Level II codes for medical services provided during patient visits. These services typically include diagnosis, treatment, evaluation, and management of patients. E/M coders determine the appropriate codes based on documentation such as medical history, physical examinations, and the complexity of medical decision-making. This ensures proper billing, reimbursement, and compliance with healthcare regulations
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

export default WhatIsEvaluation;
