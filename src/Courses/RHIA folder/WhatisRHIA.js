import React from 'react';
import rhia from "../../images/courseimage/Health Information Administrator.webp"

const WhatisRHIA = () => {
  return (
    <section className="px-4 container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center">
        {/* Text Section */}
        <div className="col-span-1 md:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy mb-6">
            What is RHIA Certification?
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            Registered Health Information Administrator(RHIA) -certified professionals RHIAs are a critical link between care providers, payers, and patients. The RHIA has a comprehensive knowledge of medical, administrative, ethical, and legal requirements and standards related to healthcare delivery and privacy of protected patient information. RHIAs work in multiple settings in the healthcare industry, including hospitals, multispecialty clinics and physician practices, long-term care, mental health, and other ambulatory care settings. They can also work in non-patient care settings such as managed care and insurance companies, software vendors, consulting services, government agencies, education, and pharmaceutical companies.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-1 md:col-span-6 w-full flex justify-center">
          <img
            src={rhia}
            alt="RHIA Certification"
            className="w-full h-[360px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatisRHIA;
