import React from 'react';
import emergency from "../../images/courseimage/Emergency.webp"

const WhatIsEmergency = () => {
  return (
    <div className='container mx-auto mt-5 px-4'>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center mb-12">
        <div className=" col-span-1 md:col-span-6  ">
          <h2 className="text-3xl font-semibold mb-6 text-primaryy">What is Emergency Department Coding?</h2>
          <p className="text-gray-600 mb-6 ">
            Emergency Department (ED) coding is the process of assigning accurate <strong>CPT, ICD-10-CM,</strong> and <strong>HCPCS Level II codes </strong>to medical services provided in emergency care settings. ED coders specialize in coding for a wide range of procedures and conditions, such as trauma, fractures, lacerations, burns, and other critical care treatments. These codes are essential for ensuring that medical billing for emergency services is processed accurately for insurance claims, helping providers receive proper reimbursement.
          </p>
        </div>
        <div className=' col-span-1 md:col-span-6 w-full flex justify-center'>
          <img
            src={emergency}
            alt='Emergency Department Coding'
            className='w-full h-[360px] md:h-[400px] object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsEmergency;
