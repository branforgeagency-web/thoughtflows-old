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

const HyderabadFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where exactly is your Ameerpet branch located?",
      answer: "You'll find us right opposite Ameerpet Metro Station, easy to reach from anywhere in Hyderabad — Vasavi MPM Grand Building, Flat 606/A, 5th Floor, Ameerpet X Road, Hyderabad – 500016. Walk-ins are welcome; just call ahead and we'll keep some time for you."
    },
    {
      question: "How long does the medical coding course take?",
      answer: "Most students complete our medical coding course in Ameerpet in around 2 to 4 months, depending on whether they choose a regular or fast-track batch. Both classroom and online options are available, so you can learn at a pace that suits your schedule."
    },
    {
      question: "Do I need a medical background to join?",
      answer: "It helps, but it isn't required. We welcome students from life-sciences, nursing, pharmacy, and other backgrounds — and plenty of our successful coders started as complete beginners. If you're willing to learn, we'll take you from the basics to job-ready."
    },
    {
      question: "Which certifications will I be prepared for?",
      answer: "We train you for the credentials employers actually look for — primarily the Certified Professional Coder (CPC), along with the Certified Coding Specialist (CCS). You'll get focused coaching and practice exams so you walk in prepared."
    },
    {
      question: "Do you help with job placement after the course?",
      answer: "Yes. As a placement-focused medical coding institute in Ameerpet, we support you with resume building, mock interviews, and access to real job openings through our healthcare and coding-company partners — right up until you're hired."
    },
    {
      question: "What are the fees, and is EMI available?",
      answer: "We keep our fees affordable and offer EMI/instalment options so cost never stands in your way."
    },
    {
      question: "Can I attend a demo class before enrolling?",
      answer: "Absolutely — and we recommend it. Book a free demo at our Ameerpet branch (or online) to meet the trainers and see how we teach before you decide."
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

export default HyderabadFAQ;
