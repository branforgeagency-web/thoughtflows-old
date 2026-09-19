import React from 'react';
import ipdrug from "../../images/courseimage/Inpatient Drug.webp"

const WhatisIpDrug = () => {
  return (
    <section className="px-4 container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center">
        {/* Text Section */}
        <div className="col-span-1 md:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy mb-6">
            What is IPDRG Training?
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            Inpatient Prospective Diagnosis-Related Group (IPDRG) Training equips coders with the skills to accurately assign ICD-10-CM and ICD-10-PCS codes for inpatient hospital services. This specialized training focuses on coding diagnoses and procedures performed during hospital stays to ensure accurate reimbursement under the MS-DRG (Medicare Severity Diagnosis-Related Group) and the IPPS (Inpatient Prospective Payment System). The training emphasizes compliance with healthcare regulations and documentation standards.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-1 md:col-span-6 w-full flex justify-center">
          <img
            src={ipdrug}
            alt="IPDRG Training"
            className="w-full h-[360px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatisIpDrug;
