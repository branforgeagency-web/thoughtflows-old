import React from "react";

const COCModules = () => {
    const modules = [
        {
            title: "Medical Terminology & Anatomy",

            description:
                "Learn essential terms and anatomical knowledge for outpatient coding.",

        },
        {
            title: "ICD-10-CM Diagnosis Coding",

            description:
                " Master the coding of diagnoses according to ICD-10-CM guidelines.",

        },
        {
            title: "CPT Coding for Procedures & Services",

            description:
                "Learn how to accurately code outpatient procedures using the CPT coding system.",
            //   description1: "This ensures you can accurately code physician services and procedures​."
        },
        {
            title: "HCPCS Level II Coding",
            description:
                " Understand how to code medical supplies, equipment, and other healthcare services.",

        },
        {
            title: "Outpatient Coding Guidelines",
            description:
                "Study the specific coding rules for outpatient settings.",

        },
        {
            title: "Reimbursement Methodologies",
            description:
                "Dive into the methods of reimbursement in outpatient care, including Medicare and insurance systems.",

        },
        {
            title: "Healthcare Compliance & Regulations",
            description:
                " Understand the legal and ethical standards in healthcare coding.",

        },
        {
            title: "Real-World Application",
            description:
                " Practice coding using real-world outpatient case studies and scenarios.",

        },
    ];

    return (
        <div className=" container mx-auto  py-10 px-4 mb-12">
            <h1 className="text-3xl font-bold text-center my-8">
                CIC Training Modules
            </h1>
            <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
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
                            {module?.details?.map((detail, i) => (
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

export default COCModules;
