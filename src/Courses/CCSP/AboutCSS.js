import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutEM = () => {
  return (
    <div className="flex flex-wrap items-center lg:py-16 p-10" style={{backgroundColor:"#f9fafb"}}>
      <div className="w-full lg:w-1/12"></div>

      <div className="w-full lg:w-5/12 mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-primaryy">
          CCS-P Exam Overview{" "}
        </h2>
        <p className="text-gray-600 mb-4 font-light">
          The Certified Coding Specialist – Physician-based (CCS-P) exam,
          offered by AHIMA, certifies professionals specializing in coding for
          physician offices, outpatient clinics, and specialty centers.{" "}
        </p>
        <ol className="list-decimal list-inside text-gray-600 mb-4">
          <li>
             Total Questions:
            <ul className="list-disc">
              <li>
              97 multiple-choice questions              </li>
            </ul>
          </li>
          <li>
          Duration:            <ul className="list-disc">
              <li>
               4 hours
              </li>
            </ul>
          </li>
          <li>
          	Content Areas:
            <ul className="list-disc">
              <li>CPT® coding: Evaluation, surgery, radiology, etc..</li>
              <li>ICD-10-CM coding: Diagnosis coding</li>
              <li>	HCPCS Level II coding: Non-physician services like equipment and supplies</li>
              <li>Medical terminology and anatomy</li>
              <li>Coding guidelines and reimbursement methodologies</li>
            </ul>
          </li>
          <li>
          Passing Score: 
            <ul className="list-disc">
              <li>
              300/400
              </li>
            </ul>
          </li>
          <li>
          	Eligibility :
            <ul className="list-disc">
              <li>
              No formal prerequisites, but experience in outpatient coding is recommended.              </li>
            </ul>
          </li>
          <li>
          	Preparation:
            <ul className="list-disc">
              <li>
               Study coding manuals (ICD-10-CM, CPT®, HCPCS), take practice exams, and enroll in preparation courses for guidance.              </li>
            </ul>
          </li>
          <li>
          Cost:
            <ul className="list-disc">
              <li>
              $399–$499               </li>
            </ul>
          </li>
          <li>
          	Retake Policy: 
            <ul className="list-disc">
              <li>
              Available with a fee.             </li>
            </ul>
          </li>
        </ol>
        {/* <p className="text-gray-600 mb-4 font-light">
          Clinical coders play a vital role in the healthcare ecosystem by
          bridging the gap between clinical care and administrative processes,
          ensuring that healthcare services are accurately documented, billed,
          and analyzed.{" "}
        </p> */}
      </div>

      <div className="w-full lg:w-1/12"></div>

      {/* course details */}
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
                  <td className="px-4 py-2 "> 45-50 days</td>
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
                  <td className="px-4 py-2 ">Weekdays, Weekends</td>
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

export default AboutEM;
