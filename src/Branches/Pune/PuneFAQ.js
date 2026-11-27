import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LuxSection, LuxHead } from '../common/LuxSections';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`lux-faq-item ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        onClick={onClick}
        className="lux-faq-btn"
        aria-expanded={isOpen}
      >
        <h3 className="lux-faq-q">{question}</h3>
        <span className="lux-faq-toggle" aria-hidden="true">
          <ChevronDown size={18} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="lux-faq-a">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PuneFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the length of the medical coding course at Thoughtflows, Pune?",
      answer: "Our medical coding course in Pune takes place over [x] months, teaching students ICD-10-CM and CPT codes, HCPCS, medical terminology and anatomy, and prepares students to take the CPC exam. The course takes place on weekdays and weekends, allowing students to juggle other commitments."
    },
    {
      question: "Who all can apply for the medical coding course at Pune?",
      answer: "Graduates of courses related to nursing, pharmacy, and other allied health services are eligible for this course. Although this is not mandatory, working and intending healthcare professionals are also welcome to the course as we cover topics in a structured manner."
    },
    {
      question: "Do you offer training and help in the CPC certification?",
      answer: "Yes, our course covers all aspects of AAPC's CPC certification exam, and prepares students through teaching and learning strategies developed by certified personnel. Additionally, we assist students to prepare for AHIMA's CCS exam."
    },
    {
      question: "Can I expect placement after taking the course?",
      answer: "Yes, as part of the course, students learn to code using the assessment and coding test provided by companies. We help students prepare their resumes and cover letters and conduct mock interviews. Our team helps eligible students find employment in healthcare RCM and medical coding companies."
    },
    {
      question: "What is the cost of the medical coding course in Pune?",
      answer: "We do not charge any additional fees on top of the medical coding course cost. We provide several instalment payment options. The course fee is non-negotiable and transparent. For more information on the course fees and upcoming courses, contact us."
    }
  ];

  return (
    <LuxSection tone="light">
      <LuxHead
        eyebrow="FAQ"
        title="Frequently Asked"
        accent="Questions"
      />
      <div className="lux-faq-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </LuxSection>
  );
};

export default PuneFAQ;
