import React from "react";

const RhiaPrepareExam = () => {
    return (
        <div className=" bg-slate-100 mb-10 ">

            {/* Books Required Section */}

            <div className=' px-3 py-5 container grid grid-cols-1 md:grid-cols-12'>
                <div className=' col-span-1 md:col-span-6 '>
                    <section className="pt-6 md:px-8  bg-blue-100    border-2 border-blue-400 pb-8">
                        <h3 className="text-3xl font-semibold mb-4 text-center mb-3">How to Achieve RHIA Certification</h3>
                       
                        <ul className="list-disc  text-gray-700">
                            <li className="mb-2">Complete a CAHIIM-Accredited HIM Program: Graduate with an accredited bachelor’s degree.</li>
                            <li className="mb-2">Register for the RHIA Exam: Apply through the AHIMA website.</li>
                            <li className="mb-2">Prepare Thoroughly: Use study guides, practice tests, and online resources.</li>
                            <li className="mb-2">Pass the Exam: Score 300 or higher on the scaled exam.</li>
                            <li className="mb-2">Maintain Certification: Complete 30 CEUs every 2 years for recertification.</li>
                        </ul>

                    </section>
                </div>


                <div className=' col-span-1 md:col-span-6 pt-6 bg-[#19959f4a] '>
                    <section className="md:px-8">
                        <h3 className="text-3xl font-semibold mb-4 text-center mb-3">Prepare for the RHIA Exam</h3>

                        <ul className="list-disc">
                            <li><strong>Study Materials</strong> Comprehensive guides, textbooks, and practice exams.</li>
                            <li><strong>Practice Tests</strong> Timed mock exams to gauge readiness.</li>
                            <li><strong>Online Resources</strong> Webinars, video tutorials, and Q&A sessions.</li>
                            <li><strong>Review Sessions</strong> Focused study groups and instructor-led reviews.</li>
                        </ul>
                    </section>
                </div>

            </div>

        </div>
    );
};

export default RhiaPrepareExam;
