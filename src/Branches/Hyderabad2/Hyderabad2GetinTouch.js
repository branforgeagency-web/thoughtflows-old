import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxCTA } from "../common/LuxSections";

function HyderabadGetinTouch() {
  return (
    <LuxCTA
      blocks={[
        { title: "Training You Can Actually Afford", text: "Money is often the first worry when someone considers a course — and we'd rather be upfront about it than vague. Our fees are kept reasonable, with no hidden charges, and our EMI options let you pay in comfortable instalments instead of all at once. The goal is simple: a tight budget should never be the reason you put a promising coding career on hold." },
        { title: "Let's Find the Right Path for You", text: "Not sure if medical coding suits you, or which batch makes sense? That's exactly what we're here for. Reach out and we'll give you honest guidance based on your background and goals — not a sales pitch. Sometimes one good conversation is all it takes to know your next move." },
      ]}
      image={mediaUrl("images/Interiors/dilsukhnagar/dilsukhnagar-interior-04.jpg")}
      imageAlt="Reception at ThoughtFlows Dilsukhnagar, Hyderabad"
      to="/contact"
      label="Contact Us Now"
    />
  );
}

export default HyderabadGetinTouch;
