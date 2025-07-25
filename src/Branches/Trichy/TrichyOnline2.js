import React from "react";
import branch from "../../images/Branches/image7 copy.png";
import { Row, Col } from "react-bootstrap";

function TrichyOnline2() {
  return (
    <>

      {/* <div class="join-thoughtflows py-5 mb-5 flex-col">
        <div class="join-thoughtflows-container">
          <div class="join-thoughtflows-text">
            <h2>Meet Our Experienced Trainers</h2>
            <p>At Thoughtflows Medical Coding Academy, our trainers are not just
              instructors but mentors dedicated to shaping the future of medical
              coding professionals. They bring a wealth of experience and
              knowledge to the classroom, providing practical insights and
              guidance to students. Our esteemed trainers consists of industry
              experts who understand the unique challenges and demands of the
              medical coding profession. They go beyond theoretical teaching,
              offering real-world examples and case studies to enrich the learning
              experience. With interactive lectures and one-on-one mentoring, our
              trainers ensures that each student receives personalized attention,
              support, and encouragement throughout their educational journey.</p>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="container mx-auto px-1">
          {/* Expandable Section */}
          <div className="my-16 bg-white rounded-lg shadow-lg p-6 w-full group transition-all duration-500 ease-in-out overflow-hidden">
            {/* Combined Expanding Wrapper */}
            <div className="flex flex-col gap-6 transform origin-top scale-y-100 group-hover:scale-y-100 transition-transform duration-500 ease-in-out">
              {/* First Div */}
              <div className="bg-secondaryy rounded-xl p-6 flex flex-col justify-center text-center lg:text-left w-full">
                <h2 className="text-white text-2xl font-bold">
                  Your Future Secured with Placement Support
                </h2>
                <p className="text-white mt-4">
                  At Thoughtflows Medical Coding Academy, we take immense pride in the success of our graduates, and we are committed to ensuring that they embark on fulfilling and rewarding careers in the healthcare sector.
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
                  Securing a rewarding job after completing training is a top priority for students at Thoughtflows Medical Coding Academy.
                </h2>
                <p className="text-justify leading-relaxed">
                  To support their career aspirations, we offer comprehensive job placement assistance, extending beyond the training period. Our academy maintains strong connections with leading healthcare providers and coding organizations, enhancing our graduates' prospects in the competitive job market. We organize job fairs, networking events, and resume workshops, connecting our students with potential employers and industry professionals.

                  Our job placement support includes career counseling, interview preparation, and job search assistance. We equip our students with the necessary tools and guidance to showcase their skills and knowledge effectively to potential employers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="my-16 bg-white rounded-lg shadow-lg p-6 w-full">
          <div className="bg-secondaryy rounded-xl p-6 flex flex-col justify-center text-center lg:text-left w-full">
            <h2 className="text-white text-2xl font-bold">
              Affordable and Flexible Education Ensured
            </h2>
            <p className="text-white mt-4">
              We are committed to ensuring that financial constraints and busy schedules do not hinder your pursuit of a successful career in medical coding. Our academy strives to provide an inclusive and supportive learning environment for all students.
            </p>
            <img
              src={branch}
              alt="Branch"
              className="w-24 mt-6 mx-auto lg:mx-0"
            />
          </div>
          <div className="flex flex-col justify-center w-full mt-6">
            <h2 className="font-bold text-xl lg:text-2xl mb-4 text-center lg:text-left">
              We believe that quality education should be accessible to all aspiring medical coders.
            </h2>
            <p className="text-justify leading-relaxed">
              Thoughtflows Medical Coding Academy offers affordable course fees and transparent fee structures, allowing students to plan their education without any hidden costs.

              Understanding the diverse needs of our students, we provide flexible batch timings to accommodate different schedules. Whether you are a working professional or a student with other commitments, we have options that fit your lifestyle.
            </p>
          </div>


        </div>
      </div>
    
    </>
  );
}

export default TrichyOnline2;
