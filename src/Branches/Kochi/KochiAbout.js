import React from "react";
import labs from "../../images/Branches/online/kochi.jpg";
import branch from "../../images/Branches/image7 copy.png";

function KochiAbout() {
  return (
    <>
      <div className="trivandrum-abt">
        <div className="trivandrum-abt-1">
          <img src={labs} alt="labs"  style={{width:"200px"}}/>
          <div>
            <h2 className="highlight">About Us</h2>
            <p style={{ fontSize: "18px", textAlign: "justify" }}>
            In the bustling city of Kochi, Thoughtflows Medical Coding Academy stands tall as the No.1 leading training institute, shaping the future of medical coding professionals with excellence and dedication. Aspiring medical coders seeking a world-class education and abundant career opportunities need not look further. Thoughtflows Academy offers a transformative learning experience, emphasizing a comprehensive curriculum, expert faculty, and state-of-the-art infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div style={{padding:"50px 0px 20px 0px"}}>
        <h2 style={{textAlign:"center"}}>Why Choose Us?</h2>
        <p style={{padding:"10px 50px", textAlign:"justify"}}>
        Choosing the right training institute is a critical decision that can shape your career in medical coding. Thoughtflows Medical Coding Academy offers several compelling reasons to be the preferred choice for medical coding aspirants in Kochi.
        </p>
      </div>

      <div
        style={{
          background: "white",
         
          display: "",
          justifyContent: "",
          textAlign:"justify",
          gap:"45px",
          paddingLeft:"50px",
          paddingRight:"50px",
          marginTop:"-20px",
          paddingBottom:"50px",
        }}
        className="flex flex-col md:flex-row justify-between"
      >
        <div><p style={{lineHeight:"26px"}}><bold>1.</bold> One of the key reasons to choose Thoughtflows Academy is our commitment to excellence. As the No.1 leading training institute in Kochi, we are renowned for providing high-quality education that aligns with industry standards. Our curriculum is regularly updated to incorporate the latest trends and advancements in medical coding, ensuring that our students receive the most relevant and up-to-date training.</p></div>
        <div><p style={{lineHeight:"26px"}}><bold>2.</bold> Additionally, our academy boasts a team of expert faculty members who are seasoned professionals in the field of medical coding. They bring a wealth of knowledge and practical experience to the classroom, providing invaluable insights and guidance to students. Our faculty members are not just educators but mentors, dedicated to shaping the future of medical coding professionals.</p></div>
      </div>
      
    </>
  );
}

export default KochiAbout;
