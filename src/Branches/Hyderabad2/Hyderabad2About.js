import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxFeatureRows } from "../common/LuxSections";

function HyderabadAbout() {
  return (
    <>
      <LuxSection tone="light">
        <LuxSplit
          image={mediaUrl("images/Interiors/dilsukhnagar/dilsukhnagar-interior-03.jpg")}
          imageAlt="Study desks at ThoughtFlows Dilsukhnagar, Hyderabad"
          eyebrow={"Why Choose"}
          title={"Our Institute in"}
          accent={"Dilsukhnagar?"}
        >
          <p>{"When it comes to medical coding training in Dilsukhnagar, we focus on what gets you hired — not just what sounds good. Our curriculum spans ICD-10-CM, CPT, and HCPCS Level II, taught by working coders. With small batches, fair fees, EMI options, flexible timings, and a dedicated placement team, everything we do is built around one goal: your success."}</p>
        </LuxSplit>
      </LuxSection>

      <LuxSection tone="tint">
        <LuxFeatureRows
          items={[
            {
              title: "Explore a Curriculum That Covers It All",
              text: "Our medical coding training in Dilsukhnagar is built to give you the complete skill set, not scattered bits. You'll work through the core code sets — ICD-10-CM, CPT, and HCPCS Level II — alongside coding guidelines, clinical documentation, and the reimbursement cycle. Step by step, you move from understanding how codes work to assigning them accurately in real scenarios, so you finish genuinely ready for the job.",
              image: mediaUrl("images/Interiors/dilsukhnagar/dilsukhnagar-interior-07.jpg"),
              imageAlt: "Explore a Curriculum That Covers It All at ThoughtFlows Dilsukhnagar, Hyderabad",
            },
            {
              title: "Learn From People Who've Actually Coded",
              text: "Anyone can read out a syllabus — far fewer can tell you how coding really works under deadline pressure. Our trainers are experienced medical coding professionals who've spent years in live coding roles. They teach from real cases, point out the mistakes worth avoiding, and guide you through the judgement calls textbooks skip — so you graduate with practical instinct, not just theory.",
              image: mediaUrl("images/Interiors/dilsukhnagar/dilsukhnagar-interior-01.jpg"),
              imageAlt: "Learn From People Who've Actually Coded at ThoughtFlows Dilsukhnagar, Hyderabad",
            },
            {
              title: "A Practical Setup That Helps You Learn Faster",
              text: "Coding is a skill you build by doing, not just watching — so our medical coding institute in Dilsukhnagar is set up for exactly that. You'll work in digital classrooms with real coding software and the latest ICD-10, CPT, and HCPCS manuals close at hand, in small batches where your questions actually get answered. It's a calm, focused space designed to help you practise more and learn faster.",
              image: mediaUrl("images/Interiors/dilsukhnagar/dilsukhnagar-interior-02.jpg"),
              imageAlt: "A Practical Setup That Helps You Learn Faster at ThoughtFlows Dilsukhnagar, Hyderabad",
            },
          ]}
        />
      </LuxSection>
    </>
  );
}

export default HyderabadAbout;
