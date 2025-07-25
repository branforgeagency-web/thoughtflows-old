


import React from "react";

const CPMAStudeyMAterial = () => {
    return (
        <div className=" bg-slate-100 px-3 my-8 py-3 ">


            {/* Books Required Section */}

            <div className=' container grid grid-cols-1 md:grid-cols-12    mt-12 '>


                <div className=' col-span-1 md:col-span-7 '>
                    <section className="pt-6 px-6 md:px-6  bg-blue-100  pb-1  border-2 border-blue-400">
                        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-3">Who Can Apply for CPMA Certification?</h2>
                        <p>Anyone interested in medical auditing and compliance can pursue the Certified Professional Medical Auditor (CPMA) certification, especially those with a background in:
                        </p>
                        <ul className="list-disc list-insiderounded-lg p-2 text-gray-700">
                            <li className="mb-2"><strong>Medical Coding:</strong>Professionals familiar with coding systems like ICD-10, CPT®, and HCPCS.</li>

                            <li className="mb-2"><strong>Healthcare Billing:</strong> Those experienced in billing processes.</li>

                            <li className="mb-2"><strong>Healthcare Administration:</strong> Individuals working in healthcare facilities who want to specialize in auditing.</li>

                            <li className="mb-2"><strong>Compliance Officers:</strong> People looking to add auditing expertise to their compliance roles.</li>


                        </ul>

                        <p>While a background in healthcare is recommended, it’s not mandatory. Basic knowledge of medical terminology, anatomy, and coding principles can be helpful.</p>
                    </section>
                </div>



                <div className=' col-span-1 md:col-span-5 pt-6 bg-[#19959f4a] '>
                    <section className=" px-6 md:px-6">
                        <h2 className="text-2xl md:text-4xl font-semibold r mb-4">Books Used in CPMA Course</h2>
                        <p>The study materials for CPMA typically include:</p>
                        <p>1. <strong>CPT® Professional Edition </strong> (most recent version)</p>
                        <p>2. <strong>ICD-10-CM </strong>(Diagnosis coding)</p>
                        <p>3. <strong>HCPCS Level II </strong> (Coding for procedures and services)</p>
                        <p>4. <strong>AAPC's CPMA Self-Study Guide</strong></p>
                        <p>5. <strong>Practice Tests</strong>to prepare for the certification exam.</p>
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

export default CPMAStudeyMAterial;
