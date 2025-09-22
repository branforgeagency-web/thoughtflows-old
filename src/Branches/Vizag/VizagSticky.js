import React from 'react'
import micro from "../../images/Branches/vizhag2.png"
import microbg from "../../images/Branches/online/microbg.png"

function VizagSticky() {
  return (
    <>
    <div className='stick-hyd'>
    <div className='static-trichy' style={{marginLeft:"100px"}}>
            <div id='static-1'>
            <h2 className='highh' >Hands-On Training with Real Medical Records</h2>
            <p>Our Vizag institute emphasizes practical learning through real-world medical coding scenarios. Students work with actual patient records, practice coding on industry-standard software, and participate in live coding sessions. This hands-on approach ensures students develop the practical skills and confidence needed to excel in medical coding careers from day one.</p>
            </div>
            <div id='static-1'>
           <h2 className='highh'>Certification Preparation & Career Advancement</h2>
           <p>Our Vizag institute prepares students for prestigious certifications including CPC (Certified Professional Coder), CCS (Certified Coding Specialist), and CIC (Certified Inpatient Coder). We provide comprehensive study materials, mock exams, and one-on-one guidance to ensure high pass rates. Our certification-focused approach opens doors to better job opportunities and higher salaries in the healthcare industry.</p>
            </div>
            <div id='static-1'>
                <h2 className='highh'>100% Job Placement Guarantee in Vizag</h2>
                <p>Our Vizag institute offers guaranteed job placement assistance with a 95% success rate. We have partnerships with leading hospitals, clinics, and healthcare companies across Andhra Pradesh and nationwide. Our dedicated placement cell provides resume building, interview preparation, and direct job referrals. We also organize campus recruitment drives and industry networking events to connect students with potential employers.</p>
            </div>
        </div>
        <div className='sticky-hyder'>
            <img src={micro}  style={{marginLeft:"10px", objectPosition:"right"}} className='hyderimg' alt='micro'/>
        </div>
       
    </div>
    
    </>
  )
}

export default  VizagSticky
