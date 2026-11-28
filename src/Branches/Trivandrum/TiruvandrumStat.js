import React from "react";
import {
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  TrendingUp,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { LuxSection, LuxHead, LuxValues } from "../common/LuxSections";

function TiruvandrumStat() {
  const benefits = [
    { icon: Briefcase, title: "Healthcare Industry Career", text: "Stable desk-based roles in a rapidly expanding healthcare sector" },
    { icon: Globe, title: "Global MNC Opportunities", text: "Work with leading multinational healthcare IT & RCM companies" },
    { icon: TrendingUp, title: "Attractive Starting Salaries", text: "Strong entry-level packages with rapid progression on certification" },
    { icon: Award, title: "India & Gulf Careers", text: "Recognized credentials opening doors in India, UAE, Qatar & Saudi" },
    { icon: GraduationCap, title: "Life Science Friendly", text: "Ideal pathway for B.Sc, M.Sc, Pharmacy, Nursing & Allied Health" },
    { icon: Stethoscope, title: "Certification Growth", text: "Continuous upskilling with CPC, CIC, COC, CRC and CCS tracks" },
  ];

  const audiences = [
    { icon: GraduationCap, title: "B.Sc Life Science", text: "Botany, Zoology, Biotechnology, Biochemistry & Microbiology" },
    { icon: Stethoscope, title: "B.Pharm & D.Pharm", text: "Pharmacy graduates transitioning to clinical coding" },
    { icon: HeartPulse, title: "Nursing Graduates", text: "B.Sc. Nursing, GNM & Post-Basic Nursing professionals" },
    { icon: Award, title: "BDS & BHMS Graduates", text: "Dental and homeopathic graduates seeking IT/RCM careers" },
    { icon: HeartPulse, title: "Physiotherapy & Allied Health", text: "BPT, MLT and paramedical graduates" },
    { icon: Briefcase, title: "Career Switchers", text: "Non-life science graduates ready to start with Medical Terminology" },
  ];

  return (
    <>
      <LuxSection tone="tint">
        <LuxHead
          eyebrow="Career Advantages"
          title="Why Choose Medical Coding"
          accent="as a Career?"
          intro="Medical Coding is one of the fastest-growing healthcare careers, offering stability, global mobility, and clear professional growth."
        />
        <LuxValues items={benefits} />
      </LuxSection>

      <LuxSection tone="light">
        <LuxHead
          eyebrow="Eligibility"
          title="Who Can Join"
          accent="This Course?"
          intro="Suitable for life-science, pharmacy, nursing, and allied health graduates—as well as motivated career switchers."
        />
        <LuxValues items={audiences} />
        <p
          style={{
            textAlign: "center",
            maxWidth: 780,
            margin: "36px auto 0",
            color: "#5b6b7b",
            fontSize: 15.5,
            lineHeight: 1.7,
          }}
        >
          Students from non-life science backgrounds may also explore Medical Coding opportunities based on their learning ability and career goals.{" "}
          <strong style={{ color: "#097d8a" }}>
            No prior Medical Coding experience is required to begin learning.
          </strong>
        </p>
      </LuxSection>
    </>
  );
}

export default TiruvandrumStat;
