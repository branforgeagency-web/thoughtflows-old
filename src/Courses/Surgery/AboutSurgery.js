import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutSurgery = () => {
  return (
    <div className="flex flex-wrap items-center lg:py-16 p-10">
      <div className="w-full lg:w-1/12"></div>

      <div className="w-full lg:w-5/12 mb-4">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy">About Surgery Coders</h2>
        <p className="text-gray-600">
          Surgical coders work in various healthcare settings, including
          hospitals, outpatient surgery centers, and physician offices. They
          ensure that complex surgical procedures across specialties like{" "}
          <strong>
            orthopedics, general surgery, cardiovascular surgery, and
            neurosurgery{" "}
          </strong>{" "}
          are coded accurately.
        </p>
      </div>

      <div className="w-full lg:w-1/12"></div>

      <div className="w-full lg:w-4/12">
        <div
          className="border border-gray-300 rounded-lg bg-cover bg-right-top bg-no-repeat py-10 px-4 "
          style={{
            // backgroundImage: `url(${coursebg})`,
            // backgroundSize: 'auto 100%',
            backgroundColor: "#e7f7f7",
          }}
        >
          <div className="overflow-x-auto ">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr>
                  <td>
                    <h3 className="text-2xl font-bold text-secondaryy text-nowrap text">
                      Course Details
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold ">Duration</td>
                  <td className="px-4 py-2 ">30 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold ">Class Hours</td>
                  <td className="px-4 py-2 ">2 hours/day</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold ">Mode</td>
                  <td className="px-4 py-2 ">Online and Offline</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold ">Batches</td>
                  <td className="px-4 py-2 ">
                    Weekdays, Weekends
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold ">Languages</td>
                  <td className="px-4 py-2 ">English</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="home-btn mt-4" style={{ width: "170px" }}>
          <Link to="/contact" className="button-animation">
            Enroll Now
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/12"></div>
    </div>
  );
};

export default AboutSurgery;
