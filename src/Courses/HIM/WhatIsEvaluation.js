import React from "react";
import him from "../../images/courseimage/Information Management.webp"

const WhatIsEvaluation = () => {
  return (
    <section className="px-4 container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center">
        {/* Text Section */}
        <div className="col-span-1 md:col-span-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondaryy mb-6">
            What is HIM (Healthcare Information Management)?
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            The Healthcare Information Management(HIM) professional applies their knowledge and skills to create, acquire, analyse and/or manage information to meet the medical, legal, ethical and/or administrative requirements of the health care system. The HIMAA Health Information Manager (HIM) Competency Standards define the knowledge and skills required of a health information management professional. A health information management professional may apply some or all of the HIMAA Health Information Manager (HIM) Competency Standards in their daily professional practice. Two examples of health information professionals are Health Information Managers (HIM) and Clinical Coders (CC).
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-1 md:col-span-6 w-full flex justify-center">
          <img
            src={him}
            alt="HIM"
            className="w-full h-[360px] md:h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsEvaluation;
