import React from "react";
import { Handshake, Heart, Repeat, ShieldCheck, Target } from "lucide-react";
import { LuxSection, LuxHead, LuxValues } from "../common/LuxSections";

const HyderabadCore = () => (
  <LuxSection tone="light">
    <LuxHead
      title="Our Core Values"
      intro={"The values that guide how we work with every student"}
    />
    <LuxValues
      items={[
        { icon: Heart, title: "Passion", text: "We genuinely enjoy what we teach, and students feel it. That energy is a big part of the reputation we've earned as a medical coding institute in Dilsukhnagar." },
        { icon: Handshake, title: "Loyalty", text: "Loyalty is earned, not claimed. Ask our past trainees — many stay in touch, refer their friends, and speak for us long after their course ends." },
        { icon: Target, title: "Commitment", text: "We measure ourselves by your progress. Our trainers stay with you until the concepts truly click and you're ready to work." },
        { icon: ShieldCheck, title: "Responsibility", text: "We take your career seriously. From the quality of our teaching to keeping our methods current, we hold ourselves accountable for where you end up." },
        { icon: Repeat, title: "Consistency", text: "The standards we set years ago are the ones we still hold today. That steadiness is what's built lasting trust with our students." },
      ]}
    />
  </LuxSection>
);

export default HyderabadCore;
