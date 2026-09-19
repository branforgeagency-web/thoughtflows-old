import React from "react";

const COTypes = () => {
  const modules = [
    {
      "title": "Inpatient Coders",
      "description": [
        "Specialize in coding for patients admitted to hospitals.",
        "Use diagnosis-related group (DRG) coding systems for hospital reimbursement."
      ]
    },
    {
      "title": "Outpatient Coders",
      "description": [
        "Focus on coding for patients who receive care without hospital admission (e.g., clinics, outpatient surgeries)."
      ]
    },
    {
      "title": "Specialty Coders",
      "description": [
        "Specialize in particular fields like cardiology, oncology, or orthopedics, requiring expertise in those areas."
      ]
    }
  ]


  return (
    <div className=" container mx-auto  py-5 px-4 ">
      <h2 className="text-3xl font-semibold mb-4  text-primaryy text-center">
        Types of CCC
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
            <ul className="list-disc">
              {module.description.map((item) => (

                <li>{item}</li>
              ))}
            </ul>
            {/* <ul className="list-disc list-inside text-gray-700">
                            {module?.details?.map((detail, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                />
                            ))}
                        </ul> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default COTypes;
