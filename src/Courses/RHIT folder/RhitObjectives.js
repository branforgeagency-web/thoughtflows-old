import React from "react";

const RhitObjectives = () => {
    const modules = [
        {
            "title": "ICD-10-CM Coding Manual",
            "description": "Official coding reference for diagnosis codes."
        },
        {
            "title": "CPT® Coding Manual",
            "description": "Official guide for procedure codes used in medical billing."
        },
        {
            "title": "HCPCS Level II Coding Manual",
            "description": "Codes for non-physician services such as medical supplies and outpatient procedures."
        },
        {
            "title": "Health Information Management Textbooks",
            "description": "Guides on health data management, privacy, and security standards."
        }
    ];

    return (
        <div className=" container mx-auto  py-5 px-4 ">
            <h2 className="text-3xl font-semibold mb-4  text-primaryy text-center">
                Books Used
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

export default RhitObjectives;
