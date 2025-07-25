import React from 'react'
import triEnroll from "../../images/Branches/online/nurse-typing.jpg"


function TrichyEnroll() {
  return (
   <>
   <div className='enroll1-hyd'>
    <img src={triEnroll} className='hyderimglap'  alt='triEnroll'/>
    <div className="enroll1-hyd-content">
        <h2 style={{marginBottom:"25px"}}>Learn the Latest Coding Techniques in Our Training Program</h2>
        <p>
        Medical coding is a dynamic field that evolves with changing guidelines and regulations. Our training program in Hyderabad focuses on teaching you the latest coding techniques and industry best practices. We keep ourselves updated with the most recent coding guidelines, ensuring that you receive the most relevant and up-to-date training to excel in your career.
        </p>

        <h2 style={{marginTop:"50px",marginBottom:"25px"}}>Real-Life Success Stories of Our Medical Coding Students</h2>
        <p>Our medical coding training program has produced numerous success stories. Hear from our students who have successfully completed the training and achieved career milestones in the field of medical coding. Their stories serve as a testament to the quality of our training and the opportunities it can create for aspiring medical coders.</p>
        
    </div>
   </div>
   
   </>
  )
}

export default TrichyEnroll