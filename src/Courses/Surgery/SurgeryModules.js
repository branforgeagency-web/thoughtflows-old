import React from 'react';
import surgerybanner from '../../images/Courses/cpcBanner.jpg'


const moduleData = [
    {
        "id": 1,
        "title": "Medical Terminology & Anatomy",
        "description": "Understand surgical anatomy and terminology.",
        "image": surgerybanner
    },
    {
        "id": 2,
        "title": "CPT Coding for Surgery",
        "description": "Learn coding for various surgical specialties like general surgery, orthopedics, and more.",
        "image": surgerybanner
    },
    {
        "id": 3,
        "title": "ICD-10-CM Diagnosis Coding",
        "description": "Assign accurate diagnosis codes for surgical cases.",
        "image": surgerybanner
    },
    {
        "id": 4,
        "title": "HCPCS Level II Coding",
        "description": "Understand coding for supplies, equipment, and drugs.",
        "image": surgerybanner
    },
    {
        "id": 5,
        "title": "Surgical Guidelines & Compliance",
        "description": "Ensure adherence to coding guidelines and healthcare regulations.",
        "image": surgerybanner
    },
    {
        "id": 6,
        "title": "Case Studies & Real-World Applications",
        "description": "Hands-on practice with real surgical cases.",
        "image": surgerybanner
    }
];

const SurgeryModules = () => {
    return (
        <div className="flex-col justify-center items-center px-8 sm:px-16 lg:px-32 py-24 bg-[#F4F7F9]">
            <h2 className="text-3xl font-semibold mb-12 text-center text-primaryy">Course Modules</h2>

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

export default SurgeryModules;
