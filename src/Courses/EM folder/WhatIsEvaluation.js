import React from 'react';
import em from "../../images/courseimage/Evaluation and Management.webp"

const WhatIsEvaluation = () => {
  return (
    <div className='container mx-auto mt-5 px-4'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center mb-12">
        <div className=" col-span-1 md:col-span-6  ">
          <h2 className="text-3xl font-semibold mb-6 text-primaryy">What is Evaluation and Management (E/M) Training?</h2>
          <p className="text-gray-600 mb-6 ">
            Evaluation and Management (E/M) coding is an essential process in the medical billing and coding field. It involves accurately assigning CPT (Current Procedural Terminology), ICD-10-CM (International Classification of Diseases, 10th edition, Clinical Modification), and HCPCS Level II codes for medical services provided during patient visits. These services typically include diagnosis, treatment, evaluation, and management of patients. E/M coders determine the appropriate codes based on documentation such as medical history, physical examinations, and the complexity of medical decision-making. This ensures proper billing, reimbursement, and compliance with healthcare regulations
          </p>
        </div>
        <div className=' col-span-1 md:col-span-6 w-full flex justify-center'>
          <img
            src={em}
            alt='Evaluation and Management'
            className='w-full h-[360px] md:h-[400px] object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsEvaluation;
