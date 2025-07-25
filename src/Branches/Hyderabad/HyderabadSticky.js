import React from 'react'
import micro from "../../images/Branches/online/testtube.png"
import microbg from "../../images/Branches/online/microbg.png"

function HyderabadSticky() {
  return (
    <>
    <div className='stick-hyd'>
    <div className='static-trichy' style={{marginLeft:"100px"}}>
            <div id='static-1'>
            <h2 className='highh' >Develop In-Demand Skills with Our Practical Training Approach</h2>
            <p>Our training program in Hyderabad follows a practical training approach to develop in-demand skills. We believe in hands-on practice and real-life coding scenarios to reinforce your understanding and sharpen your coding abilities. Through coding exercises, case studies, and practical projects, you'll gain the practical skills and experience necessary to succeed as a medical coder.</p>
            </div>
            <div id='static-1'>
           <h2 className='highh'>Industry-Recognized Certifications for Medical Coders</h2>
           <p>Earning industry-recognized certifications can significantly enhance your career prospects as a medical coder. Our training program prepares you for certifications such as Certified Professional Coder (CPC) and Certified Coding Specialist (CCS). We provide targeted instruction and practice exams to ensure you are well-prepared to pass the certification exams and stand out in the job market.</p>
            </div>
            <div id='static-1'>
                <h2 className='highh'>Job Placement Assistance After Training</h2>
                <p>We understand the importance of securing employment after completing medical coding training. That's why we offer comprehensive job placement assistance to our students. We have established strong industry connections and partnerships with healthcare organizations, enabling us to provide valuable networking opportunities and access to job openings. Our dedicated career services team provides guidance in resume preparation, interview skills, and job search strategies to help students kickstart their careers.</p>
            </div>
        </div>
        <div className='sticky-hyder'>
            <img src={micro}  style={{marginLeft:"10px", objectPosition:"right"}} className='hyderimg' alt='micro'/>
        </div>
       
    </div>
    
    </>
  )
}

export default  HyderabadSticky