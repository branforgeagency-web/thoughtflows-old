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

  return (
    <div className=" container mx-auto  py-10 px-4 mb-12">
      <h2 className="text-3xl font-bold text-center my-8">
        CRC Training Modules
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

export default CRCModule;
