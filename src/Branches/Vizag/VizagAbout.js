import React from "react";
import labi from "../../images/Branches/vizhag3.png";
import branch from "../../images/Branches/image7 copy.png";
// import bannerVid from ""

function VizagAbout() {
  return (
    <>
      <div className="trivandrum-abt">
        <h4 style={{ color: "#21A7D0", textAlign: "center" }}>Why Choose</h4>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Institute in Vizag?
        </h2>
        <div className="trivandrum-abt-1">
          <div>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
              Located in the heart of Vizag, our medical coding training institute 
              stands as the premier destination for healthcare education in Andhra Pradesh. 
              We offer industry-leading curriculum, certified instructors, state-of-the-art 
              infrastructure, guaranteed job placement assistance, competitive fees, and 
              flexible learning schedules. Our commitment to excellence ensures every student 
              receives world-class training to excel in the dynamic field of medical coding.
            </p>
          </div>
          <img src={labi} style={{ width: "250px" }} alt="vizagAbout" />
        </div>
      </div>

      <div style={{ padding: "50px 0px 20px 0px" }}>
        <h2 style={{ textAlign: "center" }}>
          Advanced Infrastructure for Seamless Learning
        </h2>
        <p style={{ padding: "20px 50px", textAlign: "justify" }}>
          Our Vizag campus features cutting-edge infrastructure designed 
          specifically for medical coding education. We have modern computer labs 
          with high-speed internet, dedicated coding practice rooms, and a 
          comprehensive library with the latest medical coding resources. Our 
          air-conditioned classrooms provide a comfortable learning environment, 
          while our experienced faculty ensures personalized attention for every student.
        </p>
      </div>

      <div className="flexitem hyderabad-flex">
        <div className="f-item-2">
          <img src={labi} alt='cbe1About' className='cbe1About' />

        </div>
        <div className="f-item-1">
          <h2>Comprehensive Medical Coding Curriculum</h2>
          <p style={{ textAlign: "justify" }}>
            Our Vizag institute offers a comprehensive curriculum covering 
            ICD-10-CM, CPT, HCPCS coding systems, medical terminology, anatomy & 
            physiology, healthcare documentation, and billing procedures. Students 
            learn through hands-on practice with real medical records, case studies, 
            and industry-standard software. Our curriculum is regularly updated to 
            align with the latest healthcare industry standards and certification 
            requirements.
          </p >
          <h2 style={{ marginTop: "45px" }}>Expert Faculty with Industry Experience</h2>
          <p style={{ textAlign: "justify" }}>
            Our faculty in Vizag consists of certified medical coders and 
            healthcare professionals with 10+ years of industry experience. They 
            bring real-world expertise from hospitals, clinics, and healthcare 
            organizations. Our instructors are not just teachers but mentors who 
            guide students through complex coding scenarios, share industry insights, 
            and prepare them for successful careers in medical coding.
          </p>

          <h2 style={{ marginTop: "45px" }}>State-of-the-Art Learning Environment</h2>
          <p style={{ textAlign: "justify" }}>Our Vizag campus provides an ideal learning environment with modern computer labs, high-speed internet, and access to the latest medical coding software. Students practice on real medical records and coding scenarios, ensuring they are job-ready upon completion. Our infrastructure supports both individual learning and collaborative group projects.</p>
        </div>

      </div>
    </>
  );
}

export default VizagAbout;
