import React from "react";
import surgeryImage from "../../images/Courses/cpcBanner.jpg";
import ccs from "../../images/Course Images/What is CCS-P.jpg"
const WhatIsEvaluation = () => {
  return (
    <div className="px-6 py-10 lg:py-16 lg:px-20 bg-gray-50 flex flex-col space-y-12">
      {/* Heading Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy text-center">
      What is CCS-P?
      </h2>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 gap-10 mb-4">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={ccs}
            alt="Surgery Coding"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          The Certified Coding Specialist – Physician-based (CCS-P) certification is awarded by the American Health Information Management Association (AHIMA). It is a highly esteemed credential designed for professionals specializing in medical coding for outpatient healthcare settings, particularly in physician offices, group practices, multi-specialty clinics, and specialty centers. The CCS-P certification validates a coder's ability to accurately apply coding systems to a variety of medical scenarios involving outpatient care.<br></br>
A CCS-P certification is essential for professionals looking to work in settings where medical coding is required for physician-based services, and it reflects a high level of proficiency in coding for outpatient procedures, diagnoses, and services. The certification demonstrates the coder's expertise in working with complex coding systems, regulatory compliance, and the financial aspects of healthcare billing. A CCS-P is widely recognized by healthcare employers as an indication of competence and industry knowledge.

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
