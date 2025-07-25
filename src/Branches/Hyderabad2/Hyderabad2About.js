import React from "react";
import labi from "../../images/Branches/online/hydera1.jpg";
import branch from "../../images/Branches/image7 copy.png";
// import bannerVid from ""

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
              When it comes to medical coding training in Hyderabad, we stand
              out for several reasons. Our academy offers a comprehensive
              curriculum, expert faculty, excellent infrastructure, job
              placement assistance, affordable fees, and flexible batch timings.
              We are dedicated to providing the best training experience to our
              students, equipping them with the skills and knowledge needed for
              a successful career in medical coding.
            </p>
          </div>
          <img src={labi} style={{ width: "250px" }} alt="labi"/>
        </div>
      </div>

      <div style={{ padding: "50px 0px 20px 0px" }}>
        <h2 style={{ textAlign: "center" }}>
          Advanced Infrastructure for Seamless Learning
        </h2>
        <p style={{ padding: "20px 50px", textAlign: "justify" }}>
          To facilitate effective learning, we have invested in infrastructure
          and modern facilities at our medical coding training center in
          Hyderabad. Our classrooms are equipped with the latest technology and
          resources to support an immersive learning experience. We provide a
          conducive environment for students to enhance their skills and excel
          in their training.
        </p>
      </div>

      <div className="flexitem hyderabad-flex">
        <div className="f-item-2">
          <img src={labi} alt='cbe1About' className='cbe1About' />

        </div>
        <div className="f-item-1">
          <h2>Explore the Extensive Module</h2>
          <p style={{ textAlign: "justify" }}>
            Our medical coding training module covers a wide range of topics,
            ensuring that students receive a comprehensive education in medical
            coding. From coding systems and guidelines to healthcare
            documentation and reimbursement methodologies, we provide an
            extensive curriculum that equips students with the necessary skills
            and knowledge to excel in their careers.
          </p >
          <h2 style={{ marginTop: "45px" }}>Meet Our Experienced Faculty Members</h2>
          <p style={{ textAlign: "justify" }}>
            Our faculty members are experienced professionals who bring a wealth
            of knowledge and expertise to the classroom. They have years of
            practical experience in the field of medical coding and are
            committed to providing high-quality instruction and guidance to our
            students. With their industry insights and mentorship, students
            receive a well-rounded education that prepares them for real-world
            coding challenges.
          </p>

          <h2 style={{ marginTop: "45px" }}>Advanced Infrastructure for Seamless Learning</h2>
          <p style={{ textAlign: "justify" }}>To facilitate effective learning, we have invested in infrastructure and modern facilities at our medical coding training center in Hyderabad. Our classrooms are equipped with the latest technology and resources to support an immersive learning experience. We provide a conducive environment for students to enhance their skills and excel in their training.</p>
        </div>

      </div>
    </>
  );
}

export default HyderabadAbout;
