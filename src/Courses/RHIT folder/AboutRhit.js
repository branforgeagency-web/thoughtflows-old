import React from "react";
import crcabout from "../../images/Courses/CRCAbout.jpg";
import coursebg from "../../images/coursebg.png";
import { Link } from "react-router-dom";
const AboutRhit = () => {

  return (
    <div className="flex flex-wrap items-center justify-center px-3 py-5">
      <div className="w-full lg:w-1/12"></div>

      <div className="w-full lg:w-5/12 mb-4">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy">About RHIT Coders</h2>
<p className="text-gray-700 text-base lg:text-md leading-relaxed ">
RHIT coders play a vital role in healthcare organizations by managing and safeguarding patient information. They are responsible for assigning standardized codes to diagnoses, treatments, and procedures for use in billing, research, and statistics. Their knowledge and skills ensure that healthcare providers comply with regulations and that patient records are maintained in a secure, efficient, and standardized way.
<br></br>RHIT coders work in a variety of healthcare settings, including hospitals, private practices, insurance companies, and health information management departments.

</p>
        <div className="overflow-x-auto">
        <h2 className="text-3xl font-semibold mb-4 text-primaryy">Skills and Knowledge Required for RHIT</h2>
        <p>To pursue the RHIT certification, candidates should have:</p>
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
                <td><p>Medical Coding Proficiency: Ability to use ICD-10-CM, CPT, and HCPCS Level II coding systems for diagnoses and procedures.</p></td>

              </tr>
              {/* row 2 */}
              <tr>
                <th><p>2</p></th>
                <td><p>Data Management and Analysis: Skills in managing patient records, analyzing data, and using health information management software.</p></td>

              </tr>
              {/* row 3 */}
              <tr>
                <th><p>3</p></th>
                <td><p>Understanding Healthcare Laws and Compliance:  Knowledge of HIPAA regulations, data privacy, and healthcare industry standards.
                </p></td>

              </tr>
              {/* row 4 */}
              <tr>
                <th><p>4</p></th>
                <td><p>Attention to Detail:  Ensuring the accuracy and completeness of health records, vital for proper coding and billing.
                </p></td>

              </tr>
              {/* row 5 */}
              <tr>
                <th><p>5</p></th>
                <td><p>Analytical Thinking:Ability to interpret and analyze clinical data accurately.
                </p></td>

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
                  <td className=""><p>45-50 days</p></td>
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

 
    </div>
  );
};

export default AboutRhit;
