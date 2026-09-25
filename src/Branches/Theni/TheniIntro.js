import React from "react";
import { CheckCircle2, GraduationCap, Search, HeartPulse, Briefcase, UserCheck, Layers } from "lucide-react";
import Reveal from "./Reveal";
import coderImg from "../../images/Branches/online/on12.jpg";
import studentsImg from "../../images/Branches/online/Students.jpg";

const audience = [
  { icon: GraduationCap, text: "Degree holders (all fields)" },
  { icon: Search, text: "New job seekers" },
  { icon: HeartPulse, text: "Graduates of paramedical and allied health sciences" },
  { icon: Briefcase, text: "People looking for a job in medical coding" },
  { icon: UserCheck, text: "Aspiring professional medical coders" },
];

const TheniIntro = () => {
  return (
    <>
      <section className="theni-section">
        <div className="theni-wrap theni-split">
          <Reveal x={-40} y={0} className="theni-photo">
            <img src={coderImg} alt="Medical coder reviewing clinical documentation" />
            <div className="badge">
              <span className="ic"><Layers size={22} /></span>
              <div>
                <strong>Stepwise Learning</strong>
                <small>No memorizing code numbers</small>
              </div>
            </div>
          </Reveal>
          <Reveal x={40} y={0}>
            <span className="theni-eyebrow">About the Course</span>
            <h2>Medical Coding Training in <span className="theni-accent">Theni</span></h2>
            <p>
              We provide students with an understanding of medical terminology, anatomy and other
              related fields. Students will learn about ICD-10-CM, CPT and HCPCS coding, participate
              in various coding activities and prepare for various medical coding certification
              exams. Courses are offered both online and onsite.
            </p>
            <p>
              Medical coders translate the documentation created by the health care team into
              universally understood codes. The coding systems used in health care are complex;
              therefore, interpreting and assigning the proper code requires sound knowledge of
              medical terminology and anatomy.
            </p>
            <p>
              ThoughtFlows teaches medical terminology and anatomy and uses a stepwise approach for
              learning coding systems. This approach simplifies the complexity of various health care
              coding systems, and builds a framework for understanding health care coding.
            </p>
          </Reveal>
        </div>
        <Reveal className="theni-wrap" style={{ marginTop: 40 }}>
          <p style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            When researching medical coding courses in Theni, consider what each course covers, how
            the courses are facilitated, what certification preparation is offered, what employment
            assistance is provided and what types of courses are offered. We hope to meet and exceed
            your expectations!
          </p>
        </Reveal>
      </section>

      <section className="theni-section alt">
        <div className="theni-wrap theni-split rev">
          <Reveal x={40} y={0} className="theni-photo">
            <img src={studentsImg} alt="Students joining the medical coding course in Theni" />
            <div className="badge">
              <span className="ic"><CheckCircle2 size={22} /></span>
              <div>
                <strong>No Prior Experience</strong>
                <small>Start from the basics</small>
              </div>
            </div>
          </Reveal>
          <Reveal x={-40} y={0}>
            <span className="theni-eyebrow">Eligibility</span>
            <h2>Who Can Join a Medical Coding Course?</h2>
            <p>Anyone can apply to the medical coding course in Theni, including:</p>
            <ul className="theni-pills">
              {audience.map(({ icon: Icon, text }) => (
                <li key={text}><Icon size={18} /> {text}</li>
              ))}
            </ul>
            <p>
              People need not have prior coding experience to gain an understanding of this field.
              The course will cover the basics of coding, and provide the attendee with the
              opportunity to practice coding.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default TheniIntro;
