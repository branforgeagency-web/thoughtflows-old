import React from 'react';

const objectives = [
    {
        "title": "Mastering Anesesthesia Coding",
        "text": "Learn CPT, ICD-10-CM, and HCPCS Level II codes for surgical and pain management services."
    },
    {
        "title": "Understanding Modifiers",
        "text": "Proper use of Anesesthesia modifiers (e.g., physical status modifiers, time units)."
    },
    {
        "title": "Time Calculations",
        "text": "Accurate calculation and reporting of Anesesthesia time."
    },
    {
        "title": "Compliance and Guidelines",
        "text": "Ensure adherence to payer-specific and Medicare regulations."
    },
    {
        "title": "Real-World Application",
        "text": "Hands-on practice with real Anesesthesia charts and case studies."
    }
];


const AnaesthesiaObjectives = () => {
    return (
        <div className="px-4 lg:px-20 py-10 bg-gray-100">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Objectives</h2>
                <p className="text-gray-600 my-6 text-center">
                    Our <strong>Anesesthesia Coding Training</strong> at Thoughtflows focuses on:
                </p>
            </div>
            <div className="overflow-x-auto flex justify-center">
                <table className="min-w-80 table-auto bg-white shadow-md rounded-lg">
                    {/* <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-gray-600">Objective</th>
              <th className="px-6 py-3 text-left text-gray-600">Description</th>
            </tr>
          </thead> */}
                    <tbody>
                        {objectives.map((objective, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4 text-secondaryy font-semibold">{objective.title}</td>
                                <td className="px-6 py-4 text-gray-600">{objective.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnaesthesiaObjectives;
