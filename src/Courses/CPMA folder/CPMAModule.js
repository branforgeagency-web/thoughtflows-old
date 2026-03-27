import React from "react";

const CPMAModule = () => {
  const modules = [
    {
      title: "Medical Terminology & Anatomy",

      description:
        " Develop a strong foundation in medical terminology and human anatomy",

    },
    {
      title: "Auditing Methodologies",

      description:
        " Learn the processes and techniques used in medical auditing, including chart reviews and compliance checks.",

    },
    {
      title: "ICD-10-CM and CPT® Code Auditing",

      description:
        "Understand how to audit ICD-10-CM and CPT® codes, ensuring they are applied correctly.",
      //   description1: "This ensures you can accurately code physician services and procedures​."
    },
    {
      title: "Compliance and Fraud Prevention",
      description:
        " Study regulations like HIPAA, OIG guidelines, and fraud prevention strategies in healthcare auditing",

    },
    {
      title: "Risk Analysis and Documentation Compliance",
      description:
        " Learn to assess and ensure compliance with documentation standards to minimize billing errors and fraud.",

    },
    {
      title: "Auditing and Statistical Sampling",
      description:
        "Understand statistical methods used in audits, such as random and focused audits, and learn how to apply these techniques in healthcare settings.",

    },
    {
      title: "Communication and Reporting Auditing Results",
      description:
        "  Master the art of reporting audit findings, providing constructive feedback, and ensuring that actionable insights are communicated to stakeholders.",

    },
    // {
    //   title: "Real-World Application",
    //   description:
    //     " Practice coding using real-world outpatient case studies and scenarios.",

    // },
  ];

  return (
    <div className=" container mx-auto  py-10 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center my-8">
        CPMA Training Modules
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
        {modules.map((module, index) => (
          <div
            key={index}
            className=" p-6 border-b-8 border-[#14aeba]  bg-slate-200 rounded-3xl  "
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {index + 1}. {module.title}
            </h2>
            <p
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{ __html: module.description }}
            />
            <ul className="list-disc list-inside text-gray-700">
              {module?.details?.map((detail, i) => (
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
  );
};

export default CPMAModule;
