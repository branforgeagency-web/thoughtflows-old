import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div style={{ borderBottom: '1px solid #e2e8f0', padding: '20px 0' }}>
      <button 
        onClick={onClick} 
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: 'none', 
          border: 'none', 
          padding: '0', 
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '500', margin: 0, color: '#0f172a', flex: 1, paddingRight: '20px' }}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} color="#64748b" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ marginTop: '15px', color: '#475569', lineHeight: '24px', fontSize: '16px', margin: '15px 0 0 0' }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PuneFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
    <div style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h4 style={{ color: '#097D8A', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>FAQ</h4>
        <h2 style={{ fontSize: '32px', color: '#0f172a', marginTop: '10px' }}>Frequently Asked Questions</h2>
      </div>
      <div>
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
    </div>
  );
};

export default PuneFAQ;
