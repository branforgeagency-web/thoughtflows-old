import React from 'react';
import micro from "../../images/Branches/online/testtube.png";

function KolhapurSticky() {
  return (
    <>
      <div className='stick-hyd'>
        <div className='static-trichy' style={{ marginLeft: "100px" }}>
          <div id='static-1'>
            <h2 className='highh'>Practice-Driven Learning with Live Clinical Charts</h2>
            <p>
              True proficiency in medical coding comes from hands-on practice. In our Kolhapur academy, you decode real-world clinical records, lab results, radiological procedures, and surgical operative notes using current ICD-10-CM, CPT, and HCPCS guidelines. This ensures you step into job interviews with working competency from day one.
            </p>
          </div>
          <div id='static-1'>
            <h2 className='highh'>International Certification Mastery (AAPC & AHIMA)</h2>
            <p>
              Global employers demand certified professionals. We prepare you comprehensively for industry-benchmarked credentials such as CPC (Certified Professional Coder), CIC (Inpatient Coder), and CCS. With exhaustive series of timed mock exams, test-taking strategies, and chapter-wise revisions, our students achieve exceptional first-attempt clearance rates.
            </p>
          </div>
          <div id='static-1'>
            <h2 className='highh'>End-to-End Placement Assistance in Top Healthcare MNCs</h2>
            <p>
              Completing your course is only the beginning. Our dedicated placement cell works actively with top hospital networks, RCM service providers, and healthcare IT companies. We provide one-on-one resume formatting, HR interview prep, and guaranteed placement drives until you secure your offer letter.
            </p>
          </div>
        </div>
        <div className='sticky-hyder'>
          <img src={micro} style={{ marginLeft: "10px", objectPosition: "right" }} className='hyderimg' alt='Laboratory Graphic' />
        </div>
      </div>
    </>
  );
}

export default KolhapurSticky;
