import React from 'react'
import cdiImage from '../../images/courseimage/CDI - Images.jpg'
const WhatisCDI = () => {
    return (
        <div>
            <section className='px-4 container mx-auto my-12'>

                {/* What is CDI */}
                <div className='grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-items-center'>

                    {/* CDI Image */}
                    <div className='col-span-1 md:col-span-6 w-full flex justify-center'>
                        <img 
                            src={cdiImage} 
                            alt="Clinical Documentation Improvement" 
                            className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg border-4 border-white"
                        />
                    </div>

                    <div className='col-span-1 md:col-span-6'>
                        <h2>What is Clinical Documentation Improvement (CDI)?</h2>
                        <p>
                            Clinical Documentation Improvement (CDI) is the process of reviewing and improving patient medical records to ensure they are accurate, complete, and compliant with healthcare standards.
                        </p>
                        <p className='mt-3'>
                            It focuses on bridging the gap between clinical care and medical coding, ensuring that every diagnosis, treatment, and procedure is properly documented.
                        </p>
                        <p className='mt-3'>
                            Accurate documentation not only supports better patient care but also plays a key role in correct coding, reduced claim denials, and faster reimbursements.
                        </p>
                    </div>
                </div>

                {/* About the Course */}
                <div className='grid grid-cols-1 md:grid-cols-12 gap-10 items-center mt-12'>

                    <div className='col-span-1 md:col-span-6 mt-4'>
                        <div className='bg-white rounded-lg shadow-md p-6'>
                            <h2>About the Course</h2>
                            <p>
                                Clinical Documentation Improvement (CDI) is essential in modern healthcare to ensure accurate patient records, proper coding, and compliant billing.
                            </p>
                            <p className='mt-3'>
                                This training program focuses on analyzing medical records, identifying documentation gaps, and improving clinical accuracy to support better coding and faster reimbursements.
                            </p>
                            <p className='mt-3'>
                                At Thoughtflows, we train you with <strong>real time case scenarios and industry practices</strong> to make you job ready in the CDI domain.
                            </p>
                        </div>
                    </div>

                    <div className='col-span-1 md:col-span-6 my-4 bg-white rounded-lg shadow-md p-6'>
                        <h2 className='mb-4'>Course Details</h2>
                        <div className='space-y-3'>
                            <p><strong>Course Duration:</strong> 30 – 45 Days</p>
                            <p><strong>Mode:</strong> Classroom / Online</p>
                            <p><strong>Language:</strong> English</p>
                            <p><strong>Certification:</strong> Course Completion Certificate</p>
                            <p><strong>Support:</strong> Placement Guidance + Interview Preparation</p>
                            <div className='flex flex-row gap-6 mt-4'>
                                <div>
                                    <p className='border-b-2 border-black inline-block w-fit'><strong>Batch Options:</strong></p>
                                    <p><strong>Weekday:</strong> Monday to Friday</p>
                                    <p><strong>Weekend:</strong> Saturday and Sunday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-4'>
                    {[
                        { number: '5,000+', label: 'Medical Records Reviewed' },
                        { number: '95%', label: 'Documentation Accuracy Focus' },
                        { number: '100%', label: 'Practical Training Approach' },
                    ].map((stat, i) => (
                        <div key={i} className='text-center p-8 bg-gradient-to-br from-[#0e929f] to-[#4da9b3] rounded-2xl text-white shadow-lg'>
                            <div className='text-4xl font-extrabold mb-2'>{stat.number}</div>
                            <div className='text-lg font-medium'>{stat.label}</div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default WhatisCDI
