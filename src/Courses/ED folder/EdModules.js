import React from 'react';
import surgerybanner from '../../images/Courses/cpcBanner.jpg'


const moduleData = [
    {
        "id": 1,
        "title": "Medical Terminology & Anatomy for Emergency Care",
        "description": "Understand surgical anatomy and terminology tailored for emergency care scenarios.",
        "image": surgerybanner
    },
    {
        "id": 2,
        "title": "ICD-10-CM Diagnosis Coding for Injuries and Acute Conditions",
        "description": "Assign accurate diagnosis codes for injuries and acute medical conditions commonly seen in emergency settings.",
        "image": surgerybanner
    },
    {
        "id": 3,
        "title": "CPT Coding for Procedures like Trauma Care and Wound Repair",
        "description": "Learn coding for essential emergency procedures, including trauma care and wound repair.",
        "image": surgerybanner
    },
    {
        "id": 4,
        "title": "HCPCS Level II Coding for Supplies and Medications",
        "description": "Understand coding for emergency-related supplies, equipment, and medications.",
        "image": surgerybanner
    },
    {
        "id": 5,
        "title": "ED E/M Guidelines for Various Levels of Emergency Services",
        "description": "Master guidelines for documenting and coding emergency evaluation and management services.",
        "image": surgerybanner
    },
    {
        "id": 6,
        "title": "Compliance & Regulations in Emergency Care Settings",
        "description": "Ensure adherence to compliance standards and regulations specific to emergency care environments.",
        "image": surgerybanner
    },
    {
        "id": 7,
        "title": "Case Studies and Practical Applications",
        "description": "Hands-on practice with real-world case studies and practical applications for emergency coding.",
        "image": surgerybanner
    }
];


const EdModules = () => {
    return (
        <div className="flex-col justify-center items-center px-8 sm:px-16 lg:px-32 py-24">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primaryy">ED Coding Modules</h2>

            <div className="flex flex-wrap justify-center gap-8">
                {moduleData.map(module => (
                    <div key={module.id} className="relative group w-96">
                        {/* Image and Overlay */}
                        <img
                            src={module.image}
                            alt={module.title}
                            className="w-full h-56 object-cover rounded-lg transition-all ease-in-out duration-300 group-hover:opacity-80"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-secondaryy opacity-80 rounded-lg transition-all ease-in-out duration-300 group-hover:opacity-100" />

                        {/* Content */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-10 w-full">
                            <h3 className="text-xl sm:text-2xl font-semibold">
                                {module.title}
                            </h3>
                            <p className="text-sm mt-2 text-white opacity-90">{module.description}</p>
                        </div>

                        {/* Card Hover Effect (Shadow and Elevation) */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition-all ease-in-out duration-300" />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default EdModules;
