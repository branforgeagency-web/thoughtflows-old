import React from "react";
import { Briefcase, Users, TrendingUp, Award, Building2, GraduationCap, BookOpen } from "lucide-react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxHead, LuxValues, LuxPhotoCards } from "../common/LuxSections";

function KochiAbout() {
  return (
    <>
      <LuxSection tone="light">
        <LuxSplit
          image={mediaUrl("images/Interiors/kochi/kochi-interior-01.jpg")}
          imageAlt="ThoughtFlows Kochi campus reception"
          eyebrow="Medical Coding in Kochi"
          title="Why Medical Coding is Gaining Popularity in"
          accent="Kochi"
        >
          <p>
            Kochi is one of Kerala's major healthcare and business hubs, with growing opportunities in healthcare support services and revenue cycle management. As awareness of healthcare careers continues to increase, many graduates and professionals in Kochi are exploring Medical Coding as a career path that combines healthcare knowledge with professional growth opportunities.
          </p>
        </LuxSplit>
      </LuxSection>

      <LuxSection tone="tint">
        <LuxHead
          eyebrow="Career Benefits"
          title="Why Medical Coding is Becoming a"
          accent="Preferred Career Choice"
          intro="Medical Coding plays an important role in the healthcare ecosystem by transforming medical diagnoses, treatments, and procedures into standardized codes used for documentation and reimbursement processes. Many graduates choose Medical Coding because it offers:"
        />
        <LuxValues
          items={[
            { icon: Briefcase, title: "Healthcare Career Pathway", text: "A professional healthcare career pathway" },
            { icon: Users, title: "Open to All Levels", text: "Opportunities for freshers and experienced professionals" },
            { icon: TrendingUp, title: "Long-Term Growth", text: "Continuous learning and career growth" },
            { icon: Award, title: "Global Credentials", text: "Industry-recognized certification options" },
            { icon: Building2, title: "RCM & Healthcare Roles", text: "Opportunities within healthcare and revenue cycle management sectors" },
          ]}
        />
        <p style={{ textAlign: "center", maxWidth: 820, margin: "36px auto 0", color: "#5b6b7b", fontSize: 16, lineHeight: 1.7 }}>
          For students and professionals seeking a healthcare-focused career without direct patient care responsibilities, Medical Coding offers a promising career direction.
        </p>
      </LuxSection>

      <LuxSection tone="light">
        <LuxHead
          eyebrow="Who It's For"
          title="Medical Coding Training in Kochi for"
          accent="Graduates & Professionals"
          intro="Whether you are a recent graduate, a working professional, or planning a career restart — Medical Coding offers a structured pathway into the healthcare industry."
        />
        <LuxPhotoCards
          items={[
            {
              title: "Recent Graduates",
              text: "Exploring healthcare career opportunities after completing your degree? Medical Coding is a great first step into the healthcare industry.",
              image: mediaUrl("images/Interiors/kochi/kochi-interior-03.jpg"),
              imageAlt: "Classroom at ThoughtFlows Kochi",
            },
            {
              title: "Working Professionals",
              text: "Considering a career transition into healthcare? Our training is designed to fit professionals looking to shift into a growing and stable industry.",
              image: mediaUrl("images/Interiors/kochi/kochi-interior-07.jpg"),
              imageAlt: "Workstations at ThoughtFlows Kochi",
            },
            {
              title: "Career Switchers",
              text: "Restarting after a career break? Medical Coding offers a clear, learnable path back into professional life with strong healthcare industry demand.",
              image: mediaUrl("images/Interiors/kochi/kochi-interior-04.jpg"),
              imageAlt: "Counselling and guidance at ThoughtFlows Kochi",
            },
          ]}
        />
        <div style={{ marginTop: 44, textAlign: "center" }}>
          <p style={{ fontWeight: 600, fontSize: 17, marginBottom: 18, color: "#0b2239" }}>
            Our step-by-step training covers:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {["Medical Terminology", "Anatomy Basics", "Coding Concepts", "Healthcare Documentation", "Coding Guidelines"].map((topic) => (
              <span
                key={topic}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 999,
                  background: "#f6f9fc",
                  border: "1px solid #e8eef4",
                  color: "#0b2239",
                  fontSize: 14.5,
                  fontWeight: 600,
                }}
              >
                <BookOpen size={16} color="#097d8a" /> {topic}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 22, color: "#097d8a", fontWeight: 600, fontSize: 15.5 }}>
            Suitable for both beginners and individuals looking to strengthen existing healthcare knowledge.
          </p>
        </div>
      </LuxSection>
    </>
  );
}

export default KochiAbout;
