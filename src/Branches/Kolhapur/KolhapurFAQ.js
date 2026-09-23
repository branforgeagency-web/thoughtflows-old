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

const KolhapurFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where is the ThoughtFlows Kolhapur center located?",
      answer: "Our Kolhapur center is conveniently situated in the central commercial hub of Kolhapur, close to key transit routes and accessible for students from across Kolhapur and nearby districts. Contact our counselors to book an in-person campus visit or free demo session."
    },
    {
      question: "Who is eligible to join medical coding training in Kolhapur?",
      answer: "Graduates and post-graduates from Life Sciences (Biotechnology, Microbiology, Biochemistry, Botany, Zoology), Pharmacy (B.Pharm, M.Pharm, Pharm.D), Nursing, Physiotherapy, and Allied Health Sciences are ideal candidates. Candidates from other disciplines with good basic biology aptitude can also enroll."
    },
    {
      question: "What is the duration of the Medical Coding Course?",
      answer: "Our comprehensive training program typically spans 2 to 3 months depending on the batch type (regular weekday or weekend batch), encompassing foundational medical science, ICD-10-CM, CPT, HCPCS, specialty coding, mock CPC tests, and interview coaching."
    },
    {
      question: "Does ThoughtFlows offer placement assistance in Kolhapur and Maharashtra?",
      answer: "Yes, 100% placement support is guaranteed. We have direct tie-ups with leading healthcare IT MNCs and medical coding service providers in Pune, Mumbai, Hyderabad, and Bangalore. Our placement cell arranges interviews until you are placed."
    },
    {
      question: "Will I get official study material for AAPC CPC preparation?",
      answer: "Absolutely. All students receive comprehensive training manuals, curated coding guides, question banks, and access to online mock exams patterned after the actual AAPC exam."
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h4 style={{ color: '#097D8A', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Got Questions?</h4>
        <h2 style={{ fontSize: '32px', color: '#0f172a', marginTop: '10px' }}>Frequently Asked Questions — Kolhapur</h2>
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

export default KolhapurFAQ;
