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
                  Practical Learning Environment
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                Students gain practical exposure to medical coding concepts through hands-on learning, real world coding scenarios, and industry relevant training methodologies. This practical approach helps learners develop the skills and confidence required for a successful healthcare career.
              </p>
            </div>

            {/* Second Section */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-2">
                {/* <FaCircle className="text-secondaryy text-2xl" /> */}
                <h2 className="font-bold sm:text-2xl lg:text-3xl text-secondaryy leading-tight">
                  Flexible Learning Options
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                Online and classroom training options are available to support different learning preferences. Flexible batch schedules help students, fresh graduates, and working professionals pursue Medical Coding training while balancing their academic or professional commitments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrivandrumOnline2;
