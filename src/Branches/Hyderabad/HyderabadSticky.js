import React from 'react'
import micro from "../../images/Branches/online/testtube.png"
import microbg from "../../images/Branches/online/microbg.png"

function HyderabadSticky() {
  return (
    <>
    <div className='stick-hyd'>
    <div className='static-trichy' style={{marginLeft:"100px"}}>
            <div id='static-1'>
            <h2 className='highh' >Learn by Doing, Not Just Watching</h2>
            <p>You don't become a great coder by memorising theory — you become one by coding. Our medical coding coaching in Hyderabad is built around hands-on practice and real-life scenarios, so what you learn actually sticks. Through coding exercises, case studies, and practical projects, you'll build the in-demand skills and real confidence you need to step into a medical coding job ready to perform from day one.</p>
            </div>
            <div id='static-1'>
           <h2 className='highh'>Get Certified, Get Noticed</h2>
           <p>In medical coding, the right certification opens doors. That's why our training prepares you thoroughly for the credentials that employers look for — including the Certified Professional Coder (CPC) and Certified Coding Specialist (CCS). With focused coaching and plenty of practice exams, you'll walk into your certification exam prepared, confident, and ready to stand out in the job market.</p>
            </div>
            <div id='static-1'>
                <h2 className='highh'>We Don't Stop at Training — We Help You Get Hired</h2>
                <p>Finishing your course is just the start; getting placed is the real goal. As a trusted medical coding institute in Ameerpet, we back our students with dedicated placement support. Through our strong connections with healthcare organisations and coding companies, we open doors to real job openings and networking opportunities. And our career team works with you one-on-one on your resume, interview skills, and job search — so you don't just complete the course, you launch a career.</p>
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