import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxStack, LuxCTA } from "../common/LuxSections";

function TrivandrumOnline2() {
  return (
    <>
      <LuxSection tone="light">
        <LuxSplit
          image={mediaUrl("images/Interiors/trivandrum/trivandrum-interior-03.jpg")}
          imageAlt="Workshop and group training hall at ThoughtFlows Trivandrum"
          eyebrow="Learning Experience"
          title="Practical &"
          accent="Flexible Training"
        >
          <LuxStack
            blocks={[
              {
                title: "Practical Learning Environment",
                text: "Students gain practical exposure to medical coding concepts through hands-on learning, real-world coding scenarios, and industry-relevant training methodologies that build confidence for a successful healthcare career.",
              },
              {
                title: "Flexible Learning Options",
                text: "Online and classroom training options are available to support different learning preferences. Flexible batch schedules help students, fresh graduates, and working professionals balance their academic or work commitments.",
              },
            ]}
          />
        </LuxSplit>
      </LuxSection>

      <LuxCTA
        blocks={[
          {
            title: "Start Your Medical Coding Career in Trivandrum",
            text: "Join ThoughtFlows Medical Coding Academy at East Fort, Trivandrum—or learn live online from anywhere in Kerala—with AAPC-certified trainers, hands-on chart practice, and 100% placement support.",
          },
        ]}
        image={mediaUrl("images/Interiors/trivandrum/trivandrum-interior-01.jpg")}
        imageAlt="ThoughtFlows Trivandrum reception and front desk"
        to="/contact"
        label="Contact Us Now"
      />
    </>
  );
}

export default TrivandrumOnline2;
