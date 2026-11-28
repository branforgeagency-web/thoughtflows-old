import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxHead, LuxPhotoCards } from "../common/LuxSections";

const TrivandrumAcademy = () => {
  return (
    <LuxSection tone="tint">
      <LuxHead
        eyebrow="The ThoughtFlows Edge"
        title="What Sets Our Academy Apart in"
        accent="Trivandrum?"
        intro="At ThoughtFlows Medical Coding Academy, we pride ourselves on several distinguishing factors that set us apart as a premier institute for medical coding training in Trivandrum. With a focus on hands-on practical training and nurturing industry-specific skills, we stand as a preferred choice for those seeking a rewarding career in medical coding."
      />
      <LuxPhotoCards
        items={[
          {
            title: "Comprehensive Curriculum",
            text: "Our Trivandrum program covers medical terminology, anatomy, and coding systems such as ICD-10-CM, CPT, and HCPCS, incorporating the latest industry trends and hands-on coding exercises.",
            image: mediaUrl("images/Interiors/trivandrum/trivandrum-interior-02.jpg"),
            imageAlt: "Smart coding classroom at ThoughtFlows Trivandrum",
            badge: "Smart Classroom",
          },
          {
            title: "Esteemed Faculty Members",
            text: "A team of highly competent, AAPC-certified trainers leads teaching at our Trivandrum campus—bringing real-world experience, personalized attention, and bilingual mentoring.",
            image: mediaUrl("images/Interiors/trivandrum/trivandrum-interior-07.jpg"),
            imageAlt: "Faculty and mentoring cabin at ThoughtFlows Trivandrum",
            badge: "Expert Mentors",
          },
          {
            title: "Welcoming Student Spaces",
            text: "Located at East Fort, our Trivandrum campus offers air-conditioned classrooms, dedicated study tables, and comfortable lounge spaces for focused learning.",
            image: mediaUrl("images/Interiors/trivandrum/trivandrum-interior-04.jpg"),
            imageAlt: "Student waiting lounge at ThoughtFlows Trivandrum",
            badge: "East Fort Hub",
          },
        ]}
      />
    </LuxSection>
  );
};

export default TrivandrumAcademy;
