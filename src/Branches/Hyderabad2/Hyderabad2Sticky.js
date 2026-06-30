import React from 'react'
import micro from "../../images/Branches/online/testtube.png"
import microbg from "../../images/Branches/online/microbg.png"

function HyderabadSticky() {
  return (
    <>
    <div className='stick-hyd'>
    <div className='static-trichy' style={{marginLeft:"100px"}}>
            <div id='static-1'>
            <h2 className='highh' >Earn the Credentials Employers Look For</h2>
            <p>In coding, certification is your passport — it's often what gets your resume noticed in the first place. We prepare you thoroughly for the credentials that carry weight, chiefly the Certified Professional Coder (CPC) and the Certified Coding Specialist (CCS). With structured revision, full-length mock exams, and one-on-one doubt-clearing, you'll walk into the exam genuinely prepared and ready to compete for the best roles.</p>
            </div>
            <div id='static-1'>
           <h2 className='highh'>We Help You Land the Job, Not Just Pass the Course</h2>
           <p>Passing the exam is the milestone; getting hired is the point. Our career team works alongside you — sharpening your resume, running mock interviews, and connecting you with hiring partners across hospitals, medical billing firms, and coding companies. And we don't step back when the course ends; we stay involved through your job search until you're placed and working.</p>
            </div>

        </div>
        <div className='sticky-hyder'>
            <img src={micro}  alt='micro' style={{marginLeft:"10px", objectPosition:"right"}} className='hyderimg'/>
        </div>
       
    </div>
    
    </>
  )
}

export default  HyderabadSticky