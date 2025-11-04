import React, { useState } from 'react'
import rightimg from '../../images/Group710.png'
import { Row, Col } from 'react-bootstrap'
import coc from "../../images/Course Images/COC.jpg"
import coc1 from "../../images/Course Images/CIC Exam Overview-2.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const WhatisCOC = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div >


      

      <section className=' px-4 container mx-auto my-12'>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-10 items-center'>



          <div className=' col-span-1 md:col-span-6  '>
            <img src={coc} alt='leftimg' width={500}
              height={400} />
          </div>


          <div className=' col-span-1 md:col-span-6  '>



            <h2>What is Certified Outpatient Coder (COC)? </h2>
            <p >
              A Certified Outpatient Coder (COC) is a medical coding professional who specializes in coding outpatient procedures and services. This certification, awarded by the American Academy of Professional Coders (AAPC), validates a coder’s ability to accurately assign codes for diagnoses, treatments, and procedures in outpatient healthcare settings, such as clinics, physician offices, and ambulatory care centers.
            </p>



            <p >COC-certified professionals play a critical role in ensuring that medical services are correctly documented for insurance claims and reimbursement, making them essential to the healthcare industry. By mastering coding systems like ICD-10-CM, CPT, and HCPCS Level II, COC coders support healthcare providers in achieving compliance with healthcare laws and regulations.</p>



          </div>


        </div>





        <div className='grid grid-cols-1  md:grid-cols-12 gap-10 items-center'>










          <div className=' col-span-1 md:col-span-6 mt-4 '>

            <div className=' "bg-white rounded-lg shadow-md p-4'>

              <h2>Training Details</h2>

              <p><strong>Class Types: </strong>Online & Offline Classes</p>
              <div className=' flex flex-row gap-6' >


                <div>
                  <p className=' border-b-2 border-black inline-block w-fit'><strong>Batch Options:</strong></p>
                  <p><strong>Weekday : </strong>Monday to Friday</p>
                  <p><strong>Weekend : </strong>Saturday and Sunday</p>
                  <p><strong>Language : </strong>English</p>

                </div>

                <div>
                  <p className=' border-b-2 border-black inline-block w-fi'><strong>Duration:</strong></p>
                  <p><strong>Total : </strong> 45-50 days</p>
                  <p><strong>Class Hours : </strong>2 hours per day</p>


                </div>

              </div>

            </div>


          </div>
          <div className=' col-span-1 md:col-span-6 my-4   bg-white rounded-lg shadow-md  '>





            <div className="flex  flex-col md:flex-row gap-10 p-2">
              <div className="pl-3 flex flex-col">
                <h2 className="mb-3">COC Exam Overview</h2>
                <p>
                  <strong>Duration:</strong> 4 hours
                </p>
                <p>
                  <strong>Format:</strong> 100 MARKS
                </p>
                <p>
                  <strong>Pass Requirement:</strong> 70% or higher
                </p>
                <div
                  className="border-2 border-green-600  cursor-pointer bg-green-100 rounded-2xl flex justify-between items-center px-2"
                  onClick={toggleExpand}
                >
                  <p className='pt-3'><strong>Topics covered</strong></p>
                  <FaArrowRightLong />
                </div>

                {/* Expanded Content */}

              </div>

              <img
                src={coc1}
                alt="Car"
                width={200}
                height={200}
                style={{ width: "250px", height: "250px", borderRadius: "10px" }}
              />
            </div>

            {isExpanded && (
              <div className=" space-y-2 list-disc pl-5 ">
                <p>1. ICD-10-CM Diagnosis Coding for outpatient settings</p>
                <p>
                  2. CPT® Coding for outpatient procedures
                </p>
                <p>3. HCPCS Level II Coding</p>
                <p>4. Healthcare Compliance and Regulations</p>
                <p>5. Medical Terminology & Anatomy</p>

                <p>6. Evaluation & Management (E/M) Coding</p>

                <p>7. Surgical and Radiology Coding</p>
              </div>
            )}
          </div>




        </div>






      </section>









    </div>

  )
}
export default WhatisCOC