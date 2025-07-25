import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutIpDrug = () => {

  return (
    <div className="flex flex-wrap p-6 py-10 items-center justify-center">
      <div className="w-full lg:w-1/12"></div>

      <div className="w-full lg:w-5/12 mb-4">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy">About IPDRG Coders</h2>
        <p>
          IPDRG coders play a vital role in hospital revenue cycle management by ensuring the accuracy of coded data and optimizing reimbursement. Their responsibilities include:</p>

        <div className="overflow-x-auto">
          <table className="table table-zebra table-no-border">
            {/* head */}
            <thead>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th><p>1</p></th>
                <td><p>Accurately coding inpatient diagnoses and procedures using ICD-10-CM and ICD-10-PCS.</p></td>

              </tr>
              {/* row 2 */}
              <tr>
                <th><p>2</p></th>
                <td><p>Assigning appropriate DRG (Diagnosis-Related Group) codes based on medical records.</p></td>

              </tr>
              {/* row 3 */}
              <tr>
                <th><p>3</p></th>
                <td><p>Ensuring compliance with coding guidelines and hospital policies.</p></td>

              </tr>
              {/* row 4 */}
              <tr>
                <th><p>4</p></th>
                <td><p>Reducing claim denials by thorough documentation review.</p></td>

              </tr>
              {/* row 5 */}
              <tr>
                <th><p>5</p></th>
                <td><p>Optimizing the revenue cycle and ensuring timely and accurate reimbursements.</p></td>

              </tr>
            </tbody>
          </table>
        </div>

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
                  <td className="font-bold "><h5>Duration</h5></td>
                  <td className=""><p>45-60 days</p></td>
                </tr>
                <tr>
                  <td className="font-bold "><h5>Class Hours</h5></td>
                  <td className=""><p>2 hours/day</p></td>
                </tr>
                <tr>
                  <td className="font-bold "><h5>Mode</h5></td>
                  <td className=""><p>Online and Offline</p></td>
                </tr>
                <tr>
                  <td className="font-bold "><h5>Batch Options</h5></td>
                  <td className="">
                    <p>Weekdays, Weekends</p>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold "><h5>Languages</h5></td>
                  <td className=""><p>English</p></td>
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
      <h2 className="text-3xl font-semibold mb-4 text-primaryy mt-5">IPDRG Study Material</h2><br></br>
      {/* Bento Box Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-primaryy rounded-lg shadow-md p-6">
          {/* <h3 className="text-2xl font-semibold text-white mb-4">Medical Billing</h3> */}
          <p className="text-white text-base leading-relaxed">
            Comprehensive manuals and reference guides.
          </p>
        </div>

        <div className="bg-primaryy rounded-lg shadow-md p-6">
          {/* <h3 className="text-2xl font-semibold text-white mb-4">Compliance</h3> */}
          <p className="text-white text-base leading-relaxed">
            Coding scenarios and practice cases.
          </p>
        </div>

        <div className="bg-primaryy rounded-lg shadow-md p-6">
          {/* <h3 className="text-2xl font-semibold text-white mb-4">Data Reporting</h3> */}
          <p className="text-white text-base leading-relaxed">
            Live chart reviews and coding exercises.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutIpDrug;
