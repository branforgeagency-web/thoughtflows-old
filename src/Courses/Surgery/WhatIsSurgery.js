import React from 'react';
import surgery from "../../images/courseimage/Surgery.webp"

const WhatIsSurgery = () => {
  return (
    <div className='container mx-auto mt-5 px-4'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center mb-12">
        <div className=" col-span-1 md:col-span-6  ">
          <h2 className="text-3xl font-semibold mb-6 text-primaryy">What is Surgery Coding?</h2>
          <p className="text-gray-600 mb-6 ">
            Surgery coding is the process of assigning standardized medical codes to surgical procedures using classification systems like CPT (Current Procedural Terminology), ICD-10-CM (International Classification of Diseases, 10th Revision, Clinical Modification), and HCPCS Level II (Healthcare Common Procedure Coding System). These codes are essential for:
          </p>
        </div>
        <div className=' col-span-1 md:col-span-6 w-full flex justify-center'>
          <img
            src={surgery}
            alt="Surgery Coding"
            className="w-full h-[360px] md:h-[400px] object-contain"
          />
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
