import React from "react";

const CRCModule = () => {

  const courseModules = [
    {
      heading: "Medical Terminology & Anatomy for Documentation Improvement",
      para: "Understanding medical terminology and human anatomy is essential for accurate inpatient documentation. This module covers:",
      points: [
        "Medical Word Roots, Prefixes, and Suffixes",
        "Body Systems and Common Medical Conditions",
        "Anatomical Positions, Directions, and Planes",
        "Pathological Conditions and Procedures",
        "Medical Abbreviations and Acronyms"
      ]
    },
    {
      heading: "Inpatient Documentation Guidelines",
      para: "This module focuses on the requirements for complete and compliant inpatient medical records:",
      points: [
        "Key Components of Inpatient Documentation",
        "Medical Necessity and Provider Documentation",
        "Legal and Regulatory Compliance",
        "Risk Adjustment Documentation (HCC Coding)",
        "Payer-Specific Documentation Requirements"
      ]
    },
    {
      heading: "ICD-10-CM, ICD-10-PCS, and CPT Coding for Documentation Review",
      para: "Master documentation review for proper code assignment:",
      points: [
        "Diagnosis Coding with ICD-10-CM",
        "Procedure Coding with ICD-10-PCS",
        "CPT Procedure Documentation for Inpatient Services",
        "HCPCS Level II Coding for Supplies and Medications",
        "Identifying and Correcting Documentation Gaps"
      ]
    },
    {
      heading: "Medical Record Auditing & Compliance",
      para: "Learn ethical practices and legal requirements in documentation improvement:",
      points: [
        "Medical Record Auditing Techniques",
        "Fraud, Abuse, and Upcoding Risks",
        "Medicare and Medicaid Regulations for Inpatient Services",
        "HIPAA and Compliance Policies",
        "Best Practices in Clinical Documentation Integrity"
      ]
    },
    {
      heading: "Case Studies and Real-World Applications",
      para: "Practical experience enhances confidence and prepares you for real-life CDI challenges:",
      points: [
        "Hands-On Documentation Review Exercises",
        "Real-World Inpatient Case Studies",
        "Hospital-Based Documentation Scenarios",
        "Billing and Reimbursement Challenges with Detailed Feedback"
      ]
    },
    {
      heading: "Mock Tests",
      para: "Mock tests are crucial for assessing your knowledge and ensuring you’re fully prepared for CDEI certification:",
      points: [
        "Full-Length Practice Exams that simulate the actual CDEI exam",
        "Chapter-Wise Tests to reinforce learning for each module",
        "Detailed Performance Analysis to identify strengths and weaknesses",
        "Timed Assessments to build exam readiness and improve time management"
      ]
    }
  ];


  return (
    <div className="container mx-auto py-10 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center my-8">
        CDEI  Training Modules
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {courseModules.map((module, index) => (
          <div
            key={index}
            className="p-6 border-b-8 border-[#14aeba] bg-slate-200 rounded-3xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {module.heading}
            </h2>
            <p className="text-gray-600 mb-4">
              {module.paragraph}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {module.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {module.subpara && (
              <p className="text-gray-600">
                {/* {module.subpara} */}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>


    // <div className=" container mx-auto  py-10 px-4 mb-12">
    //   <h1 className="text-3xl font-bold text-center my-8">
    //     CRC Training Modules
    //   </h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
    //     {modules.map((module, index) => (
    //       <div
    //         key={index}
    //         className=" p-6 border-b-8 border-[#14aeba]  bg-slate-200 rounded-3xl  "
    //       >
    //         <h2 className="text-xl font-semibold text-gray-800 mb-3">
    //           {index + 1}. {module.title}
    //         </h2>
    //         <p
    //           className="text-gray-600 mb-4"
    //           dangerouslySetInnerHTML={{ __html: module.description }}
    //         />
    //         <ul className="list-disc list-inside text-gray-700">
    //           {module?.details?.map((detail, i) => (
    //             <li
    //               key={i}
    //               dangerouslySetInnerHTML={{ __html: detail }}
    //             />
    //           ))}
    //         </ul>

    //         <p
    //           className="text-gray-600 mb-4"
    //           dangerouslySetInnerHTML={{ __html: module.description1 }}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>

  );
};

export default CRCModule;
