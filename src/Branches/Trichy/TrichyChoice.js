import React from "react";
import branch from "../../images/Branches/image7 copy.png";

function TrichyChoice() {
  return (
    <div className="container mx-auto px-4">
      {/* First Section */}
      <div className="container mx-auto lg:px-4 sm:px-1">
      {/* Expandable Section */}
      <div className="my-16 bg-white rounded-lg shadow-lg p-6 w-full group transition-all duration-500 ease-in-out overflow-hidden">
        {/* Combined Expanding Wrapper */}
        <div className="flex flex-col gap-6 transform origin-top scale-y-100 group-hover:scale-y-100 transition-transform duration-500 ease-in-out">
          {/* First Div */}
          <div className="bg-secondaryy rounded-xl p-6 flex flex-col justify-center text-center lg:text-left w-full">
            <h2 className="text-white text-2xl font-bold">
              Why Thoughtflows is Your Best Choice
            </h2>
            <p className="text-white mt-4">
              Choose Thoughtflows for a transformative learning experience that
              prepares you to excel in the dynamic field of medical coding and
              unlocks a world of opportunities for your future.
            </p>
            <img
              src={branch}
              alt="Branch"
              className="w-24 mt-6 mx-auto lg:mx-0"
            />
          </div>

          {/* Second Div */}
          <div className="flex flex-col justify-center w-full">
            <h2 className="font-bold text-xl lg:text-2xl mb-4 text-center lg:text-left">
              Thoughtflows is your best choice to learn medical coding.
            </h2>
            <p className="text-justify leading-relaxed">
              Our academy offers unmatched expertise, a comprehensive curriculum,
              and state-of-the-art infrastructure to provide you with the highest
              quality education. With job placement support, affordable fees, and
              flexible learning options, we prioritize your success. Our hands-on
              training approach equips you with the skills needed in the industry,
              and our industry-recognized certifications enhance your career
              prospects. Choose Thoughtflows for a transformative learning
              experience that prepares you to excel in the dynamic field of
              medical coding and unlocks a world of opportunities for your
              future.
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Second Section */}
      <div className="my-16 bg-white rounded-lg shadow-lg p-6 w-full">
        <div className="bg-secondaryy rounded-xl p-6 flex flex-col justify-center text-center lg:text-left w-full">
          <h2 className="text-white text-2xl font-bold">
            Discover Our Comprehensive Curriculum
          </h2>
          <p className="text-white mt-4">
            At Thoughtflows Medical Coding Academy, our curriculum is
            meticulously crafted to encompass all aspects of medical coding.
            Students delve into medical terminology, anatomy, and physiology,
            providing a strong foundation to understand healthcare terminologies
            and procedures.
          </p>
          <img
            src={branch}
            alt="Branch"
            className="w-24 mt-6 mx-auto lg:mx-0"
          />
        </div>
        <div className="flex flex-col justify-center w-full mt-6">
          <h2 className="font-bold text-xl lg:text-2xl mb-4 text-center lg:text-left">
            We delve into the intricacies of medical coding systems
          </h2>
          <p className="text-justify leading-relaxed">
            such as ICD-10 and CPT, enabling students to accurately translate
            medical records into standardized codes. Additionally, we emphasize
            coding guidelines, compliance, and documentation, essential for
            maintaining accuracy and compliance with industry regulations.
            Practical exercises, case studies, and coding simulations allow
            students to apply their knowledge, preparing them to handle
            real-world coding scenarios with confidence. Our curriculum is
            continuously updated to align with the latest industry trends,
            ensuring that our students stay at the forefront of the
            ever-evolving healthcare landscape.
          </p>
        </div>


      </div>
    </div>
  );
}

export default TrichyChoice;
