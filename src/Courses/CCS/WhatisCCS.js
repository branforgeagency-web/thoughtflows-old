import React from 'react';
import ccs from "../../images/courseimage/Coding Specialist.webp"

const WhatisCCS = () => {
  return (
    <section className="px-4 container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center">
        {/* Text Section */}
        <div className="col-span-1 md:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy mb-6">
            What is CCS Certification?
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            The Certified Coding Specialist (CCS) credential, offered by the American Health Information Management Association (AHIMA), is a highly respected certification for medical coders who specialize in both inpatient and outpatient coding. A CCS-certified professional demonstrates mastery of coding diagnoses, procedures, and understanding of coding guidelines, reimbursement methodologies, and healthcare regulations.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-1 md:col-span-6 w-full flex justify-center">
          <img
            src={ccs}
            alt="CCS Certification"
            className="w-full h-[360px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatisCCS;
