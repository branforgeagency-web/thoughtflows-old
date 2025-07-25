import React from 'react';

const objectives = [
    {
        "title": "Master Emergency Care Coding",
        "text": "Gain proficiency in using CPT, ICD-10-CM, and HCPCS Level II codes specific to emergency department services."
    },
    {
        "title": "Understand Evaluation & Management (E/M) Guidelines",
        "text": "Learn the E/M guidelines critical for coding ED services."
    },
    {
        "title": "Accurate Coding for Procedures",
        "text": "Master coding for common ED procedures like trauma care, burns, fractures, and wound management."
    },
    {
        "title": "Comprehend Compliance & Documentation",
        "text": "Understand the compliance rules and documentation practices required for accurate coding."
    },
    {
        "title": "Identify Critical Care & Observation Services",
        "text": "Learn how to accurately apply codes for critical care and observation services provided in the ED."
    }
];


const EDObjectives = () => {
    return (
        <div className="px-4 lg:px-20 py-10 bg-gray-100">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Objectives for Emergency Department Coding Training</h2>
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

export default EDObjectives;
