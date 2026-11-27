import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxPhotoCards } from "../common/LuxSections";

function HyderabadSticky() {
  return (
    <LuxSection tone="tint">
      <LuxPhotoCards
        items={[
          {
            title: "Learn by Doing, Not Just Watching",
            text: "You don't become a great coder by memorising theory — you become one by coding. Our medical coding coaching in Ameerpet is built around hands-on practice and real-life scenarios, so what you learn actually sticks. Through coding exercises, case studies, and practical projects, you'll build the in-demand skills and real confidence you need to step into a medical coding job ready to perform from day one.",
            image: mediaUrl("images/Interiors/ameerpet/ameerpet-interior-06.jpg"),
            imageAlt: "Learn by Doing, Not Just Watching at ThoughtFlows Ameerpet, Hyderabad",
          },
          {
            title: "Get Certified, Get Noticed",
            text: "In medical coding, the right certification opens doors. That's why our training prepares you thoroughly for the credentials that employers look for — including the Certified Professional Coder (CPC) and Certified Coding Specialist (CCS). With focused coaching and plenty of practice exams, you'll walk into your certification exam prepared, confident, and ready to stand out in the job market.",
            image: mediaUrl("images/Interiors/ameerpet/ameerpet-interior-05.jpg"),
            imageAlt: "Get Certified, Get Noticed at ThoughtFlows Ameerpet, Hyderabad",
          },
          {
            title: "We Don't Stop at Training — We Help You Get Hired",
            text: "Finishing your course is just the start; getting placed is the real goal. As a trusted medical coding institute in Ameerpet, we back our students with dedicated placement support. Through our strong connections with healthcare organisations and coding companies, we open doors to real job openings and networking opportunities. And our career team works with you one-on-one on your resume, interview skills, and job search — so you don't just complete the course, you launch a career.",
            image: mediaUrl("images/Interiors/ameerpet/ameerpet-interior-11.jpg"),
            imageAlt: "We Don't Stop at Training — We Help You Get Hired at ThoughtFlows Ameerpet, Hyderabad",
          },
        ]}
      />
    </LuxSection>
  );
}

export default HyderabadSticky;
