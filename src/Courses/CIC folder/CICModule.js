import React from "react";

const CICModule = () => {
    const modules = [
        {
            title: "Medical Terminology & Anatomy",
            details: [
                "In-depth understanding of medical terms, human anatomy, and physiology",
                "Learn how to identify body systems, diseases, and procedures relevant to inpatient coding.",

            ],
            //   description:
            //     "Understanding medical terminology and human anatomy is the foundation of medical coding. This module covers:",
            //   description1:
            //     "This knowledge is crucial for accurately interpreting medical records and assigning the correct codes​.",
        },
        {
            title: "ICD-10-CM Diagnosis Coding",
            details: [
                "Learn how to assign accurate diagnosis codes based on the <strong>ICD-10-CM</strong> system.",
                "Understand guidelines for selecting and assigning codes for inpatient conditions.",

            ],
            //   description:
            //     "This module focuses on coding diagnoses using the <strong>ICD-10-CM (International Classification of Diseases, 10th Revision, Clinical Modification)</strong> system:",
            //   description1: "You'll learn how to assign accurate diagnosis codes that reflect patient conditions and justify medical necessity​."
        },
        {
            title: "ICD-10-PCS Procedure Coding",
            details: [
                "Focus on coding procedures and services provided during inpatient stays using<strong>ICD-10-PCS</strong>",
                "Understand the structure and application of procedure codes for hospital billing.",

            ],
            //   description:
            //     "Master coding procedures using the<strong> CPT (Current Procedural Terminology) </strong>system .",
            //   description1: "This ensures you can accurately code physician services and procedures​."
        },
        {
            title: "Inpatient Coding Guidelines",
            details: [
                "Master inpatient-specific coding guidelines, including<strong>principal diagnoses, secondary diagnoses, and discharge summaries.</strong>",
                "<strong>Learn to navigate complex inpatient coding scenarios in compliance with AAPC and CMS standards",

            ],

        },
        {
            title: "Reimbursement Methodologies",
            details: [
                "Understand how<strong>Diagnosis-Related Groups (DRGs) and Medicare</strong> reimbursement systems affect inpatient coding.",
                "Learn how hospital billing processes are influenced by accurate coding and how it impacts hospital revenue",

            ],

        },
        {
            title: "Healthcare Compliance & Regulations",
            details: [
                "Study <strong>HIPAA (Health Insurance Portability and Accountability Act)</strong> regulations, medical ethics, and other compliance standards for healthcare facilities.",
                "Learn the legal aspects of coding and ensure ethical handling of patient data and information.",

            ],

        },
        {
            title: "Case Studies and Real-World Applications",
            details: [
                "Work through real inpatient case studies to apply what you've learned in a practical setting.",
                "Gain hands-on experience in coding, problem-solving, and decision-making.",

            ],

        },
        {
            title: "Mock Tests",
            details: [
                "<strong>Chapter-wise assessments </strong> to reinforce learning after each module",
                "<strong>Full-length mock exams</strong>to simulate the actual <strong>CIC certification exam </strong>experience.",
                "Track progress and identify areas for improvement with detailed feedback on each test.",

            ],

        },
    ];

    return (
        <div className=" container mx-auto   py-10 px-4 mb-12">
            <h2 className="text-3xl font-bold text-center my-8">
                CIC Training Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className=" p-6 border-b-8 border-[#14aeba]  bg-slate-200 rounded-3xl  "
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            {index + 1}. {module.title}
                        </h2>
                        <p
                            className="text-gray-600 mb-4"
                            dangerouslySetInnerHTML={{ __html: module.description }}
                        />
                        <ul className="list-disc list-inside text-gray-700">
                            {module.details.map((detail, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                />
                            ))}
                        </ul>

                        <p
                            className="text-gray-600 mb-4"
                            dangerouslySetInnerHTML={{ __html: module.description1 }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CICModule;
