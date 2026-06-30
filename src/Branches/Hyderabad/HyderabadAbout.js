import React from "react";
import labi from "../../images/Branches/online/hydera1.jpg";

function HyderabadAbout() {
  return (
    <>
      <div className="trivandrum-abt">
        <h4 style={{ color: "#21A7D0", textAlign: "center" }}>Why Choose</h4>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Institute in Hyderabad?
        </h2>
        <div className="trivandrum-abt-1">
          <div>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
              Choosing the right place to train makes all the difference. As a trusted medical coding institute in Hyderabad, we've built everything around one goal — your success. From a job-focused curriculum and experienced CPC faculty to modern infrastructure, dedicated placement assistance, affordable fees, and flexible weekday and weekend batches, every detail is designed to take you from beginner to confident, certified, and career-ready.
            </p>
          </div>
          <img src={labi} style={{ width: "250px" }} alt="hyderabadAbout" />
        </div>
      </div>

      <div style={{ padding: "50px 0px 20px 0px" }}>
        <h2 style={{ textAlign: "center" }}>
          Train the Way You'll Actually Work — in the Heart of Hyderabad
        </h2>
        <p style={{ padding: "20px 50px", textAlign: "justify" }}>
          Learning sticks when the environment is right. As a leading medical coding institute in Hyderabad, we've built our center for hands-on practice, not just theory — smart digital classrooms, current coding software, and the latest ICD-10, CPT, and HCPCS references all within reach. With focused batch sizes and real coding scenarios to work through, you don't just study medical coding — you practise it the way you'll do it on the job.
        </p>
      </div>

      <div className="flexitem hyderabad-flex">
        <div className="f-item-2">
          <img src={labi} alt='cbe1About' className='cbe1About' />
        </div>
        <div className="f-item-1">
          <h2>Explore a Curriculum That Covers It All</h2>
          <p style={{ textAlign: "justify" }}>
            Our medical coding course is built to give you the full picture — not just bits and pieces. Through our hands-on medical coding training in Ameerpet, you'll work through everything that matters: coding systems and guidelines, healthcare documentation, and reimbursement methodologies. By the end, you won't just know the theory — you'll have the practical skills and confidence to handle real coding work and grow in your career.
          </p >
          <h2 style={{ marginTop: "45px" }}>Learn From Faculty Who've Done the Job</h2>
          <p style={{ textAlign: "justify" }}>
            The people teaching you make all the difference. Our trainers aren't just instructors — they're experienced medical coding professionals who've spent years doing this work in the real world. They bring genuine industry insight, patient mentorship, and practical guidance to every class, so you learn how coding actually works on the job — not just what's in the textbook.
          </p>
          <h2 style={{ marginTop: "45px" }}>A Learning Environment Built Around You</h2>
          <p style={{ textAlign: "justify" }}>
            Great training needs the right setting. As a trusted medical coding institute in Hyderabad, we've invested in classrooms equipped with current technology and coding resources, all within a focused, supportive environment. It's a space designed to help you concentrate, practise, and build real skills — so you can learn faster and train with confidence.
          </p>
        </div>
      </div>
    </>
  );
}

export default HyderabadAbout;
