import React from 'react';
import micro from "../../images/Branches/online/testtube.png";

function PuneSticky() {
  return (
    <>
      <div className='stick-hyd'>
        <div className='static-trichy' style={{ marginLeft: "100px" }}>
          <div id='static-1'>
            <h2 className='highh'>Experiential Learning with Live Case Scenarios</h2>
            <p>
              Forget rote memorization. At ThoughtFlows Pune, you analyze and code actual patient charts, hospital discharge summaries, emergency department records, and operative reports. By learning how diagnoses and procedures map to international codes under real healthcare constraints, you build authentic on-the-job mastery.
            </p>
          </div>
          <div id='static-1'>
            <h2 className='highh'>Targeted AAPC & AHIMA Exam Preparation</h2>
            <p>
              The CPC (Certified Professional Coder) credential is the industry gold standard. Our syllabus includes exhaustive module-wise practice assessments, time management drills, and full-length simulated mock exams under authentic test conditions so you enter your exam hall with complete confidence.
            </p>
          </div>
          <div id='static-1'>
            <h2 className='highh'>Direct Corporate Placement Connect in Pune & Mumbai</h2>
            <p>
              With Pune and Maharashtra being a prime center for international healthcare IT, our dedicated placement wing connects you directly to hiring HRs. We conduct personalized resume enhancement, technical mock interviews, and organize recruitment drives until you receive your offer letter.
            </p>
          </div>
        </div>
        <div className='sticky-hyder'>
          <img src={micro} style={{ marginLeft: "10px", objectPosition: "right" }} className='hyderimg' alt='Laboratory Graphics' />
        </div>
      </div>
    </>
  );
}

export default PuneSticky;
