import React from "react";
const objectives1 = [
    {
      "title": "Introduction to Clinical Coding"
    },
    {
      "title": "Medical Terminology & Anatomy"
    },
    {
      "title": "ICD-10-CM Coding Guidelines"
    },
    {
      "title": "CPT Coding for Procedures"
    },
    {
      "title": "HCPCS Level II Coding"
    },
    {
      "title": "Coding for Different Specialties"
    },
    {
      "title": "Compliance and Ethical Coding Practices"
    },
    {
      "title": "Healthcare Reimbursement Systems"
    },
    {
      "title": "Practical Coding Scenarios"
    },
    {
      "title": "Mock Exams and Practice Tests"
    }
  ]
  const obj=[
    {
      "title": "Graduates in Life Sciences, Medical, or Paramedical Fields"
    },
    {
      "title": "Nursing and Pharmacy Graduates"
    },
    {
      "title": "Healthcare Professionals Seeking Career Advancement"
    },
    {
      "title": "Freshers Looking to Enter the Healthcare Industry"
    }
  ]
  
  
const COWho = () => {
  return (
    <div className=" bg-slate-100 mb-10 py-5">
      {/* Books Required Section */}

      <div className=" px-3 py-3 pt-5 container grid grid-cols-1 md:grid-cols-12">
        <div className=" col-span-1 md:col-span-6 ">
          <section className="pt-6 md:px-8  bg-blue-100    border-2 border-blue-400 pb-8">
            <h3 className="text-3xl font-semibold mb-4 text-center mb-3">
              {" "}
              Course Modules
            </h3>

            <ul className="list-disc  text-gray-700">
            {objectives1.map((objective, index) => (
                            <li key={index} className="px-6 py-2 text-secondaryy font-semibold">
                        {objective.title}
                             </li>
                        ))}
            </ul>
          </section>
        </div>

        <div className=" col-span-1 md:col-span-6 pt-6 bg-[#19959f4a] ">
          <section className="md:px-8">
            <h3 className="text-3xl font-semibold mb-4 text-center mb-3">
              Preparing for the CCC Exam
            </h3>

            <ul className="list-disc">
            {obj.map((objective, index) => (
                            <li key={index} className="px-6 py-2 text-secondaryy font-semibold">
                        {objective.title}
                             </li>
                        ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default COWho;
