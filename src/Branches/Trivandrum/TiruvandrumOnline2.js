import React from 'react';
import triEnroll from "../../images/Branches/online/nurse-typing.jpg";
import testLab from "../../images/Branches/online/testTrivandrum.jpg";
import arrow from "../../images/Branches/online/imge3.jpg";
import { FaCircle } from 'react-icons/fa';

function TrivandrumOnline2() {
  return (
    <>
      <div className="bg-third lg:mx-5 mx-4 mb-20 px-3 py-10 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-20 px-3">
          {/* Left Column: Image */}
          <div className="flex items-center justify-center">
            <img src={testLab} alt="Training Lab" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* First Section */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-2">
                {/* <FaCircle className="text-primaryy text-2xl" /> */}
                <h2 className="font-bold sm:text-2xl lg:text-3xl text-secondaryy leading-tight">
                  Practical Training Method: Developing In-Demand Skills
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                Our hands-on teaching method connects theory and practice. Our medical coding coaching center equips students with industry-relevant skills through practical experience, real-world simulations, and coding assignments.
              </p>
            </div>

            {/* Second Section */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-2">
                {/* <FaCircle className="text-secondaryy text-2xl" /> */}
                <h2 className="font-bold sm:text-2xl lg:text-3xl text-secondaryy leading-tight">
                  Online Training Option
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                We provide online medical coding classes and medical coding certificate programs for those who are unable to attend in person. These options maintain the high standards of our medical coding education while offering flexible learning alternatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                With an emphasis on certifications, job placement, and hands-on learning, Thoughtflows is a leading provider of medical coding training in Trivandrum. Join us to realize your full potential and start a successful career in healthcare!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrivandrumOnline2;
