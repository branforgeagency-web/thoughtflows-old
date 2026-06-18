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

const KochiFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How much are Medical Coding course fees in Kerala?",
      answer: "Medical Coding course fees in Kerala generally range between ₹23,000 and ₹45,000, depending on factors such as course duration, training format, certification guidance, and additional support services. Students should evaluate the overall quality of training, practical learning opportunities, and career support before making a decision."
    },
    {
      question: "Is Medical Coding suitable for freshers?",
      answer: "Yes. Many students begin their Medical Coding journey as freshers. Training programs are designed to help learners understand concepts from the fundamentals before progressing to advanced topics."
    },
    {
      question: "Can working professionals switch to Medical Coding?",
      answer: "Yes. Many professionals choose Medical Coding as a healthcare-focused career transition option. Proper training and skill development can help individuals build the knowledge required for the field."
    },
    {
      question: "I have a career gap. Can I still learn Medical Coding?",
      answer: "Yes. Many learners join Medical Coding training after a career break. Learning commitment, practical knowledge, communication skills, and interview preparation play an important role in career development."
    },
    {
      question: "Can non-life science graduates learn Medical Coding?",
      answer: "Yes, absolutely. Non-life science graduates can also learn Medical Coding. Basic medical concepts, anatomy, physiology, and coding guidelines are taught during the training, making it possible for candidates from any educational background to build a successful career in Medical Coding. With proper training and CPC certification, they can access excellent job opportunities in India as well as abroad."
    },
    {
      question: "What should I look for when choosing a Medical Coding institute in Kerala?",
      answer: "Students should evaluate curriculum quality, practical learning opportunities, certification guidance, trainer expertise, student support, placement assistance, and overall career development opportunities before making a decision."
    },
    {
      question: "How do I choose the best Medical Coding training institute in Kochi?",
      answer: "Look for an institute that provides structured training, practical learning, certification guidance, placement support, experienced trainers, and a strong focus on student career development."
    },
    {
      question: "Is Medical Coding available through online training in Kerala?",
      answer: "Yes, Medical Coding training is available through online mode in Kerala. We provide live interactive sessions, allowing students to learn from anywhere with the guidance of experienced trainers. Online classes offer the same quality of training, doubt-clearing support, and placement assistance, making it convenient for both students and working professionals."
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
          Have questions? We're here to help you understand your journey in Medical Coding.
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

export default KochiFAQ;
