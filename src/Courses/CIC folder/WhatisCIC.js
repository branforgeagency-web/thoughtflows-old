import React, { useState } from 'react'
import rightimg from '../../images/Group710.png'
import { Row, Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import cic from "../../images/Course Images/CIC.jpg"
import cic1 from "../../images/Course Images/CIC Exam Overview.jpg"
function WhatisCIC() {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <>
      {/* <Row className='' style={{ padding: '80px 20px', alignItems:'center' }}>
            <Col lg={1}></Col>
            <Col lg={5} style={{ textAlign: 'left' }}>
                <img src={rightimg} alt='leftimg' className=' img-fluid' style={{ width: '450px' }} />
            </Col>
            <Col lg={5}>
                <h2>What is CIC?</h2>
                <p style={{ color: '#505050' }}>Certified Inpatient Coder (CIC) credential is dedicated exclusively to inpatient hospital/facility coding, validating expert-level knowledge in ICD-10-CM/PCS coding and specialized payment knowledge in MS-DRGs and IPPS.</p>
                <p style={{ color: '#505050' }}>Investing in the CIC credential can lead to a 40% higher earning potential for certified coders compared to non-credentialed coders.</p>

            </Col>
            <Col lg={1}></Col>
        </Row> */}






      <section className=' container mx-auto px-4 mt-5'>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-10 items-center '>



          <div className=' col-span-1 md:col-span-6  '>



            <h2>What is the CIC Certification?</h2>
            <p >
              The Certified Inpatient Coder (CIC) is a prestigious certification offered by AAPC (American Academy of Professional Coders). It validates the knowledge and skills required for coding inpatient hospital records. CIC-certified professionals are experts in assigning accurate ICD-10-CM (diagnosis) and ICD-10-PCS (procedure) codes for hospital patients.
              Achieving the CIC certification ensures that medical coders meet the high standards of hospital coding, contributing to efficient healthcare management and accurate billing processes.

            </p>





          </div>


          <div className=' col-span-1 md:col-span-6  '>
            <img src={cic} alt='leftimg' width={500}
              height={400} />
          </div>
        </div>






        <div className='grid grid-cols-1  md:grid-cols-12 gap-10 items-center '>



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





            <div className="flex  flex-col md:flex-row gap-10 p-4">
              <div className="pl-3 flex flex-col">
                <h2 className="mb-3">CIC Exam Overview</h2>
                <p>
                  <strong>Duration:</strong> 5 hour
                </p>
                <p>
                  <strong>Format:</strong> 97 MCQ
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
                src={cic1}
                alt="Car"
                width={200}
                height={200}
                style={{ width: "250px", height: "250px", borderRadius: "10px" }}
              />
            </div>

            {isExpanded && (
              <div className=" space-y-2 list-disc pl-5 ">
                <p>1. ICD-10-CM Diagnosis Coding for inpatient settings</p>
                <p>
                  2. ICD-10-PCS Procedure Coding
                </p>
                <p>3. Inpatient Coding Guidelines</p>
                <p>4. Healthcare Compliance and Regulations</p>
                <p>5. Reimbursement Methodologies (e.g., DRGs)</p>

                <p>6. Medical Terminology & Anatomy</p>

                <p>7. Case Studies and Real-World Applications</p>
              </div>
            )}
          </div>




        </div>






      </section>


    </>
  )
}

export default WhatisCIC