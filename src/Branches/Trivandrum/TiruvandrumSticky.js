import React from 'react';
import micro from "../../images/Branches/online/microscope.jpg";
import microbg from "../../images/Branches/online/microbg.png";

function TiruvandrumSticky() {
  return (
    <>
      <div className="relative">
        {/* Full-width image with 50vh height */}
        <div className="w-full">
          <img src={micro} alt="Microscope" className="w-full h-[50vh] object-cover" />
        </div>

        {/* Text content below the image */}
        <div className="relative z-20 px-5 py-10 md:px-20 lg:px-32">
          <div className="space-y-16">
            {/* Section 1 */}
            <div id="static-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondaryy">
                Cutting-Edge Infrastructure and Top-Notch Facilities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Modern facilities are used at Thoughtflows academy in Trivandrum to provide a dynamic and interesting learning environment. Students get practical experience in real-world coding scenarios in our classrooms, which are furnished with industry-specific tools and contemporary technology. In Trivandrum and elsewhere, this cutting-edge infrastructure supports the practical abilities required for success in medical coding positions.
              </p>
            </div>

            {/* Section 2 */}
            <div id="static-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondaryy">
                Securing Your Future After Training
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to bridge the gap between training and employment. By utilizing solid relationships with top healthcare providers, our medical coding training center in Trivandrum offers complete job placement assistance. We provide our students with the tools they need to confidently pursue medical coding careers in Trivandrum and beyond, including career advice, resume preparation, and interview coaching. Our emphasis on employability guarantees a seamless transfer into a fulfilling profession.
              </p>
            </div>

            {/* Section 3 */}
            <div id="static-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondaryy">
                Affordable Fees and Flexible Batch Schedules
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                All people should be able to obtain high-quality education. Students from a variety of backgrounds might benefit from our affordably priced medical coding classes in Trivandrum. To accommodate students' and working professionals' schedules, we also provide variable batch times. Contact us right now to find out more about our medical coding fees in Trivandrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TiruvandrumSticky;
