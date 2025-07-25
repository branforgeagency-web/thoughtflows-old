import React from "react";
import wow from "../../images/Branches/online/wow1.png";

function TiruvandrumStat() {
  return (

    <>
      <div className="py-12 px-6 my-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Image Section */}
          <div className="relative col-span-1 h-full">
            <img
              src={wow}
              alt="Medical Coding"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>
          </div>

          {/* Introduction Section */}
          <div className="space-y-8 col-span-1">
            <h2 className="text-4xl font-bold text-primaryy leading-tight">
              Inspiring Journeys <span className="text-gray-800">of Our Medical Coding Graduates</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our academy takes immense pride in the success stories of our past students who have excelled in their medical coding careers after training with us.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Their achievements reflect the effectiveness of our training programs and the impact of our academy in shaping successful coding professionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through testimonials and case studies, we celebrate their accomplishments and showcase the diverse career paths that open up to our graduates upon completion of their training.
            </p>
          </div>

          {/* Enrollment Section */}
          <div className="space-y-6 col-span-1">
            <div className="bg-third p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us for Medical Coding Training</h3>
              <p className="text-secondaryy leading-relaxed mb-4">
                Are you ready to embark on an exciting journey in medical coding? Reach out to Thoughtflows Medical Coding Academy today to enroll in our esteemed medical coding training program.
              </p>
              <p className="text-secondaryy leading-relaxed mb-4">
                Whether you are a recent graduate, a healthcare professional seeking a career change, or an individual looking to enhance your coding skills, our academy is the ideal platform to kickstart your medical coding career.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default TiruvandrumStat;
