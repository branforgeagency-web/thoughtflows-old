import React from 'react';

const objectives = [
  { title: "Master Surgical Coding Systems", text: "Gain proficiency in CPT®, ICD-10-CM, and HCPCS Level II coding systems for various surgical procedures." },
  { title: "Interpret Operative Reports", text: "Learn to accurately review and extract details from operative notes to assign the correct codes." },
  { title: "Understand Surgical Specialties", text: "Cover coding for key specialties like orthopedics, cardiovascular surgery, general surgery, neurosurgery, and plastic surgery." },
  { title: "Ensure Coding Compliance", text: "Apply coding guidelines in line with AAPC, CMS, and other regulatory bodies to maintain compliance and accuracy." },
  { title: "Optimize Reimbursement", text: "Improve the efficiency of billing and reimbursement processes by assigning accurate surgical codes." },
  { title: "Develop Medical Terminology Knowledge", text: "Strengthen your understanding of surgical anatomy, medical terminology, and procedural terms relevant to coding." },
  { title: "Minimize Coding Errors", text: "Learn best practices to reduce coding errors and avoid claim denials and audits." },
  { title: "Gain Real-World Experience", text: "Engage in hands-on practice with case studies and real-world scenarios to build confidence in coding surgical procedures." },
  { title: "Prepare for Certification", text: "Equip yourself to pass the AAPC Surgery Coding Certification Exam by mastering the exam syllabus and format." },
  { title: "Enhance Professional Growth", text: "Increase your employability and open doors to higher-paying roles in surgical coding and auditing." }
];

const SurgeObjectives = () => {
  return (
    <div className="px-4 lg:px-20 py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-primaryy">Course Objectives for Surgery Coding Training</h2>
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

export default SurgeObjectives;
