import React from 'react';

const objectives = [
    {
        "title": "Master Coding Systems",
        "text": "Learn to accurately assign CPT, ICD-10-CM, and HCPCS Level II codes for a wide range of radiology services."
    },
    {
        "title": "Diagnostic & Interventional Coding",
        "text": "Understand coding protocols for diagnostic imaging (X-rays, CT scans, MRIs) and interventional radiology procedures."
    },
    {
        "title": "E/M Guidelines",
        "text": "Gain clarity on the Evaluation & Management (E/M) coding guidelines as they relate to radiology services."
    },
    {
        "title": "Procedure Coding",
        "text": "Develop proficiency in coding procedures like ultrasounds, fluoroscopy, mammography, and other imaging techniques."
    },
    {
        "title": "Regulatory Compliance",
        "text": "Ensure adherence to healthcare regulations and documentation standards to minimize errors and optimize reimbursement."
    }
];




const EMObjectives = () => {
    return (
        <div className="py-16 px-24 bg-gray-100">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Objectives</h2>
            </div>
            <div className="flex justify-center">
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

export default EMObjectives;
