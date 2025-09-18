import React from 'react'
import triEnroll from "../../images/Branches/online/nurse-typing.jpg"


function VizagEnroll() {
  return (
   <>
   <div className='enroll1-hyd'>
    <img src={triEnroll} className='hyderimglap'  alt='triEnroll'/>
    <div className="enroll1-hyd-content">
        <h2 style={{marginBottom:"25px"}}>Advanced Coding Techniques & Industry Updates</h2>
        <p>
        Our Visakhapatnam institute stays at the forefront of medical coding education by 
        incorporating the latest industry updates, coding guidelines, and technological 
        advancements. Students learn cutting-edge techniques including AI-assisted coding, 
        electronic health record systems, and emerging healthcare technologies. Our 
        curriculum is regularly updated to reflect current industry standards and 
        certification requirements.
        </p>

        <h2 style={{marginTop:"50px",marginBottom:"25px"}}>Success Stories from Visakhapatnam Students</h2>
        <p>Our Visakhapatnam campus has produced hundreds of successful medical coders 
        working in top hospitals and healthcare organizations across India. From recent 
        graduates earning ₹4-6 lakhs annually to experienced coders in leadership roles, 
        our alumni network spans the entire healthcare industry. Their success stories 
        demonstrate the quality of our training and the career opportunities available 
        in medical coding.</p>
        
    </div>
   </div>
   
   </>
  )
}

export default VizagEnroll
