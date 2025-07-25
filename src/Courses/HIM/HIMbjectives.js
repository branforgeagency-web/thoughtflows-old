import React from 'react';

const objectives = [
  {
    "title": "Provide a comprehensive understanding of healthcare information systems."
  },
  {
    "title": "Teach industry-standard coding systems (ICD-10, CPT, HCPCS)."
  },
  {
    "title": "Equip you with the skills to manage healthcare data accurately and securely."
  },
  {
    "title": "Prepare you for roles such as Health Information Manager, HIM Coder, and Medical Coder."
  },
  {
    "title": "Teach healthcare regulations, data privacy laws (HIPAA), and compliance standards."
  },
  {
    "title": "Provide hands-on training to ensure practical application of theoretical knowledge."
  },
  {
    "title": "Enhance your ability to analyze, interpret, and code medical records."
  }
]

const objectives1 = [
  {
    "title": "Introduction to Healthcare Information Management"
  },
  {
    "title": "Medical Terminology and Anatomy for HIM"
  },
  {
    "title": "ICD-10 Coding and Classification"
  },
  {
    "title": "CPT and HCPCS Coding"
  },
  {
    "title": "Healthcare Regulations and Compliance (HIPAA)"
  },
  {
    "title": "Healthcare Data Security and Privacy"
  },
  {
    "title": "Health Information Systems and Technologies"
  },
  {
    "title": "Medical Records Management"
  },
  {
    "title": "Billing and Reimbursement Procedures"
  },
  {
    "title": "Practical HIM Case Studies"
  }
]


  
  


const EMObjectives = () => {
    return (
        <div className="py-16 px-24 bg-gray-100 flex flex-col md:flex-row justify-center gap-20"  >
            <div>
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
                                {/* <td className="px-6 py-4 text-gray-600">{objective.text}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Modules</h2>
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
                        {objectives1.map((objective, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4 text-secondaryy font-semibold">{objective.title}</td>
                                {/* <td className="px-6 py-4 text-gray-600">{objective.text}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default EMObjectives;
