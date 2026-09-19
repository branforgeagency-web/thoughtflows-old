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

const TrivandrumFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the basic qualification for learning medical coding?",
      answer: "Any graduates from life science non Life science background & paramedical diploma holders can learn medical coding."
    },
    {
      question: "Is there demand for Medical Coders?",
      answer: "Yes. The healthcare industry has a growing demand for skilled Medical Coders, both in India and abroad."
    },
    {
      question: "How long does the course take?",
      answer: "The duration typically ranges 3 months. & Daily having 2 hours classes, both weekdays & weekends available. Depending on the course you choose,it will vary the duration."
    },
    {
      question: "Will I get placement support?",
      answer: "Yes. We're providing placements across India. There'll be interview preparation, resume guidance, HR sessions, Communication & behaviour sessions, Mock interviews etc."
    },
    {
      question: "Is CPC certification mandatory?",
      answer: "CPC certification is not mandatory, but it is highly recommended as it enhances career opportunities and increases employability. It is a globally recognized certification that can open doors to better job prospects, higher salary packages, and opportunities to work with international healthcare organizations, including abroad. Having a CPC certification adds significant value to your profile and helps you stand out in the Medical Coding industry."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', marginBottom: '15px' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: '#64748b', fontSize: '18px' }}>
          Got questions? Here are some of the most common questions about our Trivandrum Medical Coding courses.
        </p>
      </div>
      
      <div style={{ borderTop: '1px solid #e2e8f0' }}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrivandrumFAQ;
