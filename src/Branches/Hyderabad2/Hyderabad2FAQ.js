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

const Hyderabad2FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where is the ThoughtFlows Dilsukhnagar center?",
      answer: "We're located in the heart of Dilsukhnagar, easy to reach via metro and local transport: Flat No: 201, 2nd Floor, Mega Residency, Chaitanyapuri, Dilsukhnagar, Hyderabad, 500060. Call ahead to schedule a visit or demo."
    },
    {
      question: "What does the medical coding course cover?",
      answer: "The course trains you thoroughly in the core requirements for medical coding: Anatomy and Physiology basics, ICD-10-CM (diagnosis coding), CPT (procedure coding), and HCPCS Level II, along with billing guidelines and HIPAA rules."
    },
    {
      question: "How long is the training program?",
      answer: "Most students complete the medical coding training in Dilsukhnagar within 2 to 4 months, depending on the batch type (regular vs. fast-track). We run morning, evening, and weekend batches to suit different schedules."
    },
    {
      question: "Will I get placement support after finishing the course?",
      answer: "Yes. Getting you hired is the ultimate goal. Our placement team helps you build a strong resume, preps you with mock interviews, and connects you directly with job openings through our hiring partners."
    },
    {
      question: "Which certification will I be trained for?",
      answer: "Our curriculum is heavily focused on preparing you for the Certified Professional Coder (CPC) credential — the most widely recognised and requested certification by employers — as well as the Certified Coding Specialist (CCS)."
    },
    {
      question: "Do I have to pay the whole fee at once?",
      answer: "Not at all. We believe quality training should be accessible, so we offer flexible EMI options that allow you to pay your fees in manageable instalments over the course of your training."
    },
    {
      question: "I'm not from a life-science background. Can I still join?",
      answer: "Yes. While a science background helps, it isn't strictly necessary. If you're willing to put in the effort, our trainers will take you from the absolute basics up to professional-level coding."
    }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px', color: '#0f172a' }}>
        Frequently Asked Questions
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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

export default Hyderabad2FAQ;
