import React from 'react';

const CDITraining = () => {
    const highlights = [
        { id: 1, title: 'Industry-Relevant CDI Curriculum', description: 'Curriculum aligned with current industry standards and CDI best practices.' },
        { id: 2, title: 'Real-Time Case Sheet Analysis', description: 'Hands-on practice with actual clinical case sheets and medical records.' },
        { id: 3, title: 'Practical Training with Medical Records', description: 'Work with real documentation samples to build practical expertise.' },
        { id: 4, title: 'Expert Trainers from RCM Background', description: 'Learn from experienced professionals with Revenue Cycle Management expertise.' },
        { id: 5, title: 'Job-Oriented Training Approach', description: 'Every session is designed to make you industry-ready and job-confident.' },
    ];

    const learnings = [
        'Fundamentals of Clinical Documentation',
        'Medical Record Review & Analysis',
        'Identifying Documentation Gaps & Errors',
        'ICD Impact on Documentation',
        'Physician Query Process',
        'DRG & Reimbursement Impact',
        'Compliance & Audit Readiness',
        'Denial Prevention Strategies',
    ];

    return (
        <div>
            {/* Course Highlights - teal gradient section */}
            <div className="py-12 px-6 lg:px-32 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] text-white">
                <h2 className="text-3xl font-semibold text-left mb-4">CDI Training at Thoughtflows</h2>
                <p className="text-left text-lg mb-6">
                    At Thoughtflows Medical Coding Academy, we provide high-quality Clinical Documentation Improvement (CDI) training,
                    designed for both beginners and healthcare professionals looking to upskill.
                </p>

                <h3 className="text-2xl font-semibold mb-4 underline decoration-2 underline-offset-4">
                    Course Highlights
                </h3>
                <ul className="space-y-6">
                    {highlights.map((item) => (
                        <li key={item.id} className="flex items-start space-x-4">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold border border-white bg-white text-[#0e929f] flex-shrink-0">
                                {item.id}
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold">✅ {item.title}</h4>
                                <p className="text-ms mt-2 text-gray-100">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* What You Will Learn */}
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    <div className="col-span-1 md:col-span-6">
                        <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
                        <ul className="space-y-3">
                            {learnings.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg border-l-4 border-[#14aeba]">
                                    <span className="text-[#0e929f] font-bold text-lg">▸</span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who Can Join + Career Opportunities */}
                    <div className="col-span-1 md:col-span-6 space-y-6">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">Who Can Join?</h2>
                            <ul className="space-y-2">
                                {[
                                    'Life science graduates (BSc, MSc, Nursing, Pharmacy)',
                                    'Medical coding professionals',
                                    'Freshers interested in healthcare careers',
                                    'Professionals looking for career upgrade in RCM',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-[#0e929f] mt-1">●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
                            <p className="text-gray-600 mb-3">After completing CDI training, you can work as:</p>
                            <ul className="space-y-2">
                                {[
                                    'Clinical Documentation Specialist',
                                    'CDI Analyst',
                                    'Medical Coding Auditor',
                                    'Quality Analyst (Healthcare RCM)',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-[#0e929f] mt-1">▶</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CDITraining;
