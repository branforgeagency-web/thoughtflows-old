import React, { useState } from 'react'
import rightimg from '../../images/Group710.png'
import { Row, Col } from 'react-bootstrap'
import cpc from "../../images/Course Images/CPC.jpg"
import cpc1 from "../../images/Course Images/CPC Exam Overview.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import cdeo from "../../images/Course Images/CDEO.jpg"

const WhatisCPC = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div >


            {/* <Row className='' >
                <Col lg={1}></Col>

                <Col lg={5}>
                    <h1>Certified Professional Coder (CPC)</h1>
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

            <section className=' container mx-auto mt-5 px-4'>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-10'>



                    <div className=' col-span-1 md:col-span-6  '>


                        <h2>What is CPC?</h2>
                        <p >
                            The Certified Professional Coder (CPC) credential, issued by the AAPC (American Academy of Professional Coders), is the gold standard in medical coding certifications. This certification validates your expertise in assigning accurate CPT (Current Procedural Terminology), ICD-10-CM (Diagnosis Codes), and HCPCS Level II codes.
                        </p>



                        <p >Passing the CPC exam demonstrates proficiency in outpatient coding and understanding healthcare regulations, which is essential for working in physician offices, hospitals, and insurance companies.</p>



                    </div>


                    <div className=' col-span-1 md:col-span-6  h-[220px] md:h-[280px] w-[500px] overflow-hidden rounded-lg shadow-md'>
                        <img src={cdeo} alt='leftimg' className='w-[500px] h-full object-cover' />
                    </div>
                </div>



                <h2 className=' mb-3'>About Certified Medical Coders</h2>

                <p>

                    A <span style={{ color: 'rgb(20 174 186)' }}>Certified Professional Coder</span> translates medical documentation into standardized codes used for billing and reporting purposes. CPC-certified professionals ensure accurate coding of services, which is critical for:
                </p>


                <div className='grid grid-cols-1  md:grid-cols-12 gap-10 items-center'>
                    <div className=' col-span-1 md:col-span-6  '>
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
                    </div>






                    <div className=' col-span-1 md:col-span-6 mt-4 '>

                        <div className=' "bg-white rounded-lg shadow-md p-4'>

                            <h2>Training Details</h2>

                            <p><strong>Class Types: </strong>Online & Offline Classes</p>
                            <div className=' flex flex-row gap-6' >


                                <div>
                                    <p className=' border-b-2 border-black inline-block w-fit'><strong>Batch Options:</strong></p>
                                    <p><strong>Weekday : </strong>Monday to Friday</p>
                                    <p><strong>Weekend : </strong>Saturday and Sunday</p>
                                </div>

                                <div>
                                    <p className=' border-b-2 border-black inline-block w-fi'><strong>Duration:</strong></p>
                                    <p><strong>2 hours  </strong>per session</p>
                                    <p><strong>Language : </strong>English</p>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div className=' col-span-1 md:col-span-6 my-4   bg-white rounded-lg shadow-md  '>





                        <div className="flex  flex-col md:flex-row gap-10 p-4">
                            <div className="pl-3 flex flex-col">
                                <h2 className="mb-3">CPC Exam Overview</h2>
                                <p>
                                    <strong>Duration:</strong> 4 hour
                                </p>
                                <p>
                                    <strong>Format:</strong> 100 MCQ
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
                                src={cpc1}
                                alt="Car"
                                width={200}
                                height={200}
                                style={{ width: "250px", height: "250px", borderRadius: "10px" }}
                            />
                        </div>

                        {isExpanded && (
                            <div className=" space-y-2 list-disc pl-5 ">
                                <p>1. ICD-10-CM Diagnosis Coding</p>
                                <p>
                                    2. CPT Coding for Various Specialties (Evaluation & Management,
                                    Surgery, Anesthesia, Radiology, Pathology, Medicine)
                                </p>
                                <p>3. HCPCS Level II Coding</p>
                                <p>4. Medical Terminology & Anatomy</p>
                                <p>5. Healthcare Compliance</p>
                            </div>
                        )}
                    </div>




                </div>






            </section>









        </div>

    )
}
export default WhatisCPC