import React from 'react'
import branch from "../../images/Branches/image7 copy.png"
import KochiChoice from './KochiChoice'

function KochiCore() {
  return (
    <>
    <div style={{paddingBottom:"50px"}}>
      
    <div style={{background:"white",height:"", display:"",justifyContent:"space-between"}} className='flex flex-col justify-between md:flex-row'>

<div style={{background:"#9B5DE6",width:"",padding:"70px 70px"}} className='flex-1'>
   
   <h2 style={{color:"white"}}>Dive into Our Extensive Medical Coding Curriculum</h2>
   <p  style={{color:"white", marginTop:"20px",textAlign:"justify"}}>The curriculum at Thoughtflows Medical Coding Academy is meticulously designed to provide students with a comprehensive understanding of medical coding principles, practices, and industry-specific knowledge. Our training program covers a wide range of topics that are essential for medical coding professionals to excel in their roles.</p>
   <img src={branch} style={{width:"100px"}} alt='branch'/> 

</div>
<div style={{width:""}} className='flex-1'>
<p style={{padding:"50px", textAlign:"justify",wordSpacing:"4px", lineHeight:"26px"}}>
The curriculum begins with an introduction to medical terminology, anatomy, and physiology, providing a foundational understanding of the human body and its systems.Students then progress to the study of medical coding systems, such as ICD-10 and CPT coding, which are essential for accurately documenting medical procedures and diagnoses.As students advance through the program, they gain knowledge of coding guidelines and regulations, ensuring compliance with industry standards and legal requirements. Our curriculum also includes training on medical billing processes, preparing students to work in collaboration with billing and insurance departments in healthcare facilities.
Throughout the training program, students are exposed to real-world coding scenarios and case studies, enabling them to apply their knowledge and skills in practical settings. This hands-on approach ensures that our students are well-prepared to handle the complexities of medical coding in their professional roles.
</p>

</div>

</div>
<div style={{background:"white",height:"", display:"",justifyContent:"" }}  className='flex flex-col-reverse justify-between md:flex-row align-start' >
<div style={{width:""}} className='flex-1'>
<p style={{padding:"50px", textAlign:"justify",wordSpacing:"4px", lineHeight:"28px",margin:"0"}}>
Our faculty members are not only subject matter experts but also passionate educators dedicated to the success of their students. They understand the unique challenges and requirements of the medical coding profession and tailor their teaching approaches to address those needs. Through interactive lectures, discussions, and one-on-one mentoring, our faculty members ensure that each student receives personalized attention and guidance throughout their learning journey.Faculty members bring real-world experience to the classroom, providing practical insights and guidance to students.
</p>
</div>
<div style={{background:"#9B5DE6",width:"",padding:"70px" , marginTop:""}} className='flex-1'>
   <h2 style={{color:"white"}}>Shaping Future Medical Coding Professionals</h2>
   <p  style={{color:"white", marginTop:"20px", textAlign:"justify"}}>At Thoughtflows Medical Coding Academy, we believe that the quality of education is heavily dependent on the expertise of our faculty. Our esteemed team of faculty members consists of experienced professionals who have in-depth knowledge of the medical coding domain. </p>
  <img src={branch} style={{width:"100px"}} alt='branch'/> 
  

</div>


</div>
    </div>
   
    
    </>
  )
}

export default KochiCore