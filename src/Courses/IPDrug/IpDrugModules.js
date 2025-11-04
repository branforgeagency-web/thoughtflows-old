import React from 'react';


const moduleData = [
    {
        "id": 1,
        "title": "Introduction to IPDRG Coding.",
        "description": "Understand surgical anatomy and terminology."
    },
    {
        "id": 2,
        "title": "ICD-10-CM for Inpatient Diagnoses.",
        "description": "Learn coding for various surgical specialties like general surgery, orthopedics, and more."
    },
    {
        "id": 3,
        "title": "ICD-10-PCS for Procedures.",
        "description": "Assign accurate diagnosis codes for surgical cases."
    },
    {
        "id": 4,
        "title": "MS-DRG and IPPS Fundamentals.",
        "description": "Understand coding for supplies, equipment, and drugs."
    },
    {
        "id": 5,
        "title": "Medical Record Abstraction.",
        "description": "Ensure adherence to coding guidelines and healthcare regulations."
    },
    {
        "id": 6,
        "title": "Compliance and Documentation Guidelines.",
        "description": "Hands-on practice with real surgical cases."
    }
];

const IpDrugModules = () => {
    return (
        <div className="flex-col justify-center items-center px-8 sm:px-16 lg:px-32 py-10 bg-[#F4F7F9]">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primaryy">Modules Covered</h2>

            <div className="flex flex-wrap justify-center gap-8">
                {moduleData.map(module => (
                    <div key={module.id} className="relative group w-96">
                        <div className="w-full h-56 rounded-lg transition-colors ease-in-out duration-300 bg-[#15AEBB] group-hover:bg-[#097D8A]" />
                        <div className="absolute top-0 left-0 w-full h-full bg-secondaryy opacity-40 rounded-lg transition-all ease-in-out duration-300 group-hover:opacity-60 pointer-events-none" />

                        {/* Content */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-10 w-full z-10">
                            <h3 className="text-xl sm:text-2xl font-semibold">
                                {module.title}
                            </h3>
                            {/* <p className="text-sm mt-2 text-white opacity-90">{module.description}</p> */}
                        </div>

                        {/* Card Hover Effect (Shadow and Elevation) */}
                        <div className="absolute inset-0 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow ease-in-out duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default IpDrugModules;
