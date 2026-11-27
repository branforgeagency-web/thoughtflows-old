import React from "react";
import { Handshake, Heart, Repeat, ShieldCheck, Target } from "lucide-react";
import { LuxSection, LuxHead, LuxValues } from "../common/LuxSections";

const HyderabadCore = () => (
  <LuxSection tone="light">
    <LuxHead
      eyebrow={"What We Stand For"}
      title="Our Core Values"
      intro={"The values behind how we train and support every student"}
    />
    <LuxValues
      items={[
        { icon: Heart, title: "Passion", text: "We love what we do, and it shows in our training. That same passion is what's helped us become one of the most trusted medical coding institutes in Ameerpet." },
        { icon: Handshake, title: "Loyalty", text: "Our students stay with us — and speak for us. The best proof of our loyalty is the trust our trainees place in us, long after their course ends." },
        { icon: Target, title: "Commitment", text: "We don't stop until you're ready. Our commitment to every learner is the real reason behind our success." },
        { icon: ShieldCheck, title: "Responsibility", text: "Your career growth is our responsibility. We take ownership of our teaching, our innovation, and the future of every student we train." },
        { icon: Repeat, title: "Consistency", text: "Quality isn't a one-time effort. We've held to the same high standards, year after year — and that consistency is what earns our students' trust." },
      ]}
    />
  </LuxSection>
);

export default HyderabadCore;
