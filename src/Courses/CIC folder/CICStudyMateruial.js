import React from "react";

const CICStudyMaterials = () => {
    return (
        <div className=" px-4 min-h-screen container">


            {/* Books Required Section */}

            <div className='grid  grid-cols-1 md:grid-cols-12 gap-2 items-center mt-12 bg-[#19959f4a] rounded-2xl'>
                <div className=' col-span-1 md:col-span-4  '>
                    <section className=" px-6 md:px-16">
                        <h2 className="text-2xl md:text-4xl font-semibold r mb-4">Books Required for CIC Exam</h2>
                        <p>1. <strong>ICD-10-CM: </strong>For diagnosis coding.</p>
                        <p>2. <strong>ICD-10-PCS: </strong> For procedure coding.</p>
                        <p>3. <strong>CPT: </strong>Essential for understanding medical procedures and services in hospitals</p>

                    </section>
                </div>



                <div className=' col-span-1 md:col-span-4  '>
                    <section className="pt-6 px-6 md:px-16  bg-blue-100  pb-1 ">
                        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-3">Who Can Apply for the CIC Training?</h2>
                        <ul className="list-disc list-insiderounded-lg p-2 text-gray-700">
                            <li className="mb-2">Medical coding aspirants</li>
                            <li className="mb-2">Healthcare professionals (nurses, medical assistants)</li>
                            <li className="mb-2">Certified Professional Coders (CPC) looking to specialize in inpatient coding</li>
                            <li className="mb-0">Anyone with knowledge of medical terminology, anatomy, and pathophysiology</li>
                        </ul>
                    </section>
                </div>


                <div className=' col-span-1 md:col-span-4  '>
                    <section className=" px-6 md:px-16">
                        <h2 className="text-2xl md:text-4xl font-semibold r mb-4">Additional Study Resources.</h2>
                        <p>1. Chapter-wise self-study guides.</p>
                        <p>2. Coding guidelines and conventions</p>
                        <p>3. Practice question banks</p>
                        <p>4. Revision tests and mock exams</p>
                    </section>
                </div>
            </div>
            {/* How to Get Your First Job Section */}

            <section className=" py-12 px-6 md:px-16">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">How to Get Your First Job in Inpatient Coding</h2>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center"> */}
                <div className="grid grid-cols-1 md:grid-cols-3  gap-4 items-center">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Enrollment</h3>
                        <p className="mt-2 text-gray-600">Sign up for the CIC training program at Thoughtflows.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Training</h3>
                        <p className="mt-2 text-gray-600">Attend live classes and complete hands-on assignments.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Self-Study & Exams</h3>
                        <p className="mt-2 text-gray-600">Access self-study materials, take chapter-wise exams, and mock tests.</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Interview Preparation:</h3>
                        <p className="mt-2 text-gray-600">Enhance your resume with expert tips.
                            Participate in mock interviews to build confidence.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">Placement:</h3>
                        <p className="mt-2 text-gray-600">Leverage Thoughtflows' job placement support to secure positions with attractive salary packages.
                        </p>
                    </div>
                </div>

                {/* </div> */}
            </section>
            {/* </div> */}




        </div>
    );
};

export default CICStudyMaterials;
