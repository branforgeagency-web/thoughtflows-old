import React from "react";
import ccs from "../../images/courseimage/Coding Specialist Physician.webp"

const WhatIsEvaluation = () => {
  return (
    <section className="px-4 container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center">
        {/* Text Section */}
        <div className="col-span-1 md:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy mb-6">
            What is CCS-P?
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">
            The Certified Coding Specialist – Physician-based (CCS-P) certification is awarded by the American Health Information Management Association (AHIMA). It is a highly esteemed credential designed for professionals specializing in medical coding for outpatient healthcare settings, particularly in physician offices, group practices, multi-specialty clinics, and specialty centers. The CCS-P certification validates a coder's ability to accurately apply coding systems to a variety of medical scenarios involving outpatient care.
          </p>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            A CCS-P certification is essential for professionals looking to work in settings where medical coding is required for physician-based services, and it reflects a high level of proficiency in coding for outpatient procedures, diagnoses, and services. The certification demonstrates the coder's expertise in working with complex coding systems, regulatory compliance, and the financial aspects of healthcare billing. A CCS-P is widely recognized by healthcare employers as an indication of competence and industry knowledge.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-1 md:col-span-6 w-full flex justify-center">
          <img
            src={ccs}
            alt="CCS-P"
            className="w-full h-[360px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsEvaluation;
