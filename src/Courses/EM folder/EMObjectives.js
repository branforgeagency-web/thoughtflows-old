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
    },
    {
        "title": "Master CPT and ICD-10-CM Codes",
        "text": "Learn to assign the correct CPT and ICD-10-CM codes for various patient services, including routine visits, emergencies, and specialized treatments."
    },
    {
        "title": "Understand E/M Guidelines",
        "text": "Gain a thorough understanding of Evaluation and Management coding guidelines, focusing on the criteria used to classify services based on medical necessity, history, physical exams, and medical decision-making."
    },
    {
        "title": "Ensure Accurate Documentation",
        "text": "Learn how to accurately document and code the services provided during a patient visit, ensuring all necessary information is included for correct billing and reimbursement."
    },
    {
        "title": "Apply Code Levels",
        "text": "Understand how to determine the appropriate level of service (e.g., level 1 through level 5) based on the complexity of the visit, and apply this to your coding assignments."
    },
    {
        "title": "Review Medical Records",
        "text": "Develop skills to review and interpret medical records to ensure compliance with E/M coding standards, and identify missing or insufficient information."
    },
    {
        "title": "Compliance and Legal Standards",
        "text": "Learn the legal and regulatory requirements for E/M coding, including compliance with HIPAA, payer-specific guidelines, and federal regulations."
    },
    {
        "title": "Audit Preparation",
        "text": "Prepare for audits by understanding common coding mistakes and how to avoid them, ensuring both accuracy and proper documentation."
    },
    {
        "title": "Billing and Reimbursement",
        "text": "Gain a strong foundation in how E/M coding impacts billing and reimbursement, and learn strategies to reduce claim denials."
    },
    {
        "title": "Practice Case Studies",
        "text": "Apply your knowledge with real-world scenarios and case studies that simulate the types of coding challenges faced in E/M coding."
    }
];



const EMObjectives = () => {
    return (
        <div className="py-16 px-24 bg-gray-100">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Objectives for Emergency Department Coding Training</h2>
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
