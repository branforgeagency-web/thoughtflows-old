import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxCTA } from "../common/LuxSections";

function KochiOnline() {
  return (
    <LuxCTA
      blocks={[
        {
          title: "Medical Coding Training in Kerala for Healthcare Careers",
          text: "ThoughtFlows provides Medical Coding training in Kerala for students, graduates, healthcare professionals, and career switchers looking to build a future in the healthcare industry. Students from Kochi, Ernakulam, Thrissur, Calicut, Trivandrum, Kottayam, Palakkad, Kannur, and other regions across Kerala choose our programs for their practical learning approach, certification guidance, and career-focused support.",
        },
      ]}
      image={mediaUrl("images/Interiors/kochi/kochi-interior-02.jpg")}
      imageAlt="ThoughtFlows Kochi campus interior"
      to="/contact"
      label="Contact Us Now"
    />
  );
}

export default KochiOnline;
