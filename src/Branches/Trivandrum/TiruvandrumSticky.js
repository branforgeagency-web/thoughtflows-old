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
                CPC Certification Guidance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Certified Professional Coder (CPC) credential is one of the most recognized Medical Coding certifications in the healthcare industry. CPC certification validates coding knowledge and demonstrates professional competency in medical coding practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ThoughtFlows provides CPC focused training designed to help students understand coding concepts, medical documentation, coding guidelines, and exam oriented preparation. With expert guidance and structured learning, students can strengthen their coding knowledge and prepare confidently for certification goals.
              </p>
            </div>

            {/* Section 2 */}
            <div id="static-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondaryy mb-8">
                Career Path Roadmap
              </h2>
              <div className="relative pl-8 border-l-4 border-teal-500 space-y-8 mt-4">
                <div className="relative">
                  <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  <h3 className="text-xl font-bold text-gray-800">Medical Coding Training</h3>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  <h3 className="text-xl font-bold text-gray-800">CPC Certification Preparation</h3>
                </div>

                <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-pink-500 border-4 border-white shadow"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-800 m-0">Medical Coder</h3>
                    <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 font-semibold rounded-full text-sm">₹2.5–4.5 LPA</span>
                  </div>
                </div>

                <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white shadow"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-800 m-0">Senior Medical Coder</h3>
                    <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-semibold rounded-full text-sm">₹4–7 LPA</span>
                  </div>
                </div>

                <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-800 m-0">Quality Analyst</h3>
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">₹6–10 LPA</span>
                  </div>
                </div>

                <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-800 m-0">Team Lead</h3>
                    <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 font-semibold rounded-full text-sm">₹8–15 LPA</span>
                  </div>
                </div>

                <div className="relative bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-800 m-0">Coding Manager</h3>
                    <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold rounded-full text-sm">₹12–25+ LPA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="static-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondaryy">
                Placement Support & Career Growth Opportunities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With 35,000+ students trained and 25,000+ career placements and transitions supported, ThoughtFlows has helped aspiring healthcare professionals build successful careers in the Medical Coding industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our dedicated placement support team assists students with resume building, interview preparation, mock interviews, HR guidance, career counseling, and job referral support. Medical Coding professionals can explore opportunities in hospitals, healthcare BPOs, revenue cycle management (RCM) companies, medical coding organizations, healthcare technology companies, insurance support services, and health information management organizations across India and global healthcare markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TiruvandrumSticky;
