import React from "react";
import { mediaUrl } from "../../config/media";
import { LuxSection, LuxSplit, LuxStack } from "../common/LuxSections";

function HyderabadOnline2() {
  return (
    <LuxSection tone="light">
      <LuxSplit image={mediaUrl("images/Interiors/ameerpet/ameerpet-interior-12.jpg")} imageAlt="Campus interior at ThoughtFlows Ameerpet, Hyderabad">
        <LuxStack
          blocks={[
            { title: "Always Up to Date With the Latest Coding Standards", text: "Medical coding doesn't stand still — guidelines, codes, and regulations change every year. So our training changes with them. We keep our course updated with the most current coding practices, including the latest ICD-10, CPT, and HCPCS updates, so you're never learning outdated material. You'll graduate confident that what you know matches exactly what employers and the industry expect today." },
            { title: "Real Students, Real Results", text: "The best proof of good training is the people it helps. Many of our students started as complete beginners and went on to clear their CPC exam and land their first coding job — and it's their progress that's earned us a reputation as one of the best medical coding institutes in Ameerpet. Read their stories below to see what's possible when the right training meets real effort — and picture where your own journey could lead." },
            { title: "Quality Training at a Fee That Makes Sense", text: "We know that signing up for a course is a real investment — of your money, time, and trust. So we've kept our fees fair and our payment options flexible, with EMI plans that let you spread the cost comfortably. Compared with most medical coding centers in Ameerpet, you get genuine, job-focused training without the heavy price tag — because money should never be the reason you put your career on hold." },
          ]}
        />
      </LuxSplit>
    </LuxSection>
  );
}

export default HyderabadOnline2;
