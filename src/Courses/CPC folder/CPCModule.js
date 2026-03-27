import React from "react";

const CPCTrainingModules = () => {
  const modules = [
    {
      title: "Medical Terminology & Anatomy",
      details: [
        "<strong>Medical Word Roots, Prefixes, and Suffixes</strong>",
        "<strong>Body Systems and Organs</strong> (e.g., cardiovascular, musculoskeletal, nervous systems)",
        "<strong>Anatomical Positions, Directions, and Planes</strong>",
        "<strong>Pathological Conditions and Procedures</strong>",
        "<strong>Medical Abbreviations and Acronyms</strong>",
      ],
      description:
        "Understanding medical terminology and human anatomy is the foundation of medical coding. This module covers:",
      description1:
        "This knowledge is crucial for accurately interpreting medical records and assigning the correct codes​.",
    },
    {
      title: "ICD-10-CM Diagnosis Coding",
      details: [
        "<strong>ICD-10-CM Structure and Guidelines</strong>",
        "<strong>Alphabetic Index and Tabular List Navigation</strong>",
        "<strong>Coding for Different Diseases and Conditions</strong>",
        "<strong>Conventions, Symbols, and Notes</strong>",
        "<strong>Applying Coding Guidelines for Outpatient Services</strong>",
      ],
      description:
        "This module focuses on coding diagnoses using the <strong>ICD-10-CM (International Classification of Diseases, 10th Revision, Clinical Modification)</strong> system:",
      description1: "You'll learn how to assign accurate diagnosis codes that reflect patient conditions and justify medical necessity​."
    },
    {
      title: "CPT Coding for Procedures & Services",
      details: [
        "<strong>Evaluation and Management (E/M) Codes</strong>",
        "<strong>Surgical Procedures Codes (e.g., general surgery, orthopedics, cardiology)</strong>",
        "<strong>Anesthesia, Radiology, and Pathology Coding</strong>",
        "<strong>Modifiers and Their Appropriate Usage</strong>",
        "<strong>CPT Guidelines and Category I, II, III Codes</strong>",
      ],
      description:
        "Master coding procedures using the<strong> CPT (Current Procedural Terminology) </strong>system .",
      description1: "This ensures you can accurately code physician services and procedures​."
    },
    {
      title: "HCPCS Level II Coding",
      details: [
        "<strong>Structure and Format of HCPCS Codes</strong>",
        "<strong>Coding for Supplies, Medications, and Equipment</strong>",
        "<strong>Modifiers for HCPCS Codes</strong>",
        "<strong>Compliance and Documentation Requirements</strong>",
      ],
      description:
        "Learn the <strong>Healthcare Common Procedure Coding System (HCPCS) Level II</strong> used for supplies, durable medical equipment (DME), and services not covered by CPT:",
      description1: "This module complements CPT coding for complete outpatient coding expertise​."
    },
    {
      title: "Medical Coding Guidelines",
      details: [
        "<strong>General Coding Conventions</strong>",
        "<strong>Official Guidelines for ICD-10-CM and CPT</strong>",
        "<strong>Coding Sequencing and Reporting Rules</strong>",
        "<strong>Common Coding Scenarios and Case Studies</strong>",
      ],
      description:
        "Understand the rules and principles that govern accurate coding to ensure compliance with industry standards.",
      description1: "Mastering these guidelines ensures coding accuracy and compliance with industry standards​."
    },
    {
      title: "Healthcare Compliance & Regulations",
      details: [
        "<strong>HIPAA (Health Insurance Portability and Accountability Act)</strong>",
        "<strong>Fraud, Abuse, and Upcoding Risks</strong>",
        "<strong>Medicare and Medicaid Regulations</strong>",
        "<strong>Coding Ethics and Professionalism</strong>",
      ],
      description:
        "Learn ethical practices and legal requirements in medical coding to maintain integrity and avoid compliance issues.",
      description1: "You’ll learn how to avoid compliance pitfalls and maintain integrity in your coding practice."
    },
    {
      title: "Case Studies and Real-World Applications",
      details: [
        "<strong>Hands-On Coding Exercises</strong>",
        "<strong>Real-World Medical Records</strong>",
        "<strong>Case Studies in Various Specialties </strong>(e.g., cardiology, orthopedics, pediatrics)",
        "<strong>Coding Scenarios with Detailed Feedback</strong>",
      ],
      description:
        "Practical experience enhances confidence and prepares you for real-life coding challenges.",
      description1: "Practical experience enhances confidence and prepares you for real-life coding challenges​."
    },
    {
      title: "Mock Tests",
      details: [
        "<strong>Full-Length Practice Exams </strong>that simulate the actual CPC exam",
        "<strong>Chapter-Wise Tests </strong>to reinforce learning for each module",
        "<strong>Detailed Performance Analysis</strong> to identify strengths and weaknesses",
        "<strong>Timed Assessments</strong> to build exam readiness and improve time management",
      ],
      description:
        "Mock tests are crucial for assessing your knowledge and ensuring you’re fully prepared for CPC certification.",
      description1: "Mock tests are crucial for assessing your knowledge and ensuring you’re fully prepared for CPC certification."
    },
  ];

  return (
    <div className=" container  py-10 px-4 mb-16">
      <h2 className="text-3xl font-bold text-center my-8">
        CPC Training Modules
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
        {modules.map((module, index) => (
          <div
            key={index}
            className=" p-6 border-2 border-[#14aeba] bg-slate-200 rounded-3xl border-b-8  "
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {module.title}
            </h2>
            <p
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{ __html: module.description }}
            />
            <ul className="list-disc list-inside text-gray-700">
              {module.details.map((detail, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: detail }}
                />
              ))}
            </ul>

            <p
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{ __html: module.description1 }}
            />
          </div>
        ))}
      </div>
    </div>


    // <div className="container mx-auto max-w-6xl py-10 px-4 mb-14">
    //   <h1 className="text-3xl font-bold text-center my-12">
    //     CPC Training Modules
    //   </h1>
    //   <div className="flex flex-col space-y-12">
    //     {modules.map((module, index) => (
    //       <div key={index}>
    //         <div className="flex flex-col md:flex-row items-center">
    //           {/* Left Content */}
    //           <div className="md:w-1/2 px-4 border-2 border-[#14aeba] bg-slate-200 rounded-3xl p-3">
    //             <p
    //               className="text-gray-600 mb-4"
    //               dangerouslySetInnerHTML={{ __html: module.description }}
    //             />
    //             <ul className="list-disc list-inside text-gray-700 mb-4">
    //               {module.details.map((detail, i) => (
    //                 <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
    //               ))}
    //             </ul>
    //             <p
    //               className="text-gray-600"
    //               dangerouslySetInnerHTML={{ __html: module.description1 }}
    //             />
    //           </div>

    //           {/* Right Content */}
    //           <div className="md:w-1/2 px-4">
    //             <div className="bg-white rounded-lg p-6 border-b-8 border-[#14aeba] shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    //               <h2 className="text-xl font-semibold text-gray-800">
    //                 {index + 1}. {module.title}
    //               </h2>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Horizontal Divider */}
    //         {index < modules.length - 1 && (
    //           <hr className="my-6 border-[#14aeba]" />
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>




  );
};

export default CPCTrainingModules;
