import React from "react";
import micro from "../../images/Branches/online/testtube.png";
import microbg from "../../images/Branches/online/microbg.png";

function KochiStick() {
  return (
    <>
      <div className="stick-k">
        <div className="sticky-kochi">
          <img
            src={micro} alt='micro'
            style={{ marginLeft: "", objectPosition: "right",borderRadius:"10px" }}
          />
        </div>
        <div className="static-trichy" style={{ marginLeft: "100px" }}>
          <div id="static-1" style={{paddingTop:"40px"}}>
            <h2 className="highh">
              Ensuring Affordability and Flexibility in Education
            </h2>
            <p>
              We recognize the importance of affordability and flexibility in
              education, especially for students from diverse backgrounds and
              those with other commitments. At Thoughtflows Medical Coding
              Academy, we aim to make quality education accessible to all
              aspiring medical coders. Our course fees are structured to be
              affordable, ensuring that cost does not become a barrier to
              pursuing a career in medical coding. We provide transparent fee
              structures, enabling students to plan their education without any
              hidden costs.
            </p>
            <p>
              In addition to affordability, we also offer flexible batch timings
              to accommodate the needs of working professionals and students
              with other commitments. Our academy provides options for both
              weekday and weekend classes, allowing students to choose a
              schedule that aligns with their lifestyle and commitments. The
              combination of affordability and flexibility ensures that students
              can pursue their passion for medical coding without financial
              constraints and without compromising on their other commitments.
            </p>
          </div>
          <div id="static-1">
            <h2 className="highh">
            Advancing Learning with State-of-the-Art Infrastructure
            </h2>
            <p>
            Thoughtflows Medical Coding Academy is equipped with state-of-the-art infrastructure, creating a modern and conducive learning environment for our students. We understand the importance of providing access to the latest technology and resources to enhance the learning experience.
            </p>
            <p>Our classrooms are equipped with multimedia capabilities, enabling interactive and engaging lectures. Students have access to industry-standard coding software and tools, allowing them to gain hands-on experience with real-world coding scenarios. Our academy also houses a well-stocked library with reference materials and resources to support independent learning and research.</p>
         <p>In addition to physical infrastructure, Thoughtflows Medical Coding Academy also utilizes online learning platforms to supplement classroom learning. Through virtual classrooms and e-learning modules, students can access course materials and resources at their convenience, facilitating flexible and self-paced learning.</p>
         <p>The combination of state-of-the-art physical infrastructure and online learning resources ensures that our students have access to a diverse range of resources that support their educational journey at Thoughtflows Medical Coding Academy</p>
          </div>
          <div id="static-1" style={{paddingBottom:"40px"}}>
            <h2 className="highh">Career-Building Job Placement Assistance</h2>
            <p>
            At Thoughtflows Medical Coding Academy, we understand that securing a rewarding job after completing training is a top priority for our students. To support their career aspirations, we offer comprehensive job placement assistance. Our academy maintains strong partnerships with leading healthcare providers and coding organizations, giving our graduates an edge in the competitive job market.
            </p>
            <p>
            Our job placement assistance includes career counseling, resume preparation, interview coaching, and job search support. We guide our students in showcasing their skills and knowledge effectively to potential employers. We also organize job fairs and networking events, connecting our students with industry professionals and potential employers. Our commitment to the success of our students extends beyond the training period, ensuring that they embark on a fulfilling career as certified medical coders.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KochiStick;
