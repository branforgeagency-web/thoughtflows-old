import React from "react";

const CRCModule = () => {
  
  const courseModules = [
    {
        heading: "Medical Terminology & Anatomy for E/M Coding",
        para: "Understanding medical terminology and human anatomy is essential for accurate evaluation and management coding. This module covers:",
        points: [
            "Medical Word Roots, Prefixes, and Suffixes",
            "Body Systems and Common Medical Conditions",
            "Anatomical Positions, Directions, and Planes",
            "Pathological Conditions and Procedures",
            "Medical Abbreviations and Acronyms"
        ]
    },
    {
        heading: "Evaluation and Management (E/M) Coding Guidelines",
        para: "This module focuses on understanding coding requirements for different patient encounters:",
        points: [
            "2021 E/M Documentation Guidelines for Office/Outpatient Visits",
            "History, Exam, and Medical Decision Making (MDM) Components",
            "E/M Level Selection Criteria",
            "Time-Based Coding and Prolonged Services",
            "Payer-Specific Documentation Requirements"
        ]
    },
    {
        heading: "CPT Coding for E/M Services",
        para: "Master coding for physician encounters using the CPT system:",
        points: [
            "Office and Outpatient Visits",
            "Emergency Department and Hospital Inpatient Visits",
            "Consultations and Specialist Encounters",
            "Preventive Medicine Services",
            "Modifiers and Their Appropriate Usage"
        ]
    },
    {
        heading: "HCPCS Level II Coding for E/M Services",
        para: "Learn the Healthcare Common Procedure Coding System (HCPCS) Level II, used for additional services and supplies:",
        points: [
            "Structure and Format of HCPCS Codes",
            "Coding for Durable Medical Equipment (DME)",
            "Injection and Infusion Coding",
            "Compliance and Documentation Requirements"
        ]
    },
    {
        heading: "Medical Record Auditing & Compliance",
        para: "Learn ethical practices and legal requirements in E/M coding:",
        points: [
            "Medical Record Auditing Techniques",
            "Fraud, Abuse, and Upcoding Risks",
            "Medicare and Medicaid Regulations for E/M Services",
            "Coding Ethics and Professionalism"
        ]
    },
    {
        heading: "Case Studies and Real-World Applications",
        para: "Practical experience enhances confidence and prepares you for real-life E/M coding challenges:",
        points: [
            "Hands-On Coding Exercises",
            "Real-World E/M Case Studies",
            "Primary Care and Specialty Coding Scenarios",
            "Billing Scenarios with Detailed Feedback"
        ]
    },
    {
        heading: "Mock Tests",
        para: "Mock tests are crucial for assessing your knowledge and ensuring you’re fully prepared for CEMC certification:",
        points: [
            "Full-Length Practice Exams that simulate the actual CEMC exam",
            "Chapter-Wise Tests to reinforce learning for each module",
            "Detailed Performance Analysis to identify strengths and weaknesses",
            "Timed Assessments to build exam readiness and improve time management"
        ]
    }
];


  return (
    <div className="container mx-auto py-10 px-4 mb-12">
      <h1 className="text-3xl font-bold text-center my-8">
        CEMC Training Modules
      </h1>
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
