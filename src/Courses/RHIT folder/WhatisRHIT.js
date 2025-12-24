import React from 'react';
import rhit from "../../images/courseimage/Health Information Technician.webp"

const WhatisRHIT = () => {
  return (
    <section className="px-4 container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center">
        {/* Text Section */}
        <div className="col-span-1 md:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy mb-6">
            What is RHIT?
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-0 ">
            Registered Health Information Technician(RHIT) -certified professionals work in hospitals, but are also found in other healthcare setting including office-based physician practices, nursing homes, home health agencies, mental health facilities, and public health agencies. RHITs may also be employed in any organization that uses patient data or health information, such as pharmaceutical companies, law and insurance firms, and health product vendors.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-1 md:col-span-6 w-full flex justify-center">
          <img
            src={rhit}
            alt="RHIT"
            className="w-full h-[360px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatisRHIT;
