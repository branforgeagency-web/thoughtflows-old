


import React from "react";

const COCStudymaterial = () => {
    return (
        <div className=" bg-slate-100 my-8 px-3 py-3 ">


            {/* Books Required Section */}

            <div className=' container grid grid-cols-1 md:grid-cols-12    mt-12 '>


                <div className=' col-span-1 md:col-span-8  '>
                    <section className="pt-6 px-6 md:px-6  bg-blue-100  pb-1  border-2 border-blue-400">
                        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-3">Who Can Apply for the COC ?</h2>
                        <ul className="list-disc list-insiderounded-lg p-2 text-gray-700">
                            <li className="mb-2"><strong>Healthcare Professionals:</strong> Individuals with a background in healthcare or related fields can apply for COC certification.</li>
                        
                            <li className="mb-2"><strong>Career Changers:</strong> Those looking to transition into the field of medical coding can pursue COC certification.</li>

                            <li className="mb-2"><strong>No Formal Prerequisites:</strong> There are no strict educational requirements for COC, though some foundational knowledge in medical terminology and anatomy is helpful.</li>

                            <li className="mb-2"><strong>Aspiring Coders:</strong> Anyone interested in advancing their career in outpatient medical coding can apply.</li>

                            <li className="mb-2"><strong>New Coders:</strong>  Beginners in the coding field, especially those focusing on outpatient care, are encouraged to apply​.</li>
                        </ul>
                    </section>
                </div>



                <div className=' col-span-1 md:col-span-4 pt-6 bg-[#19959f4a] '>
                    <section className=" px-6 md:px-6">
                        <h2 className="text-2xl md:text-4xl font-semibold r mb-4">COC Study Materials</h2>
                        <p>1. <strong>AAPC-approved Books: </strong>ICD-10-CM, CPT, and HCPCS Level II manuals.</p>
                        <p>2. <strong>Self-Study Guides: </strong>Helpful chapter-wise guides to reinforce your learning.</p>
                        <p>3. <strong>Mock Tests: </strong>Practice exams to assess your knowledge and readiness for the certification exam.</p>
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

export default COCStudymaterial;
