import React from "react";
import { BookOpen, Activity, FileText, ClipboardCheck, Award, Laptop, Target, Briefcase, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const offers = [
  { icon: BookOpen, text: "Comprehensive training on medical coding" },
  { icon: Activity, text: "Learning in medical terminology and anatomy" },
  { icon: FileText, text: "Understanding of ICD-10-CM, CPT and HCPCS" },
  { icon: ClipboardCheck, text: "Coding practice" },
  { icon: Award, text: "Support for learners aspiring to a credible certification" },
  { icon: Laptop, text: "Various modes of teaching" },
  { icon: Target, text: "Help choosing a successful career in medical coding" },
  { icon: Briefcase, text: "Assistance in getting placed" },
];

const factors = [
  { icon: BookOpen, title: "Curriculum", text: "The course should teach medical coding through study of medical terminology, anatomy and various methods of coding. This includes, but is not limited to ICD-10-CM, CPT and HCPCS coding." },
  { icon: ClipboardCheck, title: "Practical Learning", text: "Opportunities should be provided for individuals to learn to code through practice and reviews of their coding, as opposed to teaching of coding through lecture." },
  { icon: Users, title: "Trainer Support", text: "The course should provide a means to support, educate, and revise coding to students outside of the formal training." },
  { icon: Award, title: "Certification", text: "Assessment of, practice in, and instruction on medical coding should be provided." },
  { icon: TrendingUp, title: "Career Advancement", text: "Course should provide guidance in editing and updating resumes, preparation for employment interviews, and job search." },
];

const TheniWhy = () => {
  return (
    <>
      <section className="theni-section">
        <div className="theni-wrap">
          <Reveal className="theni-center">
            <span className="theni-eyebrow">Why ThoughtFlows</span>
            <h2>Why Consider ThoughtFlows for Medical Coding Training in Theni?</h2>
            <p>
              When considering different medical coding institutes in Theni, it is important to
              evaluate the entire learning process, rather than just the name of a particular course.
              At ThoughtFlows, we provide:
            </p>
          </Reveal>
          <div className="theni-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {offers.map(({ icon: Icon, text }, i) => (
              <Reveal key={text} delay={(i % 4) * 0.08}>
                <div className="theni-card" style={{ textAlign: "center" }}>
                  <div className="theni-icon" style={{ margin: "0 auto 14px" }}><Icon size={26} /></div>
                  <p style={{ color: "#0f172a", fontWeight: 500 }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ textAlign: "center", marginTop: 30 }}>
              Medical coding aspirants compare and evaluate the above-mentioned points while deciding
              which medical coding institute in Theni to take up their learning with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="theni-section alt">
        <div className="theni-wrap">
          <Reveal className="theni-center">
            <span className="theni-eyebrow">Checklist</span>
            <h2>What Should You Look for in a Medical Coding Training Institute?</h2>
            <p>
              When considering medical coding training in Theni, it is important to review each
              program's curriculum to evaluate practical learning opportunities, the level of support
              provided by the trainer, and the preparation for certification and career advancement.
            </p>
          </Reveal>
          <div className="theni-grid">
            {factors.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.12}>
                <div className="theni-card">
                  <div className="theni-icon"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ textAlign: "center", marginTop: 30, display: "flex", gap: 8, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <CheckCircle2 size={18} color="#097D8A" />
              Reviewing these factors will help in selecting the best course for your medical coding
              training in Theni, and help compare courses to other training in local or online courses.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default TheniWhy;
