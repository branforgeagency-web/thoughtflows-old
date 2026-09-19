

import React, { useState } from 'react'
import rightimg from '../../images/Group710.png'
import { Row, Col } from 'react-bootstrap'
import crc from "../../images/Course Images/CRC.jpg"
import crc1 from "../../images/Course Images/CRC1.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const WhatCRC = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div >


            {/* <Row className='' >
                <Col lg={1}></Col>

                <Col lg={5}>
                    <h2>Certified Professional Coder (CPC)</h2>
                    <h2>What is CPC?</h2>
                    <p style={{ color: '#505050' }}>
                        The
                        <b style={{ fontWeight: 900 }}>Certified Professional Coder (CPC)</b>
                        credential, issued by the
                        <b style={{ fontWeight: 900 }}>AAPC (American Academy of Professional Coders)</b>
                        , is the gold standard in medical coding certifications. This certification validates your expertise in assigning accurate
                        <b style={{ fontWeight: 900 }}>CPT (Current Procedural Terminology), ICD-10-CM (Diagnosis Codes), and HCPCS Level II
                        </b> codes.
                    </p>


                    <p style={{ color: '#505050' }}>Passing the CPC exam demonstrates proficiency in outpatient coding and understanding healthcare regulations, which is essential for working in physician offices, hospitals, and insurance companies.</p>

                </Col>
                <Col lg={5} style={{ textAlign: 'center' }}>
                    <img src={rightimg} alt='leftimg' className=' img-fluid' style={{ width: '450px' }} />
                </Col>
                <Col lg={1}></Col>


                <Col sm={12}>
                    <h2>About Certified Medical Coders</h2>

                </Col>
            </Row > */}

            <section className=' px-4 container mx-auto mt-5'>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>



                    <div className=' col-span-1 md:col-span-6  '>



                        <h2>What is CRC?</h2>
                        <p >
                            The <strong>Certified Risk Adjustment Coder (CRC) </strong> credential, awarded  by the <strong>AAPC (American Academy of Professional Coders)</strong>, validates your expertise in risk adjustment coding. CRC-certified professionals accurately assign <strong>ICD-10-CM</strong>  diagnosis codes to assess patient health status, supporting risk adjustment models such as:
                        </p>

                        <ul class="list-disc">
                            <li><strong>Medicare Advantage (HCC)</strong></li>
                            <li><strong>Affordable Care Act (ACA) plans</strong></li>
                            <li><strong>Commercial and Medicaid risk adjustment programs</strong></li>

                        </ul>

                        <p >This certification ensures coders can effectively capture chronic conditions and comorbidities for appropriate reimbursement and compliance.</p>



                    </div>


                    <div className=' col-span-1 md:col-span-6  '>
                        <img src={crc} alt='leftimg' width={500}
                            height={400} />
                    </div>
                </div>



                <h2 className=' mb-8 mt-16'>About CRC Coders</h2>

                <p>

                    CRC-certified coders are vital in healthcare reimbursement. They ensure documentation accurately reflects a patient’s health conditions, which impacts the reimbursement healthcare providers receive under risk-adjusted payment models.
                </p>


                <h5 className='border-b-2 border-black inline-block w-fit'>Roles of CRC Coders:</h5>
                <ol className=' flex flex-col space-y-3 list-disc pl-5'>
                    <li><strong>Review Medical Records </strong>to identify chronic conditions and comorbidities.</li>
                    <li><strong>Assign ICD-10-CM Codes</strong> accurately for diagnoses.</li>
                    <li><strong>Ensure Documentation Completeness</strong> to support risk scores.</li>
                    <li><strong>Educate Providers</strong> on accurate and compliant documentation practices.</li>
                </ol>

                <p>CRC coders help optimize financial outcomes by ensuring patients' risk factors are fully documented and coded</p>

                <div className='grid grid-cols-1  md:grid-cols-12 gap-10 items-center'>
                    {/* <div className=' col-span-1 md:col-span-6  '>
                        <ol className=' flex flex-col space-y-3 l  pt-3 border-3 border-black-200 p-3 bg-green-200  rounded-xl '>
                            <li>Insurance Reimbursements</li>
                            <li>Public Health Research</li>
                            <li>Compliance with Healthcare Regulations​ </li>
                        </ol>
                    </div>

                    <div className=' col-span-1 md:col-span-6  '>
                        <h5>Roles of a CPC:</h5>
                        <ol className=' flex flex-col space-y-3 list-disc pl-5'>
                            <li>Reviewing patient records and assigning correct codes</li>
                            <li>Ensuring compliance with federal and payer regulations</li>
                            <li>Helping optimize revenue cycles in healthcare settings</li>
                        </ol>
                    </div> */}






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
                                    <p className=' border-b-2 border-black inline-block w-fit'><strong>Duration:</strong></p>
                                    <p><strong>Total : </strong> 45 days</p>
                                    <p><strong>Class Hours: </strong>2 hours per day</p>
                                    {/* <p><strong>Flexible Schedule : </strong>Suitable for working professionals</p> */}

                                </div>

                            </div>

                        </div>


                    </div>
                    <div className=' col-span-1 md:col-span-6 my-4   bg-white rounded-lg shadow-md  '>





                        <div className="flex  flex-col md:flex-row gap-10 p-4">
                            <div className="pl-3 flex flex-col">
                                <h2 className="mb-3">CRC Exam Overview</h2>
                                <p>
                                    <strong>Duration:</strong> 4 hour
                                </p>
                                <p>
                                    <strong>Format:</strong> 100 MCQ
                                </p>
                                <p>
                                    <strong>Mode:</strong>  In-person or online (proctored)
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
                                src={crc1}
                                alt="Car"
                                width={200}
                                height={200}
                                style={{ width: "250px", height: "250px", borderRadius: "10px" }}
                            />
                        </div>

                        {isExpanded && (
                            <div className=" space-y-2 list-disc pl-5 ">
                                <p>1. Risk Adjustment Models:</p>
                                <ul className='list-disc'>
                                    <li>Hierarchical Condition Categories (HCC)</li>
                                    <li>RxHCC (Prescription HCC)</li>
                                    <li>Commercial Risk Adjustment Models (ACA)</li>
                                </ul>
                                <p>
                                    2. <strong>ICD-10-CM Coding:</strong>Accurate diagnosis coding for chronic conditions and comorbidities.
                                </p>


                                <p>
                                    3. <strong>Medical Documentation Guidelines:</strong>Ensuring documentation supports the codes assigned.
                                </p>

                                <p>
                                    4. <strong>Compliance and Regulations:</strong>HIPAA, medical ethics, and fraud prevention in risk adjustment
                                </p>

                                <p>
                                    5. <strong>Data Quality and Validation:</strong>Auditing principles to ensure accurate risk adjustment coding.
                                </p>
                            </div>
                        )}
                    </div>




                </div>






            </section>









        </div>

    )
}
export default WhatCRC