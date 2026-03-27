import React from "react";

const CRCModule = () => {
  const modules = [
    {
      title: "Medical Terminology & Anatomy",

      description:
        " Essential terms and anatomy relevant to risk adjustment coding.",

    },
    {
      title: "ICD-10-CM Coding",

      description:
        " Accurate assignment of ICD-10-CM codes for chronic and acute conditions.",

    },
    {
      title: "Risk Adjustment Models",

      description:
        "Understanding HCC (Hierarchical Condition Categories), RxHCC, and ACA models.",
      //   description1: "This ensures you can accurately code physician services and procedures​."
    },
    {
      title: "Medical Record Documentation",
      description:
        "Evaluating records for complete and accurate documentation.",

    },
    {
      title: "Compliance and Regulations",
      description:
        " HIPAA, fraud prevention, and coding ethics in risk adjustment.",

    },
    {
      title: "Practical Case Studies",
      description:
        "Real-world coding scenarios for hands-on practice.",

    },
    {
      title: "Mock Tests",
      description:
        " Practice exams to prepare for the CRC certification test.",

    },
    // {
    //   title: "Real-World Application",
    //   description:
    //     " Practice coding using real-world outpatient case studies and scenarios.",

    // },
  ];
  const courseModules = [
    {
      heading: "Medical Terminology & Anatomy",
      para: "Understanding medical terminology and human anatomy is the foundation of medical billing. This module covers:",
      points: [
        "Medical Word Roots, Prefixes, and Suffixes",
        "Body Systems and Organs (e.g., cardiovascular, musculoskeletal, nervous systems)",
        "Anatomical Positions, Directions, and Planes",
        "Pathological Conditions and Procedures",
        "Medical Abbreviations and Acronyms"
      ],
      subpara: "This knowledge is crucial for accurately interpreting medical records and assigning the correct codes."
    },
    {
      heading: "Insurance and Billing Guidelines",
      para: "This module focuses on understanding different insurance policies and the billing process:",
      points: [
        "Types of Insurance Plans (e.g., Medicare, Medicaid, Commercial, Workers' Compensation)",
        "Billing and Reimbursement Processes",
        "CMS-1500 Claim Form Completion",
        "Coordination of Benefits and Third-Party Payers",
        "Medical Necessity and Prior Authorizations"
      ],
      subpara: "You’ll learn how to submit clean claims and ensure proper reimbursement."
    },
    {
      heading: "CPT Coding for Procedures & Services",
      para: "Master billing for procedures using the CPT (Current Procedural Terminology) system:",
      points: [
        "Evaluation and Management (E/M) Codes",
        "Surgical Procedures Coding",
        "Anesthesia, Radiology, and Pathology Coding",
        "Modifiers and Their Appropriate Usage",
        "CPT Guidelines and Category I, II, III Codes"
      ],
      subpara: "This ensures you can accurately bill physician services and procedures."
    },
    {
      heading: "HCPCS Level II Coding",
      para: "Learn the Healthcare Common Procedure Coding System (HCPCS) Level II, used for supplies, durable medical equipment (DME), and other services not covered by CPT:",
      points: [
        "Structure and Format of HCPCS Codes",
        "Coding for Supplies, Medications, and Equipment",
        "Modifiers for HCPCS Codes",
        "Compliance and Documentation Requirements"
      ],
      subpara: "This module complements CPT coding for complete outpatient billing expertise."
    },
    {
      heading: "Medical Billing Regulations & Compliance",
      para: "Learn ethical practices and legal requirements in medical billing:",
      points: [
        "HIPAA (Health Insurance Portability and Accountability Act)",
        "Fraud, Abuse, and Upcoding Risks",
        "Medicare and Medicaid Regulations",
        "Coding Ethics and Professionalism"
      ],
      subpara: "You’ll learn how to avoid compliance pitfalls and maintain integrity in billing practices."
    },
    {
      heading: "Case Studies and Real-World Applications",
      para: "Practical experience enhances confidence and prepares you for real-life billing challenges:",
      points: [
        "Hands-On Billing Exercises",
        "Real-World Medical Claims Processing",
        "Case Studies in Various Specialties (e.g., cardiology, orthopedics, pediatrics)",
        "Billing Scenarios with Detailed Feedback"
      ],
      subpara: "Practical experience enhances confidence and prepares you for real-life billing challenges."
    },
    {
      heading: "Mock Tests",
      para: "Mock tests are crucial for assessing your knowledge and ensuring you’re fully prepared for CPB certification:",
      points: [
        "Full-Length Practice Exams that simulate the actual CPB exam",
        "Chapter-Wise Tests to reinforce learning for each module",
        "Detailed Performance Analysis to identify strengths and weaknesses",
        "Timed Assessments to build exam readiness and improve time management"
      ]
    }
  ];


  return (
    <div className="container mx-auto py-10 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center my-8">
        CPB Training Modules
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
              {module.para}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {module.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {module.subpara && (
              <p className="text-gray-600">
                {module.subpara}
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
