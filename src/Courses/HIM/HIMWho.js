import React from "react";
const objectives1 = [
  {
    "title": "Health Information Manager"
  },
  {
    "title": "HIM Coder"
  },
  {
    "title": "Medical Records Specialist"
  },
  {
    "title": "Healthcare Data Analyst"
  }
]

  const obj=[
    {
      "title": "Individuals interested in a career in healthcare information management."
    },
    {
      "title": "Medical professionals seeking to expand their skillset."
    },
    {
      "title": "Graduates looking for a career shift into healthcare."
    },
    {
      "title": "Anyone with an interest in medical coding, healthcare data management, and health information systems."
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
              Get Your Dream Job by Learning HIM Course
            </h3>
<p className=" py-2  font-semibold"> Upon completing our HIM Course, you'll be equipped with the knowledge and skills necessary to pursue roles like:</p>
            <ul className="list-disc  text-gray-700">
            {objectives1.map((objective, index) => (
                            <li key={index} className="px-6 py-2 text-secondaryy font-semibold">
                        {objective.title}
                             </li>
                        ))}
            </ul>
<p className=" py-2  font-semibold">
Our job placement assistance ensures you're well-prepared to secure your dream job in healthcare information management.</p>  
        </section>
        </div>

        <div className=" col-span-1 md:col-span-6 pt-6 bg-[#19959f4a] ">
          <section className="md:px-8">
            <h3 className="text-3xl font-semibold mb-4 text-center mb-3">
            Who Can Apply?
            </h3>
            <p className=" py-2  font-semibold">
            Our HIM Course is open to:</p>  

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
