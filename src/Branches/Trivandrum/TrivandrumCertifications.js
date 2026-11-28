import React from "react";
import { LuxBatchBand } from "../common/LuxSections";

const TrivandrumCertifications = () => {
  return (
    <LuxBatchBand
      eyebrow="Global Credentials"
      title="Accredited Medical Coders'"
      accent="Certifications"
      paragraphs={[
        "Graduates from our Trivandrum academy are well-prepared for certification exams because our curricula align with internationally recognized credentials like AAPC CPC and AHIMA CCS.",
        "By validating the clinical coding knowledge gained throughout our training programs, these certifications strengthen your profile for top healthcare MNCs in India and the Gulf.",
      ]}
      chips={[
        "AAPC CPC® Exam Alignment",
        "AHIMA CCS® Preparation",
        "Mock Tests & Practical Drills",
      ]}
    />
  );
};

export default TrivandrumCertifications;
