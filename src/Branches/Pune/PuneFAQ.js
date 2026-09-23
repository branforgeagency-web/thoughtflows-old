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
      question: "Where is ThoughtFlows Medical Coding Academy located in Pune?",
      answer: "Our Pune branch is located in an easily accessible tech and academic corridor in Pune with excellent bus, metro, and suburban train connectivity. Connect with our student advisors to schedule a campus tour or attend an orientation session."
    },
    {
      question: "What qualifications are required to enroll in the Pune center?",
      answer: "Graduates and post-graduates in Life Sciences, B.Pharmacy, M.Pharmacy, Pharm.D, Nursing (B.Sc / GNM), Physiotherapy (BPT), Biotechnology, and related biological science disciplines are eligible. Freshers and career changers are welcome."
    },
    {
      question: "How does ThoughtFlows guarantee placement assistance in Pune?",
      answer: "We partner with over 150+ healthcare IT, medical coding, and RCM firms operating in Pune, Mumbai, Bangalore, and across India. We provide resume building, technical mock interview sessions, HR grooming, and arrange direct recruitment interviews until you receive an offer."
    },
    {
      question: "Which certifications can I prepare for at the Pune branch?",
      answer: "We offer comprehensive preparation for AAPC's Certified Professional Coder (CPC), Certified Inpatient Coder (CIC), Certified Outpatient Coder (COC), and AHIMA's Certified Coding Specialist (CCS)."
    },
    {
      question: "Are online and hybrid class options available in Pune?",
      answer: "Yes, in addition to regular classroom coaching in Pune, we offer live interactive online batches with recorded sessions, digital assignments, and doubt-clearing hours for working professionals."
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h4 style={{ color: '#097D8A', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Common Inquiries</h4>
        <h2 style={{ fontSize: '32px', color: '#0f172a', marginTop: '10px' }}>Frequently Asked Questions — Pune</h2>
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
