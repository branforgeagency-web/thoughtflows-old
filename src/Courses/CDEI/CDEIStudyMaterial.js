

import React from "react";

const CRCStudyMaterial = () => {
    return (
        <div className=" bg-slate-100 px-3 my-8 py-3 ">


            {/* Books Required Section */}

            <div className=' container grid grid-cols-1 md:grid-cols-12    mt-12 '>


                <div className=' col-span-1 md:col-span-6 '>
                    <section className="pt-6 px-6 md:px-6  bg-blue-100    border-2 border-blue-400 pb-24">
                        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-3">Who Can Apply for CRC?</h2>
                        {/* <p>Anyone interested in medical auditing and compliance can pursue the Certified Professional Medical Auditor (CPMA) certification, especially those with a background in:
                        </p> */}
                        <ul className="list-disc list-insiderounded-lg p-2 text-gray-700">
                            <li className="mb-2"><strong>Medical Coders</strong>looking to specialize in risk adjustment.</li>

                            <li className="mb-2"><strong>Healthcare Professionals:</strong> such as nurses and documentation specialists.</li>

                            <li className="mb-2">Individuals with <strong> basic knowledge of medical terminology and coding.</strong> </li>

                            <li className="mb-2">Professionals seeking to advance their careers in medical auditing and coding.</li>
                            <li className="mb-2"><strong>No strict prerequisites</strong>a background in medical coding is beneficial but not mandatory.</li>

                        </ul>

                    </section>
                </div>



                <div className=' col-span-1 md:col-span-6 pt-6 bg-[#19959f4a] '>
                    <section className=" px-6 md:px-6">
                        <h2 className="text-2xl md:text-4xl font-semibold r mb-4">Books Used in CRC Course</h2>

                        <p>1. <strong>AAPC CRC® Certification Study Guide</strong></p>
                        <p>2. <strong>ICD-10-CM Coding Manual </strong></p>
                        <p>3. <strong>ICD-10-CM Coding Manual
                            Medical Terminology and Anatomy Reference Guides
                        </strong> </p>
                        <p>4. Current year’s<strong>ICD-10-CM</strong>coding manual (approved by AAPC)</p>
                        <p>5. <strong>Official Guidelines for Coding and Reporting</strong></p>

                        <h4>Recertification</h4>

                        <ul className="list-disc">
                            <li>Certification is valid for <strong>2 years.</strong></li>
                            <li>Requires <strong>36 CEUs (Continuing Education Units)</strong> to maintain certification.</li>
                        </ul>
                    </section>
                </div>





                {/* 
                <div className=' col-span-1 md:col-span-4  '>
                    <section className=" px-6 md:px-16">
                        <h2 className="text-2xl md:text-4xl font-semibold r mb-4">Additional Study Resources.</h2>
                        <p>1. Chapter-wise self-study guides.</p>
                        <p>2. Coding guidelines and conventions</p>
                        <p>3. Practice question banks</p>
                        <p>4. Revision tests and mock exams</p>
                    </section>
                </div> */}
            </div>





        </div>
    );
};

export default CRCStudyMaterial;
