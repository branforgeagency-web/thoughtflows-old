import React from "react";

const RhitPrepareExam = () => {
    return (
        <div className=" bg-slate-100 mb-10 ">

            {/* Books Required Section */}

            <div className=' px-3 py-3 pt-5 container grid grid-cols-1 md:grid-cols-12'>
                <div className=' col-span-1 md:col-span-6 '>
                    <section className="pt-6 md:px-8  bg-blue-100    border-2 border-blue-400 pb-8">
                        <h3 className="text-3xl font-semibold mb-4 text-center mb-3">How to Achieve RHIT Certification</h3>
                       
                        <ul className="list-disc  text-gray-700">
                            <li className="mb-2">Complete an Accredited Program:  Enroll in a CAHIIM-accredited associate degree program in Health Information Management.</li>
                            <li className="mb-2">Pass the RHIT Exam: Successfully pass the RHIT certification exam administered by AHIMA.                          </li>
                            <li className="mb-2">Maintain Certification:  Complete 20 continuing education units (CEUs) every two years to keep your certification active.                            </li>
                        </ul>

                    </section>
                </div>


                <div className=' col-span-1 md:col-span-6 pt-6 bg-[#19959f4a] '>
                    <section className="md:px-8">
                        <h3 className="text-3xl font-semibold mb-4 text-center mb-3">Preparing for the RHIT Exam</h3>

                        <ul className="list-disc">
                            <li><strong>Use Official Study Materials:</strong> Utilize AHIMA’s study guides and practice exams.                            </li>
                            <li><strong>Enroll in a Review Course:</strong>  Enroll in preparatory courses to solidify your knowledge and skills.
                            </li>
                            <li><strong>Hands-On Coding Practice: </strong>Practice coding with real-world medical records to ensure proficiency.</li>
                            <li><strong>Mock Exams: </strong>  Take practice exams to simulate the actual exam environment and assess your readiness.                            .</li>
                        </ul>
                    </section>
                </div>

            </div>
            <div className=' px-3 py-3 pb-5 container grid grid-cols-1 md:grid-cols-12'>
                <div className=' col-span-1 md:col-span-6 '>
                    <section className="pt-6 md:px-8  bg-blue-100    border-2 border-blue-400 pb-8">
                        <h3 className="text-3xl font-semibold mb-4 text-center mb-3">Key Features of the RHIT Training</h3>
                       
                        <ul className="list-disc  text-gray-700">
                            <li className="mb-2">Expert Instructors: Learn from experienced professionals who bring practical insights from the health information management field.                            </li>
                            <li className="mb-2">Comprehensive Curriculum: The training program covers all essential topics for RHIT certification.
                            </li>
                            <li className="mb-2">Flexible Scheduling:  Choose between weekday or weekend classes to fit your busy schedule.                          </li>
                            <li className="mb-2">Job Placement Assistance:  Get support in securing employment post-certification.
                            </li>
                            <li className="mb-2">Interactive Learning: Engage in live classes, group discussions, and real-world case studies.                            </li>
                        </ul>

                    </section>
                </div>


                <div className=' col-span-1 md:col-span-6 pt-6 bg-[#19959f4a] '>
                    <section className="md:px-8">
                        <h3 className="text-3xl font-semibold mb-4 text-center mb-3">Who Can Apply for RHIT Certification?</h3>

                        <ul className="list-disc">
                            <li><strong>Educational Requirements: </strong> Candidates must have completed an associate degree in Health Information Management (CAHIIM-accredited program).
                            </li>
                            <li><strong>Experience:</strong> Some candidates may be required to have practical experience in health information management.

                            </li>
                        </ul>
                    </section>
                </div>

            </div>

        </div>
    );
};

export default RhitPrepareExam;
