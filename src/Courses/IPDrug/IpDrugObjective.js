import React from 'react';

const objectives = [
  { title: "Master ICD-10-CM and ICD-10-PCS", text: "Gain proficiency in coding inpatient diagnoses and procedures using the latest coding systems." },
  { title: "MS-DRG Assignment", text: "Understand the methodologies for assigning MS-DRGs and their impact on reimbursement." },
  { title: "Medical Record Abstraction", text: "Develop skills to accurately abstract data from inpatient medical records for coding purposes." },
  { title: "Inpatient Payment Systems", text: " Learn the fundamentals of the Inpatient Prospective Payment System (IPPS) and how it affects hospital revenue." },
  { title: "Compliance and Guidelines", text: "Ensure adherence to hospital coding guidelines and payer-specific policies." },
  { title: "Revenue Integrity", text: " Build expertise to minimize claim denials and enhance hospital revenue integrity." },
];

const IpDrugObjective = () => {
  return (
    <div className="px-4 lg:px-20 py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-primaryy">Course Objectives</h2>
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
                <td className="px-6 py-4 text-secondaryy font-bold"><h5>{objective.title}</h5></td>
                <td className="px-6 py-4 text-gray-600"><p>{objective.text}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IpDrugObjective;
