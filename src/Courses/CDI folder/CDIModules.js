import React from 'react';

const CDIModules = () => {
    const modules = [
        { title: 'Introduction to CDI & Healthcare RCM', description: 'Understand the fundamentals of Clinical Documentation Improvement and its role in the Revenue Cycle.' },
        { title: 'Medical Terminology & Anatomy Basics', description: 'Master essential medical terminology and anatomical knowledge required for documentation review.' },
        { title: 'Clinical Documentation Standards', description: 'Learn the documentation standards and guidelines used across healthcare settings.' },
        { title: 'Medical Record Review Techniques', description: 'Develop skills to systematically review and analyze patient medical records.' },
        { title: 'Identifying Documentation Gaps', description: 'Learn to spot missing, incomplete, or unclear documentation that can impact coding and reimbursement.' },
        { title: 'ICD & DRG Impact on Documentation', description: 'Understand how ICD-10-CM codes and DRG assignment are impacted by clinical documentation quality.' },
        { title: 'Physician Query Process', description: 'Master the art of querying physicians to clarify documentation for accurate code assignment.' },
        { title: 'Compliance & Audit Guidelines', description: 'Study healthcare compliance requirements, audit standards, and regulatory guidelines for CDI.' },
        { title: 'Denial Prevention Strategies', description: 'Learn proactive documentation strategies to minimize claim denials and reduce rework.' },
        { title: 'Real-time Case Studies & Practice', description: 'Apply everything through hands-on practice with real clinical documents and case scenarios.' },
    ];

    const cdipDomains = [
        { domain: 'D1 — Clinical Documentation Review', weightage: '25%' },
        { domain: 'D2 — Clinical Coding Concepts', weightage: '23%' },
        { domain: 'D3 — CDI Program Management', weightage: '13%' },
        { domain: 'D4 — CDI Staff Education', weightage: '9%' },
        { domain: 'D5 — Compliance & Regulatory Standards', weightage: '18%' },
        { domain: 'D6 — Quality Improvement', weightage: '12%' },
    ];

    return (
        <div className="container mx-auto py-10 px-4 mb-12">
            <h2 className="text-3xl font-bold text-center my-8">CDI Syllabus Breakdown</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className="p-6 border-b-8 border-[#14aeba] bg-slate-200 rounded-3xl"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            Module {index + 1}: {module.title}
                        </h2>
                        <p className="text-gray-600">{module.description}</p>
                    </div>
                ))}
            </div>

            {/* CDIP Exam Domains Table */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-center mb-6">CDIP® Exam — 6 Domains</h2>
                <div className="overflow-x-auto rounded-xl shadow-md">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#0e929f] to-[#4da9b3] text-white">
                                <th className="px-6 py-4 text-lg font-semibold">Domain</th>
                                <th className="px-6 py-4 text-lg font-semibold text-center">Weightage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cdipDomains.map((row, i) => (
                                <tr
                                    key={i}
                                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                                >
                                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200 font-medium">{row.domain}</td>
                                    <td className="px-6 py-4 text-center border-b border-gray-200">
                                        <span className="inline-block px-4 py-1 bg-[#0e929f] text-white rounded-full font-semibold text-sm">
                                            {row.weightage}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CDIModules;
