import React from "react";
import ccc from "../../images/courseimage/ccc.webp"

const WhatIsEvaluation = () => {
  return (
    <div className='container mx-auto mt-5 px-4'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center mb-12">
        <div className=" col-span-1 md:col-span-6  ">
          <h2 className="text-3xl font-semibold mb-6 text-primaryy"> What is a Certified Cardiology Coder(CCC)?</h2>
          <p className="text-gray-600 mb-6 ">
            Clinical Coders Convert(CCC) clinical information from patients' medical records into alphanumeric codes according to a health classification system. These codes form part of a data collection which is used for research, funding and healthcare planning.
            Clinical coding involves reading patient information, abstracting key information from it, using the classification system to identify the right codes and entering them into a computer system. Clinical coding can involve liaising with clinical staff to clarify what has been documented. All public and private hospitals require clinical coding to occur.
          </p>
        </div>
        <div className=' col-span-1 md:col-span-6 w-full flex justify-center'>
          <img
            src={ccc}
            alt='Certified Cardiology Coder'
            className='w-full h-[360px] md:h-[400px] object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsEvaluation;
