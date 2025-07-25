import React from 'react';

const objectives = [
  { title: "Master Medical Terminology & Anatomy", text: "Understand essential medical terms and human anatomy for accurate coding." },
  { title: "Proficient Diagnosis Coding (ICD-10-CM)", text: "Accurately assign diagnosis codes following ICD-10-CM guidelines." },
  { title: "Procedure Coding (ICD-10-PCS & CPT)", text: "Code inpatient procedures using ICD-10-PCS and outpatient services with CPT/HCPCS." },
  { title: "Apply Inpatient & Outpatient Guidelines", text: "Learn coding guidelines for accurate hospital and clinical coding." },
  { title: "Understand Reimbursement Systems", text: "Gain knowledge of DRGs, APCs, and Medicare billing processes." },
  { title: "Ensure Compliance", text: "Follow HIPAA regulations, medical ethics, and compliance standards." },
  { title: "Practice Real-World Coding", text: "Work on case studies and real patient records to build practical skills." },
  { title: "Exam Preparation", text: "Boost confidence with chapter-wise assessments and full-length mock exams." },
  { title: "Career Readiness", text: "Enhance your resume, participate in mock interviews, and receive job placement support." }
];

const CCSObjective = () => {
  return (
    <div className="px-8 lg:px-20 py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-primaryy">Course Objectives</h2>
        <p className='px-4 lg:px-20 py-2 text-gray-500'>At Thoughtflows Medical Coding Academy, our CCS Training Program is designed to help you achieve success in the AHIMA CCS Certification Exam and advance your medical coding career. By the end of the course, you will be able to:</p>
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

export default CCSObjective;
