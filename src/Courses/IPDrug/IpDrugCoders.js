import React from "react";
import branch from "../../images/Branches/Radiology.jpg";
import ipdrug1 from "../../images/Course Images/Where Do IPDRG Coders Work_.jpg"
const IpDrugCoders = () => {
    const sections = [
        {
            title: "",
            description: [
                "Acute Care Hospitals",
                "Long-Term Care Hospitals",
                "Inpatient Rehabilitation Centers",
                "Healthcare Consulting Firms",
            ],
            details:
                "IPDRG coders are in high demand in various healthcare settings. This profession offers promising career growth, competitive salaries, and opportunities to work in dynamic healthcare environments.",
            image: ipdrug1,
        },
    ];

    return (
        <div className="bg-gray-100">
            <div className="text-center mt-5">
        <h2 className="text-3xl px-3 pt-5 font-semibold text-primaryy">Where Do IPDRG Coders Work?</h2>
      </div>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`flex flex-col lg:flex-row ${
                        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    } items-center py-8 px-6 lg:px-16`}
                >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={section.image}
                            alt={section.title || "Description Image"}
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:px-12">
                        <h2 className="text-4xl font-bold text-primaryy mb-6">
                            {section.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            {section.details}
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-700">
                            {section.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IpDrugCoders;
