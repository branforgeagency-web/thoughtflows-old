import React from "react";
import surgeryImage from "../../images/Courses/cpcBanner.jpg";
import ccc from "../../images/Course Images/What is a Clinical Coder.jpg"
const WhatIsEvaluation = () => {
  return (
    <div className="px-6 py-10 lg:py-16 lg:px-20 bg-gray-50 flex flex-col space-y-12">
      {/* Heading Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy text-center">
        What is a Certified Cardiology Coder(CCC)?{" "}
      </h2>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 gap-10 mb-4">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={ccc}
            alt="Surgery Coding"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            Clinical Coders Convert(CCC) clinical information from patients' medical records into alphanumeric codes according to a health classification system. These codes form part of a data collection which is used for research, funding and healthcare planning.
            Clinical coding involves reading patient information, abstracting key information from it, using the classification system to identify the right codes and entering them into a computer system. Clinical coding can involve liaising with clinical staff to clarify what has been documented. All public and private hospitals require clinical coding to occur.
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
