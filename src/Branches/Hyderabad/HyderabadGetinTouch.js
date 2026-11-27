import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxCTA } from "../common/LuxSections";

function HyderabadGetinTouch() {
  return (
    <LuxCTA
      blocks={[
        { title: "Have Questions? Let's Talk", text: "Choosing the right course is a big decision, and you shouldn't have to make it alone. As a trusted medical coding institute in Ameerpet, we're happy to answer your questions honestly — about the course, fees, batches, certifications, or placements. Our team will give you straight answers and the guidance you need to decide what's right for you. Reach out today and take the first step toward a rewarding career in medical coding." },
      ]}
      image={mediaUrl("images/Interiors/ameerpet/ameerpet-interior-01.jpg")}
      imageAlt="Reception at ThoughtFlows Ameerpet, Hyderabad"
      to="/contact"
      label="Contact Us Now"
    />
  );
}

export default HyderabadGetinTouch;
