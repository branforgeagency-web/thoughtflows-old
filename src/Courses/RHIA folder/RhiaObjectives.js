import React from "react";

const RhiaObjectives = () => {
    const modules = [
        {
            // title: "Medical Terminology & Anatomy",
            description:
                "Understand health data structure, content, and governance.",

        },
        {
            // title: "ICD-10-CM Coding",
            description:
                "Master health information systems and technologies.",

        },
        {
            // title: "Risk Adjustment Models",
            description:
                "Ensure data privacy, security, and confidentiality.",
        },
        {
            // title: "Medical Record Documentation",
            description:
                "Apply healthcare compliance and legal standards.",

        },
        {
            // title: "Compliance and Regulations",
            description:
                "Oversee revenue cycle management processes.",

        },
        {
            // title: "Practical Case Studies",
            description:
                "Lead healthcare teams and manage projects effectively.",

        },
        {
            // title: "Mock Tests",
            description:
                "Analyze healthcare data for quality improvement and decision-making.",

        },
    ];

    return (
        <div className=" container mx-auto  py-5 px-4 ">
            <h1 className="text-3xl font-semibold mb-4  text-primaryy text-center">
            Course Objectives
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className=" p-6 border-b-8 border-[#14aeba]  bg-slate-200 rounded-3xl  "
                    >
                        {/* <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            {index + 1}. {module.title}
                        </h2> */}
                        <p
                            className="text-gray-600 mb-0"
                            dangerouslySetInnerHTML={{ __html: module.description }}
                        />
                        {/* <ul className="list-disc list-inside text-gray-700">
                            {module?.details?.map((detail, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                />
                            ))}
                        </ul> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RhiaObjectives;
