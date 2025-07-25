import React from 'react';

const objectives = [
  {
    "title": "Understand Medical Terminology & Anatomy",
    "text": "Gain a solid understanding of medical terms, human anatomy, and the physiological systems relevant to outpatient care and coding."
  },
  {
    "title": "Master the CPT® Coding System",
    "text": "Learn how to assign accurate procedure codes using the CPT® coding system, which is vital for outpatient services, including physician visits, surgeries, and diagnostic tests."
  },
  {
    "title": "Apply ICD-10-CM Codes",
    "text": "Learn how to assign accurate diagnosis codes using ICD-10-CM, essential for capturing the patient’s conditions and diagnoses."
  },
  {
    "title": "Understand HCPCS Level II Codes",
    "text": "Study HCPCS Level II codes for coding services outside the scope of CPT® such as durable medical equipment (DME), drugs, and supplies."
  },
  {
    "title": "Utilize Coding Manuals",
    "text": "Gain proficiency in using various coding manuals, including ICD-10, CPT®, and HCPCS Level II, ensuring accurate code assignment in all situations."
  },
  {
    "title": "Learn Healthcare Compliance & Regulations",
    "text": "Understand important healthcare regulations, such as HIPAA (Health Insurance Portability and Accountability Act), and Medicare billing requirements, ensuring compliance in all coding processes."
  },
  {
    "title": "Prepare for the CCS-P Exam",
    "text": "Develop the skills and confidence required to successfully pass the CCS-P exam, through practice tests, real-world coding exercises, and exam simulation."
  },
  {
    "title": "Improve Job Readiness",
    "text": "Receive training on interview techniques, resume-building, and job search strategies to secure a position as a CCS-P coder in various healthcare settings."
  }
]

const objectives1 = [
  {
    "title": "Specialized Expertise",
    "text": "Becoming CCS-P certified demonstrates specialized expertise in outpatient coding for physician services. It opens up more job opportunities in physician offices, multi-specialty clinics, and outpatient healthcare settings."
  },
  {
    "title": "Job Security",
    "text": "The demand for certified coders in outpatient settings continues to grow, offering stable job opportunities in the healthcare industry."
  },
  {
    "title": "Career Advancement",
    "text": "CCS-P certification is an industry-recognized credential that can lead to higher-paying positions and career advancement. It shows employers that the coder has the necessary skills and knowledge to manage complex coding tasks."
  },
  {
    "title": "Increased Earning Potential",
    "text": "Certified CCS-P coders generally earn higher salaries than non-certified professionals due to their specialized skill set and qualifications."
  },
  {
    "title": "Professional Credibility",
    "text": "Certification through AHIMA boosts professional credibility and gives coders a competitive edge in the job market, enhancing their reputation among peers, employers, and healthcare providers."
  }
]

  
  


const EMObjectives = () => {
    return (
        <div className="py-16 px-24 bg-gray-100 flex flex-col md:flex-row justify-center gap-20"  >
            <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Course Objectives for CCS-P Certification</h2>
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
            <div>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-primaryy">Why Pursue CCS-P Certification?</h2>
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
                                <td className="px-6 py-4 text-gray-600">{objective.text}</td>
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
