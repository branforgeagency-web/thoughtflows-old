import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxFeatureRows } from "../common/LuxSections";

function HyderabadAbout() {
  return (
    <>
      <LuxSection tone="light">
        <LuxSplit
          image={mediaUrl("images/Interiors/ameerpet/ameerpet-interior-03.jpg")}
          imageAlt="Training hall at ThoughtFlows Ameerpet, Hyderabad"
          eyebrow={"Why Choose"}
          title={"Our Institute in"}
          accent={"Ameerpet?"}
        >
          <p>{"Choosing the right place to train makes all the difference. As a trusted medical coding institute in Ameerpet, we've built everything around one goal — your success. From a job-focused curriculum and experienced CPC faculty to modern infrastructure, dedicated placement assistance, affordable fees, and flexible weekday and weekend batches, every detail is designed to take you from beginner to confident, certified, and career-ready."}</p>
        </LuxSplit>
        <LuxSplit
          reverse
          image={mediaUrl("images/Interiors/ameerpet/ameerpet-interior-04.jpg")}
          imageAlt="Computer practice lab at ThoughtFlows Ameerpet, Hyderabad"
          title={"Train the Way You'll Actually Work — in the Heart of Ameerpet"}
        >
          <p>{"Learning sticks when the environment is right. As a leading medical coding institute in Ameerpet, we've built our center for hands-on practice, not just theory — smart digital classrooms, current coding software, and the latest ICD-10, CPT, and HCPCS references all within reach. With focused batch sizes and real coding scenarios to work through, you don't just study medical coding — you practise it the way you'll do it on the job."}</p>
        </LuxSplit>
      </LuxSection>

      <LuxSection tone="tint">
        <LuxFeatureRows
          items={[
            {
              title: "Explore a Curriculum That Covers It All",
              text: "Our medical coding course is built to give you the full picture — not just bits and pieces. Through our hands-on medical coding training in Ameerpet, you'll work through everything that matters: coding systems and guidelines, healthcare documentation, and reimbursement methodologies. By the end, you won't just know the theory — you'll have the practical skills and confidence to handle real coding work and grow in your career.",
              image: mediaUrl("images/Interiors/ameerpet/ameerpet-interior-08.jpg"),
              imageAlt: "Explore a Curriculum That Covers It All at ThoughtFlows Ameerpet, Hyderabad",
            },
            {
              title: "Learn From Faculty Who've Done the Job",
              text: "The people teaching you make all the difference. Our trainers aren't just instructors — they're experienced medical coding professionals who've spent years doing this work in the real world. They bring genuine industry insight, patient mentorship, and practical guidance to every class, so you learn how coding actually works on the job — not just what's in the textbook.",
              image: mediaUrl("images/Interiors/ameerpet/ameerpet-interior-09.jpg"),
              imageAlt: "Learn From Faculty Who've Done the Job at ThoughtFlows Ameerpet, Hyderabad",
            },
            {
              title: "A Learning Environment Built Around You",
              text: "Great training needs the right setting. As a trusted medical coding institute in Ameerpet, we've invested in classrooms equipped with current technology and coding resources, all within a focused, supportive environment. It's a space designed to help you concentrate, practise, and build real skills — so you can learn faster and train with confidence.",
              image: mediaUrl("images/Interiors/ameerpet/ameerpet-interior-07.jpg"),
              imageAlt: "A Learning Environment Built Around You at ThoughtFlows Ameerpet, Hyderabad",
            },
          ]}
        />
      </LuxSection>
    </>
  );
}

export default HyderabadAbout;
